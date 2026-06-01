import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const heroImage = '/footballheroimage.jpg';

const DURATIONS = [
  {
    title: '2-WEEK ELITE FOOTBALL PERFORMANCE TRAINING',
    sessions: '10',
    points: [
      '5-day high elite football performance training per week.',
      '10 x Professional football Coaching Sessions',
      'Train with a certified FA/UEFA-qualified coach',
      'Improving your technical, tactical, and overall football skill performance',
      'Participate in weekly semi and professional matches',
      'Play regular matches against professional, semi-professional, academy, and amateur clubs',
      'Individual Personal Development Plan',
      'Gym membership with access to the swimming pool and sauna',
      'Individual player report feedback',
      'British AUC Sport-branded kits for training',
    ],
    age: '16 - 24',
    accommodation: 'British AUC Sport will source accommodation on behalf of the player—this is organised within a variety of options. This service is offered on a request basis only. Accommodation may be at a host family, private house, hotel, B&B, or private room within an occupied house, always close to training or on a transport route.',
  },
  {
    title: '4-WEEK ELITE FOOTBALL PERFORMANCE TRAINING',
    sessions: '20',
    points: [
      '5-day high elite football performance training per week.',
      '20 x Professional football Coaching Sessions',
      'Train with a certified FA/UEFA-qualified coach',
      'Improving your technical, tactical, and overall football skill performance',
      'Participate in weekly semi and professional matches',
      'Play regular matches against professional, semi-professional, academy, and amateur clubs',
      'Individual Personal Development Plan',
      'Gym membership with access to the swimming pool and sauna',
      'Individual player report feedback',
      'British AUC Sport-branded kits for training',
    ],
    age: '16 - 24',
    accommodation: 'British AUC Sport will source accommodation on behalf of the player—this is organised within a variety of options. This service is offered on a request basis only. Accommodation may be at a host family, private house, hotel, B&B, or private room within an occupied house, always close to training or on a transport route.',
  },
  {
    title: '8-WEEK ELITE FOOTBALL PERFORMANCE TRAINING',
    sessions: '40',
    points: [
      '5-day high elite football performance training per week.',
      '40 x Professional football Coaching Sessions',
      'Train with a certified FA/UEFA-qualified coach',
      'Improving your technical, tactical, and overall football skill performance',
      'Participate in weekly semi and professional matches',
      'Play regular matches against professional, semi-professional, academy, and amateur clubs',
      'Individual Personal Development Plan',
      'Gym membership with access to the swimming pool and sauna',
      'Individual player report feedback',
      'British AUC Sport-branded kits for training',
    ],
    age: '16 - 24',
    accommodation: 'British AUC Sport will source accommodation on behalf of the player—this is organised within a variety of options. This service is offered on a request basis only. Accommodation may be at a host family, private house, hotel, B&B, or private room within an occupied house, always close to training or on a transport route.',
  },
  {
    title: '16-WEEK ELITE FOOTBALL PERFORMANCE TRAINING',
    sessions: '80',
    points: [
      '5-day high elite football performance training per week.',
      '80 x Professional football Coaching Sessions',
      'Train with a certified FA/UEFA-qualified coach',
      'Improving your technical, tactical, and overall football skill performance',
      'Participate in weekly semi and professional matches',
      'Play regular matches against professional, semi-professional, academy, and amateur clubs',
      'Individual Personal Development Plan',
      'Gym membership with access to the swimming pool and sauna',
      'Individual player report feedback',
      'British AUC Sport-branded kits for training',
    ],
    age: '16 - 24',
    accommodation: 'British AUC Sport will source accommodation on behalf of the player—this is organised within a variety of options. This service is offered on a request basis only. Accommodation may be at a host family, private house, hotel, B&B, or private room within an occupied house, always close to training or on a transport route.',
  },
];

