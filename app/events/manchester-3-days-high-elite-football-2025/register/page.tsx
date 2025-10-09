'use client';

import Register from '@/components/Register';

export default function ManchesterThreeDaysHighEliteRegisterPage() {
  return (
    <Register
      eventId="manchester-3-days-high-elite-football-2025"
      eventTitle="3-Day High Elite Football Development Programme"
      heroImage="/manchester.jpeg"
      accentColor="orange"
      successRedirectPath="/events/manchester-3-days-high-elite-football-2025/registration-success"
    />
  );
}
