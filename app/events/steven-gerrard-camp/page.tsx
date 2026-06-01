import Image from 'next/image';
import Link from 'next/link';

export default function StevenGerrardCampPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://stevengerrard.academy/wp-content/uploads/sgapreseason-17dddd.jpg" // Save the attached image as this file in the public folder
            alt="Steven Gerrard Academy Pre Season Camp"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-0.5 h-5 bg-red-600" />
              <span className="text-xs font-medium text-white/60 tracking-[0.15em] uppercase">Premium Experience</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">STEVEN GERRARD ACADEMY<br />PRE SEASON CAMP LIVERPOOL U.K.</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
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
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  Enjoy the football experience of a lifetime with Pro Club Experience! Train at Steven Gerrard Academy and experience the professional training methods and philosophy that have made elite players worldwide.
                </p>
              </div>

              <div className="bg-white p-8 border border-gray-100">
                <h2 className="text-base font-semibold text-gray-900 mb-3">PROGRAMME INCLUDE</h2>
                <ul className="space-y-3 text-sm md:text-[15px] text-gray-500 leading-relaxed">
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
                <h2 className="text-base font-semibold text-gray-900 mb-3">STEVEN GERRARD ACADEMY</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  Steven Gerard Academy was created from the ground up by one of the world&apos;s most complete footballers and the team he works closely with on a daily basis.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  Steven&apos;s vision was to offer the ultimate footballing programme for players around the world. An opportunity for players to experience the living, training and playing lifestyle of an elite footballer for an extended period of time. During this time the programme will maximise the players&apos; potential, give them access to a global footballing network, and ensure they improve with every session.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  The determination Steven took into every game and the 100% effort he put into each training session has transferred into his work off the pitch since retirement from professional football. Steven Gerrard Academy is a product of this determination and effort, it has been created to allow players to excel and gain opportunities in football.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-gray-900 mb-3">More information</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  Call/WhatsApp: <a href="tel:+447840782759" className="text-red-700 font-semibold hover:underline">+447840782759</a>
                </p>
              </div>
            </div>

            {/* Registration Panel */}
            <div className="md:col-span-1">
              <div className="bg-white p-8 sticky top-24 border border-gray-100">
                <h3 className="text-base font-semibold mb-6 text-gray-900">Trip Details</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Cost:</span>
                    <span className="text-lg font-semibold text-red-600">£2,500</span>
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
                <Link href="/events/steven-gerrard-camp/register" className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 inline-block text-center">
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
