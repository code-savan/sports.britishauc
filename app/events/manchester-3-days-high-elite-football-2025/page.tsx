import Image from 'next/image';
import Link from 'next/link';
import { getDatesDisplay } from '@/lib/utils';

const { rangeText } = getDatesDisplay();

export default function ManchesterThreeDaysHighEliteFootball2025Page() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/manchestherfootball.jpg"
            alt="3-Day High Elite Football Development Programme"
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
              <span className="text-xs font-medium text-white/60 tracking-[0.15em] uppercase">Limited Spots</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">3-DAY HIGH ELITE FOOTBALL PROGRAMME<br />MANCHESTER, UK</h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed">{rangeText}</p>
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
                  <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Pro Club Football Experience</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">PRO CLUB FOOTBALL EXPERIENCE!</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  Enjoy the football experience of a lifetime with Pro Club Experience! Train at our Manchester Football Academy and experience the professional training methods and philosophy that have made elite players worldwide.
                </p>
              </div>

              <div className="bg-white p-8 border border-gray-100">
                <h2 className="text-base font-semibold text-gray-900 mb-3">PROGRAMME INCLUDE</h2>
                <ul className="space-y-3 text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  <li>3 Days High Elite Football Development Programme</li>
                  <li>5 x Professional Coaching Session</li>
                  <li>Technical/Tactical/Physical Session</li>
                  <li>Individual Player Development Plan</li>
                  <li>Specialized Strength & Conditioning Session</li>
                  <li>UK Football Trial Opportunity</li>
                  <li>Exposure To Club Network</li>
                  <li>Player Report Feedback</li>
                  <li>Game Analysis</li>
                  <li>Fitness Testing</li>
                  <li>Guest Speaker</li>
                </ul>
                <h3 className="text-sm font-semibold mt-8 mb-2 text-gray-900">COST: £294</h3>
              </div>

              <div>
                <h2 className="text-base font-semibold text-gray-900 mb-3">BRITISH AUC SPORT FOOTBALL ACADEMY</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  British AUC SPORT Football Academy is a UK-based football academy that trains and mentors young talents to become professional footballers through their high-level performance football training programmes. The aim of this is to help players develop their football skills and expose them to professional or semi-professional football opportunities.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  The academy has extensive connections with most English and European football clubs and academies, providing each player with ample opportunities to be scouted by Premiership clubs in the UK and around the world.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  British AUC SPORT is proud to be a member of PFSA (Professional Football Scouts Association United Kingdom), an umbrella body for all professional scouts worldwide. Therefore, prospective players are exposed to scouts around the world. Recently, Man United has contracted the body to help recruit for its first team.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-gray-900 mb-3">REGISTRATION</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  Kindly register and pay with the link below:
                </p>
                <Link href="/events/manchester-3-days-high-elite-football-2025/register" className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 inline-block text-center">
                  Register and Pay
                </Link>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mt-4">
                  More information, call/whatsapp <a href="tel:+447840782759" className="text-red-600 font-semibold hover:underline">+447840782759</a>
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-gray-900 mb-3">CONTACT</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-1">
                  <a href="tel:+447840782759" className="text-red-600 font-semibold hover:underline">+447840782759</a>
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  <a href="mailto:collins@britishauc.com" className="text-red-600 font-semibold hover:underline">collins@britishauc.com</a>
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
                    <span className="text-lg font-semibold text-red-600">£294</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Location:</span>
                    <span>Manchester, UK</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Date:</span>
                    <span>{rangeText}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Spots:</span>
                    <span className="text-red-600 font-semibold">Limited spots available</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Contact:</span>
                    <a href="tel:+447840782759" className="text-red-600 hover:underline">+447840782759</a>
                  </div>
                </div>
                <Link href="/events/manchester-3-days-high-elite-football-2025/register" className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 inline-block text-center">
                  Register and Pay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
