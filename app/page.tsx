'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useState, useEffect } from 'react';

export default function Home() {
  // State for testimonials slider
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      quote: "The Manchester Football Trial was a turning point in my career. The exposure to professional scouts and the feedback I received were invaluable. I'm now playing for a League One club's academy, which would not have been possible without British AUC Sports.",
      name: "James Wilson",
      role: "Academy Player, League One Club",
      image: "https://images.unsplash.com/photo-1564135624576-c5c88640f235?q=80&w=256"
    },
    {
      quote: "The West Ham United Summer Trip was an incredible experience. The coaching was world-class and I learned so much about the professional game. The connections I made have opened doors I never thought possible.",
      name: "Sarah Johnson",
      role: "University Football Scholar",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256"
    },
    {
      quote: "British AUC Sports provided me with the platform to showcase my abilities to scouts from across Europe. Their professional approach and connections in the football world are second to none.",
      name: "Michael Thompson",
      role: "Semi-Professional Player",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      {/* Hero Section with Parallax Effect - Fixed z-index issues */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative h-[120%] w-full" style={{ transform: 'translateY(-10%)' }}>
            <Image
              src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2000"
              alt="Football stadium"
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </div>
          {/* Darker gradient with blue accent */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-blue-900/30" />
        </div>

        {/* Ensure hero content is visible with proper z-index */}
        <div className="relative z-10 hero-content">
          <div className="animate-fade-in">
            <h1 className="hero-title text-white">
              Elevate Your Football Career with British AUC Sports
            </h1>
            <p className="hero-description text-white">
              Connecting talented athletes with exceptional opportunities through professional football trials, academy experiences, and elite training programs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg bg-white text-primary hover:bg-gray-100">
                <Link href="/events">
                  Explore Events
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-transparent text-white hover:bg-white/20 border-white">
                <Link href="/about">
                  About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Program Section with Blue Accents */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Our Programs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Elite Football Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              British AUC Sports connects aspiring athletes with professional clubs and academies through our exclusive programs and events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 text-center card-hover border-t-4 border-primary">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Professional Trials</h3>
              <p className="text-gray-600">Showcase your talent to scouts from professional clubs across the UK and Europe.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center card-hover border-t-4 border-blue-600">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Academy Training</h3>
              <p className="text-gray-600">Train with elite coaches at Premier League academies and develop your skills.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center card-hover border-t-4 border-primary">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Educational Programs</h3>
              <p className="text-gray-600">Combine football training with educational courses and leadership development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section with Blue Accents */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Upcoming</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Football Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Secure your spot in our exclusive football programs and take the next step in your athletic career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Manchester Football Trial Card */}
            <Card className="overflow-hidden card-hover border-0 shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1000"
                  alt="Manchester Football Trial"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm font-medium bg-primary text-white px-3 py-1 rounded-full inline-block mb-2">Limited Spots</p>
                  <h3 className="text-2xl font-bold text-white">Manchester Football Trial 2025</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>TBD (Registration Deadline: 15th April 2025)</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Showcase your skills to professional scouts at this exclusive trial in Manchester and take a step toward your professional football career.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild className="w-full bg-primary text-white hover:bg-red-700">
                  <Link href="/events/manchester-trial">
                    Learn More
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* West Ham United Summer Trip Card */}
            <Card className="overflow-hidden card-hover border-0 shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000"
                  alt="West Ham United Academy"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm font-medium bg-blue-600 text-white px-3 py-1 rounded-full inline-block mb-2">Premium Experience</p>
                  <h3 className="text-2xl font-bold text-white">West Ham United Summer Trip 2025</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>29 July - 4 August 2025</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Train like a professional at West Ham United Academy in this unforgettable London experience combining elite coaching and education.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  <Link href="/events/west-ham-trip">
                    Learn More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link href="/events">
                View All Events
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section with Slider */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from athletes who have participated in our programs and advanced their careers.
            </p>
          </div>

          <div className="relative">
            {/* Testimonial Slider */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 shadow-sm">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="relative w-32 h-32 flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={`Testimonial from ${testimonial.name}`}
                            fill
                            className="object-cover rounded-full border-4 border-white shadow-md"
                          />
                        </div>
                        <div>
                          <svg className="h-12 w-12 text-blue-400/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="text-lg text-gray-600 italic mb-6">
                            &quot;{testimonial.quote}&quot;
                          </p>
                          <div>
                            <p className="font-bold text-gray-900">{testimonial.name}</p>
                            <p className="text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Blue Gradient */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Take Your Game to the Next Level?</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Join our upcoming events and start your journey toward a professional football career.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="text-primary bg-white hover:bg-gray-100">
              <Link href="/events">
                Explore Events
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white">
              <Link href="/contact" className='hover:text-black text-white'>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
