'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ArrowDown, ArrowLeft, Calendar, WholeWord, Globe, Globe2, Trophy, PhoneCall, Award, ArrowDownCircle } from 'lucide-react';

const HERO_IMAGES = [
  { src: '/hero.jpg', alt: 'Football stadium' },
  { src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1600', alt: 'Football action' },
  { src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1600', alt: 'Football field' },
];

const ACADEMIES = [
  {
    id: 'manchester',
    name: 'Manchester Football Academy',
    description: 'For students studying in the Manchester area who wish to develop their football skills alongside their studies.',
    image: '/manchesterhero.jpg',
    alt: 'Manchester Football Academy',
    href: '/academy/manchester',
  },
  {
    id: 'london',
    name: 'London Football Academy',
    description: 'Premier football development program in London combining education with elite football training.',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000',
    alt: 'London Football Academy',
    href: '/academy/london',
  },
  {
    id: 'debrecen',
    name: 'Debrecen Football Academy',
    description: 'Experience Hungarian football excellence and top-tier training while pursuing your education.',
    image: '/dts2.jpg',
    alt: 'Debrecen Football Academy',
    href: '/academy/debrecen',
  },
];

const EVENTS_DATA = [
  {
    id: 'manchester-trial',
    name: 'Manchester Football Trial 2025',
    description: 'Showcase your skills to professional scouts at this exclusive trial in Manchester.',
    date: 'TBD (Registration Deadline: 20th August 2025)',
    badge: 'Limited Spots',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1000',
    href: '/events/manchester-trial',
  },
  {
    id: 'west-ham-trip',
    name: 'West Ham United Summer Trip 2025',
    description: 'Train like a professional at West Ham United Academy in this London experience.',
    date: '29 July - 4 August 2025',
    badge: 'Premium Experience',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000',
    href: '/events/west-ham-trip',
  },
];

const TESTIMONIALS = [
  {
    quote: "British AUC Sport assisted me in my football journey through their Manchester trials and development programs. Their support and guidance helped me improve my game significantly. I'm now playing football at the University of East London and represented Nigeria at the U20 Women's World Cup qualifiers.",
    name: 'Knowledge Omovoh',
    role: 'Academy Player, League One Club',
    image: '/t1.webp',
  },
];

const ABOUT_IMAGES = [
  { src: '/aboutushero.jpg', alt: 'Football training' },
  { src: '/DSC1.jpg', alt: 'Action on the pitch' },
  { src: '/training-ground.jpg', alt: 'Training facilities' },
  { src: '/DSC2.jpg', alt: 'Academy players' },
  { src: '/hero.jpg', alt: 'Match day atmosphere' },
];

const STATS = [
  { value: 10, suffix: '+', label: 'Academy Locations' },
  { value: 500, suffix: '+', label: 'Athletes Trained' },
  { value: 50, suffix: '+', label: 'Scout Network' },
  { value: 98, suffix: '%', label: 'Success Rate' },
];

function useReveal(threshold = 0.15): [React.Ref<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, revealed]);

  const setRef = useCallback((node: HTMLDivElement | null) => {
    ref.current = node;
  }, []);

  return [setRef, revealed];
}

function useCountUp(target: number, duration: number, start: boolean): number {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!start) return;
    const step = Math.max(1, Math.floor(target / (duration / 16)));
    let current = 0;
    const tick = () => {
      current += step;
      if (current >= target) {
        setCount(target);
        return;
      }
      setCount(current);
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [target, duration, start]);

  return count;
}

