import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TrialRegistration from '@/components/TrialRegistration';

export default function SpainTrialPage() {
  return (
    <div className="pt-16">
      {/* Hero Section with Orange/Yellow Accent */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?q=80&w=2000"
            alt="Spain Football Trial"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-yellow-900/30" />
        </div>
        <div className="relative z-10 px-4 md:w-[90%] mx-auto sm:px-6 lg:px-8 text-white">
          <div className="inline-block mb-4">
            <span className="bg-yellow-600 text-white text-sm font-medium px-3 py-1 rounded-full">Limited Spots</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">SPAIN FOOTBALL TRIAL 2025</h1>
          <p className="text-xl md:text-2xl text-white">EUROPEAN PROFESSIONAL CLUB TRIAL EXPERIENCE</p>
          <div className="mt-4 inline-block">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full">Hosted with CF Intercity International Academy</span>
          </div>
        </div>
      </section>

      {/* Main Content with Orange/Yellow Accents */}
      <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Information */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <div className="inline-block mb-2">
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Event Details</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">PROFESSIONAL SCOUTING TRIAL</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Limited spots are available for the Spain Football Trial 2025—a unique opportunity for aspiring players to showcase their skills and talents to professional football scouts. This event provides a pathway for players to gain recognition and potentially secure opportunities with football clubs and academies across Spain, Europe, and beyond.
                </p>
                <p className="text-lg text-gray-600">
                  Participants will have the chance to be scouted by professional clubs, including teams in La Liga, Segunda División, and other competitive tiers of Spanish and European football. The trial offers invaluable exposure within one of the world&apos;s most technical football systems, enabling players to take the next step in their football careers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">TRIAL PROGRAM</h2>
                <ul className="space-y-3 text-lg text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Professional coaching and evaluation from UEFA licensed coaches</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Competitive match play to showcase skills in game situations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Technical training sessions focused on key skill development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Individual player assessment and personalized feedback</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Opportunity to be identified by attending scouts and coaches</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Video analysis sessions for tactical understanding</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">CF INTERCITY: INTERNATIONAL ACADEMY</h2>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  The Spain trial is hosted in partnership with CF Intercity International Academy, offering a unique &quot;Different Way&quot; approach to football development. The academy brings its methodology and work model to players worldwide through training, clinics, tryouts, and personalized programs.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Club History</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 2017 with the purchase of GCD Sant Joan, CF Intercity has experienced remarkable growth, advancing from Regional leagues to the RFEF First Division (third tier in Spanish football) in just five years. In 2021, the club made history by becoming the first Spanish football club to go public on the stock exchange, marking the beginning of an innovative and disruptive project in football.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Academy Training Structure</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Morning Sessions</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-600 mr-2"></span>
                        2 High-performance technical/tactical trainings
                      </li>
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-600 mr-2"></span>
                        1 Beach football training for technical skills
                      </li>
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-600 mr-2"></span>
                        2 Functional trainings (strength & prevention)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Evening Sessions</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-600 mr-2"></span>
                        2 Video analysis sessions weekly
                      </li>
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-600 mr-2"></span>
                        3 Club training sessions with academy teams
                      </li>
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-600 mr-2"></span>
                        Potential integration with CF Intercity teams
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Club Values</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Responsibility</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Discipline</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Honesty</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Perseverance</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Commitment</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Personal improvement</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">HOST</h2>
                <p className="text-lg text-gray-600 mb-4">
                  The trial is led by Alex Armstrong of Active4Sport International in partnership with British AUC Sports and CF Intercity. Alex Armstrong brings experience as an Assistant Coach at Southampton FC, Wolves FC, Cardiff FC, and Sheffield Wed FC. With over 600 matches of experience as an Assistant Manager and Coach, Alex offers a wealth of expertise in player development and football management.
                </p>
                <p className="text-lg text-gray-600">
                  CF Intercity provides local expertise within the Spanish football system, with connections to clubs across all tiers of Spanish football. Their extensive youth academy system hosts over 400 children across various age groups, offering genuine pathways for talented players.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">LOCATION</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Campo Municipal Antonio Solana<br />
                  C. Barítono Paco Latorre, 6<br />
                  03015 Alicante, Valencia, Spain
                </p>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.630021276837!2d-0.5016697!3d38.3725247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6236b21f6be3d7%3A0x7c8d1fc8c7c5c0a0!2sCampo%20Municipal%20Antonio%20Solana!5e0!3m2!1sen!2ses!4v1648226424565!5m2!1sen!2ses"
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
              <div className="bg-white p-8 rounded-xl shadow-md sticky top-24 border-t-4 border-yellow-600">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">REGISTRATION DETAILS</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Cost</p>
                      <p className="text-2xl font-bold text-yellow-600">€78</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Date</p>
                      <p>July 19, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Age Group</p>
                      <p>14-21 years</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Registration Deadline</p>
                      <p>15th July 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Contact</p>
                      <a href="mailto:collins@britishauc.com" className="text-yellow-600 hover:underline">
                        collins@britishauc.com
                      </a>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Extend Your Experience</h4>
                    <p className="text-gray-600 mb-2">
                      Players identified during the trial may be invited to join CF Intercity&apos;s extended programs:
                    </p>
                    <ul className="space-y-1 text-gray-600 mb-4">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Extended training programs (4+ months)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Team integration opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-blue-600 text-white"
                  size="lg"
                >
                  <Link href="/events/football-trial-2025/register?event=spain">
                    Register Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <TrialRegistration
        eventTitle="Spain Football Trial 2025"
        heroImage="/images/spain-trial.jpg"
        accentColor="orange"
        successRedirectPath="/events/football-trial-2025/trial-reg-success"
        paymentLink="https://flutterwave.com/pay/ahdplredysps"
      /> */}
    </div>
  );
}
