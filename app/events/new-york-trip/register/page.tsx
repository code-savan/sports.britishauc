'use client';

import Register from '@/components/Register';

export default function NewYorkTripRegistrationPage() {
  return (
    <Register
      eventId="new-york-trip"
      eventTitle="New York Summer Trip 2025"
      heroImage="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2000"
      accentColor="blue"
      successRedirectPath="/events/new-york-trip/registration-success"
    />
  );
}
