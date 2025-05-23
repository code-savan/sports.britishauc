import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { EventCard } from '@/components/event-card';

const events = [
  {
    id: 'spain-trial',
    title: 'Spain Football Trial 2025',
    date: 'July 19, 2025 (Deadline: 1 July 2025)',
    description: 'Showcase your skills to professional scouts at this exclusive trial in Spain and take a step toward your professional football career.',
    image: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?q=80&w=1000',
    location: 'Alicante, Spain',
    price: '€78',
    tag: 'Limited Spots',
    tagColor: 'yellow' as const,
  },
  {
    id: 'manchester-trial',
    title: 'Manchester Football Trial 2025',
    date: 'July 17, 2025 (Deadline: 1 July 2025)',
    description: 'Showcase your skills to professional scouts at this exclusive trial in Manchester and take a step toward your professional football career.',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1000',
    location: 'Manchester, UK',
    price: '£65',
    tag: 'Limited Spots',
    tagColor: 'red' as const,
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
    tagColor: 'blue' as const,
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
    tagColor: 'orange' as const,
  },
  {
    id: 'west-ham-trip',
    title: 'West Ham United Summer Trip 2025',
    date: '29 July - 4 August 2025 (Deadline: 25th of April, 2025)',
    description: 'Train like a professional at West Ham United Academy in this unforgettable London experience combining elite coaching and education.',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000',
    location: 'London, UK',
    price: '£2,100',
    tag: 'Premium Experience',
    tagColor: 'blue' as const,
  }
];

export default function EventsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section with Blue Accent */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=2000"
            alt="Sports events"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-blue-900/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-center">Sports Opportunities</h1>
          <p className="text-xl max-w-2xl text-white text-center">Discover elite programs designed to showcase your talent and develop your skills with professional coaching.</p>
        </div>
      </section>

      {/* Events List with Blue Accents */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Opportunities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Secure your spot in our exclusive sports programs and take the next step in your athletic career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <EventCard
                key={event.id}
                {...event}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-8 max-w-3xl mx-auto shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Looking for Custom Programs?</h3>
              <p className="text-gray-600 mb-6">
                We can organize custom sports experiences for teams, schools, or groups. Contact us to discuss your requirements.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
