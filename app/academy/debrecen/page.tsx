import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const SKILLS = [
  'Dribbling/Ball manipulation',
  'Speed and quickness exercise',
  'Balance Coordination',
  'Dominating in 1v1 situation',
  'Effective turns with the ball',
  'Passing/Shooting/Finishing',
  'Position Awareness',
  'First touch',
  'Brain Training and Awareness',
  'Weak foot enhancement',
  'Confidence and Endurance Boost',
  'Team working',
];

const BENEFITS = [
  {
    title: 'Football Training with UEFA-qualified Coach',
    description: 'Players will be trained by highly qualified UEFA Coaches to ensure that players develop the required skills to compete professionally.',
  },
  {
    title: 'Individual Player Report',
    description: 'An individual Player Report is generated for each player, outlining the strengths and weaknesses of the player.',
  },
  {
    title: 'Player Development Plan',
    description: 'The individual development plan will be created for each player showing the development road map.',
  },
  {
    title: 'Football Trial with Pro Clubs',
    description: 'Players will be exposed to Pro football trials around Hungary.',
  },
  {
    title: 'Player Performance Analysis',
    description: 'Player performance and development are analyzed to ascertain the extent of progress and skill development.',
  },
  {
    title: 'Fitness Training',
    description: 'Physical strength and fitness are key elements of player development.',
  },
  {
    title: 'Outdoor Exercise',
    description: 'Outdoor activities like mountain climbing, hiking, swimming are an integral part of player development.',
  },
  {
    title: 'Sport Therapy/Nutrition',
    description: 'Each player receives medical and health advice from our seasoned professional Sport Therapist.',
  },
  {
    title: 'Match Analysis & Classroom Teaching',
    description: 'Academy and friendly matches are analyzed and dissected so players can improve their knowledge of the game.',
  },
  {
    title: 'League Club Tours',
    description: 'Regular visits to Hungarian league clubs around Debrecen with match tickets provided.',
  },
  {
    title: 'Professional Football Trials',
    description: 'Players attend professional football trials held in the Debrecen area scouted by Hungarian and European clubs.',
  },
];

const FACILITIES = [
  'Nagyerdei Stadium',
  '4G Astroturf pitches',
  'Fitness suites & studios',
  'High performance gym',
  'Recovery facilities',
  'Free parking',
];

