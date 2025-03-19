'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Calendar, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function RegistrationSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2000"
            alt="Registration Success"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-blue-900/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-block mb-4">
            <span className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full">Registration Complete</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Registration Successful!</h1>
          <p className="text-lg md:text-xl text-white">Thank you for registering for the New York Summer Trip 2025</p>
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
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Card className="p-6 shadow-lg rounded-xl border-2 border-blue-100">
              <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-800">
                <Calendar className="w-5 h-5 mr-2" />
                Important Dates
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 text-blue-500" />
                  <span>Registration confirmation: Within 48 hours</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 text-blue-500" />
                  <span>Document submission deadline: April 30, 2025</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 text-blue-500" />
                  <span>Trip preparation meeting: May 15, 2025</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 shadow-lg rounded-xl border-2 border-blue-100">
              <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-800">
                <Mail className="w-5 h-5 mr-2" />
                What&apos;s Next?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 text-blue-500" />
                  <span>Check your email for confirmation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 text-blue-500" />
                  <span>Complete medical documentation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 text-blue-500" />
                  <span>Prepare required travel documents</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Required Documents */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100 mb-12">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-800">
              <Download className="w-5 h-5 mr-2" />
              Required Documents
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600">Please prepare the following documents:</p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-blue-500" />
                  Valid Passport
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-blue-500" />
                  Medical Certificate
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-blue-500" />
                  Travel Insurance
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-blue-500" />
                  Visa (if applicable)
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
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
