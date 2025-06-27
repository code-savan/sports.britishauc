import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function StevenGerrardCampPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://stevengerrard.academy/wp-content/uploads/sgapreseason-17dddd.jpg" // Save the attached image as this file in the public folder
            alt="Steven Gerrard Academy Pre Season Camp"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-red-900/30" />
        </div>
        <div className="relative z-10 md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-block mb-4">
            <span className="bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full">Premium Experience</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">STEVEN GERRARD ACADEMY<br />PRE SEASON CAMP LIVERPOOL U.K.</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Information */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <div className="inline-block mb-2">
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">Event Details</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">PRO CLUB FOOTBALL EXPERIENCE</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Enjoy the football experience of a lifetime with Pro Club Experience! Train at Steven Gerrard Academy and experience the professional training methods and philosophy that have made elite players worldwide.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">PROGRAMME INCLUDE</h2>
                <ul className="space-y-3 text-lg text-gray-600">
                  <li>2 Weeks Football Training at Steven Gerrard Academy Training Complex.</li>
                  <li>10 x Professional Coaching Sessions</li>
                  <li>2 sessions a day</li>
                  <li>Technical/tactical/physical sessions</li>
                  <li>Accommodation at Penny Lane Hotel Liverpool</li>
                  <li>3 meals a day made by professional nutritionist</li>
                  <li>Pre season friendlies</li>
                  <li>Specialized S & C sessions</li>
                  <li>Game analysis</li>
                  <li>Fitness testing</li>
                  <li>Cultural visits</li>
                  <li>Guest speaker</li>
                  <li>Dedicated bus service as per itinerary</li>
                  <li>Free supervised internet access</li>
                  <li>Player report feedback</li>
                  <li>Seminars and workshops</li>
                  <li>Personal development plan</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">STEVEN GERRARD ACADEMY</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Steven Gerard Academy was created from the ground up by one of the world&apos;s most complete footballers and the team he works closely with on a daily basis.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Steven&apos;s vision was to offer the ultimate footballing programme for players around the world. An opportunity for players to experience the living, training and playing lifestyle of an elite footballer for an extended period of time. During this time the programme will maximise the players&apos; potential, give them access to a global footballing network, and ensure they improve with every session.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  The determination Steven took into every game and the 100% effort he put into each training session has transferred into his work off the pitch since retirement from professional football. Steven Gerrard Academy is a product of this determination and effort, it has been created to allow players to excel and gain opportunities in football.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">More information</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Call/WhatsApp: <a href="tel:+447840782759" className="text-red-700 font-semibold hover:underline">+447840782759</a>
                </p>
              </div>
            </div>

            {/* Registration Panel */}
            <div className="md:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-md sticky top-24 border-t-4 border-red-600">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Trip Details</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Cost:</span>
                    <span className="text-2xl font-bold text-red-600">£2,500</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Location:</span>
                    <span>Liverpool, UK</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Age Group:</span>
                    <span>12-17 years</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Contact:</span>
                    <a href="tel:+447840782759" className="text-red-700 hover:underline">+447840782759</a>
                  </div>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white" size="lg">
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