const WEEKLY_DAYS = [
  {
    day: 'Day 1',
    title: 'Active Recovery & Mobility',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    details: [
      'Light recovery, reduce muscle soreness, improve flexibility.',
      '30-45 min light cardio (cycling, swimming, brisk walk), 15-20 min dynamic stretching/foam rolling, 10 min static stretching.',
      'Evening: Rest, focus on nutrition and hydration.',
    ],
  },
  {
    day: 'Day 2',
    title: 'Technical Skill & Speed/Agility',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    details: [
      'Ball control, passing, dribbling, shooting, quickness, change of direction.',
      'Warm-up: Light jog, dynamic stretches, ball mastery drills.',
      'Technical Drills: Passing, dribbling, shooting, SSGs.',
      'Speed & Agility: Cone drills, ladder drills, sprints.',
      'Cool-down: Light jog, static stretches.',
    ],
  },
  {
    day: 'Day 3',
    title: 'Strength & Power (Gym/Bodyweight)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5h11M6.5 17.5h11" />
        <path d="M2.5 12h19" />
        <circle cx="6.5" cy="6.5" r="2.5" />
        <circle cx="6.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
    details: [
      'Build muscular strength, explosive power, injury prevention.',
      'Warm-up: Dynamic stretches, light cardio.',
      'Main: Squats, lunges, deadlifts, calf raises, jumps, push-ups, rows, core.',
      'Cool-down: Static stretches, foam rolling.',
    ],
  },
  {
    day: 'Day 4',
    title: 'Tactical & Game-Specific Drills',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    details: [
      'Team shape, defensive/offensive principles, match simulation.',
      'Warm-up: Passing, movement.',
      'Tactical Drills: Positional play, defending, attacking, transitions, conditioned games.',
      'Cool-down: Light jog, static stretches.',
    ],
  },
  {
    day: 'Day 5',
    title: 'Pre-Match Activation & Rest',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    ),
    details: [
      'Light activation, sharpness, mental prep, energy conservation.',
      'Morning: Light session, jog, stretches, ball touches, short sprints.',
      'Afternoon/Evening: Rest, hydration, balanced meal, visualise the game.',
    ],
  },
];

