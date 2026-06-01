import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, MapPin, Wallet } from 'lucide-react';
import { getDatesDisplay } from '@/lib/utils';

const { rangeText } = getDatesDisplay();

const events = [
  {
    id: 'manchester-trial-2025',
    title: 'Manchester Football Trial 2025',
    date: '6th of October 2025',
    description: 'Showcase your skills to professional scouts at this exclusive trial in Manchester and take a step toward your professional football career.',
    image: '/event1.jpg',
    location: 'Manchester, UK',
    price: '£98',
    tag: 'Limited Spots',
    link: '/events/manchester-trial-2025',
  },
  {
    id: 'manchester-trial',
    title: 'Manchester Football Trial',
    date: 'July 17, 2025 (Deadline: 1 July 2025)',
    description: 'Showcase your skills to professional scouts at this exclusive trial in Manchester and take a step toward your professional football career.',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1000',
    location: 'Manchester, UK',
    price: '£65',
    tag: 'Limited Spots',
    link: '/events/manchester-trial',
  },
  {
    id: 'spain-trial',
    title: 'Spain Football Trial 2025',
    date: 'Spain Trial postponed. New dates to be confirmed later.',
    description: 'Showcase your skills to professional scouts at this exclusive trial in Spain and take a step toward your professional football career.',
    image: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?q=80&w=2000',
    location: 'Alicante, Spain',
    price: '€78',
    tag: 'Limited Spots',
    link: '/events/spain-trial',
  },
  {
    id: 'new-york-trip',
    title: 'New York Summer Trip 2025',
    date: '23 July - 30 July 2025 (Deadline: 25th April 2025)',
    description: 'Join our "Leaders of Tomorrow" program in the heart of New York City, developing leadership skills through project-based learning and cultural experiences.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000',
    location: 'New York, USA',
    price: '$2,995',
    tag: 'Premium Experience',
    link: '/events/new-york-trip',
  },
  {
    id: 'london-basketball-trip',
    title: 'Nike Basketball Camps London 2025',
    date: '21 July - 3 August 2025 (Deadline: 25th April 2025)',
    description: 'Experience elite basketball training with Nike Basketball Camps in London, featuring professional coaching and comprehensive player development.',
    image: 'https://images.unsplash.com/photo-1608541737042-87a12275d313?q=80&w=1000',
    location: 'London, UK',
    price: '£4,950',
    tag: 'Premium Experience',
    link: '/events/london-basketball-trip',
  },
  {
    id: 'west-ham-trip',
    title: 'West Ham United Summer Trip 2025',
    date: '29 July - 4 August 2025 (Deadline: 25th of April, 2025)',
    description: 'Train like a professional at West Ham United Academy in this unforgettable London experience combining elite coaching and education.',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000',
    location: 'London, UK',
    price: '£2,100',
    tag: 'Premium Experience',
    link: '/events/west-ham-trip',
  },
  {
    id: 'steven-gerrard-camp',
    title: 'Steven Gerrard Academy Pre Season Camp',
    date: '27 July - 7 August 2025',
    description: 'Train at Steven Gerrard Academy and experience the professional training methods and philosophy that have made elite players worldwide.',
    image: 'https://stevengerrard.academy/wp-content/uploads/sgapreseason-17dddd.jpg',
    location: 'Liverpool, UK',
    price: '£2,500',
    tag: 'Premium Experience',
    link: '/events/steven-gerrard-camp',
  },
  {
    id: 'high-elite-football-hungary',
    title: 'High Elite Football Development Programme',
    date: rangeText,
    description: 'Train at our Debrecen Football Academy and experience the professional training methods and philosophy that have made elite players worldwide.',
    image: '/event8.jpg',
    location: 'Debrecen, Hungary',
    price: '$773',
    tag: 'Limited Spots',
    link: '/events/high-elite-football-hungary',
  },
  {
    id: 'manchester-high-elite-football-2025',
    title: 'Manchester High Elite Football Development Programme',
    date: rangeText,
    description: 'Train at our Manchester Football Academy and experience the professional training methods that have made elite players worldwide.',
    image: '/event9.jpg',
    location: 'Manchester, UK',
    price: '£1,240',
    tag: 'Limited Spots',
    link: '/events/manchester-high-elite-football-2025',
  },
  {
    id: 'club-placement-testing-conditioning',
    title: 'Club Placement Testing & Conditioning',
    date: rangeText,
    description: 'Unlock your potential with our comprehensive 1-week player testing program that combines sports science with real-world evaluation.',
    image: '/event10.jpg',
    location: 'Manchester & North West, UK',
    price: '£985',
    tag: 'Limited Spots',
    link: '/events/club-placement-testing-conditioning',
  },
  {
    id: 'manchester-3-days-high-elite-football-2025',
    title: '3-Day High Elite Football Development Programme',
    date: rangeText,
    description: 'Enjoy the football experience of a lifetime with Pro Club Experience! Train at our Manchester Football Academy.',
    image: '/event3.jpg',
    location: 'Manchester, UK',
    price: '£294',
    tag: 'Limited Spots',
    link: '/events/manchester-3-days-high-elite-football-2025',
  },
  {
    id: 'helsby-football-trial-2025',
    title: 'Helsby Football Trial 2025',
    date: '30th November, 2025',
    description: 'Showcase your talent to professional scouts, clubs and academy agents at this exclusive trial in Helsby.',
    image: '/event2.jpg',
    location: 'Helsby, UK',
    price: '£98',
    tag: 'Limited Spots',
    link: '/events/helsby-football-trial-2025',
  },
  {
    id: 'manchester-football-trial-2026',
    title: 'Manchester Football Trial 2026',
    date: '21st February, 2026 (9am - 2pm)',
    description: 'Showcase your talent and be scouted! A unique opportunity for aspiring players to showcase their skills to professional football scouts.',
    image: '/TR1.jpg',
    location: 'Manchester, UK',
    price: '£65',
    tag: 'Limited Spots',
    link: '/events/manchester-football-trial-2026',
  },
];

export default function EventsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/eventshero.jpg"
            alt="Sports events"
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
                Events
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
              Sports Opportunities
            </h1>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed max-w-lg">
              Discover elite programs designed to showcase your talent and develop your skills with professional coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-16 items-start mb-14">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-0.5 h-5 bg-red-600 shrink-0" />
                <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                  Opportunities
                </span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
                  Upcoming Events
                </h2>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  Secure your spot in our exclusive sports programs and take the next step in your athletic career.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div key={event.id} className="group">
                <Link href={event.link} className="block">
                  <div className="relative h-[300px] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600/90 text-white text-[11px] font-medium px-3 py-1">
                        {event.tag}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                </Link>
                <div className="border border-gray-100 border-t-0 p-6">
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-gray-400 mb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size="13" className="text-red-400" />
                      {event.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size="13" className="text-red-400" />
                      {event.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Wallet size="13" className="text-red-400" />
                      {event.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{event.description}</p>
                  <Link
                    href={event.link}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-900 transition-colors mt-3"
                  >
                    Learn More
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Programs */}
          <div className="mt-16 text-center border border-gray-100 p-10 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Looking for Custom Programs?
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-lg mx-auto">
              We can organize custom sports experiences for teams, schools, or groups. Contact us to discuss your requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-medium px-5 py-2.5 hover:bg-red-700 transition-colors"
            >
              Contact Us
              <ArrowRight size={15} />
            </Link>
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
            Ready to Take the Next Step?
          </h2>
          <p className="text-sm md:text-[15px] text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Contact us to secure your spot in one of our programmes or to discuss a custom experience for your team.
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
