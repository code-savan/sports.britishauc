'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, CreditCard } from 'lucide-react';

interface TrialRegistrationSuccessProps {
  eventTitle: string;
  heroImage: string;
  accentColor?: string;
  paymentPath?: string;
  paymentInfo?: {
    accountName: string;
    bankName: string;
    bankAddress: string;
    accountNumber: string;
    sortCode: string;
    iban: string;
    bic: string;
    additionalInfo?: string;
    fee?: string;
  };
}

export default function TrialRegistrationSuccess({
  eventTitle,
  heroImage,
  accentColor = 'blue',
  paymentPath,
  paymentInfo
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
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <CheckCircle className={`h-16 w-16 ${accentClasses.text}`} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Thank You for Registering!</h2>
            <p className="text-gray-600 mb-8">
              Your trial registration has been successfully submitted. {paymentInfo ? 'Please proceed with payment using the bank details below.' : 'To complete your registration, please proceed with the payment.'}
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                Please check your email for confirmation and additional information about the trial.
              </p>
            </div>
          </div>

          {/* Payment Information */}
          {paymentInfo && (
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 mb-12">
              <h3 className={`text-xl font-bold mb-6 flex items-center ${accentClasses.text}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                METHOD OF PAYMENT
              </h3>
              <div className="space-y-4">
                {paymentInfo.fee && (
                  <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-gray-50 border-2 border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-700">Event Fee:</span>
                      <span className={`text-3xl font-bold ${accentClasses.text}`}>{paymentInfo.fee}</span>
                    </div>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Bank Account Name</p>
                    <p className="text-gray-900 font-semibold">{paymentInfo.accountName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Bank</p>
                    <p className="text-gray-900 font-semibold">{paymentInfo.bankName}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500 font-medium mb-1">Bank Address</p>
                    <p className="text-gray-900">{paymentInfo.bankAddress}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Account Number</p>
                    <p className="text-gray-900 font-mono font-semibold">{paymentInfo.accountNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Sort Code</p>
                    <p className="text-gray-900 font-mono font-semibold">{paymentInfo.sortCode}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">IBAN</p>
                    <p className="text-gray-900 font-mono font-semibold">{paymentInfo.iban}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">BIC</p>
                    <p className="text-gray-900 font-mono font-semibold">{paymentInfo.bic}</p>
                  </div>
                </div>
                {paymentInfo.additionalInfo && (
                  <div className="mt-6 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                    <p className="text-sm text-gray-700">
                      <strong>Important:</strong> {paymentInfo.additionalInfo}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="text-center space-y-4">
            {paymentPath && !paymentInfo && (
              <Link href={paymentPath}>
                <Button className={`w-full md:w-auto ${accentClasses.button} flex items-center justify-center gap-2`}>
                  <CreditCard className="h-5 w-5" />
                  Proceed to Payment
                </Button>
              </Link>
            )}
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
