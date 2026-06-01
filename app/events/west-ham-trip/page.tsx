import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Clock, User, Mail } from 'lucide-react';

export default function WestHamTripPage() {
  return (
    <div className="pt-16">
      {/* Hero Section with Blue Accent */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000"
            alt="West Ham United Academy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-0.5 h-5 bg-red-600"></div>
              <span className="text-xs font-medium text-white/60 tracking-[0.15em] uppercase">Premium Experience</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">WEST HAM UNITED FOOTBALL ACADEMY SUMMER TRIP 2025</h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed">LONDON FOOTBALL SUMMER TRIP 2025</p>
          </div>
        </div>
      </section>

      {/* Main Content with Blue Accents */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Information */}
            <div className="md:col-span-2 space-y-8">
              <div>
<div className="inline-block mb-2">
  <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Event Details</span>
</div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">PRO CLUB FOOTBALL EXPERIENCE</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Enjoy the football experience of a lifetime with Pro Club Experience! Train at West Ham United Academy and experience the professional training methods and philosophy that have made elite players worldwide.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">DEVELOPMENT PROGRAMME</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Immerse yourself in a professional football environment with like-minded football enthusiasts and enhance your technical and match-play skills under the guidance of the Pro Coaching team. At the same time as participating in rewarding training sessions, it is an opportunity to showcase your skills through the game. Coaching sessions aim to develop the players&apos; football skills, such as agility, positioning, ball control, passing and moving, formations and tactics, and the ability to attack and defend.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  You will receive football training in an academy system widely recognized as the best in the UK. You will have the opportunity to experience football training delivered by a leading Premiership club and experience what it takes to train in a professional football environment.
                </p>
              </div>

              <div className="border border-gray-100 p-8">
                <h2 className="text-base font-semibold text-gray-900 mb-3">PROGRAMME STRUCTURE</h2>
                <ul className="space-y-3 text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Design for the players who are at a standard level and/or are aiming to break-into the high-performance level.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>By immersing players in a pro-club environment, it aims to help players to develop and improve techniques in all areas, including technical, physical, and psychological aspects the game.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>In Addition to the use of the latest video-analysis technology and training techniques, Participants will have the opportunity to participate in our Pro-Experience seminars, delivered by West Ham experts and covering areas including Scouting/Player identification, Nutrition and Physical Conditioning and also specialist areas.</span>
                  </li>
                </ul>
              </div>

              <div className="border border-gray-100 p-8">
                <h2 className="text-base font-semibold text-gray-900 mb-3">ENGLISH LANGUAGE TEACHING</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  English Program plus Football: 15 hours of football training plus 12 hours of English classes per week. Our Program is accredited by the British Council to guarantee a high quality of service in English classes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">PROGRAMME SCHEDULE</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead className="bg-red-600 text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">DATE</th>
                        <th className="py-3 px-4 text-left">ACTIVITY</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium">Tuesday, 29 July, 2025</td>
                        <td className="py-3 px-4">Arrival to London/England</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4 font-medium">Wednesday, 30th July, 2025</td>
                        <td className="py-3 px-4">Football Training/English Lessons</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium">Thursday, 31st July, 2025</td>
                        <td className="py-3 px-4">Football Training/Leadership lessons</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4 font-medium">Friday, 1st August, 2025</td>
                        <td className="py-3 px-4">Football Training/English Lessons</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium">Saturday, 2nd August, 2025</td>
                        <td className="py-3 px-4">Football Training/Leadership lessons</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4 font-medium">Sunday, 3rd August, 2025</td>
                        <td className="py-3 px-4">Football Training/Tournament</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Monday, 4th August, 2025</td>
                        <td className="py-3 px-4">Return Home</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-gray-100 p-8">
                <h2 className="text-base font-semibold text-gray-900 mb-3">PROGRAMME INCLUDES</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3 text-sm md:text-[15px] text-gray-500 leading-relaxed">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>5-day Football Training at West Ham United Foundation Training Complex</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>5 x Professional Coaching Sessions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>12-hour English classes accredited by the British Council</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>West Ham United Foundation 2 training kits</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>7 days residential accommodation (6 nights), en-suite</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>3 meals per day</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Dedicated bus service as per itinerary</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Free supervised internet access</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-sm md:text-[15px] text-gray-500 leading-relaxed">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Half-day at West Ham United stadium</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Player report feedback</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Seminars and workshops</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Airport transfers</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>All trips and activities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                      <span>Personal development plan</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                      <span>Medical insurance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                      <span>West Ham United Foundation certificates</span>
                  </li>
                </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">WEST HAM UNITED ACADEMY</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  As a leading team within the UK Premier League—the most competitive league in the world—West Ham United Academy applies the same standards to all its players. Our elite high-performance approach integrates the latest sports technology advances with Premier League training techniques to provide an intensive training programme that will test and optimize our players&apos; performance. The technical staff coaches and members are experienced professionals from West Ham United Foundation with the highest official UEFA certifications and support all West Ham United Foundation youth players.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  The West Ham United methodology utilizes the same principles and practices that have made West Ham United a force in the UK Premier League and recognized as &apos;The Academy of Football&apos;. Incorporating the principles of England Soccer DNA, It is designed to develop all-round players capable of playing at the highest professional levels.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">Location</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  West Ham United Academy<br />
                  Chadwell Heath Training Ground<br />
                  London, UK
                </p>
                <div className="relative h-[300px] overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.9058322126277!2d0.1367888!3d51.5529296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a68d8b889981%3A0x7c8b5695cb90475c!2sWest%20Ham%20United%20Training%20Ground!5e0!3m2!1sen!2suk!4v1648226424565!5m2!1sen!2suk"
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
              <div className="border border-gray-100 p-8 sticky top-24">
                <h3 className="text-base font-semibold mb-6 text-gray-900">Trip Details</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Cost</p>
                      <p className="text-lg font-semibold text-red-600">£2,100</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Dates</p>
                      <p>29 July - 4 August 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Age Group</p>
                      <p>13-17 years</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Contact</p>
                      <a href="mailto:collins@britishauc.com" className="text-red-600 hover:underline">
                        collins@britishauc.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Deadline</p>
                      <p>25th of April, 2025</p>
                </div>
                  </div>
                </div>
                  <Link href="/events/west-ham-trip/register" className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 inline-block text-center">
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
