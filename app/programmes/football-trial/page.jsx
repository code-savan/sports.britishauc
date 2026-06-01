import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Wallet } from 'lucide-react';

const trials = [
  {
    id: 'manchester-football-trial-2026',
    title: 'Manchester Football Trial 2026',
    date: '21st February, 2026 (9am - 2pm)',
    location: 'Manchester, UK',
    price: '£65',
    image: '/TR1.jpg',
    description:
      'Showcase your talent and be scouted! A unique opportunity for aspiring players to showcase their skills and talents to professional football scouts.',
    more:
      "Limited spots available. Be scouted by pro clubs from the English Football League (EFL) and other British and European teams. Gain exposure in a prestigious football system and take the next step in your career. Hosted by Chris Honor (Helsby FC Director, ex-Leicester City FC scout). Location: Platt Lane, Yew Tree Road, Manchester, M14 7UU.",
    link: '/events/manchester-football-trial-2026',
  },
  {
    id: 'manchester-trial-2025',
    title: 'Manchester Football Trial 2025',
    date: '6th of October 2025',
    location: 'Manchester, UK',
    price: '£98',
    image: '/TR1.jpg',
    description:
      'Showcase your skills to professional scouts at this exclusive trial in Manchester and take a step toward your professional football career.',
    more:
      'Professional coaching and evaluation from UEFA licensed coaches. Competitive match play, technical training, individual assessment, and the opportunity to be scouted by clubs in the UK and Europe. Led by Alex Armstrong (Active4Sport International) and British AUC Sport. Location: Platt Lane (former Manchester City Training Ground), Manchester.',
    link: '/events/manchester-trial-2025',
  },
  {
    id: 'manchester-trial',
    title: 'Manchester Football Trial',
    date: 'July 17, 2025',
    location: 'Manchester, UK',
    price: '£65',
    image: '/manchester.jpeg',
    description:
      'Showcase your skills to professional scouts at this exclusive trial in Manchester and take a step toward your professional football career.',
    more:
      'Professional coaching and evaluation from UEFA licensed coaches. Competitive match play, technical training, individual assessment, and the opportunity to be scouted by clubs in the UK and Europe. Led by Alex Armstrong (Active4Sport International) and British AUC Sport. Location: Platt Lane (former Manchester City Training Ground), Manchester.',
    link: '/events/manchester-trial',
  },
  {
    id: 'spain-trial',
    title: 'Spain Football Trial 2025',
    date: 'Spain Trial postponed. New dates to be confirmed later.',
    location: 'Alicante, Spain',
    price: '€78',
    image: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?q=80&w=2000',
    description:
      'Showcase your skills to professional scouts at this exclusive trial in Spain and take a step toward your professional football career.',
    more:
      'Professional coaching and evaluation from UEFA licensed coaches. Competitive match play, technical training, individual assessment, and the opportunity to be scouted by clubs in Spain and Europe. Hosted with CF Intercity International Academy. Led by Alex Armstrong (Active4Sport International) and local Spanish coaches. Location: Campo Municipal Antonio Solana, Alicante.',
    link: '/events/spain-trial',
  },
];

export default function FootballTrialPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/trialhero.jpg"
            alt="Football Trial"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-0.5 h-5 bg-red-600" />
              <span className="text-xs font-medium text-white/60 tracking-[0.15em] uppercase">
                Football Trials
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
              Showcase Your Talent to Professional Scouts
            </h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed max-w-lg">
              A unique opportunity for aspiring players to showcase their skills at exclusive trials scouted by professional clubs.
            </p>
          </div>
        </div>
      </section>

      {/* Section Header */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start mb-14">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-0.5 h-5 bg-red-600 shrink-0" />
                <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                  Upcoming Trials
                </span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                  Professional Football Trials
                </h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Our trials provide direct exposure to professional scouts from clubs across the UK and Europe. Each trial includes professional coaching, competitive match play, and individual assessments.
                </p>
              </div>
            </div>
          </div>

          {/* Trial Listings */}
          <div className="space-y-12">
            {trials.map((trial, idx) => (
              <div key={trial.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-[280px] md:h-[380px] overflow-hidden">
                    <Image
                      src={trial.image}
                      alt={trial.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{trial.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size="13" className="text-red-400" />
                      {trial.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size="13" className="text-red-400" />
                      {trial.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Wallet size="13" className="text-red-400" />
                      {trial.price}
                    </span>
                  </div>
                  <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-2">{trial.description}</p>
                  <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-5">{trial.more}</p>
                  <Link
                    href={trial.link}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    Read More
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-5 border border-white/20 w-fit py-2 px-2 mx-auto">
            <span className="text-[10px] font-medium text-white/60 tracking-[0.15em] uppercase">
              Get Started
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-sm md:text-[15px] text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Contact us to register for an upcoming trial and showcase your talent to professional scouts.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-red-700 text-sm font-medium px-6 py-3 hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
