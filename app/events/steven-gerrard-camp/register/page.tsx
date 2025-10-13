'use client';

import Register from '@/components/Register';

export default function StevenGerrardCampRegistrationPage() {
  return (
    <Register
      eventId="steven-gerrard-camp"
      eventTitle="Steven Gerrard Academy Pre Season Camp"
      heroImage="https://stevengerrard.academy/wp-content/uploads/sgapreseason-17dddd.jpg"
      accentColor="red"
      successRedirectPath="/events/steven-gerrard-camp/registration-success"
    />
  );
}
