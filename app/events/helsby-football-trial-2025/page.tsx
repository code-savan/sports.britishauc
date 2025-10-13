import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HelsbyFootballTrialPage() {
  return (
    <div className="pt-16">
      {/* Hero Section with Blue Accent */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/TR2.jpg"
            alt="Helsby Football Trial"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-red-900/30" />
        </div>
        <div className="relative z-10 px-4 md:w-[90%] mx-auto sm:px-6 lg:px-8 text-white">
          <div className="inline-block mb-4">
            <span className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">Limited Spots</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">BRITISH AUC SPORT HELSBY FOOTBALL TRIAL 2025</h1>
          <p className="text-xl md:text-2xl text-white">UK PROFESSIONAL CLUB TRIAL EXPERIENCE</p>
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
                  During this event, you will have the chance to demonstrate your talents and showcase your skills in the presence of clubs and academy scouts/agents. The event is powered by British AUC Sports, an organization dedicated to connecting young talents to football and sports opportunities worldwide.
                </p>
                <p className="text-lg text-gray-600">
                  There will be agents from Helsby FC, Atherton Collieries FC, Semi-Pro clubs and Academies in attendance to scout players. This is your opportunity to gain recognition and potentially secure opportunities with football clubs and academies across the UK.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">EVENT HIGHLIGHTS</h2>
                <ul className="space-y-3 text-lg text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Showcase your skills in front of professional scouts and agents</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Professional coaching and evaluation from experienced coaches</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Scouts from Helsby FC, Atherton Collieries FC, and Semi-Pro clubs in attendance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Competitive match play to demonstrate your abilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Individual player assessment and personalized feedback</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Opportunity to be identified by attending scouts and academy representatives</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">HOST</h2>
                <p className="text-lg text-gray-600 mb-4">
                  <strong>Alex Armstrong</strong> - Former Southampton FC, Wolves FC, Cardiff FC, and Sheffield Wednesday Assistant Coach. With over 600 matches of experience as an Assistant Manager and Coach, Alex brings a wealth of expertise in player development and football management.
                </p>
                <h3 className="text-xl font-bold mb-2 text-gray-900">ASSISTANT HOST</h3>
                <p className="text-lg text-gray-600">
                  <strong>Chris Honor</strong> - Director of Football Development at Helsby FC. Experienced football scout with football experience at Leicester City FC, Blackpool FC, Cambridge United and Leeds Rhinos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">LOCATION</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Helsby FC Training Pitch<br />
                  Helsby, United Kingdom
                </p>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2386.235041840714!2d-2.7802107231239357!3d53.26740817226642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ae7dde8779857%3A0x4b7de01ea06bf904!2sHelsby%20Football%20Club!5e0!3m2!1sen!2sus!4v1760357533051!5m2!1sen!2sus"
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
                      <p className="text-2xl font-bold text-primary">£98</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Date</p>
                      <p>30th November, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Time</p>
                      <p>12:00 PM - 3:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Age Group</p>
                      <p>16 - 21</p>
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
                  <Link href="/events/football-trial-2025/register?event=helsby2025">
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
