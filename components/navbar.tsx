"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type DropdownItem = {
  name: string;
  href: string;
};

type NavigationItem = {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
};

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Football Programmes',
    href: '#',
    dropdown: [
      { name: 'Football Only', href: '/programmes/football-only' },
      { name: 'Football Plus Education', href: '/programmes/football-plus-education' },
      { name: 'Pre Season Camp', href: '/programmes/pre-season-camp' },
      { name: 'Football Trials', href: '/programmes/football-trial' },
    //   { name: 'Football Plus Language', href: '/programmes/football-plus-language' },
    ]
  },
  {
    name: 'Football Academy',
    href: '#',
    dropdown: [
      { name: 'Manchester Football Academy', href: '/academy/manchester' },
      { name: 'London Football Academy', href: '/academy/london' },
      { name: 'Alicante Football Academy', href: '/academy/alicante' },
      { name: 'Debrecen Football Academy', href: '/academy/debrecen' },
    ]
  },
  { name: 'Fees', href: '/fees' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<HTMLDivElement[]>([]);
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === '/';

  // Initialize refs for dropdowns
  useEffect(() => {
    dropdownRefs.current = dropdownRefs.current.slice(0, navigation.length);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Only add scroll listener on home page
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Force "scrolled" appearance on other pages
      setIsScrolled(true);
    }
  }, [isHomePage]);

  const toggleDropdown = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown !== null && dropdownRefs.current[openDropdown]) {
        const currentRef = dropdownRefs.current[openDropdown];
        if (currentRef && !currentRef.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [openDropdown]);

  // Set up refs callback
  const setRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      dropdownRefs.current[index] = el;
    }
  };

  // Determine if navbar should have transparent bg (only on home page when not scrolled)
  const isTransparent = isHomePage && !isScrolled;

  return (
    <>

      {/* Main Navbar */}
      <nav
        className={cn(
          'fixed w-full z-50 transition-all duration-300',
          isTransparent ? 'bg-transparent' : 'bg-white shadow-md'
        )}
      >
         {/* Contact Info Bar */}
      <div className="w-full">
        <div className={
          cn(
            "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-4 md:gap-10 pt-3 text-sm",
            isTransparent ? "text-white" : "text-gray-900"
          )
        }>
          <div className={
            cn(
              "flex items-center gap-2 text-[13px] md:text-sm",
              isTransparent ? "text-white" : "text-gray-900"
            )
          }>
            <Phone className={isTransparent ? "text-white" : "text-primary"} size={20} />
            <span>+44 7840 782759</span>
          </div>
          <div className={
            cn(
              "flex items-center gap-2 text-[13px] md:text-sm",
              isTransparent ? "text-white" : "text-gray-900"
            )
          }>
            <Mail className={isTransparent ? "text-white" : "text-primary"} size={20} />
            <span>sports@britishauc.com</span>
          </div>
        </div>
      </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="British AUC Sports" width={100} height={100} />
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  ref={(el) => setRef(el, index)}
                >
                  {item.dropdown ? (
                    <div className="group">
                      <button
                        onClick={(e) => toggleDropdown(index, e)}
                        className={cn(
                          'flex items-center text-sm font-medium transition-colors',
                          isTransparent ? 'text-white' : 'text-gray-900',
                          'hover:text-primary'
                        )}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={cn(
                          "h-4 w-4 ml-1 transition-transform",
                          openDropdown === index ? "transform rotate-180" : ""
                        )} />
                      </button>

                      {openDropdown === index && (
                        <div className="absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'text-sm font-medium transition-colors',
                        isTransparent ? 'text-white' : 'text-gray-900',
                        'hover:text-primary',
                        pathname === item.href ? 'font-semibold' : ''
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="ml-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-semibold rounded shadow">
                <Link href="/applynow">Apply now</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className={isTransparent ? 'text-white' : 'text-gray-900'}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-b-lg shadow-md">
                {navigation.map((item, index) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <div
                          className={cn(
                            'flex justify-between items-center px-3 py-2 rounded-md text-base font-medium transition-colors',
                            openDropdown === index
                              ? 'bg-primary/10 text-primary'
                              : 'text-gray-900 hover:bg-primary/5 hover:text-primary'
                          )}
                          onClick={(e) => toggleDropdown(index, e)}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === index ? "transform rotate-180" : "")}/>
                        </div>

                        {openDropdown === index && (
                          <div className="pl-4 space-y-1 mt-1">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary"
                                onClick={() => {
                                  setOpenDropdown(null);
                                  setIsOpen(false);
                                }}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                          pathname === item.href
                            ? 'bg-primary/10 text-primary'
                            : 'text-gray-900 hover:bg-primary/5 hover:text-primary'
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Button asChild className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold rounded shadow">
                  <Link href="/applynow">Apply now</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
