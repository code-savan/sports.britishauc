import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section with Blue Accent */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/aboutushero.jpg"
            alt="Football training"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-blue-900/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-white">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-center text-white">Developing young football talents while providing quality education.</p>
        </div>
      </section>

      {/* Main Content with Blue Accents */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block mb-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Who We Are</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">British AUC SPORT</h2>
              <p className="text-lg text-gray-600">
                British AUC SPORT is a UK-based sports agency that trains and mentors young talents to become professional footballers while studying for their degrees. The aim of this is to help potential students try their football skills while studying, giving them the opportunity to either progress to play at a Professional or semi-professional level.
              </p>
              <p className="text-lg text-gray-600">
                British AUC SPORT connects extensively with most English and European football clubs and academies, giving each player an ample opportunity of being scouted into Premiership clubs around the world.
              </p>
              <p className="text-lg text-gray-600">
                British AUC SPORT is proud to be a member of PFSA (Professional Football Scouts Association United Kingdom) an umbrella body for all professional scouts worldwide. Therefore, prospective players are exposed to scouts around the world. Recently, Man United has contracted the body to help recruit for its first team.
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
                src="/aboutus.jpg"
                alt="Football training session"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-24">
            <div className="text-center mb-12">
              <div className="inline-block mb-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Our Academies</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Football Development Programs</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We train and help every potential young player to realize his or her potential of becoming a professional footballer through our bespoke training and mentorship programmes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative overflow-hidden rounded-xl shadow-md group h-[350px]">
                <Image
                  src="/manchesterhero.jpg"
                  alt="Manchester Football Academy"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                  <h3 className="text-xl font-bold mb-2 text-white">Manchester Football Academy</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Strategic location with exposure to clubs like Manchester United, Manchester City, and more.
                  </p>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent hover:text-white">
                    <Link href="/academy/manchester">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-md group h-[350px]">
                <Image
                  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000"
                  alt="London Football Academy"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                  <h3 className="text-xl font-bold mb-2 text-white">London Football Academy</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Premier football development program in London for students combining education with elite football training.
                  </p>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent hover:text-white">
                    <Link href="/academy/london">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-md group h-[350px]">
                <Image
                  src="/dts2.jpg"
                  alt="Alicante Football Academy"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                  <h3 className="text-xl font-bold mb-2 text-white">Alicante Football Academy</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Experience Spanish football culture and training methodology while continuing your education in Alicante.
                  </p>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent hover:text-white">
                    <Link href="/academy/alicante">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
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
                <p className="text-gray-600">Training sessions led by FA-certified coaches with extensive professional experience.</p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-md card-hover border-t-4 border-primary">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Education & Football</h3>
                <p className="text-gray-600">Balance between education and football training, ensuring both academic and athletic development.</p>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-12 shadow-sm">
              <div className="inline-block mb-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Professional Association</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">PFSA Membership</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                As a member of the Professional Football Scouts Association (PFSA), we provide our players with exposure to scouts from professional clubs worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white">
                  <Link href="/contact">
                    Join Our Program
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
