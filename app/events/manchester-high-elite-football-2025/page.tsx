import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ManchesterHighEliteFootball2025Page() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/manchestherfootball.jpg"
            alt="Manchester High Elite Football Programme"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-orange-900/30" />
        </div>
        <div className="relative z-10 md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-block mb-4">
            <span className="bg-orange-600 text-white text-sm font-medium px-3 py-1 rounded-full">Limited Spots</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">HIGH ELITE FOOTBALL PROGRAMME<br />MANCHESTER, UK</h1>
          <p className="text-xl md:text-2xl text-white uppercase">29th October - 5th of November 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Information */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <div className="inline-block mb-2">
                  <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">Pro Club Football Experience</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">PRO CLUB FOOTBALL EXPERIENCE!</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Enjoy the football experience of a lifetime with Pro Club Experience! Train at our Manchester Football Academy and experience the professional training methods and philosophy that have made elite players worldwide.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-orange-600">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">PROGRAMME INCLUDE</h2>
                <ul className="space-y-3 text-lg text-gray-600">
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
                <h3 className="text-xl font-bold mt-8 mb-2 text-gray-900">NOT INCLUDED</h3>
                <ul className="space-y-2 text-lg text-gray-600">
                  <li>Accommodation</li>
                  <li>Flights</li>
                  <li>Visas</li>
                </ul>
                <h3 className="text-xl font-bold mt-8 mb-2 text-gray-900">COST: £1,240</h3>
                <p className="text-gray-600 mt-2">
                  <strong>Accommodation Option:</strong> British AUC Sport will source accommodation on behalf of the player—this is organised within a variety of options. This service is offered on a request basis only. Accommodation may be at a host family, private house, hotel, B&B, or private room within an occupied house, always close to training or on a transport route.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">BRITISH AUC SPORT FOOTBALL ACADEMY</h2>
                <p className="text-lg text-gray-600 mb-4">
                  British AUC SPORT Football Academy is a UK-based football academy that trains and mentors young talents to become professional footballers through their high-level performance football training programmes. The aim of this is to help players develop their football skills and expose them to professional or semi-professional football opportunities.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  The academy has extensive connections with most English and European football clubs and academies, providing each player with ample opportunities to be scouted by Premiership clubs in the UK and around the world.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  British AUC SPORT is proud to be a member of PFSA (Professional Football Scouts Association United Kingdom), an umbrella body for all professional scouts worldwide. Therefore, prospective players are exposed to scouts around the world. Recently, Man United has contracted the body to help recruit for its first team.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Delivering partner: Alex Armstrong</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Our Manchester High Elite Football Development programme is delivered under the supervision of a highly qualified FA certified coach, Alex Armstrong. Alex was the former Assistant Coach of Southampton FC, Wolves FC, Cardiff FC, and Sheffield Wed FC. With over 600 matches of experience as an Assistant Manager and Coach, Alex brings a wealth of expertise in player development and football management. His leadership includes:
                </p>
                <ul className="space-y-2 text-lg text-gray-600 mb-4">
                  <li>Spearheading the Full-Time International Programme in 2025, utilizing his global experience as an Academy Lead and Director of Football.</li>
                  <li>Founding Active4Blood and serving as CEO of Active4Sport International, integrating innovative methodologies into the ETP framework.</li>
                  <li>Aligning with CREST SMG, EIM, and the ETP to enhance players&apos; physical conditioning and overall performance, ensuring athletes consistently operate at their peak.</li>
                </ul>
                <p className="text-lg text-gray-600 mb-4">
                  Alex&apos;s dedication to nurturing talent has positioned the ETP as a premier platform for aspiring players worldwide. His vision, combined with his extensive experience, provides participants with the tools and guidance needed for long-term success in the football industry.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">REGISTRATION</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Kindly register and pay with the link below:
                </p>
                <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow-md">
                  <Link href="/events/manchester-high-elite-football-2025/register">
                    Register and Pay
                  </Link>
                </Button>
                <p className="text-lg text-gray-600 mt-4">
                  More information, call/whatsapp <a href="tel:+447840782759" className="text-orange-600 font-semibold hover:underline">+447840782759</a>
                </p>
              </div>
            </div>

            {/* Event Details Panel */}
            <div className="md:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-md sticky top-24 border-t-4 border-orange-600">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Event Details</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Cost:</span>
                    <span className="text-2xl font-bold text-orange-600">£1,240</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Location:</span>
                    <span>Manchester, UK</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Date:</span>
                    <span>29th October - 5th of November 2025</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Registration Deadline:</span>
                    <span>25th October, 2025</span>
                  </div>
                    <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Spots Left:</span>
                    <span className="text-red-600 font-semibold">3 spots</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Contact:</span>
                    <a href="tel:+447840782759" className="text-orange-600 hover:underline">+447840782759</a>
                  </div>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white" size="lg">
                  <Link href="/events/manchester-high-elite-football-2025/register">
                    Register and Pay
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
