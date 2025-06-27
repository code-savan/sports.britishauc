import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const westHamEvent = {
  id: 'west-ham-trip',
  title: 'West Ham United Summer Trip 2025',
  date: '29 July - 4 August 2025',
  location: 'London, UK',
  price: '£2,100',
  image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000',
  tag: 'Premium Experience',
  tagColor: 'blue',
  description: 'Train like a professional at West Ham United Academy in this unforgettable London experience combining elite coaching and education.',
  more: 'Experience the professional training methods and philosophy that have made elite players worldwide. This trip is designed for players who want to immerse themselves in a pro-club environment, improve their skills, and enjoy a week of football, learning, and cultural exchange in London. All sessions are led by top coaches and include English language classes, leadership lessons, and a full residential experience.'
};

export default function PreSeasonCampPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1659059398354-4809fb5b11fd?q=80&w=2070"
          alt="Pre Season Camp Football Training"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-1" />
        <div className="relative z-10 text-center w-full flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Pre Season Camp</h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-6">Kickstart your season with intensive training, fitness, and team-building experiences.</p>
          <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white px-10 py-4 text-lg font-semibold shadow-lg rounded-full">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* West Ham United Summer Trip 2025 Section */}
      <section className="max-w-5xl mx-auto mt-20 mb-24 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-stretch">
          {/* Image - left half */}
          <div className="relative w-full h-64 md:h-[340px] lg:h-[400px]">
            <Image src={westHamEvent.image} alt={westHamEvent.title} fill className="object-cover rounded-xl" />
          </div>
          {/* Content - right half */}
          <div className="flex flex-col justify-center h-full py-8 md:py-0 pl-0 md:pl-6">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">{westHamEvent.tag}</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{westHamEvent.title}</h2>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-3">
              <span className="flex items-center gap-1"><svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>{westHamEvent.date}</span>
              <span className="flex items-center gap-1"><svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>{westHamEvent.location}</span>
              <span className="flex items-center gap-1"><svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{westHamEvent.price}</span>
            </div>
            <p className="text-gray-700 mb-2 text-base">{westHamEvent.description}</p>
            <p className="text-gray-700 mb-4 text-base">{westHamEvent.more}</p>
            <Button
              asChild
              variant="outline"
              className="relative border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 w-max rounded-full shadow-md transition-all duration-200 group"
            >
              <Link href="/events/west-ham-trip" className="flex items-center gap-2">
                <span className="transition-colors duration-200 group-hover:text-white">Read more</span>
                <svg
                  className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
