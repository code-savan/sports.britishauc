'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Calendar, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface RegistrationSuccessProps {
  eventTitle: string;
  heroImage: string;
  accentColor: 'blue' | 'red' | 'orange' | 'yellow' | 'purple';
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

export default function RegistrationSuccess({
  eventTitle,
  heroImage,
  accentColor = 'blue',
  paymentInfo
}: RegistrationSuccessProps) {
  // Define accent color classes based on the prop
  const accentClasses = {
    blue: {
      gradient: "from-black/80 via-black/60 to-blue-900/30",
      bg: "to-blue-50",
      border: "border-blue-100",
      text: "text-blue-800",
      icon: "text-blue-500",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    red: {
      gradient: "from-black/80 via-black/60 to-red-900/30",
      bg: "to-red-50",
      border: "border-red-100",
      text: "text-red-800",
      icon: "text-red-500",
      button: "bg-primary hover:bg-red-700",
    },
    orange: {
      gradient: "from-black/80 via-black/60 to-orange-900/30",
      bg: "to-orange-50",
      border: "border-orange-100",
      text: "text-orange-800",
      icon: "text-orange-500",
      button: "bg-orange-600 hover:bg-orange-700",
    },
    yellow: {
      gradient: "from-black/80 via-black/60 to-yellow-900/30",
      bg: "to-yellow-50",
      border: "border-yellow-100",
      text: "text-yellow-800",
      icon: "text-yellow-500",
      button: "bg-yellow-600 hover:bg-yellow-700",
    },
    purple: {
      gradient: "from-black/80 via-black/60 to-purple-900/30",
      bg: "to-purple-50",
      border: "border-purple-100",
      text: "text-purple-800",
      icon: "text-purple-500",
      button: "bg-purple-600 hover:bg-purple-700",
    }
  }[accentColor] || {
    gradient: "from-black/80 via-black/60 to-blue-900/30",
    bg: "to-blue-50",
    border: "border-blue-100",
    text: "text-blue-800",
    icon: "text-blue-500",
    button: "bg-blue-600 hover:bg-blue-700",
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-white ${accentClasses.bg}`}>
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Registration Success"
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${accentClasses.gradient}`} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-block mb-4">
            <span className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full">Registration Complete</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Registration Successful!</h1>
          <p className="text-lg md:text-xl text-white">Thank you for registering for the {eventTitle}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Registration Has Been Received</h2>
            <p className="text-gray-600">
              We have sent a confirmation email with your registration details. Please check your inbox.
            </p>
          </div>

          {/* Next Steps */}
          {/* <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Card className={`p-6 shadow-lg rounded-xl border-2 ${accentClasses.border}`}>
              <h3 className={`text-lg font-semibold mb-4 flex items-center ${accentClasses.text}`}>
                <Calendar className="w-5 h-5 mr-2" />
                Important Dates
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <ArrowRight className={`w-5 h-5 mr-2 flex-shrink-0 ${accentClasses.icon}`} />
                  <span>Registration confirmation: Within 48 hours</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className={`w-5 h-5 mr-2 flex-shrink-0 ${accentClasses.icon}`} />
                  <span>Document submission deadline: April 30, 2025</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className={`w-5 h-5 mr-2 flex-shrink-0 ${accentClasses.icon}`} />
                  <span>Trip preparation meeting: May 15, 2025</span>
                </li>
              </ul>
            </Card>

            <Card className={`p-6 shadow-lg rounded-xl border-2 ${accentClasses.border}`}>
              <h3 className={`text-lg font-semibold mb-4 flex items-center ${accentClasses.text}`}>
                <Mail className="w-5 h-5 mr-2" />
                What&apos;s Next?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <ArrowRight className={`w-5 h-5 mr-2 flex-shrink-0 ${accentClasses.icon}`} />
                  <span>Check your email for confirmation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className={`w-5 h-5 mr-2 flex-shrink-0 ${accentClasses.icon}`} />
                  <span>Complete medical documentation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className={`w-5 h-5 mr-2 flex-shrink-0 ${accentClasses.icon}`} />
                  <span>Prepare required travel documents</span>
                </li>
              </ul>
            </Card>
          </div> */}

          {/* Payment Information */}
          {paymentInfo && (
            <div className={`bg-white p-6 rounded-xl shadow-lg border-2 ${accentClasses.border} mb-12`}>
              <h3 className={`text-xl font-bold mb-6 flex items-center ${accentClasses.text}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                METHOD OF PAYMENT
              </h3>
              <div className="space-y-4">
                {paymentInfo.fee && (
                  <div className={`p-4 rounded-lg bg-gradient-to-r from-${accentClasses.bg.replace('to-', '')} to-gray-50 border-2 ${accentClasses.border}`}>
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
                  <div className={`mt-6 p-4 rounded-lg bg-yellow-50 border border-yellow-200`}>
                    <p className="text-sm text-gray-700">
                      <strong>Important:</strong> {paymentInfo.additionalInfo}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Required Documents */}
          <div className={`bg-white p-6 rounded-xl shadow-lg border-2 ${accentClasses.border} mb-12`}>
            <h3 className={`text-lg font-semibold mb-4 flex items-center ${accentClasses.text}`}>
              <Download className="w-5 h-5 mr-2" />
              Required Documents
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600">Please prepare the following documents:</p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
                <li className="flex items-center">
                  <ArrowRight className={`w-5 h-5 mr-2 ${accentClasses.icon}`} />
                  Valid Passport
                </li>
                <li className="flex items-center">
                  <ArrowRight className={`w-5 h-5 mr-2 ${accentClasses.icon}`} />
                  Medical Certificate
                </li>
                <li className="flex items-center">
                  <ArrowRight className={`w-5 h-5 mr-2 ${accentClasses.icon}`} />
                  Travel Insurance
                </li>
                <li className="flex items-center">
                  <ArrowRight className={`w-5 h-5 mr-2 ${accentClasses.icon}`} />
                  Visa (if applicable)
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              asChild
              className={`${accentClasses.button} text-white w-full sm:w-auto`}
            >
              <Link href="/events">
                Return to Events
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Link href="/">
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
