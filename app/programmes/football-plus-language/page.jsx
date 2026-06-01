import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FootballPlusLanguagePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/footballheroimage.jpeg"
            alt="Football Plus Language"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-0.5 h-5 bg-red-600" />
              <span className="text-xs font-medium text-white/60 tracking-[0.15em] uppercase">
                Football Plus Language
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
              Enhance Your Football Skills While Learning a New Language
            </h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed max-w-lg">
              Immerse yourself in a new culture and language while training at a professional football academy.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-medium px-5 py-2.5 hover:bg-red-700 transition-colors"
              >
                Contact Us
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start mb-14">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-0.5 h-5 bg-red-600 shrink-0" />
                <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                  Programme Overview
                </span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">
                  Football Training &amp; Language Learning Combined
                </h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  Our Football Plus Language programme offers a unique opportunity to combine professional football training with language learning in an immersive environment. Players train at our academies while taking language classes tailored to their proficiency level.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  This programme is ideal for international players who want to improve their English (or Spanish at our Alicante academy) while developing their football skills. Language classes are integrated into the weekly schedule, ensuring a balanced approach to both athletic and linguistic development.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-100 p-8">
              <div className="w-11 h-11 bg-red-50 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Language Immersion</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Daily language classes taught by qualified instructors, with practical application during training and daily activities.
              </p>
            </div>
            <div className="border border-gray-100 p-8">
              <div className="w-11 h-11 bg-red-50 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Professional Training</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Full access to our elite football training programme with FA/UEFA-qualified coaches and competitive matches.
              </p>
            </div>
            <div className="border border-gray-100 p-8">
              <div className="w-11 h-11 bg-red-50 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Cultural Experience</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Live and train in a new country, experiencing the local culture while building international friendships.
              </p>
            </div>
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
            Ready to Combine Football and Language Learning?
          </h2>
          <p className="text-sm md:text-[15px] text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Contact our team to learn more about our Football Plus Language programme and available academies.
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
