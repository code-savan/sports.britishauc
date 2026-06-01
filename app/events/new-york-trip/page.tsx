import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Clock, User, Mail, Check, X } from 'lucide-react';

export default function NewYorkTripPage() {
  return (
    <div className="pt-16">
      {/* Hero Section with New York themed color (Blue/Green accent) */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2000"
            alt="New York Summer Trip"
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
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">NEW YORK SUMMER TRIP 2025</h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed">LEADERS OF TOMORROW</p>
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
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">COURSE: LEADERS OF TOMORROW</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Today&apos;s students are the potential leaders of tomorrow, whether in business, science, sport, politics, or any other aspect of work or society.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Our comprehensive leadership program provides students with the skills, knowledge, and confidence to become effective leaders in their chosen fields. Through a combination of interactive workshops, project-based learning, and real-world case studies, participants will develop critical thinking, problem-solving, communication, and teamwork skills essential for future success.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">PROGRAM SCHEDULE</h2>
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
                        <td className="py-3 px-4 font-medium">Wednesday, 23rd July, 2025</td>
                        <td className="py-3 px-4">Arrival to New York/United States</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4 font-medium">Thursday, 24th July, 2025</td>
                        <td className="py-3 px-4">Leadership/Book-based lessons/Activities</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium">Friday, 25th July, 2025</td>
                        <td className="py-3 px-4">Leadership/Project-based learning/Games</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4 font-medium">Saturday, 26th July, 2025</td>
                        <td className="py-3 px-4">Leadership/Project-based learning/Excursions</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium">Sunday, 27th July, 2025</td>
                        <td className="py-3 px-4">Project-based learning/Activities & Excursions</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4 font-medium">Monday, 28th July, 2025</td>
                        <td className="py-3 px-4">Leadership/Book-based lessons/Activities</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium">Tuesday, 29th July, 2025</td>
                        <td className="py-3 px-4">Games/Activities/Excursions</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4 font-medium">Wednesday, 30th July, 2025</td>
                        <td className="py-3 px-4">Return Home</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-gray-100 p-8">
                <h2 className="text-base font-semibold text-gray-900 mb-3">WHAT&apos;S INCLUDED</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3 text-sm md:text-[15px] text-gray-500 leading-relaxed">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>20 hours of leadership lessons per week</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Project work connected to case studies</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Entrepreneurship workshop</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Full program of evening activities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Full board residential accommodation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Girls and boys are in separate accommodation areas</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Breakfast, lunch, and dinner are provided every day</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Full-day excursions every Tuesday + one additional full-day trip</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-sm md:text-[15px] text-gray-500 leading-relaxed">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>One extended half-day excursion (1st week)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Placement test</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Internet access</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>End-of-course certificate</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>24-hour staff supervision</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Weekly laundry service</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border border-gray-100 p-8">
                <h2 className="text-base font-semibold text-gray-900 mb-3">NOT INCLUDED</h2>
                <ul className="space-y-3 text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Flight</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Visas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Airport transfers</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-gray-100 p-8">
                  <h2 className="text-base font-semibold text-gray-900 mb-3">EXCURSIONS</h2>
                  <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">Typical attractions include:</p>
                  <ul className="space-y-2 text-sm md:text-[15px] text-gray-500 leading-relaxed">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-red-600 mr-2"></span>
                      The Statue of Liberty
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-red-600 mr-2"></span>
                      Central Park
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-red-600 mr-2"></span>
                      Times Square
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-red-600 mr-2"></span>
                      Empire State Building
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-red-600 mr-2"></span>
                      Metropolitan Museum of Art
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-red-600 mr-2"></span>
                      Greenwich Village and SOHO
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-red-600 mr-2"></span>
                      Museum of Natural History
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-red-600 mr-2"></span>
                      Brooklyn Bridge and Ground Zero
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-red-600 mr-2"></span>
                      Six Flags Great Adventure
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-red-600 mr-2"></span>
                      Top of the Rock
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-100 p-8">
                  <h2 className="text-base font-semibold text-gray-900 mb-3">ACTIVITIES</h2>
                  <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">Typical activities include:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">American football</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Arts and crafts</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Basketball</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Baseball</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Bingo</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Casino night</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Dance</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Disco</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Dodgeball</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Fashion show</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Games night</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Karaoke</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Mini-Olympics</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Movie night</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Quiz nights</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Soccer</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Table tennis</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Talent show</span>
                    <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Volleyball</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">LOCATION</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  New York City<br />
                  United States
                </p>
                <div className="relative h-[300px] overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1648226424565!5m2!1sen!2suk"
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
                      <p className="text-lg font-semibold text-red-600">$2,995</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Dates</p>
                      <p>23 July - 30 July 2025</p>
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
                      <p className="text-sm">+2348035933363, +447840782759</p>
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
                <Link href="/events/new-york-trip/register" className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 inline-block text-center">
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
