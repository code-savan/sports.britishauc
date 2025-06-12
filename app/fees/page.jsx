import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ACADEMY_FEES = [
  { academy: 'Debrecen Football Academy', fee: '$7,950' },
  { academy: 'London Football Academy', fee: '£14,950' },
  { academy: 'Manchester Football Academy', fee: '£12,950' },
  { academy: 'Alicante Football Academy', fee: '£10,950' }
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

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Fees</h3>
            <div className="bg-white p-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 text-base font-bold text-gray-900">ACADEMY</th>
                    <th className="text-right py-4 text-base font-bold text-gray-900">FULL SEASON (36 WEEKS)</th>
                  </tr>
                </thead>
                <tbody>
                  {ACADEMY_FEES.map((item, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-4 text-gray-800 text-sm">{item.academy}</td>
                      <td className="py-4 text-right font-semibold text-gray-900 text-sm">{item.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Button asChild className="w-full py-6 bg-primary hover:bg-red-700 text-white">
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
