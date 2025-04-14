'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, CreditCard } from 'lucide-react';

interface TrialRegistrationSuccessProps {
  eventTitle: string;
  heroImage: string;
  accentColor?: string;
  paymentPath: string;
}

export default function TrialRegistrationSuccess({
  eventTitle,
  heroImage,
  accentColor = 'blue',
  paymentPath
}: TrialRegistrationSuccessProps) {
  const accentClasses = {
    gradient: accentColor === 'orange'
      ? 'from-orange-900/50 to-orange-900/90'
      : 'from-blue-900/50 to-blue-900/90',
    text: accentColor === 'orange'
      ? 'text-orange-500'
      : 'text-blue-500',
    button: accentColor === 'orange'
      ? 'bg-orange-500 hover:bg-orange-600 text-white'
      : 'bg-blue-500 hover:bg-blue-600 text-white',
    outlineButton: accentColor === 'orange'
      ? 'border-orange-500 text-orange-500 hover:bg-orange-50'
      : 'border-blue-500 text-blue-500 hover:bg-blue-50'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={`${eventTitle} Registration Success`}
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${accentClasses.gradient}`} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">{eventTitle}</h1>
          <p className="text-xl md:text-2xl text-white/80">Registration Successful</p>
        </div>
      </section>

      {/* Success Message */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <CheckCircle className={`h-16 w-16 ${accentClasses.text}`} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Thank You for Registering!</h2>
          <p className="text-gray-600 mb-8">
            Your trial registration has been successfully submitted. To complete your registration, please proceed with the payment.
          </p>
          <div className="space-y-4">
            <p className="text-gray-600">
              Please check your email for confirmation and additional information about the trial.
            </p>
            <p className="text-gray-600">
              If you have any questions, please don&apos;t hesitate to contact us.
            </p>
          </div>
          <div className="mt-12 space-y-4 flex flex-col items-center justify-center">
            <Link href={paymentPath}>
              <Button className={`w-full md:w-auto ${accentClasses.button} flex items-center justify-center gap-2`}>
                <CreditCard className="h-5 w-5" />
                Proceed to Payment
              </Button>
            </Link>
            <div className="flex justify-center">
              <Link href="/">
                <Button variant="outline" className={`${accentClasses.outlineButton}`}>
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