export default function DebrecenAcademy() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576660016182-af8a90e6ffda?q=80&w=2918"
            alt="Debrecen Football Academy"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-0.5 h-5 bg-red-600" />
              <span className="text-xs font-medium text-white/60 tracking-[0.15em] uppercase">
                Debrecen
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
              Debrecen Football Academy
            </h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed max-w-lg">
              Developing elite footballers in Hungary&apos;s historic sporting city.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="#overview"
                className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-medium px-5 py-2.5 hover:bg-red-700 transition-colors"
              >
                Explore Academy
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-medium px-5 py-2.5 hover:bg-white hover:text-gray-900 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Overview */}
      <section id="overview" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-0.5 h-5 bg-red-600 shrink-0" />
                <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                  Academy Overview
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-5">
                Debrecen Football Academy
              </h2>
              <div className="space-y-4">
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Debrecen Academy is for students studying within Debrecen territory who wish to develop their football skills alongside their studies at the University. Most students who joined this academy are students studying at the University of Debrecen, Debrecen Reformed University of Religious Studies DRHE, University of Debrecen Medical School and Health Science Center, etc.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Debrecen Academy&apos;s mission aligns with the Hungarian Football Association&apos;s development strategy, focusing on nurturing young talent capable of competing at a high level in adulthood. It serves as the primary talent pipeline for Debreceni Vasutas Sport Club first team.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  The coaching staff comprises UEFA-licensed professionals with experience in youth and senior football. The academy collaborates with the Hungarian Football Federation and international partners to adopt best practices.
                </p>
              </div>
            </div>
            <div className="relative h-[350px] md:h-[450px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2940"
                alt="Debrecen Football Training"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* City Overview */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative h-[350px] md:h-[450px] overflow-hidden order-2 lg:order-1">
              <Image
                src="/lid.jpeg"
                alt="Debrecen City"
                fill
                className="object-cover object-bottom"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-0.5 h-5 bg-red-600 shrink-0" />
                <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                  City Overview
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-5">
                Life in Debrecen
              </h2>
              <div className="space-y-4">
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Debrecen is a widely-known city when it comes to the game of football. Debrecen is home to well-known clubs such as Debrecen VSC, DVSC Futball Zrt, TBG Palya-Debrecen Sports Club, etc. This gives players direct exposure to a professional football environment and recruitment.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Debrecen offers different sport activities via the University of Debrecen including tennis, football, and gym facilities. The weather, warm summer (20-30°C) and mild spring/autumn (10-20°C), is ideal for outdoor sport activities year-round.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Ground */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-0.5 h-5 bg-red-600 shrink-0" />
              <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                Facilities
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
              Training Ground
            </h2>
            <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Our Debrecen training facilities offer state-of-the-art pitches, advanced gym equipment, and comprehensive amenities to support the development of elite footballers in Hungary.
            </p>
          </div>

          <div className="space-y-5">
            <div className="relative h-[350px] md:h-[450px] overflow-hidden">
              <Image
                src="/dtg1.jpg"
                alt="Debrecen Training Facility"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="relative h-[250px] overflow-hidden">
                <Image src="/dtg2.jpg" alt="Training Pitch" fill className="object-cover" />
              </div>
              <div className="relative h-[250px] overflow-hidden">
                <Image src="/dtg3.jpg" alt="Football Equipment" fill className="object-cover" />
              </div>
              <div className="relative h-[250px] overflow-hidden">
                <Image src="/dtg4.png" alt="Indoor Facility" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {FACILITIES.map((item, i) => (
              <span key={i} className="text-xs text-gray-500 border border-gray-200 py-2 px-4">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-0.5 h-5 bg-red-600 shrink-0" />
                <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                  Schedule
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">
                Training Schedule
              </h2>
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-6">
                To accommodate students&apos; academic commitments, training sessions are strategically scheduled on weekday evenings and weekends. Additional sessions for individual player development can be arranged based on each player&apos;s university timetable.
              </p>
              <div className="border border-gray-100 bg-white p-6 md:p-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 text-xs font-semibold text-gray-900 tracking-[0.1em] uppercase" />
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-900 tracking-[0.1em] uppercase">Morning</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-900 tracking-[0.1em] uppercase">Afternoon</th>
                      <th className="text-left py-3 pl-4 text-xs font-semibold text-gray-900 tracking-[0.1em] uppercase">Evening</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-sm font-medium text-gray-900">Weekdays</td>
                      <td className="py-3 px-4 text-sm text-gray-500">Classes</td>
                      <td className="py-3 px-4 text-sm text-gray-500">Classes</td>
                      <td className="py-3 pl-4 text-sm text-gray-500">Football</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-sm font-medium text-gray-900">Weekends</td>
                      <td className="py-3 px-4 text-sm text-gray-500">Football Training</td>
                      <td className="py-3 px-4 text-sm text-gray-500">Football Training</td>
                      <td className="py-3 pl-4 text-sm text-gray-500">Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space-y-5">
              <div className="relative h-[250px] overflow-hidden">
                <Image src="/dts1.jpg" alt="Training Session" fill className="object-cover" />
              </div>
              <div className="relative h-[250px] overflow-hidden">
                <Image src="/dts2.jpg" alt="Football Training" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Player Development */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-0.5 h-5 bg-red-600 shrink-0" />
              <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                Development
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
              Player Development Plan
            </h2>
            <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed max-w-3xl mx-auto">
              Every player will go through our rigorous football training routine anchored by our qualified UEFA coach. This will enhance the player&apos;s tactical, technical, psychological, and social skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILLS.map((skill, i) => (
                <div key={i} className="border border-gray-100 p-4 flex items-center gap-3">
                  <CheckCircle2 size="16" className="text-red-400 shrink-0" />
                  <span className="text-sm text-gray-600">{skill}</span>
                </div>
              ))}
            </div>
            <div className="space-y-5">
              <div className="relative h-[250px] overflow-hidden">
                <Image src="/devplan1.jpg" alt="Football Development" fill className="object-cover" />
              </div>
              <div className="relative h-[250px] overflow-hidden">
                <Image src="/debdevplan2.jpg" alt="Skills Training" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-5 border border-white/20 w-fit py-2 px-2 mx-auto">
            <span className="text-[10px] font-medium text-white/60 tracking-[0.15em] uppercase">
              Get Started
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug mb-4">
            Link with Hungarian Pro Football Clubs
          </h2>
          <p className="text-sm md:text-[15px] text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            British AUC Sport connects with various Hungarian and European league clubs, academies, and scouts to ensure our players have every opportunity to become professional footballers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-red-700 text-sm font-medium px-6 py-3 hover:bg-gray-100 transition-colors"
          >
            Apply Now
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
