import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const HIGH_ELITE_FEES = [
  { duration: '2 Weeks', London: '£1,638', Manchester: '£1,240', Cardiff: '£1,240', Alicante: '£1,240', Debrecen: '$773' },
  { duration: '4 Weeks', London: '£3,250', Manchester: '£2,500', Cardiff: '£2,500', Alicante: '£2,500', Debrecen: '$1,535' },
  { duration: '8 Weeks', London: '£6,435', Manchester: '£4,950', Cardiff: '£4,950', Alicante: '£4,950', Debrecen: '$3,039' },
  { duration: '16 Weeks', London: '£12,870', Manchester: '£9,900', Cardiff: '£9,900', Alicante: '£9,900', Debrecen: '$6,078' },
  { duration: '18 Weeks', London: '£14,508', Manchester: '£11,160', Cardiff: '£11,160', Alicante: '£11,160', Debrecen: '$6,851' },
  { duration: '36 Weeks', London: '£29,016', Manchester: '£22,320', Cardiff: '£22,320', Alicante: '£22,320', Debrecen: '$13,702' },
];

const FOOTBALL_PLUS_FEES = [
  { season: 'Full Season (36 weeks)', London: '£14,950', Manchester: '£12,950', Cardiff: '£12,950', Alicante: '£10,950', Debrecen: '$7,950' },
  { season: 'Half-Season (18 weeks)', London: '£8,970', Manchester: '£7,770', Cardiff: '£7,770', Alicante: '', Debrecen: '$4,770' },
];

const EDUCATION_OPTIONS = [
  'A Levels',
  'International Foundation Year',
  'International Year One',
  'Degree programme',
];

const BENEFITS = [
  { title: 'Football Training with UEFA-qualified Coach', description: 'Players will be trained by highly qualified UEFA Coaches to ensure that players develop the required skills to compete professionally.' },
  { title: 'Individual Player Report', description: 'An individual Player Report is generated for each player, outlining the strengths and weaknesses of the player.' },
  { title: 'Player Development Plan', description: 'The individual development plan will be created for each player showing the development road map for their growth.' },
  { title: 'Football Trial with Pro Clubs', description: 'Players will be exposed to professional football trials organised by the Professional Football Scouts Association and pro clubs.' },
  { title: 'Training Kits', description: 'Players receive training kits. Footwear, socks, and chin guard to be provided by the player.' },
  { title: 'Player Performance Analysis', description: 'Player performance and development are analyzed to ascertain the extent of progress and skill development.' },
  { title: 'Fitness Training', description: 'Physical strength and fitness are key elements of player development with supervised gym sessions.' },
  { title: 'Outdoor Exercise', description: 'Outdoor activities like mountain climbing, hiking, and swimming are part of the all-around development.' },
  { title: 'Sport Therapy/Nutrition', description: 'Each player receives medical and health advice from our seasoned professional Sport Therapist.' },
  { title: 'Match Analysis & Classroom Teaching', description: 'Academy and friendly matches are analyzed and dissected so players can improve their game knowledge.' },
  { title: 'League Club Tours', description: 'Regular visits to professional league clubs with match tickets provided for players.' },
  { title: 'Professional Football Trials', description: 'Players attend professional football trials where scouts from across the UK and Europe attend.' },
];

