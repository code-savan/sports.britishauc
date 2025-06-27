import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaCheckCircle, FaUsers, FaBed, FaHeartbeat, FaChalkboardTeacher, FaUtensils, FaDumbbell, FaRunning, FaMoon } from 'react-icons/fa';

const heroImage = '/footballheroimage.jpeg';

const WEEKLY_DAYS = [
  {
    title: 'Day 1: Active Recovery & Mobility',
    icon: <FaRunning className="text-blue-500 h-7 w-7" />,
    details: [
      'Focus: Light recovery, reduce muscle soreness, improve flexibility.',
      'Morning/Afternoon: 30-45 min light cardio (cycling, swimming, brisk walk), 15-20 min dynamic stretching/foam rolling, 10 min static stretching.',
      'Evening: Rest, focus on nutrition and hydration.'
    ]
  },
  {
    title: 'Day 2: Technical Skill & Speed/Agility',
    icon: <FaDumbbell className="text-red-500 h-7 w-7" />,
    details: [
      'Focus: Ball control, passing, dribbling, shooting, quickness, change of direction.',
      'Warm-up: Light jog, dynamic stretches, ball mastery drills.',
      'Technical Drills: Passing, dribbling, shooting, SSGs.',
      'Speed & Agility: Cone drills, ladder drills, sprints.',
      'Cool-down: Light jog, static stretches.'
    ]
  },
  {
    title: 'Day 3: Strength & Power (Gym/Bodyweight)',
    icon: <FaDumbbell className="text-yellow-500 h-7 w-7" />,
    details: [
      'Focus: Build muscular strength, explosive power, injury prevention.',
      'Warm-up: Dynamic stretches, light cardio.',
      'Main: Squats, lunges, deadlifts, calf raises, jumps, push-ups, rows, core.',
      'Cool-down: Static stretches, foam rolling.'
    ]
  },
  {
    title: 'Day 4: Tactical & Game-Specific Drills',
    icon: <FaChalkboardTeacher className="text-green-500 h-7 w-7" />,
    details: [
      'Focus: Team shape, defensive/offensive principles, match simulation.',
      'Warm-up: Passing, movement.',
      'Tactical Drills: Positional play, defending, attacking, transitions, conditioned games.',
      'Cool-down: Light jog, static stretches.'
    ]
  },
  {
    title: 'Day 5: Pre-Match Activation & Rest',
    icon: <FaMoon className="text-purple-500 h-7 w-7" />,
    details: [
      'Focus: Light activation, sharpness, mental prep, energy conservation.',
      'Morning: Light session, jog, stretches, ball touches, short sprints.',
      'Afternoon/Evening: Rest, hydration, balanced meal, visualise the game.'
    ]
  }
];

const KEY_PRINCIPLES = [
  'Progressive Overload',
  'Specificity',
  'Recovery',
  'Nutrition & Hydration',
  'Listen to Your Body'
];

const NOTES = [
  'Individualisation: Template is adjusted for fitness, age, and position.',
  'Nutrition: Balanced diet rich in carbs, protein, healthy fats.',
  'Hydration: Drink plenty of water before, during, after training.',
  'Sleep: Aim for 7-9 hours of quality sleep per night.',
  'Cross-Training: Swimming/cycling for fitness and joint health.',
  'Injury Prevention: Warm up, cool down, joint stability/flexibility.',
  'Listen to Coaches: Team programme takes precedence.',
  'Consistency is key!'
];

