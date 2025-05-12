'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Hero Section with Background */}
      <section className="relative h-[50vh] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/error-bg.jpg"
            alt="Football field"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-blue-900/30 z-[2]" />
        </div>

        <div className="relative z-10 container max-w-7xl mx-auto px-6 md:px-[120px] text-center text-white">
          <h1 className="text-8xl md:text-9xl font-bold mb-2 text-white/90">404</h1>
          <p className="text-xl md:text-2xl font-semibold mb-8 text-white/80">Page not found</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-10">
              <span className="text-primary font-semibold mb-4 block">OOPS!</span>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Looks like you&apos;ve gone off the pitch</h2>
              <p className="text-base text-gray-600 mb-10">
                The page you are looking for might have been moved, deleted, or perhaps never existed.
                Let&apos;s get you back in the game.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white">
                  <Link href="/">
                    Return to Homepage
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-red-50">
                  <Link href="/contact">
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>

            {/* Featured academies */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Explore our academies</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Manchester Academy', image: '/manchesterhero.jpg', link: '/academy/manchester' },
                  { name: 'London Academy', image: '/londonhero.jpg', link: '/academy/london' },
                  { name: 'Alicante Academy', image: '/alicantehero.jpg', link: '/academy/alicante' }
                ].map((academy, i) => (
                  <Link href={academy.link} key={i} className="group">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src={academy.image}
                        alt={academy.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">{academy.name}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need assistance?</h2>
          <p className="text-base text-white/90 max-w-2xl mx-auto mb-8">
            If you&apos;re having trouble finding what you need, our team is always here to help.
          </p>
          <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-primary px-8">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
