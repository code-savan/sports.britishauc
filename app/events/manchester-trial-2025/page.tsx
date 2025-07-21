import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TrialRegistration from '@/components/TrialRegistration';

export default function ManchesterTrialPage() {
  return (
    <div className="pt-16">
      {/* Hero Section with Blue Accent */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/manchester.jpeg"
            alt="Manchester Football Trial"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-blue-900/30" />
        </div>
        <div className="relative z-10 px-4 md:w-[90%] mx-auto sm:px-6 lg:px-8 text-white">
          <div className="inline-block mb-4">
            <span className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">Limited Spots</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">MANCHESTER FOOTBALL TRIAL 2025</h1>
          <p className="text-xl md:text-2xl text-white">UK PROFESSIONAL CLUB TRIAL EXPERIENCE</p>
        </div>
      </section>

      {/* Main Content with Blue Accents */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Information */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <div className="inline-block mb-2">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Event Details</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">PROFESSIONAL SCOUTING TRIAL</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Limited spots are available for the Manchester Football Trial 2025—a unique opportunity for aspiring players to showcase their skills and talents to professional football scouts. This event provides a pathway for players to gain recognition and potentially secure opportunities with football clubs and academies across the UK, Europe, and beyond.
                </p>
                <p className="text-lg text-gray-600">
                  Participants will have the chance to be scouted by professional clubs, including teams in the English Premier League, Championship, and other competitive tiers of British and European football. The trial offers invaluable exposure within one of the world&apos;s most prestigious football systems, enabling players to take the next step in their football careers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">TRIAL PROGRAM</h2>
                <ul className="space-y-3 text-lg text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Professional coaching and evaluation from UEFA licensed coaches</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Competitive match play to showcase skills in game situations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Technical training sessions focused on key skill development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Individual player assessment and personalized feedback</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Opportunity to be identified by attending scouts and coaches</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">HOST</h2>
                <p className="text-lg text-gray-600">
                  Alex Armstrong, Southampton FC, Wolves FC, Cardiff FC, and Sheffield Wed FC Assistant Coach. The trial is led by Alex Armstrong of Active4Sport International in partnership with British AUC Sport. With over 600 matches of experience as an Assistant Manager and Coach, Alex brings a wealth of expertise in player development and football management.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">LOCATION</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Platt Lane (former Manchester City Training Ground)<br />
                  Yew Tree Road, Fallowfield<br />
                  Manchester, M14 7UU
                </p>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.7763553938397!2d-2.2238888839673766!3d53.44721998000456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb24164225e37%3A0x6c184a10f2a91a35!2sPlatt%20Lane%20Complex!5e0!3m2!1sen!2suk!4v1648226424565!5m2!1sen!2suk"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Registration Panel */}
            <div className="md:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-md sticky top-24 border-t-4 border-primary">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">REGISTRATION DETAILS</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Cost</p>
                      <p className="text-2xl font-bold text-primary">£98</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Date</p>
                      <p>Saturday, 6th September 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Age Group</p>
                      <p>7 - 24 years (other ages ages are welcome to apply as well)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Registration Deadline</p>
                      <p>1st August 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 font-medium">Contact</p>
                      <a href="mailto:collins@britishauc.com" className="text-primary hover:underline">
                        collins@britishauc.com
                      </a>
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-red-500 text-white"
                  size="lg"
                >
                  <Link href="/events/football-trial-2025/register?event=manchester2025">
                    Register and Pay
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <TrialRegistration
        eventTitle="Manchester Football Trial 2025"
        heroImage="/images/manchester-trial.jpg"
        accentColor="blue"
        successRedirectPath="/events/football-trial-2025/trial-reg-success"
        paymentLink="https://flutterwave.com/pay/obauyeqmgu4l"
      /> */}
    </div>
  );
}