const DURATIONS = [
  {
    title: '2-WEEK ELITE FOOTBALL PERFORMANCE TRAINING',
    points: [
      '5-day high elite football performance training per week.',
      '10 x Professional football Coaching Sessions',
      'Train with a certified FA/UEFA-qualified coach',
      'Improving your technical, tactical, and overall football skill performance,',
      'Participate in weekly semi and professional matches',
      'Play regular matches against professional, semi-professional, academy, and amateur clubs',
      'Individual Personal Development Plan',
      'Gym membership with access to the swimming pool and sauna.',
      'Individual player report feedback',
      'British AUC Sport-branded kits for training'
    ],
    age: '16 - 24',
    accommodation: 'British AUC Sport will source accommodation on behalf of the player—this is organised within a variety of options. This service is offered on a request basis only. Accommodation may be at a host family, private house, hotel, B&B, or private room within an occupied house, always close to training or on a transport route.'
  },
  {
    title: '4-WEEK ELITE FOOTBALL PERFORMANCE TRAINING',
    points: [
      '5-day high elite football performance training per week.',
      '20 x Professional football Coaching Sessions',
      'Train with a certified FA/UEFA-qualified coach',
      'Improving your technical, tactical, and overall football skill performance,',
      'Participate in weekly semi and professional matches',
      'Play regular matches against professional, semi-professional, academy, and amateur clubs',
      'Individual Personal Development Plan',
      'Gym membership with access to the swimming pool and sauna.',
      'Individual player report feedback',
      'British AUC Sport-branded kits for training'
    ],
    age: '16 - 24',
    accommodation: 'British AUC Sport will source accommodation on behalf of the player—this is organised within a variety of options. This service is offered on a request basis only. Accommodation may be at a host family, private house, hotel, B&B, or private room within an occupied house, always close to training or on a transport route.'
  },
  {
    title: '8-WEEK ELITE FOOTBALL PERFORMANCE TRAINING',
    points: [
      '5-day high elite football performance training per week.',
      '40 x Professional football Coaching Sessions',
      'Train with a certified FA/UEFA-qualified coach',
      'Improving your technical, tactical, and overall football skill performance,',
      'Participate in weekly semi and professional matches',
      'Play regular matches against professional, semi-professional, academy, and amateur clubs',
      'Individual Personal Development Plan',
      'Gym membership with access to the swimming pool and sauna.',
      'Individual player report feedback',
      'British AUC Sport-branded kits for training'
    ],
    age: '16 - 24',
    accommodation: 'British AUC Sport will source accommodation on behalf of the player—this is organised within a variety of options. This service is offered on a request basis only. Accommodation may be at a host family, private house, hotel, B&B, or private room within an occupied house, always close to training or on a transport route.'
  },
  {
    title: '16-WEEK ELITE FOOTBALL PERFORMANCE TRAINING',
    points: [
      '5-day high elite football performance training per week.',
      '80 x Professional football Coaching Sessions',
      'Train with a certified FA/UEFA-qualified coach',
      'Improving your technical, tactical, and overall football skill performance,',
      'Participate in weekly semi and professional matches',
      'Play regular matches against professional, semi-professional, academy, and amateur clubs',
      'Individual Personal Development Plan',
      'Gym membership with access to the swimming pool and sauna.',
      'Individual player report feedback',
      'British AUC Sport-branded kits for training'
    ],
    age: '16 - 24',
    accommodation: 'British AUC Sport will source accommodation on behalf of the player—this is organised within a variety of options. This service is offered on a request basis only. Accommodation may be at a host family, private house, hotel, B&B, or private room within an occupied house, always close to training or on a transport route.'
  }
];

