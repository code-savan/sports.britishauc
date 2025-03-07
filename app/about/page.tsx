import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section with Blue Accent */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&w=2000"
            alt="Football training"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-blue-900/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-white">About Us</h1>
          <p className="text-xl max-w-2xl text-center text-white">Empowering the next generation of athletes through exceptional opportunities.</p>
        </div>
      </section>

      {/* Main Content with Blue Accents */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block mb-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Our Purpose</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600">
                British AUC Sports is a branch of British AUC, an organization committed to bridging the gap between education and sports. We provide opportunities for students and athletes to pursue their passions in the UK, offering a range of programs including football trials, academy trips, and educational seminars.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to empower the next generation of athletes by providing them with the tools, exposure, and support they need to succeed.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white">
                  <Link href="/events">Explore Our Programs</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1547019431-9d2f0518bb5b?q=80&w=1000"
                alt="Football training session"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-24">
            <div className="text-center mb-12">
              <div className="inline-block mb-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Our Advantages</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine professional expertise with personalized attention to help athletes reach their full potential.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-xl shadow-md card-hover border-t-4 border-primary">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Professional Network</h3>
                <p className="text-gray-600">Access to top football clubs, academies, and professional scouts across the UK and Europe.</p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-md card-hover border-t-4 border-blue-600">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Coaching</h3>
                <p className="text-gray-600">Training sessions led by UEFA-certified coaches with extensive professional experience.</p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-md card-hover border-t-4 border-primary">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Holistic Development</h3>
                <p className="text-gray-600">Focus on both athletic excellence and personal growth through education and leadership training.</p>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-12 shadow-sm">
              <div className="inline-block mb-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Collaboration</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Partnership</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                As a branch of British AUC, we leverage our strong network and expertise to provide unparalleled opportunities in sports and education.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <a
                    href="https://britishauc.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit British AUC
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white">
                  <Link href="/contact">
                    Get in Touch
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
