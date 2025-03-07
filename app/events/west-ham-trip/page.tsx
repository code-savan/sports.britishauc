'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function WestHamTripPage() {
  const [showInterestMessage, setShowInterestMessage] = useState(false);

  const handleRegisterInterest = () => {
    setShowInterestMessage(true);
    setTimeout(() => {
      setShowInterestMessage(false);
    }, 3000);
  };

  return (
    <div className="pt-16">
      {/* Hero Section with Blue Accent */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000"
            alt="West Ham United Academy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-blue-900/30" />
        </div>
        <div className="relative z-10 md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-block mb-4">
            <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">Premium Experience</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">West Ham United Summer Trip 2025</h1>
          <p className="text-xl md:text-2xl text-white">Train at a Premier League Academy</p>
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900">About the Trip</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Experience the life of a professional footballer with our exclusive West Ham United Academy Summer Trip. This week-long program offers aspiring players the opportunity to train at the renowned West Ham United Academy facilities, receive coaching from UEFA-licensed coaches, and gain insights into what it takes to succeed at the highest level of football.
                </p>
                <p className="text-lg text-gray-600">
                  Participants will stay in premium accommodation, enjoy nutritionist-designed meals, and have the chance to watch a professional match (subject to fixture availability). This immersive experience combines elite football training with educational components about the professional game, making it perfect for serious players looking to develop their skills and understanding of football at the highest level.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Program Highlights</h2>
                <ul className="space-y-3 text-lg text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Training sessions at West Ham United Academy facilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Coaching from UEFA-licensed West Ham Academy coaches</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tour of London Stadium and West Ham training facilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tactical analysis and video review sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Nutritional guidance and sports science workshops</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Competitive matches against local academy teams</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Location</h2>
                <p className="text-lg text-gray-600 mb-4">
                  West Ham United Academy<br />
                  Chadwell Heath Training Ground<br />
                  London, UK
                </p>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
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
              <div className="bg-white p-8 rounded-xl shadow-md sticky top-24 border-t-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Trip Details</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Cost</p>
                      <p className="text-2xl font-bold text-blue-600">£2,100</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Dates</p>
                      <p>29 July - 4 August 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Age Group</p>
                      <p>13-17 years</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Contact</p>
                      <a href="mailto:collins@britishauc.com" className="text-blue-600 hover:underline">
                        collins@britishauc.com
                      </a>
                    </div>
                  </div>
                </div>
                {showInterestMessage ? (
                  <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4 text-center">
                    Thank you for your interest! We&apos;ll contact you soon.
                  </div>
                ) : null}
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                  onClick={handleRegisterInterest}
                >
                  Register Interest
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
