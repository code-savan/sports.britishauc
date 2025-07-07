import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, MapPin, Wallet } from 'lucide-react';

const trials = [
  {
    id: 'spain-trial',
    title: 'Spain Football Trial 2025',
    date: 'July 19, 2025',
    location: 'Alicante, Spain',
    price: '€78',
    image: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?q=80&w=1000',
    description:
      'Showcase your skills to professional scouts at this exclusive trial in Spain and take a step toward your professional football career.',
    more:
      'Professional coaching and evaluation from UEFA licensed coaches. Competitive match play, technical training, individual assessment, and the opportunity to be scouted by clubs in Spain and Europe. Hosted with CF Intercity International Academy. Led by Alex Armstrong (Active4Sport International) and local Spanish coaches. Location: Campo Municipal Antonio Solana, Alicante.',
    link: '/events/spain-trial',
  },
  {
    id: 'manchester-trial',
    title: 'Manchester Football Trial',
    date: 'July 17, 2025',
    location: 'Manchester, UK',
    price: '£65',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1000',
    description:
      'Showcase your skills to professional scouts at this exclusive trial in Manchester and take a step toward your professional football career.',
    more:
      'Professional coaching and evaluation from UEFA licensed coaches. Competitive match play, technical training, individual assessment, and the opportunity to be scouted by clubs in the UK and Europe. Led by Alex Armstrong (Active4Sport International) and British AUC Sport. Location: Platt Lane (former Manchester City Training Ground), Manchester.',
    link: '/events/manchester-trial',
  },
  {
    id: 'manchester-trial-2025',
    title: 'Manchester Football Trial 2025',
    date: '14th August, 2025',
    location: 'Manchester, UK',
    price: '£98',
    image: '/manchester.jpeg',
    description:
      'Showcase your skills to professional scouts at this exclusive trial in Manchester and take a step toward your professional football career.',
    more:
      'Professional coaching and evaluation from UEFA licensed coaches. Competitive match play, technical training, individual assessment, and the opportunity to be scouted by clubs in the UK and Europe. Led by Alex Armstrong (Active4Sport International) and British AUC Sport. Location: Platt Lane (former Manchester City Training Ground), Manchester.',
    link: '/events/manchester-trial-2025',
  },
];

export default function FootballTrialPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1615476211734-9cc4c378d438?q=80&w=998"
          alt="Football Trial Hero"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-1" />
        <div className="relative z-10 text-center w-full flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Football Trials</h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-6">
            Showcase your talent and get scouted by professional clubs at our international football trials.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white px-10 py-4 text-lg font-semibold rounded-full">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Trials Summary - Two Column, Image Left, Editorial */}
      <section className="max-w-5xl mx-auto mt-20 mb-24 px-4 md:px-0 space-y-20">
        {trials.map((trial, idx) => (
          <div key={trial.id} className={`grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-stretch`}>
            {/* Image - left half */}
            <div className="relative w-full h-64 md:h-[340px] lg:h-[400px]">
              <Image src={trial.image} alt={trial.title} fill className="object-cover rounded-xl" />
            </div>
            {/* Content - right half */}
            <div className="flex flex-col justify-center h-full py-8 md:py-0 pl-0 md:pl-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{trial.title}</h2>
              <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-3">
                <span className="flex items-center gap-1">
                  {/* Calendar Icon */}
                  <Calendar className="h-4 w-4 text-primary mr-1" />
                  {trial.date}
                </span>
                <span className="flex items-center gap-1">
                  {/* Map Pin Icon */}
                  <MapPin className="h-4 w-4 text-primary mr-1" />
                  {trial.location}
                </span>
                <span className="flex items-center gap-1">
                  {/* Wallet Icon */}
                  <Wallet className="h-4 w-4 text-primary mr-1" />
                  {trial.price}
                </span>
              </div>
              <p className="text-gray-700 mb-2 text-base">{trial.description}</p>
              <p className="text-gray-700 mb-4 text-base">{trial.more}</p>
              <Link
                href={trial.link}
                className="text-base font-medium text-primary underline underline-offset-4 hover:text-red-700 transition-colors w-max"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
