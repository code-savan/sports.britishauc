export interface TrialFormData {
  // Event Information
  event: 'manchester_trial' | 'spain_trial';

  // Player Information
  first_name: string;
  surname: string;
  date_of_birth: string;
  place_of_birth: string;
  address: string;
  permanent_address: string;
  telephone: string;
  email: string;

  // School Information
  college_university: string;
  course_of_study: string;
  duration: string;

  // Football History
  has_played_club: 'yes' | 'no';
  video_clip_url?: string;
  club_academy_affiliation?: string;
  football_trials?: string;

  // Residence Information
  nationality: string;
  residence_status: string;
  country_of_residence: string;
  has_schengen: boolean;

  // Parent/Guardian Information
  parent_name: string;
  parent_address: string;
  parent_permanent_address: string;
  parent_telephone: string;
  parent_email: string;

  // Medical Information
  has_medical_condition: boolean;
  medical_document_url?: string;
  has_heart_lung_disease: boolean;
  has_knee_injury: boolean;
  has_foot_injury: boolean;

  // Emergency Contact
  emergency_name: string;
  emergency_telephone: string;
  emergency_address: string;
  emergency_relationship: string;

  // Declaration
  declaration_accepted: boolean;
}
