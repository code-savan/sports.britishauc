import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  price: string;
  image: string;
  tag: string;
  tagColor?: 'red' | 'blue' | 'orange' | 'yellow'; // Added yellow as a color option
}

export function EventCard({
  id,
  title,
  description,
  date,
  location,
  price,
  image,
  tag,
  tagColor = 'red'
}: EventCardProps) {
  const getColors = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-600',
          hover: 'hover:bg-blue-700',
          text: 'text-blue-600'
        };
      case 'orange':
        return {
          bg: 'bg-yellow-600',
          hover: 'hover:bg-yellow-700',
          text: 'text-yellow-600'
        };
      case 'yellow':
        return {
          bg: 'bg-yellow-500',
          hover: 'hover:bg-yellow-600',
          text: 'text-yellow-500'
        };
      default:
        return {
          bg: 'bg-primary',
          hover: 'hover:bg-red-700',
          text: 'text-primary'
        };
    }
  };

  const colors = getColors(tagColor);
  const tagBgColor = colors.bg;
  const iconColor = colors.text;
  const buttonBgColor = `${colors.bg} ${colors.hover}`;

  return (
    <Card className="overflow-hidden card-hover border-0 shadow-md">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <p className={`text-sm font-medium ${tagBgColor} px-3 py-1 rounded-full inline-block mb-2 text-white`}>{tag}</p>
          <h3 className="text-2xl font-bold leading-tight text-white">{title}</h3>
        </div>
      </div>
      <CardContent className="pt-6">
        <div className="flex flex-col space-y-3 mb-6">
          <div className="flex items-center text-sm text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
          {price && (
            <div className="flex items-center text-sm text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{price}</span>
            </div>
          )}
        </div>
        <p className="text-slate-700 leading-relaxed mb-0">
          {description}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className={`w-full text-white ${buttonBgColor}`}>
          <Link href={`/events/${id}`}>
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
