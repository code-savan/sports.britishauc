export interface FormData {
  // Student Details
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  passportNumber: string;
  gender: 'male' | 'female' | 'other';
  genderOther?: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;

  // Education History
  currentSchool: string;
  schoolAddress: string;
  currentGrade: string;
  graduationYear: string;
  academicAchievements: string;

  // Programme Details
  footballExperience: string;
  position: string;
  previousClubs: string;
  achievements: string;
  medicalConditions: boolean;
  medicalDetails?: string;
  allergies: boolean;
  allergyDetails?: string;
  medications: boolean;
  medicationDetails?: string;

  // Parent/Guardian Information
  parentName: string;
  parentRelation: string;
  parentEmail: string;
  parentPhone: string;
  parentAddress: string;
  parentCity: string;
  parentCountry: string;
  parentPostalCode: string;

  // Emergency Contact (different from parent/guardian)
  emergencyName: string;
  emergencyRelation: string;
  emergencyPhone: string;
  emergencyEmail: string;

  // Medical Information
  doctorName: string;
  doctorPhone: string;
  insuranceProvider: string;
  insuranceNumber: string;
  bloodType: string;

  // Declaration
  termsAccepted: boolean;
  photoRelease: boolean;
  dataConsent: boolean;
  signature: string;
  date: string;

  // Submission metadata
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  event?: string; // The event identifier (e.g., 'west-ham-trip', 'new-york-trip', etc.)
}
