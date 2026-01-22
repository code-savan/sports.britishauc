import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ManchesterFootballTrial2026Page() {
  return (
    <div className="pt-16">
      {/* Hero Section with Blue Accent */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/TR1.jpg"
            alt="Manchester Football Trial 2026"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-blue-900/30" />
        </div>
        <div className="relative z-10 px-4 md:w-[90%] mx-auto sm:px-6 lg:px-8 text-white">
          <div className="inline-block mb-4">
            <span className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">Limited Spots</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">MANCHESTER FOOTBALL TRIAL 2026</h1>
          <p className="text-xl md:text-2xl text-white">SHOWCASE YOUR TALENT AND BE SCOUTED!</p>
        </div>
      </section>

      {/* Main Content with Blue Accents */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Information */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <div className="inline-block mb-2">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Event Details</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">PROFESSIONAL SCOUTING TRIAL</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Limited spots are available for the football trial 2026. A unique opportunity for aspiring players to showcase their skills and talents to professional football scouts.
                </p>
                <p className="text-lg text-gray-600">
                  This event provides a pathway for players to gain recognition and potentially secure opportunities with football clubs and academies across the UK, Europe and beyond.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">WHY ATTEND?</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Participants will have the chance to be scouted by the professional clubs including teams in the English Football League (EFL) and other competitive tiers of British and European football.
                </p>
                <p className="text-lg text-gray-600">
                  The trial offers invaluable exposure within one of the world&apos;s most prestigious football systems enabling players to take the next step in their football careers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">MEET THE HOST</h2>
                <p className="text-lg text-gray-600">
                  <strong>Chris Honor</strong>, Director of football development at Helsby FC. Experienced football scout. Football experience with Leicester City FC, Blackpool FC, Cambridge United and Leeds Rhinos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">VENUE</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Platt Lane (former Manchester City Training Ground)<br />
                  Yew Tree Road, Fallowfield<br />
                  Manchester, M14 7UU
                </p>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.7763553938397!2d-2.2238888839673766!3d53.44721998000456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb24164225e37%3A0x6c184a10f2a91a35!2sPlatt%20Lane%20Complex!5e0!3m2!1sen!2suk!4v1648226424565!5m2!1sen!2suk"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Registration Panel */}
            <div className="md:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-md sticky top-24 border-t-4 border-primary">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">REGISTRATION DETAILS</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Cost</p>
                      <p className="text-2xl font-bold text-primary">£65</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Date</p>
                      <p>21st February, 2026 (9am - 2pm)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Registration Deadline</p>
                      <p>February 16, 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Contact</p>
                      <a href="mailto:collins@britishauc.com" className="text-primary hover:underline">
                        collins@britishauc.com
                      </a>
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-red-500 text-white"
                  size="lg"
                >
                  <Link href="/events/football-trial-2025/register?event=manchester2026">
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