export default function FootballOnlyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 px-4 md:px-16 pt-24 max-w-7xl mx-auto">
        <div className="order-2 md:order-1 flex flex-col gap-4">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900">High Elite Performance Football Development Programme</h1>
          <p className="text-[15px] text-gray-700 max-w-xl">Immerse yourself in a professional football environment with like-minded football enthusiasts and enhance your technical and match-play skills under the guidance of the Pro UEFA/FA-certified coaching team. At the same time as participating in rewarding training sessions, it is an opportunity to showcase your skills through the game. Coaching sessions aim to develop the players&apos; football skills, such as agility, positioning, ball control, passing and moving, formations and tactics, and the ability to attack and defend.
          {/* You will receive football training in an academy system widely recognized for its best football training practice. You will have the opportunity to experience football training delivered by an experienced Premier League club assistant coach and experience what it takes to train in a professional football environment.
           */}
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-10 w-fit py-4 text-lg font-semibold rounded-full">
            <Link href="/contact">Contact Us to Join</Link>
          </Button>
        </div>
        <div className="order-1 md:order-2 w-full h-64 md:h-96 relative">
          <Image src={heroImage} alt="Elite Football Training" fill className="object-cover rounded-xl" priority />
        </div>
      </section>

      {/* PROGRAMME STRUCTURE */}
      <section className="max-w-7xl mx-auto py-10 px-4 md:px-0 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Programme Structure</h2>
        <ul className="space-y-2 mb-4">
          <li className="text-base text-gray-700">
            Design for the players who are at a standard level and/or are aiming to break into the high-performance level.
          </li>
          <li className="text-base text-gray-700">
            By immersing players in a pro-club environment, it aims to help players develop and improve techniques in all areas, including technical, physical, and psychological aspects of the game.
          </li>
          <li className="text-base text-gray-700">
            In addition to the use of the latest video-analysis technology and training techniques, players will have the opportunity to participate in our pro-experience seminars, delivered by UEFA/FA-certified experts and covering areas including Scouting/Player identification, Nutrition and Physical Conditioning, and also specialist areas.
          </li>
        </ul>
      </section>

      {/* WEEKLY FOOTBALL TRAINING PROGRAMME */}
      <section className="max-w-7xl mx-auto py-8 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Weekly Football Training Programme</h2>
        <p className="text-base text-gray-700 mb-4">Goal: <span className="font-medium">To develop all-round footballing ability, including cardiovascular fitness, strength, agility, technical skills, and tactical awareness.</span></p>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Key Principles</h3>
          <ul className="list-disc ml-6 space-y-1 text-base text-gray-600">
            <li><span className="font-semibold">Progressive Overload:</span> Gradually increase the intensity, duration, or complexity of training.</li>
            <li><span className="font-semibold">Specificity:</span> Train in ways that mimic game situations.</li>
            <li><span className="font-semibold">Recovery:</span> Allow adequate rest for muscle repair and energy replenishment.</li>
            <li><span className="font-semibold">Nutrition & Hydration:</span> Fuel your body properly for performance and recovery.</li>
            <li><span className="font-semibold">Listen to Your Body:</span> Avoid overtraining and take extra rest if needed.</li>
          </ul>
        </div>
      </section>

      {/* WEEKLY PLAN DAYS */}
      <section className="max-w-7xl mx-auto py-6 px-4 md:px-0 space-y-8">
        {/* Day 1 */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">Day 1: Active Recovery & Mobility</h3>
          <ul className="list-disc ml-6 space-y-0.5 text-base text-gray-700 mb-1">
            <li><span className="font-semibold">Focus:</span> Light recovery, reduce muscle soreness, improve flexibility.</li>
            <li><span className="font-semibold">Morning/Afternoon:</span> 30-45 minutes: Light cardio (e.g., cycling, swimming, brisk walk) to promote blood flow and flush out lactic acid. 15-20 minutes: Dynamic stretching and foam rolling. Focus on major muscle groups used in football (hamstrings, quads, glutes, calves). 10 minutes: Static stretching (hold each stretch for 20-30 seconds).</li>
            <li><span className="font-semibold">Evening:</span> Rest, focus on nutrition and hydration.</li>
          </ul>
        </div>
        {/* Day 2 */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">Day 2: Technical Skill & Speed/Agility</h3>
          <ul className="list-disc ml-6 space-y-0.5 text-base text-gray-700 mb-1">
            <li><span className="font-semibold">Focus:</span> Ball control, passing, dribbling, shooting, quickness, change of direction.</li>
            <li><span className="font-semibold">Warm-up (15-20 minutes):</span> Light jog, dynamic stretches, football-specific movements (e.g., high knees, butt kicks, shuffles). Ball mastery drills (e.g., toe taps, sole rolls, inside/outside touches).</li>
            <li><span className="font-semibold">Technical Drills (40-50 minutes):</span> Passing & Receiving: Short and long passing drills, one-touch passing, receiving with different surfaces. Dribbling: Cone dribbling, 1v1 moves, change of pace and direction. Shooting: Finishing drills from various angles, volleys, and half-volleys. Small-Sided Games (SSG): 3v3 or 4v4 with specific technical objectives (e.g., must make 3 passes before shooting).</li>
            <li><span className="font-semibold">Speed & Agility (20-25 minutes):</span> Cone Drills: Shuttle runs, T-drill, L-drill. Ladder Drills: Quick feet, coordination. Short Sprints: 10-30 meter sprints with full recovery between reps.</li>
            <li><span className="font-semibold">Cool-down (10 minutes):</span> Light jog, static stretches.</li>
          </ul>
        </div>
        {/* Day 3 */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">Day 3: Strength & Power (Gym or Bodyweight)</h3>
          <ul className="list-disc ml-6 space-y-0.5 text-base text-gray-700 mb-1">
            <li><span className="font-semibold">Focus:</span> Build muscular strength, explosive power, and injury prevention.</li>
            <li><span className="font-semibold">Warm-up (10-15 minutes):</span> Dynamic stretches, light cardio, mobility exercises.</li>
            <li><span className="font-semibold">Main Session (45-60 minutes):</span> Lower Body: Squats (bodyweight, goblet, or barbell), Lunges (forward, reverse, lateral), Deadlifts (Romanian or conventional, if form is good), Calf Raises, Box Jumps or Broad Jumps (for power). Upper Body & Core: Push-ups or Bench Press, Rows (dumbbell or resistance band), Plank variations, Russian Twists, Leg Raises. Aim for 3-4 sets of 8-12 reps for strength, 3-5 sets of 3-6 reps for power.</li>
            <li><span className="font-semibold">Cool-down (10 minutes):</span> Static stretches, foam rolling.</li>
          </ul>
        </div>
        {/* Day 4 */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">Day 4: Tactical & Game-Specific Drills</h3>
          <ul className="list-disc ml-6 space-y-0.5 text-base text-gray-700 mb-1">
            <li><span className="font-semibold">Focus:</span> Team shape, defensive/offensive principles, decision-making, match simulation.</li>
            <li><span className="font-semibold">Warm-up (15-20 minutes):</span> As day 2, but incorporate more passing and movement.</li>
            <li><span className="font-semibold">Tactical Drills (50-60 minutes):</span> Positional Play: Drills focusing on specific roles and movements (e.g., wing play, central midfield rotations). Defensive Organisation: Pressing drills, defending in zones, recovering shape. Attacking Patterns: Build-up play from the back, crossing and finishing, combination play. Transition Drills: Quick transitions from attack to defence and vice versa. Conditioned Games: Small-sided games with specific rules to encourage tactical outcomes (e.g., must score from a cross, limit touches).</li>
            <li><span className="font-semibold">Cool-down (10 minutes):</span> Light jog, static stretches.</li>
          </ul>
        </div>
        {/* Day 5 */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">Day 5: Pre-Match Activation & Rest</h3>
          <ul className="list-disc ml-6 space-y-0.5 text-base text-gray-700 mb-1">
            <li><span className="font-semibold">Focus:</span> Light activation, maintain sharpness, mental preparation, energy conservation.</li>
            <li><span className="font-semibold">Morning:</span> 20-30 minutes: Very light, short session. Light jog, dynamic stretches, a few touches on the ball (e.g., juggling, light passing). A few short, sharp bursts (e.g., 5-10m accelerations) to activate fast-twitch muscles.</li>
            <li><span className="font-semibold">Afternoon/Evening:</span> Complete rest. Focus on hydration and a good, balanced meal. Visualise the game.</li>
          </ul>
        </div>
      </section>

      {/* NOTE SECTION */}
      <section className="max-w-7xl mx-auto py-6 px-4 md:px-0">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Note</h3>
        <ul className="list-disc ml-6 space-y-1 text-base text-gray-600">
          <li>Individualisation: This is a general High-elite Football Performance Development Training template. British AUC SPORT adjusts intensity and volume based on players' fitness level, age, and position.</li>
          <li>Nutrition: British AUC SPORT encourages players to maintain a balanced diet rich in carbohydrates for energy, protein for muscle repair, and healthy fats.</li>
          <li>Hydration: We also encourage players to drink plenty of water throughout the day, especially before, during, and after training.</li>
          <li>Sleep: We encourage players to aim for 7-9 hours of quality sleep per night for optimal recovery.</li>
          <li>Cross-Training: British AUC SPORT Football Academies incorporate other activities like swimming or cycling for cardiovascular fitness and to reduce impact on joints.</li>
          <li>Injury Prevention: We ensure that players always warm up properly, cool down, and consider exercises for joint stability and flexibility.</li>
          <li>Listen to Coaches: If you are part of a team, our coaches' programme takes precedence. This can be a supplementary guide.</li>
          <li>Remember, consistency is key!</li>
        </ul>
      </section>

      {/* DURATION SECTIONS */}
      <section className="max-w-7xl mx-auto py-10 px-4 md:px-0 space-y-10">
        {/* 2-WEEK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-stretch">
          <div className="flex flex-col justify-center h-full py-6 md:py-0 pr-0 md:pr-6">
            <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-1">2-WEEK ELITE FOOTBALL PERFORMANCE TRAINING</h3>
            <p className="text-gray-700 mb-1 text-base">Our 2-week Elite Performance Football training sessions are designed to challenge players and elevate their skills in all areas of football. Our experienced UEFA-qualified coaches focus on improving the players' technical, tactical, and overall football performance, ensuring that each session is tailored to elevate players to the next level.</p>
            <p className="text-gray-700 mb-1 text-base">Whether refining individual skills or working on team strategies, every aspect of your training is geared toward continuous improvement. In addition to the high-level training, you will have the chance to compete in competitive matches against top academies and clubs across England. These real-game scenarios provide the perfect opportunity to test your skills and apply what you've learned in training.</p>
            <ul className="list-disc ml-6 text-base text-gray-700 space-y-0.5 mb-1">
              <li>5-day high elite football performance training per week.</li>
              <li>10 x Professional football Coaching Sessions</li>
              <li>Train with a certified FA/UEFA-qualified coach</li>
              <li>Improving your technical, tactical, and overall football skill performance,</li>
              <li>Participate in weekly semi and professional matches</li>
              <li>Play regular matches against professional, semi-professional, academy, and amateur clubs</li>
              <li>Individual Personal Development Plan</li>
              <li>Gym membership with access to the swimming pool and sauna.</li>
              <li>Individual player report feedback</li>
              <li>British AUC Sport-branded kits for training</li>
            </ul>
            <div className="flex items-center gap-2 mt-1 mb-1">
              <span className="text-sm font-semibold text-gray-700">Age: 16 - 24</span>
            </div>
            <div className="text-xs text-gray-600 mt-1">
              <span className="font-semibold">Accommodation Option:</span> British AUC Sport will source accommodation on behalf of the player—this is organised within a variety of options. This service is offered on a request basis only. Accommodation may be at a host family, private house, hotel, B&amp;B, or private room within an occupied house, always close to training or on a transport route.
            </div>
          </div>
        </div>
        {/* 4-WEEK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-stretch">
          <div className="flex flex-col justify-center h-full py-6 md:py-0 pr-0 md:pr-6">
            <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-1">4-WEEK ELITE FOOTBALL PERFORMANCE TRAINING</h3>
            <p className="text-gray-700 mb-1 text-base">Our 4-week Elite Performance Football training sessions are designed to challenge players and elevate their skills in all areas of football. Our experienced UEFA-qualified coaches focus on improving the players&apos; technical, tactical, and overall football performance, ensuring that each session is tailored to elevate players to the next level.</p>
            <p className="text-gray-700 mb-1 text-base">Whether refining individual skills or working on team strategies, every aspect of your training is geared toward continuous improvement. In addition to the high-level training, you will have the chance to compete in competitive matches against top academies and clubs across England. These real-game scenarios provide the perfect opportunity to test your skills and apply what you&apos;ve learned in training.</p>
            <ul className="list-disc ml-6 text-base text-gray-700 space-y-0.5 mb-1">
              <li>5-day high elite football performance training per week.</li>
              <li>20 x Professional football Coaching Sessions</li>
              <li>Train with a certified FA/UEFA-qualified coach</li>
              <li>Improving your technical, tactical, and overall football skill performance,</li>
              <li>Participate in weekly semi and professional matches</li>
              <li>Play regular matches against professional, semi-professional, academy, and amateur clubs</li>
              <li>Individual Personal Development Plan</li>
              <li>Gym membership with access to the swimming pool and sauna.</li>
              <li>Individual player report feedback</li>
              <li>British AUC Sport-branded kits for training</li>
            </ul>
            <div className="flex items-center gap-2 mt-1 mb-1">
              <span className="text-sm font-semibold text-gray-700">Age: 16 - 24</span>
            </div>
            <div className="text-xs text-gray-600 mt-1">
              <span className="font-semibold">Accommodation Option:</span> British AUC Sport will source accommodation on behalf of the player—this is organised within a variety of options. This service is offered on a request basis only. Accommodation may be at a host family, private house, hotel, B&amp;B, or private room within an occupied house, always close to training or on a transport route.
            </div>
          </div>
        </div>
        {/* 8-WEEK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-stretch">
          <div className="flex flex-col justify-center h-full py-6 md:py-0 pr-0 md:pr-6">
            <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-1">8-WEEK ELITE FOOTBALL PERFORMANCE TRAINING</h3>
            <p className="text-gray-700 mb-1 text-base">Our 8-week Elite Performance Football training sessions are designed to challenge players and elevate their skills in all areas of football. Our experienced UEFA-qualified coaches focus on improving the players&apos; technical, tactical, and overall football performance, ensuring that each session is tailored to elevate players to the next level.</p>
            <p className="text-gray-700 mb-1 text-base">Whether refining individual skills or working on team strategies, every aspect of your training is geared toward continuous improvement. In addition to the high-level training, you will have the chance to compete in competitive matches against top academies and clubs across England. These real-game scenarios provide the perfect opportunity to test your skills and apply what you&apos;ve learned in training.</p>
            <ul className="list-disc ml-6 text-base text-gray-700 space-y-0.5 mb-1">
              <li>5-day high elite football performance training per week.</li>
              <li>40 x Professional football Coaching Sessions</li>
              <li>Train with a certified FA/UEFA-qualified coach</li>
              <li>Improving your technical, tactical, and overall football skill performance,</li>
              <li>Participate in weekly semi and professional matches</li>
              <li>Play regular matches against professional, semi-professional, academy, and amateur clubs</li>
              <li>Individual Personal Development Plan</li>
              <li>Gym membership with access to the swimming pool and sauna.</li>
              <li>Individual player report feedback</li>
              <li>British AUC Sport-branded kits for training</li>
            </ul>
            <div className="flex items-center gap-2 mt-1 mb-1">
              <span className="text-sm font-semibold text-gray-700">Age: 16 - 24</span>
            </div>
            <div className="text-xs text-gray-600 mt-1">
              <span className="font-semibold">Accommodation Option:</span> British AUC Sport will source accommodation on behalf of the player—this is organised within a variety of options. This service is offered on a request basis only. Accommodation may be at a host family, private house, hotel, B&amp;B, or private room within an occupied house, always close to training or on a transport route.
            </div>
          </div>
        </div>
        {/* 16-WEEK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-stretch">
          <div className="flex flex-col justify-center h-full py-6 md:py-0 pr-0 md:pr-6">
            <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-1">16-WEEK ELITE FOOTBALL PERFORMANCE TRAINING</h3>
            <p className="text-gray-700 mb-1 text-base">Our 16-week Elite Performance Football training sessions are designed to challenge players and elevate their skills in all areas of football. Our experienced UEFA-qualified coaches focus on improving the players&apos; technical, tactical, and overall football performance, ensuring that each session is tailored to elevate players to the next level.</p>
            <p className="text-gray-700 mb-1 text-base">Whether refining individual skills or working on team strategies, every aspect of your training is geared toward continuous improvement. In addition to the high-level training, you will have the chance to compete in competitive matches against top academies and clubs across England. These real-game scenarios provide the perfect opportunity to test your skills and apply what you&apos;ve learned in training.</p>
            <ul className="list-disc ml-6 text-base text-gray-700 space-y-0.5 mb-1">
              <li>5-day high elite football performance training per week.</li>
              <li>80 x Professional football Coaching Sessions</li>
              <li>Train with a certified FA/UEFA-qualified coach</li>
              <li>Improving your technical, tactical, and overall football skill performance,</li>
              <li>Participate in weekly semi and professional matches</li>
              <li>Play regular matches against professional, semi-professional, academy, and amateur clubs</li>
              <li>Individual Personal Development Plan</li>
              <li>Gym membership with access to the swimming pool and sauna.</li>
              <li>Individual player report feedback</li>
              <li>British AUC Sport-branded kits for training</li>
            </ul>
            <div className="flex items-center gap-2 mt-1 mb-1">
              <span className="text-sm font-semibold text-gray-700">Age: 16 - 24</span>
            </div>
            <div className="text-xs text-gray-600 mt-1">
              <span className="font-semibold">Accommodation Option:</span> British AUC Sport will source accommodation on behalf of the player—this is organised within a variety of options. This service is offered on a request basis only. Accommodation may be at a host family, private house, hotel, B&amp;B, or private room within an occupied house, always close to training or on a transport route.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
