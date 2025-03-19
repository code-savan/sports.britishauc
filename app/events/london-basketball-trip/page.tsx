'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Calendar, MapPin, Clock, User, Mail } from 'lucide-react';

export default function LondonBasketballTripPage() {
  const [showInterestMessage, setShowInterestMessage] = useState(false);

  const handleRegisterInterest = () => {
    setShowInterestMessage(true);
    setTimeout(() => {
      setShowInterestMessage(false);
    }, 3000);
  };

  return (
    <div className="pt-16">
      {/* Hero Section with Nike-themed color (Orange accent) */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1608541737042-87a12275d313?q=80&w=2922"
            alt="Nike Basketball Camps"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-orange-900/30" />
        </div>
        <div className="relative z-10 md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-block mb-4">
            <span className="bg-orange-600 text-white text-sm font-medium px-3 py-1 rounded-full">Premium Experience</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">NIKE BASKETBALL CAMPS</h1>
          <p className="text-xl md:text-2xl text-white">LONDON BASKETBALL TRIP 2025</p>
        </div>
      </section>

      {/* Main Content with Orange Accents */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Information */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <div className="inline-block mb-2">
                  <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">Event Details</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">PROFESSIONAL BASKETBALL EXPERIENCE</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Experience the basketball opportunity of a lifetime with Nike Basketball Camps! Train with professional coaches and experience elite-level training methods and philosophy that have developed top-tier players worldwide.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">DEVELOPMENT PROGRAMME</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Immerse yourself in a professional basketball environment with like-minded enthusiasts and enhance your technical skills under the guidance of Nike&apos;s professional coaching team. While participating in intensive training sessions, showcase your skills through competitive games. Coaching sessions aim to develop players&apos; basketball fundamentals, such as agility, positioning, ball handling, passing, shooting techniques, offensive and defensive strategies, and overall court awareness.
                </p>
                <p className="text-lg text-gray-600">
                  You will receive basketball training in a system widely recognized for developing elite talent. Experience what it takes to train in a professional basketball environment with access to top-tier facilities and expertise.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">PROGRAMME STRUCTURE</h2>
                <ul className="space-y-3 text-lg text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Designed for players who are at a standard level and/or are aiming to break into high-performance level basketball.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>By immersing players in a professional environment, the program aims to help players develop and improve techniques in all areas, including technical skills, physical conditioning, and mental aspects of the game.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Incorporating the latest video-analysis technology and training techniques, participants will have the opportunity to join professional workshops covering areas including scouting/player identification, nutrition, physical conditioning, and specialized skill development.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">PLAYER DEVELOPMENT</h2>
                <p className="text-lg text-gray-600">
                  Our program focuses on comprehensive player development, with up to 48 hours of basketball coaching and games plus 16 hours of specialized basketball workshops. Each player receives a personal development plan and individual coaching review to help track progress and identify areas for improvement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">PROGRAMME SCHEDULE</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                    <thead className="bg-orange-600 text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">DATE</th>
                        <th className="py-3 px-4 text-left">ACTIVITY</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium">Monday, 21st July, 2025</td>
                        <td className="py-3 px-4">Arrival to London/England</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4 font-medium">Tuesday, 22nd July, 2025</td>
                        <td className="py-3 px-4">Basketball Coaching & Games</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium">Wednesday, 23rd July, 2025</td>
                        <td className="py-3 px-4">Basketball Coaching & Games</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4 font-medium">Thursday, 24th July, 2025</td>
                        <td className="py-3 px-4">Basketball Coaching & Games</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium">Friday, 25th July, 2025</td>
                        <td className="py-3 px-4">Basketball workshops/Excursions</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4 font-medium">Saturday, 26th July, 2025</td>
                        <td className="py-3 px-4">Basketball Tournament</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium">Sunday, 27th July, 2025</td>
                        <td className="py-3 px-4">Return Home/End of Week One</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4 font-medium">Monday, 28th July, 2025</td>
                        <td className="py-3 px-4">Basketball Coaching & Games</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium">Tuesday, 29th July, 2025</td>
                        <td className="py-3 px-4">Basketball Coaching & Games</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4 font-medium">Wednesday, 30th July, 2025</td>
                        <td className="py-3 px-4">Basketball Coaching & Workshops</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium">Thursday, 31st July, 2025</td>
                        <td className="py-3 px-4">Basketball Coaching & Games</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4 font-medium">Friday, 1st August, 2025</td>
                        <td className="py-3 px-4">Basketball workshops/Excursions</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-medium">Saturday, 2nd August, 2025</td>
                        <td className="py-3 px-4">Basketball Tournament</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Sunday, 3rd August, 2025</td>
                        <td className="py-3 px-4">Return Home/End of Week Two</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">WHAT&apos;S INCLUDED</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3 text-lg text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>10-day basketball professional session</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Up to 48 hours of basketball coaching and games</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Up to 16 hrs of basketball workshops</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>On-site accommodation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>3 meals a day and an evening snack</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Excursions to famous cities and landmarks</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Evening activities programme & players&apos; lounge</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-lg text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Exclusive Nike gift pack/Training Kits</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Dedicated bus service as per itinerary</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Personal development plan</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Airport transfers</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Individual coaching review and certificate</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>24/7 welfare support staff</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Travel insurance and on-site medical care</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">NIKE BASKETBALL CAMPS</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Nike Basketball Camps provide a premier basketball development experience for young athletes. Our camps feature expert coaching, cutting-edge training methods, and access to elite facilities. The technical staff consists of experienced professionals with the highest certifications, supporting all participants throughout their journey.
                </p>
                <p className="text-lg text-gray-600">
                  Our methodology incorporates the same principles and practices that have developed numerous professional players and college athletes. It is designed to foster all-round players capable of excelling at competitive levels, with a focus on fundamentals, basketball IQ, and athletic development.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">NOT INCLUDED</h2>
                <ul className="space-y-3 text-lg text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Flights</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Visa fees</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">LOCATION</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Nike Basketball Camp<br />
                  London Sports Hub<br />
                  London, UK
                </p>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002145!2d-0.1170312118609475!3d51.50151623465778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1648226424565!5m2!1sen!2suk"
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
              <div className="bg-white p-8 rounded-xl shadow-md sticky top-24 border-t-4 border-orange-600">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Trip Details</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Cost</p>
                      <p className="text-2xl font-bold text-orange-600">£4,950</p>
                      <p className="text-sm text-gray-500">(£2,475/Week)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Dates</p>
                      <p>21 July - 3 August 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Age Group</p>
                      <p>13-17 years</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Contact</p>
                      <a href="mailto:collins@britishauc.com" className="text-orange-600 hover:underline">
                        collins@britishauc.com
                      </a>
                      <p className="text-sm">+2348035933363, +447840782759</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Deadline</p>
                      <p>25th of April, 2025</p>
                    </div>
                  </div>
                </div>
                <Link href="/events/london-basketball-trip/register">
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    size="lg"
                  >
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
