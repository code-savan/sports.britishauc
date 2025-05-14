'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Data
const ACADEMY_FEES = [
  { academy: 'London Football Academy', fee: '£14,950' },
  { academy: 'Manchester Football Academy', fee: '£12,950' },
  { academy: 'Alicante Football Academy', fee: '£10,950' }
];

const SKILLS = [
  "Dribbling/Ball manipulation",
  "Speed and quickness exercise",
  "Balance Coordination",
  "Dominating in 1v1 situation",
  "Effective turns with the ball",
  "Passing/Shooting/Finishing",
  "Position Awareness",
  "First touch",
  "Brain Training and Awareness",
  "Weak foot enhancement",
  "Confidence and Endurance Boost",
  "Team working"
];

const BENEFITS = [
  {
    title: "Football Training with UEFA-qualified Coach",
    description: "Players will be trained by highly qualified UEFA Coaches to ensure that players develop the required skills to compete professionally."
  },
  {
    title: "Individual Player Report",
    description: "An individual Player Report is generated for each player, outlining the strengths and weaknesses of the player. This is an important document required by professional clubs for assessing the suitability of the player."
  },
  {
    title: "Player Development Plan",
    description: "The individual development plan will be created for each player in the first instance. This shows the development road map for each player. This is to ensure that each receives an appropriate development in the area of need while enhancing their strong areas."
  },
  {
    title: "Football Trial with Pro Clubs",
    description: "Players will be exposed to Pro football trials around Spain. These are both trials organized by professional clubs and in-house trials."
  },
  {
    title: "Training Kits",
    description: "Players receive training kits. However, each player is expected to provide their foot wears and, socks, and chin guard."
  },
  {
    title: "Player Performance Analysis",
    description: "Player performance and development are usually analyzed to ascertain the extent of progress and skill development. This regular evaluation always helps the coach to spot areas of weakness and strength of the player."
  },
  {
    title: "Fitness Training",
    description: "Physical strength and fitness are key elements of player development. Players are occasionally engaged in a supervised gym to ensure the development of physical and mental dexterity."
  },
  {
    title: "Outdoor Exercise",
    description: "Outdoor activities are an integral part of development and training activities that players are exposed to. Activities like mountain climbing, hiking, swimming, etc. are necessary for the all-around development of players."
  },
  {
    title: "Sport Therapy/Nutrition",
    description: "Each player receives medical and health advice from our seasoned professional Sport Therapist. Nutrition is also very important in keeping fit. Players are encouraged to stick to healthy nutrition."
  },
  {
    title: "Match Analysis/Classroom teaching",
    description: "Match Analysis is another way of reviewing the game and pointing out some faulty decisions in the game. Academy and friendly matches are analyzed and dissected so players can improve their knowledge of the game."
  },
  {
    title: "League Club Tours",
    description: "There is a regular visit to La Liga clubs around Alicante, and tickets for matches are also provided for players."
  },
  {
    title: "Professional Football Trials",
    description: "All players are taken to professional football trials held in the Alicante area. Scouts from all over Spain and Europe attend these trials, allowing each player to be scouted."
  }
];

