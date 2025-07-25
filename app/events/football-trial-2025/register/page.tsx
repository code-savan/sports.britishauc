'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import TrialRegistration from '@/components/TrialRegistration';

export const dynamic = 'force-dynamic';

function RegistrationContent() {
  const searchParams = useSearchParams();
  const eventParam = searchParams.get('event');

  const eventConfig = {
    manchester: {
      title: "Manchester Football Trial 2025",
      heroImage: "/manchester.jpeg",
      accentColor: "blue",
      paymentLink: "https://buy.stripe.com/bIY4jA8a1fD66LSaEE",
      eventType: "manchester_trial" as const
    },
    manchester2025: {
      title: "Manchester Football Trial 2025",
      heroImage: "/manchester.jpeg",
      accentColor: "red",
      paymentLink: "https://buy.stripe.com/fZu5kCdPw6QGdMd4O89MY06",
      eventType: "manchester_2025_trial" as const
    },
    spain: {
      title: "Spain Football Trial 2025",
      heroImage: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?q=80&w=2000",
      accentColor: "orange",
      paymentLink: "https://flutterwave.com/pay/ahdplredysps",
      eventType: "spain_trial" as const
    }
  };

  const config = eventParam === 'spain' ? eventConfig.spain : eventParam === 'manchester2025' ? eventConfig.manchester2025 :   eventConfig.manchester;

  return (
    <TrialRegistration
      eventTitle={config.title}
      heroImage={config.heroImage}
      accentColor={config.accentColor}
      successRedirectPath="/events/football-trial-2025/trial-reg-success"
      paymentLink={config.paymentLink}
      eventType={config.eventType}
    />
  );
}

export default function FootballTrial2025RegistrationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegistrationContent />
    </Suspense>
  );
}
