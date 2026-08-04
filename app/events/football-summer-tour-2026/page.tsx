import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, Globe, Mail, Phone, Dumbbell, Video, Award, Shield, UtensilsCrossed, Building, BookOpen } from 'lucide-react';

export default function FootballSummerTour2026Page() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/preseasoncamphero.jpg"
            alt="Football Summer Tour 2026"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-0.5 h-5 bg-red-600" />
              <span className="text-xs font-medium text-white/60 tracking-[0.15em] uppercase">5-Day Summer Tour</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">FOOTBALL SUMMER TOUR 2026<br />UNITED KINGDOM</h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed">23rd – 28th August 2026 &middot; Liverpool, UK</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Information */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <div className="inline-block mb-2">
                  <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Global Squad &middot; 20+ Countries</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">ELITE SUMMER FOOTBALL EXPERIENCE</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  Join our 5-day Football Summer Tour 2026 in the United Kingdom, based in the iconic city of Liverpool. Train, compete, and connect with players from over 20 countries in a world-class football environment.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  This summer tour combines high-performance football training with cultural visits and guest speaker sessions, offering a complete football experience both on and off the pitch.
                </p>
              </div>

              <div className="bg-white p-8 border border-gray-100">
                <h2 className="text-base font-semibold text-gray-900 mb-3">PROGRAMME INCLUDES</h2>
                <ul className="space-y-3 text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <Shield size="15" className="text-red-400 shrink-0 mt-0.5" />
                    <span>5 days of elite football training (2 sessions per day)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Dumbbell size="15" className="text-red-400 shrink-0 mt-0.5" />
                    <span>Technical, tactical &amp; physical sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users size="15" className="text-red-400 shrink-0 mt-0.5" />
                    <span>Pre-season friendly matches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Video size="15" className="text-red-400 shrink-0 mt-0.5" />
                    <span>Game analysis &amp; video review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award size="15" className="text-red-400 shrink-0 mt-0.5" />
                    <span>Strength &amp; Conditioning (S&amp;C) sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen size="15" className="text-red-400 shrink-0 mt-0.5" />
                    <span>Fitness testing &amp; player assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe size="15" className="text-red-400 shrink-0 mt-0.5" />
                    <span>Cultural visits in Liverpool</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users size="15" className="text-red-400 shrink-0 mt-0.5" />
                    <span>Guest speaker sessions with industry professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield size="15" className="text-red-400 shrink-0 mt-0.5" />
                    <span>Full academy training kit</span>
                  </li>
                </ul>

                <h3 className="text-sm font-semibold mt-8 mb-2 text-gray-900">ACCOMMODATION</h3>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Stay at the <strong>Penny Lane Hotel, Liverpool</strong> with full board (3 meals per day) included throughout the tour.
                </p>

                <h3 className="text-sm font-semibold mt-8 mb-2 text-gray-900">COST: &pound;1,250</h3>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Full-board accommodation, all training sessions, fixtures, cultural visits, and academy kit included.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-gray-900 mb-3">GLOBAL SQUAD EXPERIENCE</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  This summer tour brings together aspiring footballers from over 20 countries, creating a truly international environment. Players train, compete, and build friendships with peers from around the world, developing both football skills and cultural awareness.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  All sessions are led by qualified UEFA-licensed coaches, ensuring professional-level coaching and player development throughout the programme.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-gray-900 mb-3">ELIGIBILITY</h2>
                <ul className="space-y-2 text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  <li><strong>Age Group:</strong> 14 &ndash; 20 years</li>
                  <li><strong>Minimum Students:</strong> 10 (to run the programme)</li>
                  <li><strong>Squad Size:</strong> Global intake from 20+ countries</li>
                </ul>
              </div>

              <div>
                <h2 className="text-base font-semibold text-gray-900 mb-3">REGISTRATION</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  Register your interest and secure your place on the Football Summer Tour 2026.
                </p>
                <Link href="/events/football-summer-tour-2026/register" className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 inline-block text-center">
                  Register Now
                </Link>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mt-4">
                  For inquiries, email <a href="mailto:collins@britishauc.com" className="text-red-600 font-semibold hover:underline">collins@britishauc.com</a> or call/whatsapp <a href="tel:+447840782759" className="text-red-600 font-semibold hover:underline">+447840782759</a>
                </p>
              </div>
            </div>

            {/* Event Details Panel */}
            <div className="md:col-span-1">
              <div className="bg-white p-8 sticky top-24 border border-gray-100">
                <h3 className="text-base font-semibold mb-6 text-gray-900">Event Details</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Cost:</span>
                    <span className="text-lg font-semibold text-red-600">&pound;1,250</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Location:</span>
                    <span>Liverpool, UK</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Date:</span>
                    <span>23rd &ndash; 28th Aug 2026</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Duration:</span>
                    <span>5 Days</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Age Range:</span>
                    <span>14 &ndash; 20</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Accommodation:</span>
                    <span>Penny Lane Hotel, Liverpool</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Meals:</span>
                    <span>Full Board (3/day)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Contact:</span>
                    <a href="mailto:collins@britishauc.com" className="text-red-600 hover:underline text-xs">collins@britishauc.com</a>
                  </div>
                </div>
                <Link href="/events/football-summer-tour-2026/register" className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 inline-block text-center">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
