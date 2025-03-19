'use client';

import Register from '@/components/Register';

export default function WestHamTripRegistrationPage() {
  return (
    <Register
      eventId="west-ham-trip"
      eventTitle="West Ham United Summer Trip 2025"
      heroImage="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000"
      accentColor="red"
      successRedirectPath="/events/west-ham-trip/registration-success"
    />
  );
}
