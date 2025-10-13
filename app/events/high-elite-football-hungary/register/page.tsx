'use client';

import Register from '@/components/Register';

export default function HighEliteFootballHungaryRegisterPage() {
  return (
    <Register
      eventId="high-elite-football-hungary"
      eventTitle="High Elite Football Development Programme"
      heroImage="https://www.debrecen.hu/assets/media/gallery/hu/50847/1200x800/dvsc_focipalya_0014.jpg"
      accentColor="purple"
      successRedirectPath="/events/high-elite-football-hungary/registration-success"
    />
  );
}
