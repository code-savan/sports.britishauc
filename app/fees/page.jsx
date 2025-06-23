import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
  {
    title: 'Football Training with UEFA-qualified Coach',
    description: 'Players will be trained by highly qualified UEFA Coaches to ensure that players develop the required skills to compete professionally.'
  },
  {
    title: 'Individual Player Report',
    description: 'An individual Player Report is generated for each player, outlining the strengths and weaknesses of the player. This is an important document required by professional clubs for assessing the suitability of the player.'
  },
  {
    title: 'Player Development Plan',
    description: 'The individual development plan will be created for each player in the first instance. This shows the development road map for each player. This is to ensure that each receives an appropriate development in the area of need while enhancing their strong areas.'
  },
  {
    title: 'Football Trial with Pro Clubs',
    description: 'Players will be exposed to Pro football trials around Hungary. These are both trials organized by professional clubs and in-house trials.'
  },
  {
    title: 'Training Kits',
    description: 'Players receive training kits. However, each player is expected to provide their foot wears and, socks, and chin guard.'
  },
  {
    title: 'Player Performance Analysis',
    description: 'Player performance and development are usually analyzed to ascertain the extent of progress and skill development. This regular evaluation always helps the coach to spot areas of weakness and strength of the player.'
  },
  {
    title: 'Fitness Training',
    description: 'Physical strength and fitness are key elements of player development. Players are occasionally engaged in a supervised gym to ensure the development of physical and mental dexterity.'
  },
  {
    title: 'Outdoor Exercise',
    description: 'Outdoor activities are an integral part of development and training activities that players are exposed to. Activities like mountain climbing, hiking, swimming, etc. are necessary for the all-around development of players.'
  },
  {
    title: 'Sport Therapy/Nutrition',
    description: 'Each player receives medical and health advice from our seasoned professional Sport Therapist. Nutrition is also very important in keeping fit. Players are encouraged to stick to healthy nutrition.'
  },
  {
    title: 'Match Analysis/Classroom teaching',
    description: 'Match Analysis is another way of reviewing the game and pointing out some faulty decisions in the game. Academy and friendly matches are analyzed and dissected so players can improve their knowledge of the game.'
  },
  {
    title: 'League Club Tours',
    description: 'There is a regular visit to Hungarian league clubs around Debrecen, and tickets for matches are also provided for players.'
  },
  {
    title: 'Professional Football Trials',
    description: 'All players are taken to professional football trials held in the Debrecen area. Scouts from all over Hungary and Europe attend these trials, allowing each player to be scouted.'
  }
];

const FeesPage = () => (
  <section className="py-32 bg-gray-50">
    <div className="container max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="md:sticky md:top-32 md:self-start">
          <span className="text-primary font-semibold mb-4 block">ENROLLMENT</span>
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Intake & Registration</h2>
          <p className="text-base text-gray-600 mb-8">
            January and September are our major intake periods. However, we are flexible with start dates.
          </p>

          <div className="mb-12 space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">High Elite Performance Football Development Programme<span className="text-red-500">*</span></h3>
              <div className="bg-white p-4 overflow-x-auto">
                <table className="w-full text-xs md:text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-2 font-bold text-gray-900">Duration</th>
                      <th className="text-center py-2 font-bold text-gray-900">London (GBP)</th>
                      <th className="text-center py-2 font-bold text-gray-900">Manchester (GBP)</th>
                      <th className="text-center py-2 font-bold text-gray-900">Cardiff (GBP)</th>
                      <th className="text-center py-2 font-bold text-gray-900">Alicante (EUR)</th>
                      <th className="text-center py-2 font-bold text-gray-900">Debrecen (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {HIGH_ELITE_FEES.map((item, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-2 text-gray-800">{item.duration}</td>
                        <td className="py-2 text-center">{item.London}</td>
                        <td className="py-2 text-center">{item.Manchester}</td>
                        <td className="py-2 text-center">{item.Cardiff}</td>
                        <td className="py-2 text-center">{item.Alicante || '-'}</td>
                        <td className="py-2 text-center">{item.Debrecen}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Football Plus Education<span className="text-red-500">*</span></h3>
              <div className="bg-white p-4 overflow-x-auto">
                <table className="w-full text-xs md:text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-2 font-bold text-gray-900">Season</th>
                      <th className="text-center py-2 font-bold text-gray-900">London</th>
                      <th className="text-center py-2 font-bold text-gray-900">Manchester</th>
                      <th className="text-center py-2 font-bold text-gray-900">Cardiff</th>
                      <th className="text-center py-2 font-bold text-gray-900">Alicante</th>
                      <th className="text-center py-2 font-bold text-gray-900">Debrecen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FOOTBALL_PLUS_FEES.map((item, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-2 text-gray-800">{item.season}</td>
                        <td className="py-2 text-center">{item.London}</td>
                        <td className="py-2 text-center">{item.Manchester}</td>
                        <td className="py-2 text-center">{item.Cardiff}</td>
                        <td className="py-2 text-center">{item.Alicante || '-'}</td>
                        <td className="py-2 text-center">{item.Debrecen}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Education Option<span className="text-red-500">*</span></h3>
              <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                {EDUCATION_OPTIONS.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            </div>

            <div className="text-xs text-gray-500 space-y-1 mt-4">
              <div><span className="text-red-500">*</span> Fees are for football training ONLY.</div>
              <div><span className="text-red-500">*</span> Fees for educational programmes vary from institution to institution as well as among courses. British AUC SPORT works closely with local institutions and, therefore, can get each player the best price possible from the local universities and institutions.</div>
            </div>
          </div>

          <Button asChild className="w-full py-6 bg-primary hover:bg-red-700 text-white mt-8">
            <Link href="/contact">
              Contact Us To Register
            </Link>
          </Button>
        </div>

        <div>
          <span className="text-primary font-semibold mb-4 block">INCLUDES</span>
          <h2 className="text-4xl font-bold mb-8 text-gray-900">What Fee Covers</h2>

          <div className="space-y-4">
            {BENEFITS.map((item, i) => (
              <div key={i} className="bg-white p-6">
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="bg-primary text-white w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">
                    {i + 1}
                  </span>
                  <span className="text-sm">{item.title}</span>
                </h3>
                <p className="text-gray-600 ml-9 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeesPage;
