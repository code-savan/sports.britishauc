'use client';

import Register from '@/components/Register';

export default function LondonBasketballTripRegistrationPage() {
  return (
    <Register
      eventId="london-basketball-trip"
      eventTitle="Nike Basketball Camps London 2025"
      heroImage="https://images.unsplash.com/photo-1608541737042-87a12275d313?q=80&w=2000"
      accentColor="orange"
      successRedirectPath="/events/london-basketball-trip/registration-success"
    />
  );
}
