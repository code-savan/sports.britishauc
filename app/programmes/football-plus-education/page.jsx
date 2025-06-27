import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const academies = [
    {
        id: 'manchester',
        name: 'Manchester Football Academy',
        image: '/manchesterhero.jpg',
        intro: "Developing elite footballers in the heart of one of the world's most renowned football cities. Our Manchester Academy is for students in the Manchester area who wish to develop their football skills alongside their studies at the University.",
        city: 'Manchester, UK',
        fee: '£12,950',
        highlights: [
          'FA-qualified coaching & individual player reports',
          'Professional football trials with UK clubs',
          'Weekly matches against pro, semi-pro, and academy teams',
          'Player development plans & performance analysis',
          'Access to Platt Lane Sports Complex (former Man City ground)',
          'Outdoor activities: hiking, swimming, mountain climbing',
          'Sport therapy, nutrition, and match analysis sessions',
        ],
        link: '/academy/manchester',
      },
      {
        id: 'london',
        name: 'London Football Academy',
        image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2940',
        intro: "Developing elite footballers in one of the world's most vibrant sporting capitals. London Football Academy is for students in the London area who wish to develop their football skills alongside their studies at the University.",
        city: 'London, UK',
        fee: '£14,950',
        highlights: [
          'UEFA-qualified coaching & individual player reports',
          'Professional football trials with UK clubs',
          'Full-time programme with career development support',
          'Regular Premier League club tours & match tickets',
          'Player development plans & performance analysis',
          'Outdoor activities: hiking, swimming, mountain climbing',
          'Sport therapy, nutrition, and match analysis sessions',
        ],
        link: '/academy/london',
      },
  {
    id: 'alicante',
    name: 'Alicante Football Academy',
    image: 'https://images.unsplash.com/photo-1533224081996-0a96a8481e89?q=80&w=2400',
    intro: "Developing elite footballers in Spain's beautiful Mediterranean coast. Alicante Football Academy is for students studying in the Alicante region who wish to enhance their football skills alongside their studies at the University.",
    city: 'Alicante, Spain',
    fee: '£10,950',
    highlights: [
      'UEFA-qualified coaching & individual player reports',
      'Professional football trials with Spanish clubs',
      'State-of-the-art training pitches & gym',
      'Regular La Liga club tours & match tickets',
      'Player development plans & performance analysis',
      'Outdoor activities: mountain climbing, hiking, swimming',
      'Sport therapy, nutrition, and match analysis sessions',
    ],
    link: '/academy/alicante',
  },
  {
    id: 'debrecen',
    name: 'Debrecen Football Academy',
    image: 'https://images.unsplash.com/photo-1576660016182-af8a90e6ffda?q=80&w=2918',
    intro: "Developing elite footballers in Hungary's historic sporting city. Debrecen Academy is for students in Debrecen who wish to develop their football skills alongside their studies at the University.",
    city: 'Debrecen, Hungary',
    fee: '$7,950',
    highlights: [
      'UEFA-qualified coaching & individual player reports',
      'Professional football trials with Hungarian clubs',
      'State-of-the-art pitches & gym facilities',
      'Regular Hungarian league club tours & match tickets',
      'Player development plans & performance analysis',
      'Outdoor activities: mountain climbing, hiking, swimming',
      'Sport therapy, nutrition, and match analysis sessions',
    ],
    link: '/academy/debrecen',
  },
];

export default function FootballPlusEducationPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1741921899251-1e92c1156a56?q=80&w=2070" alt="Football Plus Education" fill className="object-cover object-center z-0" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-1" />
        <div className="relative z-10 text-center w-full flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Football Plus Education</h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-6">Combine elite football training with academic excellence for a well-rounded future.</p>
        </div>
      </section>

      {/* Academies List - Two Column Editorial Containers */}
      <section className="max-w-5xl mx-auto mt-20 mb-24 px-4 md:px-0 space-y-20">
        {academies.map((academy, idx) => (
          <div key={academy.id} className={`grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-stretch ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            {/* Image - left half */}
            <div className="relative w-full h-56 md:h-[340px] lg:h-[400px]">
              <Image src={academy.image} alt={academy.name} fill className="object-cover rounded-xl" />
            </div>
            {/* Content - right half */}
            <div className="flex flex-col justify-center h-full py-8 md:py-0 pl-0 md:pl-6">
              <div className="flex flex-wrap gap-4 items-center mb-2">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide bg-gray-100 rounded-full px-3 py-1">{academy.city}</span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide bg-gray-100 rounded-full px-3 py-1">Fee: {academy.fee}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{academy.name}</h2>
              <p className="text-gray-700 mb-4 text-base font-medium">{academy.intro}</p>
              <ul className="mb-4 space-y-2">
                {academy.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-base">
                    <FaCheckCircle className="mt-1 text-primary flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={academy.link}
                className="text-base font-semibold text-primary underline underline-offset-4 hover:text-red-700 transition-colors w-max"
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
