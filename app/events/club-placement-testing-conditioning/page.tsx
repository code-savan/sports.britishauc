import Image from 'next/image';
import Link from 'next/link';
import { getDatesDisplay } from '@/lib/utils';

const { rangeText, deadlineText } = getDatesDisplay();

export default function ClubPlacementTestingConditioningPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/event10.jpg"
            alt="Club Placement Testing & Conditioning"
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
              <span className="text-xs font-medium text-white/60 tracking-[0.15em] uppercase">Limited Spots</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">CLUB PLACEMENT TESTING & CONDITIONING</h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed">{rangeText}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Information */}
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white p-8 border border-gray-100">
                <h2 className="text-base font-semibold text-gray-900 mb-3">PROGRAMME INCLUDE</h2>
                <ul className="space-y-3 text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  <li>• 1 Week Club Placement Testing & Conditioning</li>
                  <li>• Club placements and representation and support from FIFA licensed Agency</li>
                  <li>• Expert & Elite sessions</li>
                  <li>• Working with Ex pro players and specialist coaches</li>
                  <li>• Biomechanics, Technical and physical assessment covering all demands of modern game</li>
                  <li>• 121 and mini masterclass sessions</li>
                  <li>• Unique system equipment (some only used by top pro clubs)</li>
                  <li>• Full in-depth report, comparison against KPIs and markers </li>
                  <li>• Future development and roadmapping service provided</li>
                  <li>• Manchester & North West Based </li>
                  <li>• Different levels of program based on needs and affordability</li>
                </ul>
                <h3 className="text-sm font-semibold mt-8 mb-2 text-gray-900">COST: £985</h3>
              </div>

              <div className="bg-white p-8 border border-gray-100">
                <h2 className="text-base font-semibold text-gray-900 mb-3">YOUR 1 WEEK JOURNEY</h2>
                <ul className="space-y-3 text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  <li><strong>DAY 1: PLAYER METRICS & TECHNICAL EVALUATION</strong></li>
                  <li>Location: Manchester with our Performance Coach</li>
                  <li>• Ball mastery assessment</li>
                  <li>• Tactical understanding</li>
                  <li>• Game situation analysis</li>
                  <li>• Position-specific skills</li>
                  <li>• Movement with & without ball</li>
                  <li>• Game IQ</li>
                  <li><strong>DAY 2: FOUNDATION ASSESSMENT|PROFILE</strong></li>
                  <li>Location: Manchester Sports Lab with Mick Clegg (Seed of Speed)</li>
                  <li>• Visual cognition testing</li>
                  <li>• Biomechanics analysis</li>
                  <li>• Movement pattern evaluation</li>
                  <li>• Baseline fitness, Strength & Speed metrics</li>
                  <li><strong>DAY 3: PITCH BASED SESSION | LAB SESSION</strong></li>
                  <li>Location: Manchester</li>
                  <li>• Strength and power testing</li>
                  <li>• Agility and speed assessment</li>
                  <li>• Injury prevention screening</li>
                  <li>• Recovery protocols</li>
                  <li><strong>DAY 4: GYM & RECOVERY WITH FINAL ASSESSMENT | FEEDBACK</strong></li>
                  <li>Location: Liverpool with Lead Staff member and core team</li>
                  <li>• Gym based technique</li>
                  <li>• Analysis on strength and core</li>
                  <li>• Gather Key Data</li>
                  <li>• Use of facilities (pool & sauna/steam room) & lunch / feedback</li>
                  <li>• Discuss potential next steps</li>
                  <li>• Report usually done and given within 7 days of last day</li>
                </ul>
              </div>

              <div className="bg-white p-8 border border-gray-100">
                <h2 className="text-base font-semibold text-gray-900 mb-3">WHAT YOU WILL RECEIVE?</h2>
                <ul className="space-y-3 text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  <li>✅ Comprehensive Performance Report</li>
                  <li>✅ Video Analysis Capture</li>
                  <li>✅ Personalised Development Plan</li>
                  <li>✅ Pathway Opportunities </li>
                  <li>✅ Ongoing Support</li>
                </ul>
              </div>

              <div className="bg-white p-8 border border-gray-100">
                <h2 className="text-base font-semibold text-gray-900 mb-3">LIMITED SPOTS AVAILABLE</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">Places left: 3 spots</p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">Deadline: {deadlineText}</p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">Age: 11-22</p>
                <Link href="/events/club-placement-testing-conditioning/register" className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 inline-block text-center">
                  Register and Pay
                </Link>
              </div>
            </div>

            {/* Event Details Panel */}
            <div className="md:col-span-1">
              <div className="bg-white p-8 sticky top-24 border border-gray-100">
                <h3 className="text-base font-semibold mb-6 text-gray-900">Event Details</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Cost:</span>
                    <span className="text-lg font-semibold text-red-600">£985</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Date:</span>
                    <span>{rangeText}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Age Group:</span>
                    <span>11 - 22 years</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Registration Deadline:</span>
                    <span>{deadlineText}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Location:</span>
                    <span>Manchester & North West, UK</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Contact:</span>
                    <a href="tel:+447840782759" className="text-red-600 hover:underline">+447840782759</a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Spots Left:</span>
                    <span className="text-red-600 font-semibold">3 spots</span>
                  </div>
                </div>
                <Link href="/events/club-placement-testing-conditioning/register" className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 inline-block text-center">
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
