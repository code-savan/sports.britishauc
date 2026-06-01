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
    title: 'Football Training with FA-qualified Coach',
    description: 'Players will be trained by a highly qualified FA Coach to ensure that players develop the required skills to compete professionally.',
  },
  {
    title: 'Individual Player Report',
    description: 'An individual Player Report is generated for each player, outlining the strengths and weaknesses of the player. This is an important document required by professional clubs for assessing the suitability of the player.',
  },
  {
    title: 'Player Development Plan',
    description: 'The individual development plan will be created for each player in the first instance. This shows the development road map for each player.',
  },
  {
    title: 'Football Trial with Pro Clubs',
    description: 'Players will be exposed to Pro football trials around the UK organised by the Professional Football Scouts Association.',
  },
  {
    title: 'Player Performance Analysis',
    description: 'Player performance and development are usually analyzed to ascertain the extent of progress and skill development.',
  },
  {
    title: 'Fitness Training',
    description: 'Physical strength and fitness are key elements of player development. Players are occasionally engaged in a supervised gym.',
  },
  {
    title: 'Outdoor Exercise',
    description: 'Outdoor activities like mountain climbing, hiking, swimming are an integral part of the all-around development of players.',
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
    description: 'There is a regular visit to Premier League clubs around the UK, and tickets for matches are also provided for players.',
  },
  {
    title: 'PFSA Football Trials',
    description: 'All players are taken to the Professional Football Scout Association Football Trial held in the Manchester and London area.',
  },
];

const FACILITIES = [
  'Manchester Sports Area',
  '3G Astroturf pitches',
  'Fitness suites & studios',
  'Fully equipped gym',
  'Swimming pool access',
  'Free parking',
];

export default function ManchesterAcademy() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/manchesterhero.jpg"
            alt="Manchester Football Academy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-0.5 h-5 bg-red-600" />
              <span className="text-xs font-medium text-white/60 tracking-[0.15em] uppercase">
                Manchester
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
              Manchester Football Academy
            </h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed max-w-lg">
              Developing elite footballers in the heart of one of the world&apos;s most renowned football cities.
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
                Manchester Football Academy
              </h2>
              <div className="space-y-4">
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Our Manchester Academy is for students studying in the Manchester area and environs who wish to develop their football skills alongside their studies at the University. Most students who joined this academy are students studying at the University of Manchester, Manchester Metropolitan University, the University of Salford, etc.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  The football coaching session is focused on developing individual player tactical and technical skills. Our overall aim is to improve the players&apos; team performance. Players also have access to play in weekly matches against professional, semi-professional, academy, and amateur teams.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  The Manchester Area is a strategic location when it comes to the game of football. The city of Manchester is home to world-renowned clubs such as Manchester United FC, Manchester City FC, Bolton Wanderers FC, Stockport County FC, Wigan Athletic FC, Salford City FC, etc. This poses a unique opportunity for players to be exposed to professional football opportunities with these clubs.
                </p>
              </div>
            </div>
            <div className="relative h-[350px] md:h-[450px] overflow-hidden">
              <Image
                src="/mfa.png"
                alt="Manchester Football Training"
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
                src="/ml.jpg"
                alt="Manchester City"
                fill
                className="object-cover"
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
                Life in Manchester
              </h2>
              <div className="space-y-4">
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Manchester is a renowned hub for sports in the UK, particularly famous for its football culture, with clubs like Manchester United and Manchester City leading the scene. The city offers a variety of sport-related activities including athletics, cycling, swimming, and indoor sports.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  The city offers extensive train and tram-based transport options for reaching other cities, connecting to destinations like Liverpool, Birmingham, Sheffield, Leeds, Newcastle, Glasgow, and Edinburgh.
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
              Platt Lane Sports Complex (Former Manchester City Training Ground) located in Fallowfield Manchester offers a variety of quality pitches, a fully equipped gym, cafe, changing rooms, and free parking.
            </p>
          </div>

          <div className="space-y-5">
            <div className="relative h-[350px] md:h-[450px] overflow-hidden">
              <Image
                src="/training-ground.jpg"
                alt="Platt Lane Sports Complex"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="relative h-[250px] overflow-hidden">
                <Image src="/training2.jpg" alt="Training Pitch" fill className="object-cover" />
              </div>
              <div className="relative h-[250px] overflow-hidden">
                <Image src="/training3.jpg" alt="Football Equipment" fill className="object-cover" />
              </div>
              <div className="relative h-[250px] overflow-hidden">
                <Image src="/training4.jpg" alt="Indoor Facility" fill className="object-cover" />
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
                To avoid obstruction with players&apos; study, the football training session is partly held on weekdays and every Saturday and Sunday of the week. Based on the player&apos;s study timetable and individual player development plan, another session can be held during weekdays.
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
                <Image src="/schedule1.png" alt="Training Session" fill className="object-cover" />
              </div>
              <div className="relative h-[250px] overflow-hidden">
                <Image src="/schedule2.png" alt="Football Training" fill className="object-cover" />
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
                <Image src="/devplan1.png" alt="Football Development" fill className="object-cover" />
              </div>
              <div className="relative h-[250px] overflow-hidden">
                <Image src="/devplan2.png" alt="Skills Training" fill className="object-cover" />
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
            Link with Pro Football Clubs
          </h2>
          <p className="text-sm md:text-[15px] text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            British AUC Sport connects with various UK and European league clubs, academies, and scouts to ensure our players have every opportunity to become professional footballers.
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
