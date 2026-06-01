import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Mail, UserCheck, FileText, CheckCircle, Clock } from 'lucide-react';

const PROGRAMMES = [
  { weeks: 2, sessions: 10 },
  { weeks: 4, sessions: 20 },
  { weeks: 8, sessions: 40 },
  { weeks: 16, sessions: 80 },
];

const HOW_TO_JOIN = [
  {
    icon: <Mail size="18" stroke="#dc2626" />,
    title: 'Contact Us',
    desc: 'Call, email, or complete our Pre-Application Form, providing details about yourself along with your football and academic aspirations.'
  },
  {
    icon: <UserCheck size="18" stroke="#dc2626" />,
    title: 'Speak to Us',
    desc: 'Our Football Advisor will speak to you to learn more about you and ensure that British AUC SPORT Football Academy is the right fit for your football goals.'
  },
  {
    icon: <FileText size="18" stroke="#dc2626" />,
    title: 'Submit an Application',
    desc: 'We will send you an application form to complete after the conversation.'
  },
  {
    icon: <CheckCircle size="18" stroke="#dc2626" />,
    title: 'Confirmation of Acceptance Letter',
    desc: 'Once accepted, we will send you a confirmation of acceptance.'
  },
];

const ApplyNowPage = () => (
  <div className="pt-16">
    {/* Hero */}
    <section className="relative h-[70vh] md:h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/footballheroimage.jpeg"
          alt="Elite Football Training"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-0.5 h-5 bg-red-600" />
            <span className="text-xs font-medium text-white/60 tracking-[0.15em] uppercase">
              Apply Now
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
            Take the Next Step in Your Football Journey
          </h1>
          <p className="text-sm md:text-[15px] text-white/60 leading-relaxed max-w-lg">
            Join our High Elite Performance Football Development Programme and train like a professional.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-medium px-5 py-2.5 hover:bg-red-700 transition-colors"
            >
              Start Application
              <ArrowRight size={15} />
            </Link>
            <Link
              href="#programme"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-medium px-5 py-2.5 hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Intake & Registration */}
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start mb-14">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-0.5 h-5 bg-red-600 shrink-0" />
              <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Intake</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                Intake & Registration
              </h2>
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                <span className="text-red-600 font-medium">January</span> and{' '}
                <span className="text-red-600 font-medium">September</span> are our major intake periods. However, we are flexible with start dates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Programme Overview */}
    <section id="programme" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start mb-14">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-0.5 h-5 bg-red-600 shrink-0" />
              <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Programme</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                High Elite Performance Football Development Programme
              </h2>
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                Location: London, Manchester, Cardiff, Debrecen, and Alicante
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-4">
              Immerse yourself in a professional football environment with like-minded football enthusiasts and enhance your technical and match-play skills under the guidance of the Pro UEFA/FA-certified coaching team. Coaching sessions aim to develop agility, positioning, ball control, passing, formations, tactics, and the ability to attack and defend.
            </p>
            <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-6">
              You will receive football training in an academy system widely recognized for its best football training practice, delivered by an experienced Premier League club assistant coach.
            </p>
            <ul className="space-y-2">
              {[
                'Designed for players at a standard level or aiming for high-performance.',
                'Pro-club environment to develop technical, physical, and psychological aspects.',
                'Latest video-analysis technology and pro-experience seminars (Scouting, Nutrition, Conditioning).'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-red-600 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src="/footballheroimage.jpeg"
              alt="Football training"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Weekly Programme */}
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start mb-14">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-0.5 h-5 bg-red-600 shrink-0" />
              <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Training</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                Weekly Football Training Programme
              </h2>
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                A structured weekly schedule designed to develop all aspects of your game.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-100 p-8">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Key Principles</h3>
            <ul className="space-y-2">
              {['Progressive Overload', 'Specificity', 'Recovery', 'Nutrition & Hydration', 'Listen to Your Body'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-red-600 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Notes</h3>
              <ul className="space-y-2">
                {[
                  'Individualisation: Programme is adjusted for fitness, age, and position.',
                  'Nutrition: Balanced diet, hydration, and sleep are encouraged.',
                  'Cross-Training: Swimming, cycling, and more for all-round fitness.',
                  'Injury Prevention: Proper warm-up, cool-down, and joint stability.',
                  'Listen to Coaches: Our coaches\' programme takes precedence.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-red-600 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border border-gray-100 p-8">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Sample Week</h3>
            <ul className="space-y-3">
              {[
                { day: 'Day 1', activity: 'Active Recovery & Mobility' },
                { day: 'Day 2', activity: 'Technical Skill & Speed/Agility' },
                { day: 'Day 3', activity: 'Strength & Power (Gym/Bodyweight)' },
                { day: 'Day 4', activity: 'Tactical & Game-Specific Drills' },
                { day: 'Day 5', activity: 'Pre-Match Activation & Rest' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-500">
                  <Clock size="14" className="text-red-400 shrink-0" />
                  <span className="font-medium text-gray-700 w-16">{item.day}:</span>
                  <span>{item.activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Programme Durations */}
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start mb-14">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-0.5 h-5 bg-red-600 shrink-0" />
              <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Durations</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                Choose Your Programme
              </h2>
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                Flexible durations to match your goals and schedule.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROGRAMMES.map(({ weeks, sessions }) => (
            <div key={weeks} className="border border-gray-100 p-8 bg-white">
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                {weeks}-Week Elite Football Performance Training
              </h3>
              <ul className="space-y-2 mb-4">
                {[
                  '5-day high elite football performance training per week',
                  `${sessions} x Professional football Coaching Sessions`,
                  'Train with a certified FA/UEFA-qualified coach',
                  'Technical, tactical, and overall skill improvement',
                  'Participate in weekly semi and professional matches',
                  'Play regular matches against pro, semi-pro, academy, and amateur clubs',
                  'Individual Personal Development Plan',
                  'Gym membership with swimming pool and sauna access',
                  'Individual player report feedback',
                  'British AUC Sport-branded kits for training',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-red-600 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-gray-100 space-y-1">
                <p className="text-xs text-gray-400"><span className="font-medium text-gray-600">Age:</span> 16 - 24</p>
                <p className="text-xs text-gray-400">
                  <span className="font-medium text-gray-600">Accommodation:</span> Optional — sourced on request (host family, hotel, B&B, or private room near training).
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How to Join */}
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start mb-14">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-0.5 h-5 bg-red-600 shrink-0" />
              <span className="border border-gray-200 py-1 px-2 text-[11px] text-gray-500">Process</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                How to Join British AUC Sport Academy
              </h2>
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                British AUC SPORT Football Academy offers a flexible football program that caters to your schedule and goals. Whether you&apos;re looking for an intense 2-week course to improve quickly or a comprehensive 1-year program for long-term development, we have options to suit all needs.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src="/footballheroimage.jpeg"
              alt="Join our academy"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            {HOW_TO_JOIN.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-red-50 flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
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
          Ready to Join?
        </h2>
        <p className="text-sm md:text-[15px] text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
          Secure your spot in our next intake and take your football career to the next level with British AUC Sport.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-red-700 text-sm font-medium px-6 py-3 hover:bg-gray-100 transition-colors"
        >
          Contact Us to Register
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </div>
);

export default ApplyNowPage;
