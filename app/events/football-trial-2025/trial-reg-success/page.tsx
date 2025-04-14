'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TrialRegSuccess() {
  const [paymentLink, setPaymentLink] = useState('');

  useEffect(() => {
    // Get payment link from localStorage
    const storedPaymentLink = localStorage.getItem('paymentLink');
    if (storedPaymentLink) {
      setPaymentLink(storedPaymentLink);
      // Clear the payment link from localStorage
      localStorage.removeItem('paymentLink');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Registration Successful!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your trial registration has been submitted successfully. Please proceed to payment to secure your spot.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <Button
            asChild
            className="w-full bg-primary hover:bg-blue-600 text-white"
            size="lg"
          >
            <Link href={paymentLink} target="_blank">
              Proceed to Payment
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full"
            size="lg"
          >
            <Link href="/events">
              Return to Events
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