export default function AlicanteAcademy() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1533224081996-0a96a8481e89?q=80&w=2400"
            alt="Alicante Football Academy"
            fill
            className="object-cover object-bottom"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-blue-900/30 z-[2]" />
        </div>

        <div className="relative z-10 px-6 md:px-[120px] container max-w-7xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white/90">
            Alicante Football Academy
          </h1>
          <p className="text-lg max-w-2xl text-white/80">
            Developing elite footballers in Spain&apos;s beautiful Mediterranean coast
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white">
              <Link href="#overview">Explore Academy</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
              <Link href="/contact">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="flex-1">
              <span className="text-primary font-semibold mb-4 block">ACADEMY OVERVIEW</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Alicante Football Academy</h2>

              <div className="space-y-6 text-gray-600 text-base">
                <p>
                  Alicante Football Academy is for students studying in the Alicante region who wish to enhance their football skills alongside their studies at the University. Most students who enrolled into this academy are students studying at the University of Alicante, Universidad Miguel Hernandez of Elche, Fundesem Business School, etc.
                </p>
                <p>
                  Our academy benefits from top-class football facilities, including the use of top-quality training pitches, state of the art gym where the aim is to deliver intensive coaching sessions designed to improve and develop your individual game level.
                </p>
                <p>
                  We relate to the passion and desire of aspiring football players and we know how to help you accomplish your dream of becoming a successful football player.
                </p>
              </div>
            </div>

            <div className="flex-1 relative min-h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1662977976870-e143fc829319?q=80&w=2940"
                alt="Alicante Football Training"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-12 -left-12 w-2/3 h-32 bg-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Alicante City Section */}
      <section className="py-32 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1557998751-7e1d753f6676?q=80&w=2940"
                alt="Alicante City"
                width={600}
                height={700}
                className="object-cover h-[500px] w-full object-bottom"
              />
              <div className="absolute top-12 -right-12 h-2/3 w-24 bg-primary" />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-primary font-semibold mb-4 block">CITY OVERVIEW</span>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Life in Alicante</h2>

              <div className="space-y-6 text-gray-600 text-base">
                <p>
                  Alicante is a very notable city when it comes to the game of football. The city of Alicante is home to well-known clubs such as Villareal FC, Valencia FC, Elche FC, Granada FC, Hercules FC, etc. This offers players the chance to be seen and potentially recruited by these professional football teams.
                </p>
                <p>
                  Alicante&apos;s climate comes with mild winters and warm summers (avg. 23.3°C), supports year-round sports like sailing, cycling, triathlon, rock climbing, and water sports (snorkeling, kite-surfing, kayaking). This attracts European teams, especially in winter, to facilities like Torrevieja Sports City.
                </p>
                <p>
                  Beaches like San Juan offer volleyball and football, while mountains provide hiking via Ferrata. Top facilities, including Torrevieja Sport City and Joaquin Villar Stadium, attracts international athletes. Events like The Ocean Race, MTRI Triathlon and Rafa Nadal Tour offer competitive opportunities.
                </p>
                <p>
                  In Alicante, athletes can explore job opportunities within sports brands, focusing on area like sports marketing, sales, or even product development. These roles often involves working with brands to create marketing campaigns, manage sponsorships, or develop new products and equipment.
                </p>
                <p>
                  Alicante&apos;s transport network, primarily the Alicante Metropolitan TRAM, connects the city with several surrounding towns and other cities through a mix of tram-train, and commuters rail services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Ground Section */}
      <section className="py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold mb-4 block">FACILITIES</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Training Ground</h2>
            <p className="text-base text-gray-600 max-w-4xl mx-auto">
              Our Alicante training facilities offer state-of-the-art pitches, advanced gym equipment, and comprehensive amenities to support the development of elite footballers in the heart of Spain&apos;s Mediterranean coast.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 mb-6">
              <div className="relative w-full h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1578874691223-64558a3ca096?q=80&w=3024"
                  alt="Alicante Training Facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="relative w-full h-[300px]">
                <Image
                  src="/atr1.jpeg"
                  alt="Training Pitch"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="relative w-full h-[300px]">
                <Image
                  src="/atr2.jpeg"
                  alt="Football Equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="relative w-full h-[300px]">
                <Image
                  src="/atr3.jpeg"
                  alt="Indoor Facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-8 justify-center">
            {['Torrevieja Sports City', '4G Astroturf pitches', 'Fitness suites & studios', 'High performance gym', 'Recovery facilities', 'Free parking'].map((item, i) => (
              <div key={i} className="bg-gray-50 py-3 px-6">
                <span className="text-gray-800 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-32 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <span className="text-primary font-semibold mb-4 block">SCHEDULE</span>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Training Schedule</h2>
              <p className="text-base text-gray-600 mb-8">
                To accommodate students&apos; academic commitments, training sessions are strategically scheduled on weekday evenings and weekends. Additional sessions for individual player development can be arranged based on each player&apos;s university timetable.
              </p>

              <div className="bg-white p-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 text-base font-bold text-gray-900"></th>
                      <th className="text-left py-4 px-6 text-base font-bold text-gray-900">MORNING</th>
                      <th className="text-left py-4 px-6 text-base font-bold text-gray-900">AFTERNOON</th>
                      <th className="text-left py-4 px-6 text-base font-bold text-gray-900">EVENING</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-900 font-semibold">Weekdays</td>
                      <td className="py-4 px-6 text-gray-600 text-sm">Classes</td>
                      <td className="py-4 px-6 text-gray-600 text-sm">Classes</td>
                      <td className="py-4 px-6 text-gray-600 text-sm">Football</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-gray-900 font-semibold">Weekends</td>
                      <td className="py-4 px-6 text-gray-600 text-sm">Football Training</td>
                      <td className="py-4 px-6 text-gray-600 text-sm">Football Training</td>
                      <td className="py-4 px-6 text-gray-600 text-sm">Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="relative w-full h-[250px]">
                <Image
                  src="/schedule1.png"
                  alt="Training Session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[250px]">
                <Image
                  src="/schedule2.png"
                  alt="Football Training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Player Development Section */}
      <section className="py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold mb-4 block">DEVELOPMENT</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Player Development Plan</h2>
            <p className="text-base text-gray-600 max-w-4xl mx-auto">
              Every player will go through our rigorous football training routine anchored by our qualified UEFA coach. This will enhance the player&apos;s tactical, technical, Psychological, and social skills, enabling each player to acquire the necessary skills required to compete at both Professional and semi-professional levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILLS.map((skill, i) => (
                <div key={i} className="bg-gray-50 p-4 flex items-center gap-4">
                  <div className="bg-primary text-white font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-gray-800 text-sm">{skill}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="relative w-full h-[250px]">
                <Image
                  src="/apd1.jpeg"
                  alt="Football Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[250px]">
                <Image
                  src="/apd2.jpeg"
                  alt="Skills Training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees and Registration Section */}
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
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Fees Per Year</h3>
                <div className="bg-white p-8">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-4 text-base font-bold text-gray-900">ACADEMY</th>
                        <th className="text-right py-4 text-base font-bold text-gray-900">FEES PER YEAR</th>
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

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Link with Spanish Pro Football Clubs</h2>
          <p className="text-base text-white/90 max-w-3xl mx-auto mb-12">
            British AUC Sport connects with various Spanish and European league clubs, academies, and Scouts on a regular basis to ensure that our players have many opportunities and exposure to becoming professional footballers.
          </p>
          <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-primary px-8 py-6">
            <Link href="/contact">Apply Now</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
