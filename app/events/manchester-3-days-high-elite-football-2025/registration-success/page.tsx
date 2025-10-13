'use client';

import RegistrationSuccess from '@/components/RegistrationSuccess';

export default function ManchesterThreeDaysHighEliteRegistrationSuccessPage() {
  return (
    <RegistrationSuccess
      eventTitle="3-Day High Elite Football Development Programme"
      heroImage="/manchester.jpeg"
      accentColor="orange"
      paymentInfo={{
        accountName: "BAUC INTERNATIONAL LTD",
        bankName: "Monzo Bank",
        bankAddress: "Monzo Bank, Broadwalk House, 5 Appold St, London EC2A 2AG, United Kingdom",
        accountNumber: "95163038",
        sortCode: "04-00-03",
        iban: "GB33MONZ04000395163038",
        bic: "MONZOGB2L",
        additionalInfo: "All payments must be in sterling. All bank charges in the country of origin and in the UK are to be paid in remittance by the applicant."
      }}
    />
  );
}
