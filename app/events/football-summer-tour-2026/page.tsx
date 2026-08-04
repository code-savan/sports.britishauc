import Image from 'next/image';
import Link from 'next/link';

export default function FootballSummerTour2026Page() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/preseasoncamphero.jpg"
            alt="Football Summer Tour 2026"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-0.5 h-5 bg-red-600" />
              <span className="text-xs font-medium text-white/60 tracking-[0.15em] uppercase">5-Day Summer Tour</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">FOOTBALL SUMMER TOUR 2026<br />UNITED KINGDOM</h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed">23rd &ndash; 28th August 2026 &middot; Liverpool, UK</p>
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
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Join the British AUC Football Summer Tour 2026 for an unforgettable 5-day elite football experience in the United Kingdom.
                </p>
              </div>

              <div className="bg-white p-8 border border-gray-100">
                <h2 className="text-base font-semibold text-gray-900 mb-3">PROGRAMME INCLUDE:</h2>
                <ul className="space-y-2 text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  <li>5 Days</li>
                  <li>Accommodation At Penny Lane Hotel, Liverpool</li>
                  <li>3 Meals A Day Made by Professional Nutritionist</li>
                  <li>2 Sessions A Day</li>
                  <li>Technical/Tactical/Physical Sessions</li>
                  <li>Pre Season Friendlies</li>
                  <li>Specialized S&amp;C Sessions</li>
                  <li>Game Analysis</li>
                  <li>Fitness Testing</li>
                  <li>Cultural Visits</li>
                  <li>Guest Speakers</li>
                  <li>Academy Kit</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">JOIN A GLOBAL SQUAD</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Train and live with players from 20+ countries, sharing one thing &ndash; a hunger to get better on and off the pitch.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">EVERYTHING YOU NEED, SORTED</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Full training kits, Hudi &amp; Player Tek access, sport science support, all meals, guest speakers, epic excursions plus so much more.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">EXCLUSIVE ACCOMMODATION</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Players stay together at our hotel on the world famous Penny Lane. Just 15 minutes from city center and 40 minutes from Manchester Airport.
                </p>
              </div>

              <div className="bg-white p-8 border border-gray-100">
                <h2 className="text-base font-semibold text-gray-900 mb-3">PRICING: &pound;1,250</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Inclusive of accommodation, meals, excursion, and world-class football schedule.
                </p>

                <h3 className="text-sm font-semibold mt-8 mb-2 text-gray-900">DATE</h3>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">23rd - 28th August, 2026</p>

                <h3 className="text-sm font-semibold mt-8 mb-2 text-gray-900">AGE</h3>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">14 - 20</p>

                <h3 className="text-sm font-semibold mt-8 mb-2 text-gray-900">LIMITED SPACES</h3>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">Minimum of 10 students</p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">REGISTER TODAY!</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-2">
                  <a href="mailto:collins@britishauc.com" className="text-red-600 font-semibold hover:underline">collins@britishauc.com</a>
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  <a href="tel:+447840782759" className="text-red-600 font-semibold hover:underline">+44 7840 782759</a>
                </p>
              </div>
            </div>

            {/* Event Details Panel */}
            <div className="md:col-span-1">
              <div className="bg-white p-8 sticky top-24 border border-gray-100">
                <h3 className="text-base font-semibold mb-6 text-gray-900">Event Details</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Cost:</span>
                    <span className="text-lg font-semibold text-red-600">&pound;1,250</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Location:</span>
                    <span>Liverpool, UK</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Date:</span>
                    <span>23rd &ndash; 28th Aug 2026</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Duration:</span>
                    <span>5 Days</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Age Range:</span>
                    <span>14 &ndash; 20</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Accommodation:</span>
                    <span>Penny Lane Hotel, Liverpool</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Meals:</span>
                    <span>Full Board (3/day)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Contact:</span>
                    <a href="mailto:collins@britishauc.com" className="text-red-600 hover:underline text-xs">collins@britishauc.com</a>
                  </div>
                </div>
                <Link href="/events/football-summer-tour-2026/register" className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 inline-block text-center">
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