function RevealWrapper({ children, className = '', delay = 0, type = 'reveal' }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: 'reveal' | 'reveal-left' | 'reveal-right' | 'reveal-scale';
}) {
  const [ref, revealed] = useReveal();

  return (
    <div
      ref={ref}
      className={`animate-${type} ${revealed ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {HERO_IMAGES.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: activeSlide === i ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={i === 0}
            quality={90}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.60)] via-[rgba(0,0,0,0.35)] to-[rgba(0,0,0,0.10)]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-[650px] flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-400 animate-pulse" />
              <span className="text-[11px] font-normal text-white/60 uppercase tracking-[0.15em]">
                Where Talent Meets Opportunity
              </span>
            </div>

            <h1 className="text-white/90 font-normal tracking-normal leading-relaxed text-xl md:text-3xl">
              <span className="block">Elevate Your Football Career</span>
              <span className="block">with British AUC Sport</span>
            </h1>

            <p className="text-sm md:text-[14px] font-light tracking-wide text-white/80 max-w-[420px] leading-relaxed">
              Connecting talented athletes with exceptional opportunities, from professional trials to elite academy experiences.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 bg-[#dc2626] text-white text-[13px] font-medium py-3 px-6 hover:brightness-110 transition-all duration-200"
              >
                Explore Programs
                <Trophy size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white text-[13px] font-medium py-3 px-6 hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                Contact Us
                <PhoneCall size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 hidden sm:block border-t border-t-white/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-6">
            <button
              onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white/80 transition-colors"
            >
              <span>Scroll Down</span>
              <ArrowDownCircle size={17} />
            </button>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-xs font-normal text-white/70">
                <Globe2 size={13} />
                4 Academies Worldwide
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span className="flex items-center gap-1.5 text-xs font-normal text-white/70">
                <Award size={13} />
                50+ Professional Scouts
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const [ref, revealed] = useReveal(0.3);

  return (
    <section id="stats" ref={ref} className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} delay={i * 100} start={revealed} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, delay, start }: { stat: { value: number; suffix: string; label: string }; delay: number; start: boolean }) {
  const [ref, localRevealed] = useReveal(0.5);
  const effectiveStart = start || localRevealed;
  const count = useCountUp(stat.value, 2000, effectiveStart);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-red-600 mb-1 tabular-nums">
        {count}<span>{stat.suffix}</span>
      </div>
      <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
    </div>
  );
}

function AboutSection() {
  const [aboutSlide, setAboutSlide] = useState(0);
  return (
    <section className="py-20 md:py-28 bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 ">
        <RevealWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8 lg:gap-6 items-start min-w-0">
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-1 h-6 bg-red-600 shrink-0" />
              <span className="text-xs font-semibold text-white tracking-[0.15em] uppercase">
                About
              </span>
            </div>
            <div className="space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                Shaping the Next Generation of Football Talent
              </h2>
              <div className="space-y-4">
                <p className="text-sm md:text-[15px] text-white/80 leading-relaxed">
                  British AUC SPORT is a UK-based sports agency that trains and mentors young talents
                  to become professional footballers while studying for their degrees. We help potential
                  students try their football skills while studying, giving them the opportunity to
                  progress to play at a professional or semi-professional level.
                </p>
                <p className="text-sm md:text-[15px] text-white/80 leading-relaxed">
                  We connect extensively with most English and European football clubs and academies,
                  giving each player an ample opportunity of being scouted into Premiership clubs
                  around the world. British AUC SPORT is proud to be a member of PFSA &mdash; the
                  Professional Football Scouts Association United Kingdom.
                </p>
              </div>
            </div>
          </div>
        </RevealWrapper>

        <div className="h-16 md:h-20" />

        <RevealWrapper type="reveal-scale" delay={150}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-w-0">
            {/* Left: Info column */}
            <div className="flex flex-col justify-center border border-white/10 p-8 min-w-0">
              <div className="mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7V12C3 17.25 7.05 22.05 12 23C16.95 22.05 21 17.25 21 12V7L12 2Z" fill="#dc2626" fillOpacity="0.3" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Our Mission</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                To discover, develop, and nurture young football talent worldwide,
                providing a clear pathway to professional and semi-professional
                football while ensuring access to quality education.
              </p>
              <div className="mt-6 pt-5 border-t border-white/10">
                <span className="text-xs font-medium text-white/50 tracking-[0.1em] uppercase">
                  PFSA Member
                </span>
              </div>
            </div>

            {/* Right: Carousel (2 cols) */}
            <div className="lg:col-span-2 relative overflow-hidden min-w-0 h-[400px]">
              {ABOUT_IMAGES.map((img, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: aboutSlide === i ? 1 : 0 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}

              <button
                onClick={() => setAboutSlide((aboutSlide - 1 + ABOUT_IMAGES.length) % ABOUT_IMAGES.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous image"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                onClick={() => setAboutSlide((aboutSlide + 1) % ABOUT_IMAGES.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
                aria-label="Next image"
              >
                <ArrowRight size={14} />
              </button>

              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                {ABOUT_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setAboutSlide(i)}
                    className={`transition-all duration-300 ${aboutSlide === i ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40'}`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

function AcademiesSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 ">
        <RevealWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-10 items-start mb-14">
            <div className='space-y-8'>

            <div className="flex items-center gap-3">
              <span className="w-0.5 h-5 bg-red-600" />
            
              <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                Academies
              </span>
               
            </div>
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">
                Football Academies
              </h2>
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                We train and mentor every potential young player to realize their dream of becoming a
                professional footballer through bespoke training programmes.
              </p>
            </div>
            </div>
          </div>
        </RevealWrapper>

        <div className="grid md:grid-cols-3 gap-5">
          {ACADEMIES.map((academy, i) => (
            <RevealWrapper key={academy.id} type="reveal-scale" delay={i * 100}>
              <Link href={academy.href} className="group block h-full">
                <div className="relative h-[380px] overflow-hidden">
                  <Image
                    src={academy.image}
                    alt={academy.alt}
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
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 ">
        <RevealWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start mb-14">
            <div className='space-y-8'>

            <div className="flex items-center gap-3">
              <span className="w-0.5 h-5 bg-red-600" />
              <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                Events
              </span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                Featured Programmes
              </h2>
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-5">
                Browse our upcoming events and training programmes designed to take your football career to the next level.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-900 transition-colors"
              >
                View All Events
                <ArrowRight size={13} />
              </Link>
            </div>
            </div>
          </div>
        </RevealWrapper>

        <div className="grid md:grid-cols-2 gap-5">
          {EVENTS_DATA.map((event, i) => (
            <RevealWrapper key={event.id} type="reveal-scale" delay={i * 150}>
              <Link href={event.href} className="group block h-full">
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600/90 text-white text-[11px] font-medium px-3 py-1">
                      {event.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="flex items-center gap-2 text-white/50 text-xs mb-2.5">
                      <Calendar size={13} className="text-red-400" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1.5 leading-snug">{event.name}</h3>
                    <p className="text-white/60 text-sm mb-3 line-clamp-2 leading-relaxed">{event.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-white/50 group-hover:text-white/80 transition-colors">
                      Learn More
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = TESTIMONIALS[active];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start mb-14">
            <div className='space-y-8'>
            <div className="flex items-center gap-3">
              <span className="w-0.5 h-5 bg-red-600" />
              <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                Testimonials
              </span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                Success Stories
              </h2>
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                Hear from athletes who have trained with British AUC Sport and taken their football career to the next level.
              </p>
            </div>
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper type="reveal-scale" delay={150}>
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-white border border-gray-100 px-8 md:px-14 py-12 md:py-16">
              <div className="absolute top-6 left-8 md:top-8 md:left-10 text-gray-100 select-none pointer-events-none leading-none">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8 14.4L10.6 16.8C9.2 16.8 8.1 16.4 7.3 15.6C6.5 14.8 6.1 13.6 6.1 12V8.4H10.2V14.4H11.8ZM18 14.4L16.8 16.8C15.4 16.8 14.3 16.4 13.5 15.6C12.7 14.8 12.3 13.6 12.3 12V8.4H16.4V14.4H18Z"/>
                </svg>
              </div>

              <blockquote className="text-base md:text-lg text-gray-500 leading-relaxed mb-8 relative z-10">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative w-11 h-11 overflow-hidden border border-gray-200">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{current.name}</p>
                  <p className="text-xs text-gray-400">{current.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-6">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`transition-all duration-300 ${active === index ? 'w-5 h-1 bg-red-400' : 'w-1.5 h-1.5 bg-gray-300'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-700 to-red-600">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <RevealWrapper>
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug mb-4">
            Ready to Take Your Game to the Next Level?
          </h2>
          <p className="text-sm md:text-[15px] text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
            Join our upcoming events and start your journey toward a professional football career.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 bg-white text-red-700 text-sm font-medium px-6 py-3 hover:bg-gray-100 transition-colors"
            >
              Explore Events
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-medium px-6 py-3 hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <AboutSection />
      <AcademiesSection />
      <EventsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
