import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HighEliteFootballHungaryPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DS3.jpg" // Save the attached image as this file in the public folder
            alt="High Elite Football Development Programme Hungary"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-purple-900/30" />
        </div>
        <div className="relative z-10 md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-block mb-4">
            <span className="bg-purple-700 text-white text-sm font-medium px-3 py-1 rounded-full">Limited Spots</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">HIGH ELITE FOOTBALL DEVELOPMENT PROGRAMME<br />DEBRECEN, HUNGARY</h1>
          <p className="text-xl md:text-2xl text-white">8TH - 19TH SEPTEMBER, 2025</p>
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
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">Pro Club Football Experience</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">PRO CLUB FOOTBALL EXPERIENCE!</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Enjoy the football experience of a lifetime with Pro Club Experience! Train at our Debrecen Football Academy and experience the professional training methods and philosophy that have made elite players worldwide.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
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
                <h2 className="text-2xl font-bold mb-4 text-gray-900">REGISTRATION</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Kindly register and pay with the link below:
                </p>
                <Button asChild className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-3 rounded-full shadow-md">
                  <Link href="/events/high-elite-football-hungary/register">
                    Register Now
                  </Link>
                </Button>
                <p className="text-lg text-gray-600 mt-4">
                  More information, Call/WhatsApp <a href="tel:+447840782759" className="text-purple-700 font-semibold hover:underline">+447840782759</a>
                </p>
              </div>
            </div>

            {/* Event Details Panel */}
            <div className="md:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-md sticky top-24 border-t-4 border-purple-700">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Event Details</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Cost:</span>
                    <span className="text-2xl font-bold text-purple-700">$773</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Location:</span>
                    <span>Debrecen, Hungary</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Dates:</span>
                    <span>8th - 19th of September, 2025</span>
                  </div>
                  {/* <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Age Group:</span>
                    <span>14-24 years</span>
                  </div> */}
                   <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Registration Deadline:</span>
                    <span>1st September, 2025</span>
                  </div>
                    <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Spots Left:</span>
                    <span className="text-red-600 font-semibold">3 spots</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Contact:</span>
                    <a href="tel:+447840782759" className="text-purple-700 hover:underline">+447840782759</a>
                  </div>
                </div>
                <Button asChild className="w-full bg-purple-700 hover:bg-purple-800 text-white" size="lg">
                  <Link href="/events/high-elite-football-hungary/register">
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
