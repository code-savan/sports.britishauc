import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FootballPlusLanguagePage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image src="/footballheroimage.jpeg" alt="Football Plus Language" fill className="object-cover object-center z-0" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-1" />
        <div className="relative z-10 text-center w-full flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Football Plus Language</h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-6">Enhance your football skills while improving your language proficiency in an immersive environment.</p>
          <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white px-10 py-4 text-lg font-semibold shadow-lg rounded-full">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