const FeesPage = () => (
  <div className="pt-16">
    {/* Hero */}
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-0.5 h-5 bg-red-600 shrink-0" />
              <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                Fees &amp; Enrolment
              </span>
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
                Tuition &amp; Programme Fees
              </h1>
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed max-w-lg">
                January and September are our major intake periods. However, we are flexible with start dates. Below is a breakdown of our programme fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Main Content */}
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Fees */}
          <div>
            {/* High Elite Fees */}
            <div className="mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                High Elite Performance Football Development Programme<span className="text-red-500 ml-1">*</span>
              </h2>
              <div className="border border-gray-100 overflow-x-auto">
                <table className="w-full text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 tracking-[0.1em] uppercase whitespace-nowrap">Duration</th>
                      <th className="text-center py-3 px-3 text-xs font-semibold text-gray-500 tracking-[0.1em] uppercase whitespace-nowrap">London</th>
                      <th className="text-center py-3 px-3 text-xs font-semibold text-gray-500 tracking-[0.1em] uppercase whitespace-nowrap">Manchester</th>
                      <th className="text-center py-3 px-3 text-xs font-semibold text-gray-500 tracking-[0.1em] uppercase whitespace-nowrap">Cardiff</th>
                      <th className="text-center py-3 px-3 text-xs font-semibold text-gray-500 tracking-[0.1em] uppercase whitespace-nowrap">Alicante</th>
                      <th className="text-center py-3 px-3 text-xs font-semibold text-gray-500 tracking-[0.1em] uppercase whitespace-nowrap">Debrecen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {HIGH_ELITE_FEES.map((item, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-2.5 px-4 text-sm text-gray-600 whitespace-nowrap">{item.duration}</td>
                        <td className="py-2.5 px-3 text-sm text-gray-600 text-center">{item.London}</td>
                        <td className="py-2.5 px-3 text-sm text-gray-600 text-center">{item.Manchester}</td>
                        <td className="py-2.5 px-3 text-sm text-gray-600 text-center">{item.Cardiff}</td>
                        <td className="py-2.5 px-3 text-sm text-gray-600 text-center">{item.Alicante || '-'}</td>
                        <td className="py-2.5 px-3 text-sm text-gray-600 text-center">{item.Debrecen}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Football Plus Education Fees */}
            <div className="mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Football Plus Education<span className="text-red-500 ml-1">*</span>
              </h2>
              <div className="border border-gray-100 overflow-x-auto">
                <table className="w-full text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 tracking-[0.1em] uppercase whitespace-nowrap">Season</th>
                      <th className="text-center py-3 px-3 text-xs font-semibold text-gray-500 tracking-[0.1em] uppercase whitespace-nowrap">London</th>
                      <th className="text-center py-3 px-3 text-xs font-semibold text-gray-500 tracking-[0.1em] uppercase whitespace-nowrap">Manchester</th>
                      <th className="text-center py-3 px-3 text-xs font-semibold text-gray-500 tracking-[0.1em] uppercase whitespace-nowrap">Cardiff</th>
                      <th className="text-center py-3 px-3 text-xs font-semibold text-gray-500 tracking-[0.1em] uppercase whitespace-nowrap">Alicante</th>
                      <th className="text-center py-3 px-3 text-xs font-semibold text-gray-500 tracking-[0.1em] uppercase whitespace-nowrap">Debrecen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FOOTBALL_PLUS_FEES.map((item, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-2.5 px-4 text-sm text-gray-600 whitespace-nowrap">{item.season}</td>
                        <td className="py-2.5 px-3 text-sm text-gray-600 text-center">{item.London}</td>
                        <td className="py-2.5 px-3 text-sm text-gray-600 text-center">{item.Manchester}</td>
                        <td className="py-2.5 px-3 text-sm text-gray-600 text-center">{item.Cardiff}</td>
                        <td className="py-2.5 px-3 text-sm text-gray-600 text-center">{item.Alicante || '-'}</td>
                        <td className="py-2.5 px-3 text-sm text-gray-600 text-center">{item.Debrecen}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Education Options */}
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                Education Options<span className="text-red-500 ml-1">*</span>
              </h2>
              <ul className="space-y-1.5">
                {EDUCATION_OPTIONS.map((option, i) => (
                  <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-300 shrink-0" />
                    {option}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footnotes */}
            <div className="text-xs text-gray-400 space-y-1.5 leading-relaxed mb-8">
              <p><span className="text-red-500">*</span> Fees are for football training ONLY.</p>
              <p><span className="text-red-500">*</span> Fees for educational programmes vary from institution to institution as well as among courses. British AUC SPORT works closely with local institutions and, therefore, can get each player the best price possible from local universities.</p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-medium px-5 py-2.5 hover:bg-red-700 transition-colors"
            >
              Contact Us to Register
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right: Benefits */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-0.5 h-5 bg-red-600 shrink-0" />
              <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                Includes
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-6">
              What Fee Covers
            </h2>
            <div className="space-y-3">
              {BENEFITS.map((item, i) => (
                <div key={i} className="border border-gray-100 p-5">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5 flex items-start gap-2">
                    <CheckCircle2 size="15" className="text-red-400 mt-0.5 shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed ml-7">{item.description}</p>
                </div>
              ))}
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
          Ready to Start Your Journey?
        </h2>
        <p className="text-sm md:text-[15px] text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
          Contact our team to discuss your programme options and take the first step toward professional football development.
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

export default FeesPage;
