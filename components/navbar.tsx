"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Phone, Mail, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type NavigationItem = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
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
      { name: 'Short Football Programmes', href: '/programmes/short-football-programmes' },
      { name: 'Football Trials', href: '/programmes/football-trial' },
    ],
  },
  {
    name: 'Football Academy',
    href: '#',
    dropdown: [
      { name: 'Manchester Football Academy', href: '/academy/manchester' },
      { name: 'London Football Academy', href: '/academy/london' },
      { name: 'Alicante Football Academy', href: '/academy/alicante' },
      { name: 'Debrecen Football Academy', href: '/academy/debrecen' },
    ],
  },
  { name: 'Fees', href: '/fees' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<number | null>(null);
  const dropdownRefs = useRef<HTMLDivElement[]>([]);
  const mobileRef = useRef<HTMLDivElement>(null);

  const setRef = (el: HTMLDivElement | null, i: number) => {
    if (el) dropdownRefs.current[i] = el;
  };

  useEffect(() => {
    dropdownRefs.current = dropdownRefs.current.slice(0, navigation.length);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }
    setIsScrolled(window.scrollY > 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (openDropdown !== null) {
        const ref = dropdownRefs.current[openDropdown];
        if (ref && !ref.contains(e.target as Node)) setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [openDropdown]);

  useEffect(() => {
    if (isMobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileOpen]);

  useEffect(() => {
    setTimeout(() => setIsMobileOpen(false), 100);
  }, [pathname]);

  const active = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));
  const transparent = isHome && !isScrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={cn(transparent ? 'bg-black hidden lg:block' : 'hidden lg:block bg-black')}>
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between">
          <p className="text-[11px] font-normal text-white/80">
            Football Trials &amp; Academy Programmes
          </p>
          <div className="flex items-center gap-4 text-[11px] font-normal text-white/80">
            <a href="tel:+447840782759" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Phone size={11} />
              +44 7840 782759
            </a>
            <a href="mailto:sports@britishauc.com" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Mail size={11} />
              sports@britishauc.com
            </a>
          </div>
        </div>
      </div>

      <div className={cn('transition-all duration-300', transparent ? 'bg-transparent' : 'bg-white border-b border-gray-200 shadow-sm')}>
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between h-14 lg:h-[60px]">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="British AUC Sport"
                height={28}
                width={54}
                className="object-contain"
              />
            </Link>

            <div className="hidden lg:flex items-center justify-end flex-1 gap-0.5">
              {navigation.map((item, i) => (
                <div key={item.name} className="relative" ref={(el) => setRef(el, i)}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                        className={cn(
                          'flex items-center gap-1 px-2.5 py-1.5 text-[14px] font-normal transition-colors',
                          active(item.href) || openDropdown === i
                            ? 'text-red-600'
                            : transparent
                              ? 'text-white/80 hover:text-white'
                              : 'text-gray-600 hover:text-gray-900'
                        )}
                      >
                        {item.name}
                        <ChevronDown size={14} className={cn('transition-transform duration-200', openDropdown === i ? 'rotate-180' : '')} />
                      </button>
                      {openDropdown === i && (
                        <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-white border border-gray-200 shadow-lg py-2 min-w-[200px] z-30">
                          {item.dropdown.map((drop) => (
                            <Link
                              key={drop.name}
                              href={drop.href}
                              className="block px-5 py-2 text-sm font-normal text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {drop.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'inline-block px-2.5 py-1.5 text-[14px] font-normal transition-colors',
                        active(item.href)
                          ? 'text-red-600'
                          : transparent
                            ? 'text-white/80 hover:text-white'
                            : 'text-gray-600 hover:text-gray-900'
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2.5 ml-4">
              <Link
                href="/applynow"
                className={cn(
                  'inline-flex items-center gap-1.5 px-4 py-1.5 text-[13px] font-medium transition-all duration-200',
                  transparent
                    ? 'bg-red-600/90 text-white hover:bg-red-700'
                    : 'bg-red-600 text-white hover:bg-red-700'
                )}
              >
                Apply Now
                <ArrowRight size={15} />
              </Link>
            </div>

            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} className={transparent ? 'text-white' : 'text-gray-900'} />
            </button>
          </nav>
        </div>
      </div>

      <div
        ref={mobileRef}
        className={`fixed inset-0 w-full h-full bg-white z-[60] transform transition-transform duration-300 ease-out ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-200">
            <Link href="/" className="flex items-center" onClick={() => setIsMobileOpen(false)}>
              <Image src="/logo.png" alt="British AUC Sport" height={28} width={54} className="object-contain" />
            </Link>
            <button onClick={() => setIsMobileOpen(false)} className="p-2 -mr-2" aria-label="Close menu">
              <X size={22} className="text-gray-900" />
            </button>
          </div>

          <div className="flex-1 px-6 py-6">
            <ul className="flex flex-col gap-1">
              {navigation.map((item, i) => (
                <li key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === i ? null : i)}
                        className={`flex items-center gap-1.5 w-full py-2.5 text-[14px] font-normal transition-colors ${mobileDropdownOpen === i ? 'text-red-600' : 'text-gray-500'}`}
                      >
                        {item.name}
                        <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDropdownOpen === i ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDropdownOpen === i && (
                        <ul className="ml-4 space-y-1 pb-2 border-l-2 border-gray-100 pl-4">
                          {item.dropdown.map((drop) => (
                            <li key={drop.name}>
                              <Link href={drop.href} onClick={() => setIsMobileOpen(false)} className="block py-2 text-[13px] font-normal text-gray-400 hover:text-gray-900 transition-colors">
                                {drop.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`block py-2.5 text-[14px] font-normal transition-colors ${active(item.href) ? 'text-red-600' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="px-6 pb-8 space-y-4">
            <div className="bg-gray-50 px-5 py-4">
              <p className="text-[11px] font-medium text-gray-400 uppercase tracking-[0.15em] mb-2">Contact</p>
              <div className="space-y-2">
                <a href="tel:+447840782759" className="flex items-center gap-2 text-sm text-gray-700 hover:text-red-600 transition-colors">
                  <Phone size={14} className="text-red-500" />
                  +44 7840 782759
                </a>
                <a href="mailto:sports@britishauc.com" className="flex items-center gap-2 text-sm text-gray-700 hover:text-red-600 transition-colors">
                  <Mail size={14} className="text-red-500" />
                  sports@britishauc.com
                </a>
              </div>
            </div>
            <Link
              href="/applynow"
              className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-medium text-[14px] px-5 py-2.5 transition-colors"
            >
              Apply Now
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/30 z-30" onClick={() => setIsMobileOpen(false)} />
      )}
    </header>
  );
}
