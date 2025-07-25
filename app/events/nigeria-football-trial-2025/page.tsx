import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NigeriaFootballTrial2025Page() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/eventshero.jpg"
            alt="Nigeria Football Trial 2025"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">NIGERIA FOOTBALL TRIAL 2025</h1>
          <p className="text-xl md:text-2xl text-white">ABUJA & LAGOS</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Information */}
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-600">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">SHOWCASE YOUR TALENT AND BE SCOUTED!</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Limited spots are available for the Nigeria Football Trial 2025—a unique opportunity for aspiring
                  players to showcase their skills and talents to professional football scouts. This event provides a
                  pathway for players to gain recognition and potentially secure opportunities with football clubs and
                  academies across the UK, Europe, and beyond.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-600">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">WHY ATTEND?</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Participants will have the chance to be scouted by professional clubs, including teams in the English
                  Football League (EFL) and other competitive tiers of British and European football. The trial offers
                  invaluable exposure within one of the world’s most prestigious football systems, enabling players to take
                  the next step in their football careers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-600">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">MEET THE HOST</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Alex Armstrong The trial is led by Alex Armstrong of Active4Sport International in partnership with
                  British AUC Sport. With over 600 matches of experience as an Assistant Manager and Coach, Alex brings a
                  wealth of expertise in player development and football management.
                </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-600">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">EVENT DETAILS</h2>
                <ul className="space-y-3 text-lg text-gray-600">
                  <li><strong>ABUJA:</strong> Date: 27th October, 2025, Start: 9:00am | Finish: 2:00pm, Stadium: FIFA Goal Project, Abuja</li>
                  <li><strong>LAGOS:</strong> Date: 3rd November, 2025, Start: 9:00am | Finish: 2:00pm, Stadium: Coker Aguda, Lagos</li>
                  <li><strong>COST:</strong> £165</li>
                  <li><strong>AGE:</strong> 10 - 23 Years</li>
                </ul>
                <p className="text-lg text-gray-600 mb-4">
                REGISTRATION: Kindly register and pay with the link below:
                <Link href="https://buy.stripe.com/fZu4gy12Ka2S23v3K49MY09">PAY</Link>
                </p>
                <p className="text-lg text-gray-600 mb-4">DEADLINE: 15th of August, 2025</p>
                <p className="text-lg text-gray-600 mb-4">CONTACT: sports@britishauc.com</p>
              </div>

            </div>

            {/* Host Information Panel */}
            <div className="md:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-md sticky top-24 border-t-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Event Details</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Cost:</span>
                    <span className="text-2xl font-bold text-blue-600">£165</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Dates:</span>
                    <span>27th October, 2025 (Abuja) & 3rd November, 2025 (Lagos)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Age Group:</span>
                    <span>10 - 23 years</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Registration Deadline:</span>
                    <span>15th August, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Locations:</span>
                    <span>Abuja & Lagos</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Contact:</span>
                    <a href="mailto:sports@britishauc.com" className="text-blue-600 hover:underline">sports@britishauc.com</a>
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                  <Link href="/events/nigeria-football-trial-2025/register">
                    Register and Pay
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
