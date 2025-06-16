import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Phone, FileText, UserCheck, CheckCircle } from 'lucide-react';

const heroImage = '/footballheroimage.jpeg';

const PROGRAMMES = [
  {
    weeks: 2,
    sessions: 10,
  },
  {
    weeks: 4,
    sessions: 20,
  },
  {
    weeks: 8,
    sessions: 40,
  },
  {
    weeks: 16,
    sessions: 80,
  },
];

const HOW_TO_JOIN = [
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: 'Contact Us',
    desc: 'Call, email, or complete our Pre-Application Form, providing details about yourself along with your football and academic aspirations.'
  },
  {
    icon: <UserCheck className="w-6 h-6 text-primary" />,
    title: 'Speak to Us',
    desc: 'Our Football Advisor will speak to you to learn more about you and ensure that British AUC SPORT Football Academy is the right fit for your football goals.'
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: 'Submit an Application',
    desc: 'We will send you an application form to complete after the conversation.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
    title: 'Confirmation of Acceptance Letter',
    desc: 'Once accepted, we will send you a confirmation of acceptance.'
  },
];

const ApplyNowPage = () => (
  <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-0">
    {/* Hero Section */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden shadow-lg">
      <Image
        src={heroImage}
        alt="Elite Football Training"
        fill
        className="object-cover object-center z-0"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-1" />
      <div className="relative z-10 text-center w-full flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg animate-fade-in">Apply Now</h1>
        <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto animate-fade-in font-light">
          Take the next step in your football journey. Join our High Elite Performance Football Development Programme.
        </p>
        <Button asChild size="lg" className="mt-10 bg-primary hover:bg-red-700 text-white px-12 py-5 text-xl font-bold shadow-xl animate-fade-in rounded-full">
          <Link href="/contact">Start Application</Link>
        </Button>
      </div>
    </section>

    {/* Main Content Section */}
    <section id="registration" className="section-padding container max-w-5xl mx-auto animate-fade-in">
      {/* Intake/Registration Section */}
      <Card className="mb-12 card-hover border-0 shadow-xl bg-white/90">
        <CardHeader>
          <CardTitle className="text-3xl tracking-tight">Intake & Registration</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl text-slate-700 font-medium">
            <span className="font-semibold text-primary">January</span> and <span className="font-semibold text-primary">September</span> are our major intake. However, we are flexible with start dates.
          </p>
        </CardContent>
      </Card>

      {/* Programme Overview Section */}
      <Card className="mb-12 card-hover border-0 shadow-xl bg-white/90">
        <CardHeader>
          <CardTitle className="text-2xl">High Elite Performance Football Development Programme</CardTitle>
          <p className="text-body-light mt-2">Location: London, Manchester, Cardiff, Debrecen, and Alicante</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-slate-700">
            Immerse yourself in a professional football environment with like-minded football enthusiasts and enhance your technical and match-play skills under the guidance of the Pro UEFA/FA-certified coaching team. Coaching sessions aim to develop agility, positioning, ball control, passing, formations, tactics, and the ability to attack and defend.
          </p>
          <p className="text-lg text-slate-700">
            You will receive football training in an academy system widely recognized for its best football training practice, delivered by an experienced Premier League club assistant coach.
          </p>
          <ul className="list-disc ml-6 text-base text-slate-600">
            <li>Designed for players at a standard level or aiming for high-performance.</li>
            <li>Pro-club environment to develop technical, physical, and psychological aspects.</li>
            <li>Latest video-analysis technology and pro-experience seminars (Scouting, Nutrition, Conditioning).</li>
          </ul>
        </CardContent>
      </Card>

      {/* Weekly Programme Section */}
      <Card className="mb-12 card-hover border-0 shadow-xl bg-white/90">
        <CardHeader>
          <CardTitle className="text-2xl">Weekly Football Training Programme</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="font-semibold mb-2 text-lg">Key Principles</h4>
            <ul className="list-disc ml-6 text-base text-slate-600 mb-4">
              <li>Progressive Overload</li>
              <li>Specificity</li>
              <li>Recovery</li>
              <li>Nutrition & Hydration</li>
              <li>Listen to Your Body</li>
            </ul>
            <h4 className="font-semibold mb-2 text-lg">Notes</h4>
            <ul className="list-disc ml-6 text-base text-slate-600">
              <li>Individualisation: Programme is adjusted for fitness, age, and position.</li>
              <li>Nutrition: Balanced diet, hydration, and sleep are encouraged.</li>
              <li>Cross-Training: Swimming, cycling, and more for all-round fitness.</li>
              <li>Injury Prevention: Proper warm-up, cool-down, and joint stability.</li>
              <li>Listen to Coaches: Our coaches&apos; programme takes precedence.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-lg">Sample Week</h4>
            <ul className="list-disc ml-6 text-base text-slate-600">
              <li><b>Day 1:</b> Active Recovery & Mobility</li>
              <li><b>Day 2:</b> Technical Skill & Speed/Agility</li>
              <li><b>Day 3:</b> Strength & Power (Gym/Bodyweight)</li>
              <li><b>Day 4:</b> Tactical & Game-Specific Drills</li>
              <li><b>Day 5:</b> Pre-Match Activation & Rest</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Programme Durations Section */}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {PROGRAMMES.map(({ weeks, sessions }) => (
          <Card key={weeks} className="card-hover border-0 shadow-xl bg-white/90">
            <CardHeader>
              <CardTitle className="text-xl">{weeks}-Week Elite Football Performance Training</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc ml-6 text-base text-slate-600">
                <li>5-day high elite football performance training per week</li>
                <li>{sessions} x Professional football Coaching Sessions</li>
                <li>Train with a certified FA/UEFA-qualified coach</li>
                <li>Technical, tactical, and overall skill improvement</li>
                <li>Participate in weekly semi and professional matches</li>
                <li>Play regular matches against pro, semi-pro, academy, and amateur clubs</li>
                <li>Individual Personal Development Plan</li>
                <li>Gym membership with swimming pool and sauna access</li>
                <li>Individual player report feedback</li>
                <li>British AUC Sport-branded kits for training</li>
              </ul>
              <p className="text-caption"><b>Age:</b> 16 - 24</p>
              <p className="text-caption"><b>Accommodation Option:</b> British AUC Sport will source accommodation on request, with options including host family, private house, hotel, B&B, or private room, all close to the training complex or on a public transport route.</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* How to Join Section */}
      <Card className="mb-12 card-hover border-0 shadow-xl bg-white/90">
        <CardHeader>
          <CardTitle className="text-2xl">How to Join British AUC Sport Academy</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-slate-700 mb-6">
              British AUC SPORT Football Academy offers a flexible football program that caters to your schedule and goals. Whether you&apos;re looking for an intense 2-week course to improve quickly or a comprehensive 1-year program for long-term development, we have options to suit all needs. This flexibility allows players to tailor their experience to match their commitment level and aspirations in the sport. Our UEFA-qualified coaches provide personalised training, competitive fixtures, and comprehensive player development support.
            </p>
          </div>
          <div>
            <ol className="space-y-6">
              {HOW_TO_JOIN.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-1">{step.icon}</span>
                  <div>
                    <span className="font-semibold text-slate-900 text-lg block mb-1">{step.title}</span>
                    <span className="text-base text-slate-600 block">{step.desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action Section */}
      <section className="text-center py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary drop-shadow">Ready to Join?</h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Secure your spot in our next intake and take your football career to the next level with British AUC Sport.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white px-12 py-5 text-xl font-bold shadow-xl rounded-full">
          <Link href="/contact">Contact Us to Register</Link>
        </Button>
      </section>
    </section>
  </main>
);

export default ApplyNowPage;
