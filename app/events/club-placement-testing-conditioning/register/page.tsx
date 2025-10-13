'use client';

import Register from '@/components/Register';

export default function ClubPlacementTestingConditioningRegisterPage() {
  return (
    <Register
      eventId="club-placement-testing-conditioning"
      eventTitle="Club Placement Testing & Conditioning"
      heroImage="/event10.jpg"
      accentColor="blue"
      successRedirectPath="/events/club-placement-testing-conditioning/registration-success"
    />
  );
}
