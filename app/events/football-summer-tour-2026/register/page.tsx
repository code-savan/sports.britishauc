'use client';

import Register from '@/components/Register';

export default function FootballSummerTourRegisterPage() {
  return (
    <Register
      eventId="football-summer-tour-2026"
      eventTitle="Football Summer Tour 2026, United Kingdom"
      heroImage="/preseasoncamphero.jpg"
      accentColor="red"
      successRedirectPath="/events/football-summer-tour-2026/registration-success"
    />
  );
}