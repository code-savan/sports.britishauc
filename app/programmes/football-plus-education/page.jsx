import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const academies = [
  {
    id: 'manchester',
    name: 'Manchester Football Academy',
    image: '/DSC1.jpg',
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
    image: '/DSC2.jpg',
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
    image: '/DSC3.jpg',
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
    image: '/DSC4.jpg',
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
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/footballplushero.jpg"
            alt="Football Plus Education"
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
                Football Plus Education
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
              Combine Elite Football Training with Academic Excellence
            </h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed max-w-lg">
              Develop your football skills alongside your university studies at one of our international academies.
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
                  Our Academies
                </span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                  Football Academies Worldwide
                </h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Each academy combines professional football training with academic studies, providing a complete pathway for aspiring athletes.
                </p>
              </div>
            </div>
          </div>

          {/* Academy Listings */}
          <div className="space-y-16">
            {academies.map((academy, idx) => (
              <div key={academy.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-[280px] md:h-[380px] overflow-hidden">
                    <Image
                      src={academy.image}
                      alt={academy.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[11px] font-medium text-gray-400 tracking-[0.1em] uppercase border border-gray-200 py-1 px-2">
                      {academy.city}
                    </span>
                    <span className="text-[11px] font-medium text-gray-400 tracking-[0.1em] uppercase border border-gray-200 py-1 px-2">
                      Fee: {academy.fee}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{academy.name}</h3>
                  <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-5">{academy.intro}</p>
                  <ul className="space-y-2 mb-6">
                    {academy.highlights.map((item, i) => (
                      <li key={i} className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                        <CheckCircle2 size="15" className="text-red-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={academy.link}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    Learn More
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
            Ready to Combine Football and Education?
          </h2>
          <p className="text-sm md:text-[15px] text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Take the first step toward a balanced future in football and academics. Contact our team to learn more.
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
