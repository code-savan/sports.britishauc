'use client';

import Register from '@/components/Register';

export default function ManchesterHighEliteFootballRegisterPage() {
  return (
    <Register
      eventId="manchester-high-elite-football-2025"
      eventTitle="Manchester High Elite Football Development Programme"
      heroImage="/event9.jpg"
      accentColor="orange"
      successRedirectPath="/events/manchester-high-elite-football-2025/registration-success"
    />
  );
}
