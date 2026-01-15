import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getDatesDisplay } from '@/lib/utils';

const { rangeText, deadlineText } = getDatesDisplay();

export default function ClubPlacementTestingConditioningPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/event10.jpg"
            alt="Club Placement Testing & Conditioning"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-blue-900/30" />
        </div>
        <div className="relative z-10 md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-block mb-4">
            <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">Limited Spots</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">CLUB PLACEMENT TESTING & CONDITIONING</h1>
          <p className="text-xl md:text-2xl text-white">{rangeText}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Information */}
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-600">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">PROGRAMME INCLUDE</h2>
                <ul className="space-y-3 text-lg text-gray-600">
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
                <h3 className="text-xl font-bold mt-8 mb-2 text-gray-900">COST: £985</h3>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-600">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">YOUR 1 WEEK JOURNEY</h2>
                <ul className="space-y-3 text-lg text-gray-600">
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

              <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-600">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">WHAT YOU WILL RECEIVE?</h2>
                <ul className="space-y-3 text-lg text-gray-600">
                  <li>✅ Comprehensive Performance Report</li>
                  <li>✅ Video Analysis Capture</li>
                  <li>✅ Personalised Development Plan</li>
                  <li>✅ Pathway Opportunities </li>
                  <li>✅ Ongoing Support</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-600">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">LIMITED SPOTS AVAILABLE</h2>
                <p className="text-lg text-gray-600 mb-4">Places left: 3 spots</p>
                <p className="text-lg text-gray-600 mb-4">Deadline: {deadlineText}</p>
                <p className="text-lg text-gray-600 mb-4">Age: 11-22</p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md">
                  <Link href="/events/club-placement-testing-conditioning/register">
                    Register and Pay
                  </Link>
                </Button>
              </div>
            </div>

            {/* Event Details Panel */}
            <div className="md:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-md sticky top-24 border-t-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Event Details</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Cost:</span>
                    <span className="text-2xl font-bold text-blue-600">£985</span>
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
                    <a href="tel:+447840782759" className="text-blue-600 hover:underline">+447840782759</a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Spots Left:</span>
                    <span className="text-red-600 font-semibold">3 spots</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                  <Link href="/events/club-placement-testing-conditioning/register">
                    Register and Pay
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