export default function FootballOnlyPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Elite Football Training"
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
                Football Only
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
              High Elite Performance Football Development Programme
            </h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed max-w-lg">
              Immerse yourself in a professional football environment and enhance your technical and match-play skills under the guidance of Pro UEFA/FA-certified coaches.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-medium px-5 py-2.5 hover:bg-red-700 transition-colors"
              >
                Contact Us to Join
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Structure */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start mb-14">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-0.5 h-5 bg-red-600 shrink-0" />
                <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                  Programme Structure
                </span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">
                  High-Performance Training Framework
                </h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Designed for players who are at a standard level and/or are aiming to break into the high-performance level. By immersing players in a pro-club environment, it aims to help players develop and improve techniques in all areas, including technical, physical, and psychological aspects of the game.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-100 p-8">
              <div className="w-11 h-11 bg-red-50 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Technical Development</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Advanced technical training including ball control, passing, dribbling, and shooting with FA/UEFA-certified coaches.
              </p>
            </div>
            <div className="border border-gray-100 p-8">
              <div className="w-11 h-11 bg-red-50 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Physical Conditioning</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                In addition to training, players will have access to video-analysis technology and pro-experience seminars delivered by experts.
              </p>
            </div>
            <div className="border border-gray-100 p-8">
              <div className="w-11 h-11 bg-red-50 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Match Experience</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Opportunity to participate in competitive matches against professional, semi-professional, and academy clubs across England.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Training Programme */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start mb-14">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-0.5 h-5 bg-red-600 shrink-0" />
                <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                  Weekly Plan
                </span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                  Weekly Football Training Programme
                </h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  A structured weekly programme designed to develop all-round footballing ability, including cardiovascular fitness, strength, agility, technical skills, and tactical awareness.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {WEEKLY_DAYS.map((day, i) => (
              <div key={i} className="border border-gray-100 bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-red-50 flex items-center justify-center shrink-0">
                    {day.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-red-600 tracking-[0.1em] uppercase">{day.day}</span>
                    <h3 className="text-base font-semibold text-gray-900">{day.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {day.details.map((detail, j) => (
                    <li key={j} className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 bg-gray-300 mt-2 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles & Notes */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-0.5 h-5 bg-red-600 shrink-0" />
                <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                  Key Principles
                </span>
              </div>
              <ul className="space-y-3">
                <li className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                  <CheckCircle2 size="15" className="text-red-400 mt-0.5 shrink-0" />
                  <span><span className="font-medium text-gray-900">Progressive Overload:</span> Gradually increase intensity, duration, or complexity of training.</span>
                </li>
                <li className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                  <CheckCircle2 size="15" className="text-red-400 mt-0.5 shrink-0" />
                  <span><span className="font-medium text-gray-900">Specificity:</span> Train in ways that mimic game situations.</span>
                </li>
                <li className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                  <CheckCircle2 size="15" className="text-red-400 mt-0.5 shrink-0" />
                  <span><span className="font-medium text-gray-900">Recovery:</span> Allow adequate rest for muscle repair and energy replenishment.</span>
                </li>
                <li className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                  <CheckCircle2 size="15" className="text-red-400 mt-0.5 shrink-0" />
                  <span><span className="font-medium text-gray-900">Nutrition &amp; Hydration:</span> Fuel your body properly for performance and recovery.</span>
                </li>
                <li className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                  <CheckCircle2 size="15" className="text-red-400 mt-0.5 shrink-0" />
                  <span><span className="font-medium text-gray-900">Listen to Your Body:</span> Avoid overtraining and take extra rest if needed.</span>
                </li>
              </ul>
            </div>
            <div className="border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-0.5 h-5 bg-red-600 shrink-0" />
                <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                  Important Notes
                </span>
              </div>
              <ul className="space-y-3">
                <li className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-300 mt-2 shrink-0" />
                  <span><span className="font-medium text-gray-900">Individualisation:</span> This template is adjusted based on fitness level, age, and position.</span>
                </li>
                <li className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-300 mt-2 shrink-0" />
                  <span><span className="font-medium text-gray-900">Nutrition:</span> Balanced diet rich in carbohydrates, protein, and healthy fats.</span>
                </li>
                <li className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-300 mt-2 shrink-0" />
                  <span><span className="font-medium text-gray-900">Hydration:</span> Drink plenty of water before, during, and after training.</span>
                </li>
                <li className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-300 mt-2 shrink-0" />
                  <span><span className="font-medium text-gray-900">Sleep:</span> Aim for 7-9 hours of quality sleep per night.</span>
                </li>
                <li className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-300 mt-2 shrink-0" />
                  <span><span className="font-medium text-gray-900">Cross-Training:</span> Swimming/cycling for fitness and joint health.</span>
                </li>
                <li className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-300 mt-2 shrink-0" />
                  <span><span className="font-medium text-gray-900">Injury Prevention:</span> Warm up, cool down, joint stability/flexibility.</span>
                </li>
                <li className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-300 mt-2 shrink-0" />
                  <span><span className="font-medium text-gray-900">Listen to Coaches:</span> Team programme takes precedence.</span>
                </li>
                <li className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-300 mt-2 shrink-0" />
                  <span><span className="font-medium text-gray-900">Consistency is key!</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Duration Options */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start mb-14">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-0.5 h-5 bg-red-600 shrink-0" />
                <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                  Programmes
                </span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                  Choose Your Programme Duration
                </h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Select the training duration that best suits your development goals. Each programme follows our elite performance framework with increasing coaching sessions.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {DURATIONS.map((dur, i) => (
              <div key={i} className="border border-gray-100 bg-white p-8 md:p-10">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{dur.title}</h3>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-5">
                  Our {dur.title.toLowerCase()} sessions are designed to challenge players and elevate their skills in all areas of football. Our experienced UEFA-qualified coaches focus on improving technical, tactical, and overall football performance, ensuring each session is tailored to elevate players to the next level.
                </p>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-5">
                  Whether refining individual skills or working on team strategies, every aspect of your training is geared toward continuous improvement. You will have the chance to compete in competitive matches against top academies and clubs across England.
                </p>
                <ul className="space-y-2 mb-5">
                  {dur.points.map((point, j) => (
                    <li key={j} className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                      <CheckCircle2 size="15" className="text-red-400 mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="text-gray-400">Age:</span>
                  <span className="font-medium text-gray-900">{dur.age}</span>
                </div>
                <div className="text-xs text-gray-400 leading-relaxed border-t border-gray-100 pt-4">
                  <span className="font-medium text-gray-600">Accommodation Option:</span>{' '}
                  {dur.accommodation}
                </div>
              </div>
            ))}
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
            Ready to Elevate Your Game?
          </h2>
          <p className="text-sm md:text-[15px] text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Take the first step toward professional football development. Contact our team to discuss your training goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-red-700 text-sm font-medium px-6 py-3 hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
