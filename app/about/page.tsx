import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ACADEMIES = [
  {
    name: 'Manchester Football Academy',
    description: 'Strategic location with exposure to clubs like Manchester United, Manchester City, and more.',
    image: '/manchesterhero.jpg',
    href: '/academy/manchester',
  },
  {
    name: 'London Football Academy',
    description: 'Premier football development program in London combining education with elite training.',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000',
    href: '/academy/london',
  },
  {
    name: 'Alicante Football Academy',
    description: 'Experience Spanish football culture and training methodology in Alicante.',
    image: '/dts2.jpg',
    href: '/academy/alicante',
  },
];

const FEATURES = [
  {
    title: 'Professional Network',
    description: 'Access to top football clubs, academies, and professional scouts across the UK and Europe.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: 'Expert Coaching',
    description: 'Training sessions led by FA-certified coaches with extensive professional experience.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Education & Football',
    description: 'Balance between education and football training, ensuring both academic and athletic development.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/aboutushero.jpg"
            alt="Football training"
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
                About Us
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
              Developing Young Football Talents
            </h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed max-w-lg">
              We combine professional football training with quality education, creating pathways for aspiring athletes worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8 lg:gap-16 items-start mb-12 lg:mb-16">
            <div className="flex items-center gap-3">
              <span className="w-0.5 h-5 bg-red-600 shrink-0" />
              <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                Who We Are
              </span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">
                British AUC SPORT
              </h2>
              <div className="space-y-4">
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  British AUC SPORT is a UK-based sports agency that trains and mentors young talents to become professional footballers while studying for their degrees. The aim of this is to help potential students try their football skills while studying, giving them the opportunity to either progress to play at a Professional or semi-professional level.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  British AUC SPORT connects extensively with most English and European football clubs and academies, giving each player an ample opportunity of being scouted into Premiership clubs around the world.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  British AUC SPORT is proud to be a Member of PFSA (Professional Football Scouts Association United Kingdom) an umbrella body for all professional scouts worldwide. Therefore, prospective players are exposed to scouts around the world. Recently, Man United has contracted the body to help recruit for its first team.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-medium px-5 py-2.5 hover:bg-red-700 transition-colors"
                >
                  Explore Programs
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-gray-300 text-gray-600 text-sm font-medium px-5 py-2.5 hover:border-gray-900 hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <Image
                src="/aboutus.jpg"
                alt="Football training session"
                fill
                className="object-cover"
              />
            </div>
            <div className="border border-gray-100 p-8">
              <div className="mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7V12C3 17.25 7.05 22.05 12 23C16.95 22.05 21 17.25 21 12V7L12 2Z" fill="#dc262633" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                To discover, develop, and nurture young football talent worldwide, providing a clear pathway to professional and semi-professional football while ensuring access to quality education.
              </p>
              <div className="mt-6 pt-5 border-t border-gray-100">
                <span className="text-xs font-medium text-gray-400 tracking-[0.1em] uppercase">
                  PFSA Member
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academies */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start mb-14">
            <div className='space-y-8'>
            <div className="flex items-center gap-3">
              <span className="w-0.5 h-5 bg-red-600 shrink-0" />
              <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                Academies
              </span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                Football Development Programs
              </h2>
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed ">
                We train and help every potential young player to realize their potential of becoming a professional footballer through our bespoke training and mentorship programmes.
              </p>
            </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {ACADEMIES.map((academy, i) => (
              <Link key={i} href={academy.href} className="group block h-full">
                <div className="relative h-[380px] overflow-hidden">
                  <Image
                    src={academy.image}
                    alt={academy.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-semibold text-white mb-1.5">{academy.name}</h3>
                    <p className="text-sm text-white/60 mb-3 line-clamp-2 leading-relaxed">{academy.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-white/50 group-hover:text-white/80 transition-colors">
                      Learn More
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start mb-14">
           <div className='space-y-8'>

            <div className="flex items-center gap-3">
              <span className="w-0.5 h-5 bg-red-600 shrink-0" />
              <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                Advantages
              </span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                Why Choose Us
              </h2>
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed max-w-lg">
                We combine professional expertise with personalized attention to help athletes reach their full potential.
              </p>
            </div>
           </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <div key={i} className="border border-gray-100 p-8">
                <div className="w-11 h-11 bg-red-50 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PFSA CTA */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-5 border border-white/20 w-fit py-2 px-2 mx-auto">
           
            {/* <span className="w-0.5 h-5 bg-white/60 shrink-0" /> */}
            <span className="text-[10px] font-medium text-white/60 tracking-[0.15em] uppercase">
              Professional Association
            </span>
          </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug mb-4">
            PFSA Membership
          </h2>
         
          <p className="text-sm md:text-[15px] text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            As a member of the Professional Football Scouts Association (PFSA), we provide our players with exposure to scouts from professional clubs worldwide.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-red-700 text-sm font-medium px-6 py-3 hover:bg-gray-100 transition-colors"
          >
            Join Our Program
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
