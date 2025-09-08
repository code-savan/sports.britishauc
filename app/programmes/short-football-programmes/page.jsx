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
  image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000',
  tag: 'Premium Experience',
  tagColor: 'blue',
  description: 'Train like a professional at West Ham United Academy in this unforgettable London experience combining elite coaching and education.',
  more: 'Experience the professional training methods and philosophy that have made elite players worldwide. This trip is designed for players who want to immerse themselves in a pro-club environment, improve their skills, and enjoy a week of football, learning, and cultural exchange in London. All sessions are led by top coaches and include English language classes, leadership lessons, and a full residential experience.'
};
const testingAndConditioningEvent = {
  id: 'club-placement-testing-conditioning',
  title: 'Club Placement Testing & Conditioning',
  date: '25th - 29th August, 2025',
  location: 'Manchester & North West, UK',
  price: '£985',
  image: '/event10.jpg',
  tag: 'Limited Spots',
  tagColor: 'blue',
  description: 'Unlock your potential with our comprehensive 1-week player testing program that combines sports science with real-world evaluation.',
  more: 'Join our elite 1-week Club Placement Testing & Conditioning program this August in Manchester. Get assessed by ex-pros, elite coaches, and sports scientists using cutting-edge equipment and systems. Receive a full performance report, video analysis, and personalised roadmap for future development. Unlock your pathway to pro football with representation from a FIFA-licensed agency.'
};

// Steven Gerrard Academy Camp event data
const stevenGerrardEvent = {
  id: 'steven-gerrard-camp',
  title: 'Steven Gerrard Academy Pre Season Camp',
  date: '27 July - 7 August 2025',
  location: 'Liverpool, UK',
  price: '£2,500',
  image: 'https://stevengerrard.academy/wp-content/uploads/sgapreseason-17dddd.jpg',
  tag: 'Premium Experience',
  tagColor: 'red',
  description: 'Train at Steven Gerrard Academy and experience the professional training methods and philosophy that have made elite players worldwide. 2 weeks of football, coaching, and cultural experiences in Liverpool.',
  more: `Steven Gerrard Academy was created from the ground up by one of the world's most complete footballers and the team he works closely with on a daily basis. Steven's vision was to offer the ultimate footballing programme for players around the world. An opportunity for players to experience the living, training and playing lifestyle of an elite footballer for an extended period of time. During this time the programme will maximise the players' potential, give them access to a global footballing network, and ensure they improve with every session. The determination Steven took into every game and the 100% effort he put into each training session has transferred into his work off the pitch since retirement from professional football. Steven Gerrard Academy is a product of this determination and effort, it has been created to allow players to excel and gain opportunities in football.`
};

// High Elite Football Hungary event data
const highEliteHungaryEvent = {
  id: 'high-elite-football-hungary',
  title: 'High Elite Football Development Programme',
  date: '29th October - 5th of November 2025',
  location: 'Debrecen, Hungary',
  price: '$773',
  image: '/DS3.jpg',
  tag: 'Limited Spots',
  tagColor: 'purple',
  description: 'Train at our Debrecen Football Academy and experience the professional training methods and philosophy that have made elite players worldwide. 2 weeks of pro football, coaching, and trial opportunities in Hungary.',
  more: `British AUC SPORT Football Academy is a UK-based football academy that trains and mentors young talents to become professional footballers through their high-level performance football training programmes. The aim of this is to help players develop their football skills and expose them to professional or semi-professional football opportunities. The academy has extensive connections with most English and European football clubs and academies, providing each player with ample opportunities to be scouted by Premiership clubs in the UK and around the world. British AUC SPORT is proud to be a member of PFSA (Professional Football Scouts Association United Kingdom), an umbrella body for all professional scouts worldwide. Therefore, prospective players are exposed to scouts around the world. Recently, Man United has contracted the body to help recruit for its first team.`
};

