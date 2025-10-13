'use client';

import { useEffect, useState } from 'react';
import TrialRegistrationSuccess from '@/components/TrialRegistrationSuccess';

export default function TrialRegSuccess() {
  const [paymentLink, setPaymentLink] = useState('');
  const [eventTitle, setEventTitle] = useState('Football Trial 2025');
  const [heroImage, setHeroImage] = useState('/manchester.jpeg');
  const [accentColor, setAccentColor] = useState('blue');
  const [eventFee, setEventFee] = useState('£98');

  useEffect(() => {
    // Get payment link and event details from localStorage
    const storedPaymentLink = localStorage.getItem('paymentLink');
    const storedEventTitle = localStorage.getItem('eventTitle');
    const storedHeroImage = localStorage.getItem('heroImage');
    const storedAccentColor = localStorage.getItem('accentColor');
    const storedEventFee = localStorage.getItem('eventFee');

    if (storedPaymentLink) {
      setPaymentLink(storedPaymentLink);
      localStorage.removeItem('paymentLink');
    }
    if (storedEventTitle) {
      setEventTitle(storedEventTitle);
      localStorage.removeItem('eventTitle');
    }
    if (storedHeroImage) {
      setHeroImage(storedHeroImage);
      localStorage.removeItem('heroImage');
    }
    if (storedAccentColor) {
      setAccentColor(storedAccentColor);
      localStorage.removeItem('accentColor');
    }
    if (storedEventFee) {
      setEventFee(storedEventFee);
      localStorage.removeItem('eventFee');
    }
  }, []);

  // If payment link exists, show old behavior, otherwise show payment info
  const paymentInfo = !paymentLink ? {
    accountName: "BAUC INTERNATIONAL LTD",
    bankName: "Monzo Bank",
    bankAddress: "Monzo Bank, Broadwalk House, 5 Appold St, London EC2A 2AG, United Kingdom",
    accountNumber: "95163038",
    sortCode: "04-00-03",
    iban: "GB33MONZ04000395163038",
    bic: "MONZOGB2L",
    additionalInfo: "All payments must be in sterling. All bank charges in the country of origin and in the UK are to be paid in remittance by the applicant.",
    fee: eventFee
  } : undefined;

  return (
    <TrialRegistrationSuccess
      eventTitle={eventTitle}
      heroImage={heroImage}
      accentColor={accentColor}
      paymentPath={paymentLink}
      paymentInfo={paymentInfo}
    />
  );
}
