'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CreditCard } from 'lucide-react';

export default function FootballTrial2025PaymentPage() {
  const handlePayment = () => {
    // TODO: Implement payment integration
    console.log('Processing payment...');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2000"
            alt="Football Trial 2025 Payment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-blue-900/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Complete Your Registration</h1>
          <p className="text-xl md:text-2xl">Football Trial 2025</p>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Trial Registration Fee</h2>
              <p className="text-4xl font-bold text-blue-600 mb-2">£99.99</p>
              <p className="text-gray-600">One-time payment</p>
            </div>

            <div className="space-y-6">
              <div className="border-t border-b border-gray-200 py-6">
                <h3 className="text-lg font-semibold mb-4">What&apos;s Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Professional coaching and evaluation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Training kit and materials
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Performance analysis report
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Certificate of participation
                  </li>
                </ul>
              </div>

              <Button
                onClick={handlePayment}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2 py-6"
              >
                <CreditCard className="h-5 w-5" />
                Pay Now
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Secure payment powered by Stripe. Your payment information is encrypted and secure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
