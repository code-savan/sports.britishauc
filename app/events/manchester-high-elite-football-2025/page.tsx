import Image from 'next/image';
import Link from 'next/link';
import { getDatesDisplay } from '@/lib/utils';

const { rangeText, deadlineText } = getDatesDisplay();

export default function ManchesterHighEliteFootball2025Page() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/manchestherfootball.jpg"
            alt="Manchester High Elite Football Programme"
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
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">HIGH ELITE FOOTBALL PROGRAMME<br />MANCHESTER, UK</h1>
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
                  <li>2 Weeks Pro Football Training Experience</li>
                  <li>10 x Professional Coaching Sessions</li>
                  <li>Technical/tactical/physical sessions</li>
                  <li>Individual player development plan</li>
                  <li>Specialized Strength & Conditioning sessions</li>
                  <li>Football Training Kits</li>
                  <li>UK/Europe Football trial opportunity</li>
                  <li>Exposure to our club network</li>
                  <li>Pre season friendlies</li>
                  <li>Player report feedback</li>
                  <li>Game analysis</li>
                  <li>Fitness testing</li>
                  <li>Guest speaker</li>
                </ul>
                <h3 className="text-sm font-semibold mt-8 mb-2 text-gray-900">NOT INCLUDED</h3>
                <ul className="space-y-2 text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  <li>Accommodation</li>
                  <li>Flights</li>
                  <li>Visas</li>
                </ul>
                <h3 className="text-sm font-semibold mt-8 mb-2 text-gray-900">COST: £1,240</h3>
                <p className="text-gray-600 mt-2">
                  <strong>Accommodation Option:</strong> British AUC Sport will source accommodation on behalf of the player—this is organised within a variety of options. This service is offered on a request basis only. Accommodation may be at a host family, private house, hotel, B&B, or private room within an occupied house, always close to training or on a transport route.
                </p>
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
                <h2 className="text-base font-semibold text-gray-900 mb-3">Delivering partner: Alex Armstrong</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  Our Manchester High Elite Football Development programme is delivered under the supervision of a highly qualified FA certified coach, Alex Armstrong. Alex was the former Assistant Coach of Southampton FC, Wolves FC, Cardiff FC, and Sheffield Wed FC. With over 600 matches of experience as an Assistant Manager and Coach, Alex brings a wealth of expertise in player development and football management. His leadership includes:
                </p>
                <ul className="space-y-2 text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  <li>Spearheading the Full-Time International Programme in 2025, utilizing his global experience as an Academy Lead and Director of Football.</li>
                  <li>Founding Active4Blood and serving as CEO of Active4Sport International, integrating innovative methodologies into the ETP framework.</li>
                  <li>Aligning with CREST SMG, EIM, and the ETP to enhance players&apos; physical conditioning and overall performance, ensuring athletes consistently operate at their peak.</li>
                </ul>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  Alex&apos;s dedication to nurturing talent has positioned the ETP as a premier platform for aspiring players worldwide. His vision, combined with his extensive experience, provides participants with the tools and guidance needed for long-term success in the football industry.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-gray-900 mb-3">REGISTRATION</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  Kindly register and pay with the link below:
                </p>
                <Link href="/events/manchester-high-elite-football-2025/register" className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 inline-block text-center">
                  Register and Pay
                </Link>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mt-4">
                  More information, call/whatsapp <a href="tel:+447840782759" className="text-red-600 font-semibold hover:underline">+447840782759</a>
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
                    <span className="text-lg font-semibold text-red-600">£1,240</span>
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
                    <span className="text-gray-600 font-medium mr-2">Registration Deadline:</span>
                    <span>{deadlineText}</span>
                  </div>
                    <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Spots Left:</span>
                    <span className="text-red-600 font-semibold">3 spots</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Contact:</span>
                    <a href="tel:+447840782759" className="text-red-600 hover:underline">+447840782759</a>
                  </div>
                </div>
                <Link href="/events/manchester-high-elite-football-2025/register" className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 inline-block text-center">
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
