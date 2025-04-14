'use client';

import { useSearchParams } from 'next/navigation';
import TrialRegistration from '@/components/TrialRegistration';

export default function FootballTrial2025RegistrationPage() {
  const searchParams = useSearchParams();
  const eventParam = searchParams.get('event');

  const eventConfig = {
    manchester: {
      title: "Manchester Football Trial 2025",
      heroImage: "/manchester.jpeg",
      accentColor: "blue",
      paymentLink: "https://flutterwave.com/pay/obauyeqmgu4l",
      eventType: "manchester_trial" as const
    },
    spain: {
      title: "Spain Football Trial 2025",
      heroImage: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?q=80&w=2000",
      accentColor: "orange",
      paymentLink: "https://flutterwave.com/pay/ahdplredysps",
      eventType: "spain_trial" as const
    }
  };

  const config = eventParam === 'spain' ? eventConfig.spain : eventConfig.manchester;

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
