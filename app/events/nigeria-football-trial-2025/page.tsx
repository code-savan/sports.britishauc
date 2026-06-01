import Image from 'next/image';
import Link from 'next/link';

export default function NigeriaFootballTrial2025Page() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/eventshero.jpg"
            alt="Nigeria Football Trial 2025"
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
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">NIGERIA FOOTBALL TRIAL 2025</h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed">ABUJA & LAGOS</p>
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
                <h2 className="text-base font-semibold text-gray-900 mb-3">SHOWCASE YOUR TALENT AND BE SCOUTED!</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  Limited spots are available for the Nigeria Football Trial 2025—a unique opportunity for aspiring
                  players to showcase their skills and talents to professional football scouts. This event provides a
                  pathway for players to gain recognition and potentially secure opportunities with football clubs and
                  academies across the UK, Europe, and beyond.
                </p>
              </div>

              <div className="bg-white p-8 border border-gray-100">
                <h2 className="text-base font-semibold text-gray-900 mb-3">WHY ATTEND?</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  Participants will have the chance to be scouted by professional clubs, including teams in the English
                  Football League (EFL) and other competitive tiers of British and European football. The trial offers
                  invaluable exposure within one of the world’s most prestigious football systems, enabling players to take
                  the next step in their football careers.
                </p>
              </div>

              <div className="bg-white p-8 border border-gray-100">
                <h2 className="text-base font-semibold text-gray-900 mb-3">MEET THE HOST</h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                  Alex Armstrong The trial is led by Alex Armstrong of Active4Sport International in partnership with
                  British AUC Sport. With over 600 matches of experience as an Assistant Manager and Coach, Alex brings a
                  wealth of expertise in player development and football management.
                </p>
                </div>
                <div className="bg-white p-8 border border-gray-100">
                <h2 className="text-base font-semibold text-gray-900 mb-3">EVENT DETAILS</h2>
                <ul className="space-y-3 text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  <li><strong>ABUJA:</strong> Date: 27th - 31st October, 2025, Start: 9:00am | Finish: 2:00pm, Stadium: FIFA Goal Project, Abuja</li>
                  <li><strong>LAGOS:</strong> Date: 2nd - 8th November, 2025, Start: 9:00am | Finish: 2:00pm, Stadium: Coker Aguda, Lagos</li>
                  <li><strong>COST:</strong> £580</li>
                  <li><strong>AGE:</strong> 10 - 23 Years</li>
                </ul>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
                {/* REGISTRATION: Kindly register and pay with the link below:
                <Link href="https://buy.stripe.com/fZu4gy12Ka2S23v3K49MY09">PAY</Link> */}
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">DEADLINE: 20th October, 2025</p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">CONTACT: sports@britishauc.com</p>
              </div>

            </div>

            {/* Host Information Panel */}
            <div className="md:col-span-1">
              <div className="bg-white p-8 sticky top-24 border border-gray-100">
                <h3 className="text-base font-semibold mb-6 text-gray-900">Event Details</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Cost:</span>
                    <span className="text-lg font-semibold text-red-600">£580</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Dates:</span>
                    <span>27th - 31st October, 2025 (Abuja) & 2nd - 8th November, 2025 (Lagos)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Age Group:</span>
                    <span>10 - 23 years</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Registration Deadline:</span>
                    <span>20th October, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Locations:</span>
                    <span>Abuja & Lagos</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Contact:</span>
                    <a href="mailto:sports@britishauc.com" className="text-red-600 hover:underline">sports@britishauc.com</a>
                </div>
                <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-2">Spots Left:</span>
                    <span className="text-red-600 font-semibold">3 spots</span>
                  </div>
                <Link href="/events/nigeria-football-trial-2025/register" className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 inline-block text-center">
                  Register and Pay
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
