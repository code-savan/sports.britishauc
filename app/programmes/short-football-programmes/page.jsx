import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Wallet } from 'lucide-react';

const events = [
  {
    id: 'club-placement-testing-conditioning',
    title: 'Club Placement Testing & Conditioning',
    date: '10th - 14th November, 2025',
    location: 'Manchester & North West, UK',
    price: '£985',
    image: '/event10.jpg',
    tag: 'Limited Spots',
    description: 'Unlock your potential with our comprehensive 1-week player testing program that combines sports science with real-world evaluation.',
    more: 'Join our elite 1-week Club Placement Testing & Conditioning program this August in Manchester. Get assessed by ex-pros, elite coaches, and sports scientists using cutting-edge equipment and systems. Receive a full performance report, video analysis, and personalised roadmap for future development.',
    link: '/events/club-placement-testing-conditioning',
  },
  {
    id: 'manchester-high-elite-football-2025',
    title: 'Manchester High Elite Football Development Programme',
    date: '29th October - 5th of November 2025',
    location: 'Manchester, UK',
    price: '£1,240',
    image: '/DS4.jpg',
    tag: 'Limited Spots',
    description: 'Train at our Manchester Football Academy and experience professional training methods that have made elite players worldwide.',
    more: 'A UK-based football academy that trains and mentors young talents to become professional footballers through high-level performance football training programmes. Extensive connections with most English and European football clubs and academies, providing ample opportunities to be scouted by Premiership clubs.',
    link: '/events/manchester-high-elite-football-2025',
  },
  {
    id: 'high-elite-football-hungary',
    title: 'High Elite Football Development Programme',
    date: '29th October - 5th of November 2025',
    location: 'Debrecen, Hungary',
    price: '$773',
    image: '/DS3.jpg',
    tag: 'Limited Spots',
    description: 'Train at our Debrecen Football Academy and experience professional training methods in an international setting.',
    more: 'British AUC SPORT Football Academy trains and mentors young talents to become professional footballers through high-level performance football training programmes, with extensive connections to English and European football clubs.',
    link: '/events/high-elite-football-hungary',
  },
  {
    id: 'steven-gerrard-camp',
    title: 'Steven Gerrard Academy Pre Season Camp',
    date: '27 July - 7 August 2025',
    location: 'Liverpool, UK',
    price: '£2,500',
    image: '/preseasoncamphero.jpg',
    tag: 'Premium Experience',
    description: 'Train at Steven Gerrard Academy and experience the professional training methods of one of football\'s greatest players.',
    more: 'Steven Gerrard Academy was created to offer the ultimate footballing programme for players around the world. An opportunity to experience the living, training and playing lifestyle of an elite footballer, with access to a global footballing network.',
    link: '/events/steven-gerrard-camp',
  },
  {
    id: 'west-ham-trip',
    title: 'West Ham United Summer Trip 2025',
    date: '29 July - 4 August 2025',
    location: 'London, UK',
    price: '£2,100',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000',
    tag: 'Premium Experience',
    description: 'Train like a professional at West Ham United Academy in this unforgettable London experience combining elite coaching and education.',
    more: 'Experience the professional training methods and philosophy that have made elite players worldwide. All sessions are led by top coaches and include English language classes, leadership lessons, and a full residential experience.',
    link: '/events/west-ham-trip',
  },
];

export default function ShortFootballProgrammesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/preseasoncamphero.jpg"
            alt="Short Football Programs"
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
                Short Programmes
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
              Short Football Programmes
            </h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed max-w-lg">
              Kickstart your season with intensive training camps and development programmes designed to elevate your game.
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
                  Programmes
                </span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                  Intensive Training Experiences
                </h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Our short programmes offer intensive football training experiences at world-class facilities, combining professional coaching with cultural immersion.
                </p>
              </div>
            </div>
          </div>

          {/* Event Listings */}
          <div className="space-y-12">
            {events.map((event, idx) => (
              <div key={event.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-[280px] md:h-[380px] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="inline-block text-[11px] font-medium text-gray-400 tracking-[0.1em] uppercase border border-gray-200 py-1 px-2 mb-3">
                    {event.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size="13" className="text-red-400" />
                      {event.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size="13" className="text-red-400" />
                      {event.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Wallet size="13" className="text-red-400" />
                      {event.price}
                    </span>
                  </div>
                  <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-2">{event.description}</p>
                  <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-5">{event.more}</p>
                  <Link
                    href={event.link}
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
            Ready to Join a Programme?
          </h2>
          <p className="text-sm md:text-[15px] text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Contact our team to learn more about our short programmes and secure your spot.
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
