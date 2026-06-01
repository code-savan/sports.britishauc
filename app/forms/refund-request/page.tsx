'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast, Toaster } from 'sonner';

export default function RefundRequestForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    transactionId: '',
    paymentDate: '',
    amountPaid: '',
    refundReason: '',
    accountName: '',
    accountNumber: '',
    bankName: '',
    bankAddress: '',
    sortCode: '',
    iban: '',
    swiftCode: '',
    signature: '',
    date: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      const requiredFields = [
        'fullName', 'email', 'phone', 'transactionId', 'paymentDate',
        'amountPaid', 'refundReason', 'accountName', 'accountNumber',
        'bankName', 'bankAddress', 'sortCode', 'signature', 'date'
      ];

      const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData].trim());

      if (missingFields.length > 0) {
        toast.error('Please fill in all required fields');
        setIsSubmitting(false);
        return;
      }

      // Prepare data for Supabase (match column names)
      const submissionData = {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        transaction_id: formData.transactionId,
        payment_date: formData.paymentDate,
        amount_paid: formData.amountPaid,
        refund_reason: formData.refundReason,
        account_name: formData.accountName,
        account_number: formData.accountNumber,
        bank_name: formData.bankName,
        bank_address: formData.bankAddress,
        sort_code: formData.sortCode,
        iban: formData.iban || null,
        swift_code: formData.swiftCode || null,
        signature: formData.signature,
        signature_date: formData.date,
      };

      // Submit to Supabase
      const { data, error } = await supabase
        .from('refund_requests')
        .insert([submissionData])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        toast.error(`Failed to submit refund request: ${error.message}`);
      } else {
        toast.success('Refund request submitted successfully!');

        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          transactionId: '',
          paymentDate: '',
          amountPaid: '',
          refundReason: '',
          accountName: '',
          accountNumber: '',
          bankName: '',
          bankAddress: '',
          sortCode: '',
          iban: '',
          swiftCode: '',
          signature: '',
          date: ''
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Toaster position="top-right" richColors />
      {/* Hero */}
      <div className="bg-gray-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-0.5 h-5 bg-red-600 shrink-0" />
            <span className="text-[10px] font-medium text-white/60 tracking-[0.15em] uppercase">Forms</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">Refund Request Form</h1>
          <p className="text-sm md:text-[15px] text-gray-400 max-w-2xl leading-relaxed">
            Please complete this form in full to request a refund. Ensure all information provided is accurate to avoid processing delays.
            (Refunds will only be processed to the originating account used for payment.)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="border border-gray-100 bg-white p-8">

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 1. Applicant Information */}
              <div className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-6">1. Applicant Information</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Payment Information */}
              <div className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-6">2. Payment Information</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700 mb-2">
                      Transaction ID/Receipt No. *
                    </label>
                    <input
                      type="text"
                      id="transactionId"
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="paymentDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Payment *
                    </label>
                    <input
                      type="date"
                      id="paymentDate"
                      name="paymentDate"
                      value={formData.paymentDate}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="amountPaid" className="block text-sm font-medium text-gray-700 mb-2">
                      Amount Paid *
                    </label>
                    <input
                      type="text"
                      id="amountPaid"
                      name="amountPaid"
                      value={formData.amountPaid}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="e.g., £1,500.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Refund Details */}
              <div className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-6">3. Refund Details</h2>
                <div>
                  <label htmlFor="refundReason" className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Refund *
                  </label>
                  <textarea
                    id="refundReason"
                    name="refundReason"
                    value={formData.refundReason}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    placeholder="Please provide detailed reason for your refund request..."
                  />
                </div>
              </div>

              {/* 4. Bank Information */}
              <div className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-6">4. Bank Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="accountName" className="block text-sm font-medium text-gray-700 mb-2">
                      Account Name *
                    </label>
                    <input
                      type="text"
                      id="accountName"
                      name="accountName"
                      value={formData.accountName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Account Number *
                    </label>
                    <input
                      type="text"
                      id="accountNumber"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Name *
                    </label>
                    <input
                      type="text"
                      id="bankName"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="sortCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Sort Code *
                    </label>
                    <input
                      type="text"
                      id="sortCode"
                      name="sortCode"
                      value={formData.sortCode}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="XX-XX-XX"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="bankAddress" className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Address *
                    </label>
                    <input
                      type="text"
                      id="bankAddress"
                      name="bankAddress"
                      value={formData.bankAddress}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="iban" className="block text-sm font-medium text-gray-700 mb-2">
                      IBAN
                    </label>
                    <input
                      type="text"
                      id="iban"
                      name="iban"
                      value={formData.iban}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="swiftCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Swift Code
                    </label>
                    <input
                      type="text"
                      id="swiftCode"
                      name="swiftCode"
                      value={formData.swiftCode}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    />
                  </div>
                </div>
              </div>

              {/* 5. Declaration */}
              <div className="pb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-6">5. Declaration</h2>
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <p className="text-sm text-gray-700 mb-4">
                    I hereby declare that the information provided above is true and correct. I understand that any false information may result in the rejection of this request.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="signature" className="block text-sm font-medium text-gray-700 mb-2">
                      Digital Signature *
                    </label>
                    <input
                      type="text"
                      id="signature"
                      name="signature"
                      value={formData.signature}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="Type your full name as signature"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white text-sm font-medium px-5 py-2.5 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    'Submit Refund Request'
                  )}
                </button>
              </div>
            </form>
          </div>

        {/* Additional Information */}
        <div className="mt-8 border border-gray-100 p-8">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Important Notes:</h3>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Refund duration is four (4) to eight (8) weeks</li>
            <li>• Refunds will only be processed to the original payment method/account</li>
            <li>• All fields marked with * are required</li>
            <li>• For questions regarding your refund request, contact us at sports@britishauc.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