const manchesterHighEliteEvent = {
  id: 'manchester-high-elite-football-2025',
  title: 'Manchester High Elite Football Development Programme',
  date: '29th October - 5th of November 2025',
  location: 'Manchester, United Kingdom',
  price: '£1240',
  image: '/DS4.jpg',
  tag: 'Limited Spots',
  tagColor: 'purple',
  description: 'Train at our Manchester Football Academy and experience the professional training methods and philosophy that have made elite players worldwide. 2 weeks of pro football, coaching, and trial opportunities in Manchester, United Kingdom.',
  more: `British AUC SPORT Football Academy is a UK-based football academy that trains and mentors young talents to become professional footballers through their high-level performance football training programmes. The aim of this is to help players develop their football skills and expose them to professional or semi-professional football opportunities. The academy has extensive connections with most English and European football clubs and academies, providing each player with ample opportunities to be scouted by Premiership clubs in the UK and around the world. British AUC SPORT is proud to be a member of PFSA (Professional Football Scouts Association United Kingdom), an umbrella body for all professional scouts worldwide. Therefore, prospective players are exposed to scouts around the world. Recently, Man United has contracted the body to help recruit for its first team.`
};

export default function PreSeasonCampPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/preseasoncamphero.jpg"
          alt="Pre Season Camp Football Training"
          fill
          className="object-cover object-top z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-1" />
        <div className="relative z-10 text-center w-full flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Short Football Programs</h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-6">Kickstart your season with intensive training, fitness, and team-building experiences.</p>
          <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white px-10 py-4 text-lg font-semibold shadow-lg rounded-full">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>


 {/* Manchester High Elite Football Development Programme Section */}
 <section className="max-w-5xl mx-auto mt-20 mb-24 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-stretch">
          {/* Image - left half */}
          <div className="relative w-full h-64 md:h-[340px] lg:h-[400px]">
            <Image src={testingAndConditioningEvent.image} alt={testingAndConditioningEvent.title} fill className="object-cover rounded-xl" />
          </div>
          {/* Content - right half */}
          <div className="flex flex-col justify-center h-full py-8 md:py-0 pl-0 md:pl-6">
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">{testingAndConditioningEvent.tag}</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{testingAndConditioningEvent.title}</h2>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-3">
              <span className="flex items-center gap-1"><svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>{testingAndConditioningEvent.date}</span>
              <span className="flex items-center gap-1"><svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>{testingAndConditioningEvent.location}</span>
              <span className="flex items-center gap-1"><svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{testingAndConditioningEvent.price}</span>
            </div>
            <p className="text-gray-700 mb-2 text-base">{testingAndConditioningEvent.description}</p>
            <p className="text-gray-700 mb-4 text-base line-clamp-6">{testingAndConditioningEvent.more}</p>
            <Button
              asChild
              variant="outline"
              className="relative border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 w-max rounded-full shadow-md transition-all duration-200 group"
            >
              <a href="/events/club-placement-testing-conditioning" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span className="transition-colors duration-200 group-hover:text-white">Read More</span>
                <svg
                  className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </section>

 {/* Manchester High Elite Football Development Programme Section */}
 <section className="max-w-5xl mx-auto mt-20 mb-24 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-stretch">
          {/* Image - left half */}
          <div className="relative w-full h-64 md:h-[340px] lg:h-[400px]">
            <Image src={manchesterHighEliteEvent.image} alt={manchesterHighEliteEvent.title} fill className="object-cover rounded-xl" />
          </div>
          {/* Content - right half */}
          <div className="flex flex-col justify-center h-full py-8 md:py-0 pl-0 md:pl-6">
            <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">{manchesterHighEliteEvent.tag}</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{manchesterHighEliteEvent.title}</h2>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-3">
              <span className="flex items-center gap-1"><svg className="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>{manchesterHighEliteEvent.date}</span>
              <span className="flex items-center gap-1"><svg className="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>{manchesterHighEliteEvent.location}</span>
              <span className="flex items-center gap-1"><svg className="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{manchesterHighEliteEvent.price}</span>
            </div>
            <p className="text-gray-700 mb-2 text-base">{manchesterHighEliteEvent.description}</p>
            <p className="text-gray-700 mb-4 text-base line-clamp-6">{manchesterHighEliteEvent.more}</p>
            <Button
              asChild
              variant="outline"
              className="relative border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold px-8 py-3 w-max rounded-full shadow-md transition-all duration-200 group"
            >
              <a href="/events/manchester-high-elite-football-2025" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span className="transition-colors duration-200 group-hover:text-white">Read More</span>
                <svg
                  className="h-5 w-5 text-orange-600 group-hover:text-white transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </section>


      {/* High Elite Football Development Programme Hungary Section */}
    <section className="max-w-5xl mx-auto mt-20 mb-24 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-stretch">
          {/* Image - left half */}
          <div className="relative w-full h-64 md:h-[340px] lg:h-[400px]">
            <Image src={highEliteHungaryEvent.image} alt={highEliteHungaryEvent.title} fill className="object-cover rounded-xl" />
          </div>
          {/* Content - right half */}
          <div className="flex flex-col justify-center h-full py-8 md:py-0 pl-0 md:pl-6">
            <div className="text-xs font-semibold text-purple-700 uppercase tracking-wide mb-2">{highEliteHungaryEvent.tag}</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{highEliteHungaryEvent.title}</h2>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-3">
              <span className="flex items-center gap-1"><svg className="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>{highEliteHungaryEvent.date}</span>
              <span className="flex items-center gap-1"><svg className="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>{highEliteHungaryEvent.location}</span>
              <span className="flex items-center gap-1"><svg className="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{highEliteHungaryEvent.price}</span>
            </div>
            <p className="text-gray-700 mb-2 text-base">{highEliteHungaryEvent.description}</p>
            <p className="text-gray-700 mb-4 text-base line-clamp-6">{highEliteHungaryEvent.more}</p>
            <Button
              asChild
              variant="outline"
              className="relative border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white font-semibold px-8 py-3 w-max rounded-full shadow-md transition-all duration-200 group"
            >
              <a href="/events/high-elite-football-hungary" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span className="transition-colors duration-200 group-hover:text-white">Read More</span>
                <svg
                  className="h-5 w-5 text-purple-700 group-hover:text-white transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </section>

   {/* Steven Gerrard Academy Pre Season Camp Section */}
   <section className="max-w-5xl mx-auto mt-20 mb-24 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-stretch">
          {/* Image - left half */}
          <div className="relative w-full h-64 md:h-[340px] lg:h-[400px]">
            <Image src={stevenGerrardEvent.image} alt={stevenGerrardEvent.title} fill className="object-cover rounded-xl" />
          </div>
          {/* Content - right half */}
          <div className="flex flex-col justify-center h-full py-8 md:py-0 pl-0 md:pl-6">
            <div className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-2">{stevenGerrardEvent.tag}</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{stevenGerrardEvent.title}</h2>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-3">
              <span className="flex items-center gap-1"><svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>{stevenGerrardEvent.date}</span>
              <span className="flex items-center gap-1"><svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>{stevenGerrardEvent.location}</span>
              <span className="flex items-center gap-1"><svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{stevenGerrardEvent.price}</span>
            </div>
            <p className="text-gray-700 mb-2 text-base">{stevenGerrardEvent.description}</p>
            <p className="text-gray-700 mb-4 text-base line-clamp-6">{stevenGerrardEvent.more}</p>
            <Button
              asChild
              variant="outline"
              className="relative border-2 border-red-600 text-red-700 hover:bg-red-600 hover:text-white font-semibold px-8 py-3 w-max rounded-full shadow-md transition-all duration-200 group"
            >
              <Link href="/events/steven-gerrard-camp" className="flex items-center gap-2">
                <span className="transition-colors duration-200 group-hover:text-white">Read more</span>
                <svg
                  className="h-5 w-5 text-red-600 group-hover:text-white transition-colors duration-200"
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
            <p className="text-gray-700 mb-4 text-base line-clamp-6">{westHamEvent.more}</p>
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
