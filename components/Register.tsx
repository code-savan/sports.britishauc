'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  User,
  Home,
  Calendar,
  Mail,
  Phone,
  GraduationCap,
  Flag,
  FileText,
  Heart,
  BookOpen,
  Globe,
  Users,
  AlertCircle,
  Video,
  Building,
  Award
} from 'lucide-react';
import { FormData } from '@/types/form';
import { createClient } from '@supabase/supabase-js';

// Validate that environment variables are set
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_URL');
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

// Initialize Supabase client with timeout
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: false
    },
    db: {
      schema: 'public'
    },
    global: {
      fetch: fetch.bind(globalThis),
      headers: { 'x-application-name': 'sports-registration' }
    }
  }
);

// Extend FormData type with our temporary form control fields
type ExtendedFormData = FormData & {
  hasTranscript?: 'yes' | 'no';
  hasLanguageTest?: 'yes' | 'no';
  hasPlayedClub?: 'yes' | 'no';
  hasVideoClip?: 'yes' | 'no';
  hasTrials?: 'yes' | 'no';
  languageTestScores?: string;
  previous_clubs?: string;
  football_experience?: string;
  medical_conditions?: boolean;
  medical_details?: string;
  allergies?: boolean;
  allergy_details?: string;
  medications?: boolean;
  medication_details?: string;
  terms_accepted: boolean;
  event?: string;
};

interface RegisterProps {
  eventId: string;
  eventTitle: string;
  heroImage: string;
  accentColor: 'blue' | 'red' | 'orange' | 'yellow';
  successRedirectPath: string;
}

export default function Register({
  eventId,
  eventTitle,
  heroImage,
  accentColor = 'blue',
  successRedirectPath
}: RegisterProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<ExtendedFormData>();
  const totalSteps = 7;

  // Define accent color classes based on the prop
  const accentClasses = {
    blue: {
      gradient: "from-black/80 via-black/60 to-blue-900/30",
      badge: "bg-blue-600",
      progress: "bg-blue-600",
      stepActive: "bg-blue-600",
      button: "bg-blue-600 hover:bg-blue-700",
      radioAndCheckbox: "text-blue-600 focus:ring-blue-500"
    },
    red: {
      gradient: "from-black/80 via-black/60 to-red-900/30",
      badge: "bg-primary",
      progress: "bg-primary",
      stepActive: "bg-primary",
      button: "bg-primary hover:bg-red-700",
      radioAndCheckbox: "text-primary focus:ring-red-500"
    },
    orange: {
      gradient: "from-black/80 via-black/60 to-orange-900/30",
      badge: "bg-orange-600",
      progress: "bg-orange-600",
      stepActive: "bg-orange-600",
      button: "bg-orange-600 hover:bg-orange-700",
      radioAndCheckbox: "text-orange-600 focus:ring-orange-500"
    },
    yellow: {
      gradient: "from-black/80 via-black/60 to-yellow-900/30",
      badge: "bg-yellow-600",
      progress: "bg-yellow-600",
      stepActive: "bg-yellow-600",
      button: "bg-yellow-600 hover:bg-yellow-700",
      radioAndCheckbox: "text-yellow-600 focus:ring-yellow-500"
    }
  }[accentColor] || {
    gradient: "from-black/80 via-black/60 to-blue-900/30",
    badge: "bg-blue-600",
    progress: "bg-blue-600",
    stepActive: "bg-blue-600",
    button: "bg-blue-600 hover:bg-blue-700",
    radioAndCheckbox: "text-blue-600 focus:ring-blue-500"
  };

  const onSubmit = async (data: ExtendedFormData) => {
    setIsSubmitting(true);
    try {
      const dbData = {
        first_name: data.firstName,
        last_name: data.lastName,
        date_of_birth: data.dateOfBirth,
        nationality: data.nationality,
        passport_number: data.passportNumber || 'no',
        gender: data.gender,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city || '',
        country: data.country,
        postal_code: data.postalCode || '',
        current_school: data.currentSchool || 'Not specified',
        school_address: data.schoolAddress || 'Not specified',
        current_grade: data.currentGrade || 'Not specified',
        graduation_year: data.graduationYear || 'Not specified',
        position: data.position || 'Not specified',
        medical_conditions: Boolean(data.medical_conditions),
        medical_details: data.medical_details || '',
        allergies: Boolean(data.allergies),
        allergy_details: data.allergy_details || '',
        medications: Boolean(data.medications),
        medication_details: data.medication_details || '',
        parent_name: data.parentName || '',
        parent_relation: data.parentRelation || '',
        parent_email: data.parentEmail || '',
        parent_phone: data.parentPhone || '',
        parent_address: data.parentAddress || '',
        parent_city: data.parentCity || '',
        parent_country: data.parentCountry || '',
        parent_postal_code: data.parentPostalCode || '',
        emergency_name: data.emergencyName || '',
        emergency_relation: data.emergencyRelation || '',
        emergency_phone: data.emergencyPhone || '',
        emergency_email: data.emergencyEmail || '',
        signature: data.signature,
        submitted_at: new Date().toISOString(),
        date: new Date().toISOString().split('T')[0],
        status: 'pending' as const,
        terms_accepted: true,
        data_consent: true,
        previous_clubs: data.hasPlayedClub === 'yes' ? data.previous_clubs || 'Not specified' : 'None',
        football_experience: data.hasTrials === 'yes' ? data.football_experience || 'Not specified' : 'None',
        academic_achievements: data.hasTranscript === 'yes' ? data.academicAchievements || 'Not specified' : 'None',
        event: eventId
      };

      const finalData = dbData;

      const { error } = await Promise.race([
        supabase.from('registrations').insert([finalData]),
        new Promise<{error: Error}>((_, reject) =>
          setTimeout(() => reject({ error: new Error('Request timed out') }), 10000)
        )
      ]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      toast.success('Registration submitted successfully!');
      setTimeout(() => {
        router.push(successRedirectPath);
      }, 2000);
    } catch (error) {
      console.error('Error submitting registration:', error);
      let errorMessage = 'Failed to submit registration. ';

      if (error instanceof Error) {
        if (error.message.includes('timed out')) {
          errorMessage += 'The request timed out. Please check your internet connection and try again.';
        } else if (error.message.includes('fetch')) {
          errorMessage += 'Unable to connect to the server. Please check your internet connection and try again.';
        } else if (error.message.includes('schema cache')) {
          errorMessage += 'There was an issue with the form fields. Please contact support.';
        } else {
          errorMessage += error.message;
        }
      } else {
        errorMessage += 'Please try again.';
      }

      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    setStep(prev => Math.min(prev + 1, totalSteps));
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-16">
      {/* Hero Section with Dynamic Accent */}
      <section className="relative h-[30vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={`${eventTitle} Registration`}
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${accentClasses.gradient}`} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-block mb-4">
            <span className={`${accentClasses.badge} text-white text-sm font-medium px-3 py-1 rounded-full`}>Registration Form</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">{eventTitle}</h1>
          <p className="text-lg md:text-xl text-white">Complete all sections to secure your spot</p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step > i + 1 ? 'bg-green-500 text-white' :
                    step === i + 1 ? accentClasses.stepActive + ' text-white' :
                    'bg-gray-200 text-gray-600'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`${accentClasses.progress} h-2.5 rounded-full transition-all duration-300`}
                style={{ width: `${(step / totalSteps) * 100}%` }}
              ></div>
            </div>
            <p className="text-center mt-2 text-sm text-gray-600">
              Step {step} of {totalSteps}: {
                step === 1 ? 'Student Details' :
                step === 2 ? 'Football History' :
                step === 3 ? 'Residence Permit Information' :
                step === 4 ? 'Education History' :
                step === 5 ? 'Programme and Degree Choice' :
                step === 6 ? 'Parent/Guardian Information' :
                'Medical Information'
              }
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Step 1: Student Details */}
              {step === 1 && (
                <div className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Label htmlFor="firstName" className="text-slate-700">First Name</Label>
                      <div className="relative mt-1">
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          {...register('firstName', { required: 'First name is required' })}
                          className={`pl-10 ${errors.firstName ? 'border-red-500' : ''}`}
                        />
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div className="relative">
                      <Label htmlFor="lastName" className="text-slate-700">Surname</Label>
                      <div className="relative mt-1">
                        <Input
                          id="lastName"
                          placeholder="Enter your surname"
                          {...register('lastName', { required: 'Surname is required' })}
                          className={`pl-10 ${errors.lastName ? 'border-red-500' : ''}`}
                        />
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Address and City Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Label htmlFor="address" className="text-slate-700">Home Address</Label>
                      <div className="relative mt-1">
                        <Textarea
                          id="address"
                          placeholder="Enter your home address"
                          {...register('address', { required: 'Home address is required' })}
                          className={`pl-10 min-h-[80px] ${errors.address ? 'border-red-500' : ''}`}
                        />
                        <Home className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                      </div>
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                      )}
                    </div>

                    <div className="space-y-6">
                      <div className="relative">
                        <Label htmlFor="city" className="text-slate-700">City</Label>
                        <div className="relative mt-1">
                          <Input
                            id="city"
                            placeholder="Enter your city"
                            {...register('city', { required: 'City is required' })}
                            className={`pl-10 ${errors.city ? 'border-red-500' : ''}`}
                          />
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                        {errors.city && (
                          <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                        )}
                      </div>

                      <div className="relative">
                        <Label htmlFor="postalCode" className="text-slate-700">Postal Code</Label>
                        <div className="relative mt-1">
                          <Input
                            id="postalCode"
                            placeholder="Enter your postal code"
                            {...register('postalCode', { required: 'Postal code is required' })}
                            className={`pl-10 ${errors.postalCode ? 'border-red-500' : ''}`}
                          />
                          <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                        {errors.postalCode && (
                          <p className="text-red-500 text-sm mt-1">{errors.postalCode.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div className="relative">
                    <Label htmlFor="dateOfBirth" className="text-slate-700">Date of Birth</Label>
                    <div className="relative mt-1">
                      <Input
                        id="dateOfBirth"
                        type="date"
                        {...register('dateOfBirth', { required: 'Date of birth is required' })}
                        className={`pl-10 ${errors.dateOfBirth ? 'border-red-500' : ''}`}
                      />
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.dateOfBirth && (
                      <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>
                    )}
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Label htmlFor="email" className="text-slate-700">Email Address</Label>
                      <div className="relative mt-1">
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                          className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                        />
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="relative">
                      <Label htmlFor="phone" className="text-slate-700">Telephone</Label>
                      <div className="relative mt-1">
                        <Input
                          id="phone"
                          placeholder="Enter your telephone number"
                          {...register('phone', { required: 'Telephone number is required' })}
                          className={`pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                        />
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Gender Selection */}
                  <div className="space-y-3">
                    <Label className="text-slate-700">Gender</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="gender-male"
                          value="male"
                          {...register('gender', { required: 'Please select your gender' })}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="gender-male" className="cursor-pointer">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="gender-female"
                          value="female"
                          {...register('gender', { required: 'Please select your gender' })}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="gender-female" className="cursor-pointer">Female</Label>
                      </div>
                    </div>
                    {errors.gender && (
                      <p className="text-red-500 text-sm">{errors.gender.message}</p>
                    )}
                  </div>

                  {/* Current Grade */}
                  <div className="relative">
                    <Label htmlFor="currentGrade" className="text-slate-700">Current Grade</Label>
                    <div className="relative mt-1">
                      <Input
                        id="currentGrade"
                        placeholder="Enter your current grade"
                        {...register('currentGrade', { required: 'Current grade is required' })}
                        className={`pl-10 ${errors.currentGrade ? 'border-red-500' : ''}`}
                      />
                      <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.currentGrade && (
                      <p className="text-red-500 text-sm mt-1">{errors.currentGrade.message}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Football History */}
              {step === 2 && (
                <div className="space-y-6">
                  {/* Club/Academy Experience */}
                  <div className="space-y-3">
                    <Label className="text-slate-700">Have you played for any club/academy?</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="played-yes"
                          value="yes"
                          {...register('hasPlayedClub', { required: 'Please answer this question' })}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="played-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="played-no"
                          value="no"
                          {...register('hasPlayedClub')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="played-no" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                    {watch('hasPlayedClub') === 'yes' && (
                      <div className="relative mt-3">
                        <Input
                          placeholder="List your previous clubs/academies"
                          {...register('previous_clubs')}
                          className="pl-10"
                        />
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Video Clip */}
                  <div className="space-y-3">
                    <Label className="text-slate-700">Do you have a Video Clip?</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="video-yes"
                          value="yes"
                          {...register('hasVideoClip')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="video-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="video-no"
                          value="no"
                          {...register('hasVideoClip')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="video-no" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                    {watch('hasVideoClip') === 'yes' && (
                      <div className="relative mt-3">
                        <Input
                          placeholder="Provide link to your video clip"
                          {...register('achievements')}
                          className="pl-10"
                        />
                        <Video className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Football Experience */}
                  <div className="space-y-3">
                    <Label className="text-slate-700">Have you participated in any Football Trials?</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="trials-yes"
                          value="yes"
                          {...register('hasTrials', { required: 'Please answer this question' })}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="trials-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="trials-no"
                          value="no"
                          {...register('hasTrials')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="trials-no" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                    {watch('hasTrials') === 'yes' && (
                      <div className="relative mt-3">
                        <Input
                          placeholder="List your football trial experiences"
                          {...register('football_experience')}
                          className="pl-10"
                        />
                        <Award className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Residence Permit Information */}
              {step === 3 && (
                <div className="space-y-6">
                  {/* Residence Status */}
                  <div className="relative">
                    <Label htmlFor="nationality" className="text-slate-700">Residence Status</Label>
                    <div className="relative mt-1">
                      <Select onValueChange={(value) => setValue('nationality', value)}>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Select your residence status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="citizen">Citizen</SelectItem>
                          <SelectItem value="permanent-resident">Permanent Resident</SelectItem>
                          <SelectItem value="student-visa">Student Visa</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <Flag className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Country of Residence */}
                  <div className="relative">
                    <Label htmlFor="country" className="text-slate-700">Country of Residence</Label>
                    <div className="relative mt-1">
                      <Input
                        id="country"
                        placeholder="Enter your country of residence"
                        {...register('country', { required: 'Country of residence is required' })}
                        className={`pl-10 ${errors.country ? 'border-red-500' : ''}`}
                      />
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.country && (
                      <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                    )}
                  </div>

                  {/* Schengen */}
                  <div className="space-y-3">
                    <Label className="text-slate-700">Do you have a Schengen Visa?</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="passport-yes"
                          value="yes"
                          {...register('passportNumber')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="passport-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="passport-no"
                          value="no"
                          {...register('passportNumber')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="passport-no" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Education History */}
              {step === 4 && (
                <div className="space-y-6">
                  {/* Current School Information */}
                  <div className="space-y-3">
                    <Label htmlFor="currentSchool" className="text-slate-700">Current School Name</Label>
                    <div className="relative mt-1">
                      <Input
                        id="currentSchool"
                        placeholder="Enter your current school name"
                        {...register('currentSchool', { required: 'Current school name is required' })}
                        className={`pl-10 ${errors.currentSchool ? 'border-red-500' : ''}`}
                      />
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.currentSchool && (
                      <p className="text-red-500 text-sm mt-1">{errors.currentSchool.message}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="schoolAddress" className="text-slate-700">School Address</Label>
                    <div className="relative mt-1">
                      <Textarea
                        id="schoolAddress"
                        placeholder="Enter your school's address"
                        {...register('schoolAddress', { required: 'School address is required' })}
                        className={`pl-10 min-h-[80px] ${errors.schoolAddress ? 'border-red-500' : ''}`}
                      />
                      <Building className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.schoolAddress && (
                      <p className="text-red-500 text-sm mt-1">{errors.schoolAddress.message}</p>
                    )}
                  </div>

                  {/* Transcript Information */}
                  <div className="space-y-3">
                    <Label className="text-slate-700">Do you have WAEC/NECO/IGSCE/Transcript?</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="transcript-yes"
                          value="yes"
                          {...register('hasTranscript')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="transcript-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="transcript-no"
                          value="no"
                          {...register('hasTranscript')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="transcript-no" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                    {watch('hasTranscript') === 'yes' && (
                      <div className="relative mt-3">
                        <Input
                          placeholder="List your transcripts/certificates"
                          {...register('academicAchievements')}
                          className="pl-10"
                        />
                        <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Language Test Information */}
                  <div className="space-y-3">
                    <Label className="text-slate-700">Do you have TOAFL/IELTS/PTEA/SAT?</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="language-yes"
                          value="yes"
                          {...register('hasLanguageTest')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="language-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="language-no"
                          value="no"
                          {...register('hasLanguageTest')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="language-no" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                    {watch('hasLanguageTest') === 'yes' && (
                      <div className="relative mt-3">
                        <Input
                          placeholder="List your language test scores"
                          {...register('languageTestScores')}
                          className="pl-10"
                        />
                        <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 5: Programme and Degree Choice */}
              {step === 5 && (
                <div className="space-y-6">
                  <div className="relative">
                    <Label htmlFor="interestedCourse" className="text-slate-700">Interested Course of Study</Label>
                    <div className="relative mt-1">
                      <Input
                        id="interestedCourse"
                        placeholder="Enter your interested course of study"
                        {...register('currentGrade')}
                        className={`pl-10 ${errors.currentGrade ? 'border-red-500' : ''}`}
                      />
                      <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.currentGrade && (
                      <p className="text-red-500 text-sm mt-1">{errors.currentGrade.message}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label className="text-slate-700">Do you have any University/College in mind?</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="university-yes"
                          value="yes"
                          {...register('currentSchool')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="university-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="university-no"
                          value="no"
                          {...register('currentSchool')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="university-no" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                    {watch('currentSchool') === 'yes' && (
                      <div className="relative mt-3">
                        <Input
                          placeholder="List universities/colleges"
                          {...register('schoolAddress')}
                          className="pl-10"
                        />
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <Label htmlFor="commenceStudy" className="text-slate-700">When do you wish to commence your study?</Label>
                    <div className="relative mt-1">
                      <Input
                        id="commenceStudy"
                        placeholder="e.g., Fall 2025"
                        {...register('graduationYear')}
                        className={`pl-10 ${errors.graduationYear ? 'border-red-500' : ''}`}
                      />
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="relative">
                    <Label htmlFor="interestedCountry" className="text-slate-700">Interested Country to Study</Label>
                    <div className="relative mt-1">
                      <Input
                        id="interestedCountry"
                        placeholder="Enter country name"
                        {...register('country', { required: 'Country is required' })}
                        className={`pl-10 ${errors.country ? 'border-red-500' : ''}`}
                      />
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="relative">
                    <Label htmlFor="hearAboutUs" className="text-slate-700">How did you hear about British AUC Sports?</Label>
                    <div className="relative mt-1">
                      <Select onValueChange={(value) => setValue('position', value)}>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Select source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="social-media">Social Media</SelectItem>
                          <SelectItem value="friend">Friend/Family</SelectItem>
                          <SelectItem value="search">Search Engine</SelectItem>
                          <SelectItem value="event">Sports Event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Parent/Guardian Information */}
              {step === 6 && (
                <div className="space-y-6">
                  <div className="relative">
                    <Label htmlFor="parentName" className="text-slate-700">Full Name</Label>
                    <div className="relative mt-1">
                      <Input
                        id="parentName"
                        placeholder="Enter parent/guardian's full name"
                        {...register('emergencyName', { required: 'Emergency contact name is required' })}
                        className={`pl-10 ${errors.emergencyName ? 'border-red-500' : ''}`}
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Parent Address and City Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Label htmlFor="parentAddress" className="text-slate-700">Parent/Guardian Address</Label>
                      <div className="relative mt-1">
                        <Textarea
                          id="parentAddress"
                          placeholder="Enter parent/guardian's address"
                          {...register('parentAddress', { required: 'Parent/Guardian address is required' })}
                          className={`pl-10 min-h-[80px] ${errors.parentAddress ? 'border-red-500' : ''}`}
                        />
                        <Home className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                      </div>
                      {errors.parentAddress && (
                        <p className="text-red-500 text-sm mt-1">{errors.parentAddress.message}</p>
                      )}
                    </div>

                    <div className="space-y-6">
                      <div className="relative">
                        <Label htmlFor="parentCity" className="text-slate-700">Parent/Guardian City</Label>
                        <div className="relative mt-1">
                          <Input
                            id="parentCity"
                            placeholder="Enter parent/guardian's city"
                            {...register('parentCity', { required: 'Parent/Guardian city is required' })}
                            className={`pl-10 ${errors.parentCity ? 'border-red-500' : ''}`}
                          />
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                        {errors.parentCity && (
                          <p className="text-red-500 text-sm mt-1">{errors.parentCity.message}</p>
                        )}
                      </div>

                      <div className="relative">
                        <Label htmlFor="parentPostalCode" className="text-slate-700">Parent/Guardian Postal Code</Label>
                        <div className="relative mt-1">
                          <Input
                            id="parentPostalCode"
                            placeholder="Enter parent/guardian's postal code"
                            {...register('parentPostalCode', { required: 'Parent/Guardian postal code is required' })}
                            className={`pl-10 ${errors.parentPostalCode ? 'border-red-500' : ''}`}
                          />
                          <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                        {errors.parentPostalCode && (
                          <p className="text-red-500 text-sm mt-1">{errors.parentPostalCode.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Label htmlFor="parentEmail" className="text-slate-700">Email</Label>
                      <div className="relative mt-1">
                        <Input
                          id="parentEmail"
                          type="email"
                          placeholder="Enter parent/guardian's email"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            }
                          })}
                          className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                        />
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="relative">
                      <Label htmlFor="parentTelephone" className="text-slate-700">Telephone</Label>
                      <div className="relative mt-1">
                        <Input
                          id="parentTelephone"
                          placeholder="Enter parent/guardian's telephone"
                          {...register('emergencyPhone', { required: 'Emergency contact telephone is required' })}
                          className={`pl-10 ${errors.emergencyPhone ? 'border-red-500' : ''}`}
                        />
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 7: Medical Information */}
              {step === 7 && (
                <div className="space-y-8">
                  {/* Medical Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Medical Information</h3>

                    {/* Medical Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="medicalConditions"
                          {...register('medical_conditions')}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <Label htmlFor="medicalConditions" className="text-slate-700">Do you have any medical conditions?</Label>
                      </div>
                    </div>

                    {watch('medical_conditions') && (
                      <div className="relative mt-4">
                        <Label htmlFor="medicalDetails" className="text-slate-700">Please provide details of your medical conditions</Label>
                        <div className="relative mt-1">
                          <Textarea
                            id="medicalDetails"
                            placeholder="Please describe your medical conditions"
                            {...register('medical_details')}
                            className="pl-10 min-h-[100px]"
                          />
                          <Heart className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    )}

                    {/* Allergies */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="allergies"
                          {...register('allergies')}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <Label htmlFor="allergies" className="text-slate-700">Do you have any allergies?</Label>
                      </div>
                    </div>

                    {watch('allergies') && (
                      <div className="relative mt-4">
                        <Label htmlFor="allergyDetails" className="text-slate-700">Please provide details of your allergies</Label>
                        <div className="relative mt-1">
                          <Textarea
                            id="allergyDetails"
                            placeholder="Please describe your allergies"
                            {...register('allergy_details')}
                            className="pl-10 min-h-[100px]"
                          />
                          <AlertCircle className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    )}

                    {/* Medications */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="medications"
                          {...register('medications')}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <Label htmlFor="medications" className="text-slate-700">Are you currently taking any medications?</Label>
                      </div>
                    </div>

                    {watch('medications') && (
                      <div className="relative mt-4">
                        <Label htmlFor="medicationDetails" className="text-slate-700">Please provide details of your medications</Label>
                        <div className="relative mt-1">
                          <Textarea
                            id="medicationDetails"
                            placeholder="Please list your current medications"
                            {...register('medication_details')}
                            className="pl-10 min-h-[100px]"
                          />
                          <Heart className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Emergency Contact */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Emergency Contact</h3>

                    <div className="relative">
                      <Label htmlFor="emergencyContactName" className="text-slate-700">Full Name</Label>
                      <div className="relative mt-1">
                        <Input
                          id="emergencyContactName"
                          placeholder="Enter emergency contact's full name"
                          {...register('emergencyName', { required: 'Emergency contact name is required' })}
                          className={`pl-10 ${errors.emergencyName ? 'border-red-500' : ''}`}
                        />
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="relative">
                      <Label htmlFor="emergencyContactTelephone" className="text-slate-700">Telephone</Label>
                      <div className="relative mt-1">
                        <Input
                          id="emergencyContactTelephone"
                          placeholder="Enter emergency contact's telephone"
                          {...register('emergencyPhone', { required: 'Emergency contact telephone is required' })}
                          className={`pl-10 ${errors.emergencyPhone ? 'border-red-500' : ''}`}
                        />
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="relative">
                      <Label htmlFor="emergencyContactAddress" className="text-slate-700">Address</Label>
                      <div className="relative mt-1">
                        <Textarea
                          id="emergencyContactAddress"
                          placeholder="Enter emergency contact's address"
                          {...register('parentAddress', { required: 'Emergency contact address is required' })}
                          className={`pl-10 min-h-[80px] ${errors.parentAddress ? 'border-red-500' : ''}`}
                        />
                        <Home className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="relative">
                      <Label htmlFor="emergencyContactRelationship" className="text-slate-700">Relationship</Label>
                      <div className="relative mt-1">
                        <Input
                          id="emergencyContactRelationship"
                          placeholder="Enter relationship to emergency contact"
                          {...register('emergencyRelation', { required: 'Relationship is required' })}
                          className={`pl-10 ${errors.emergencyRelation ? 'border-red-500' : ''}`}
                        />
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Declaration */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Declaration</h3>
                    <div className="relative">
                      <Label htmlFor="declarationName" className="text-slate-700">Full Name</Label>
                      <div className="relative mt-1">
                        <Input
                          id="declarationName"
                          placeholder="Enter your full name to confirm"
                          {...register('signature', { required: 'Declaration name is required' })}
                          className={`pl-10 ${errors.signature ? 'border-red-500' : ''}`}
                        />
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        {...register('terms_accepted', { required: true })}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <Label htmlFor="terms" className="text-sm text-gray-600">
                        I confirm that the information provided above is accurate to the best of my knowledge. Also, I agree to abide by the rules and regulations of the academy.
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </Button>
                )}

                {step < totalSteps ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className={`ml-auto flex items-center ${accentClasses.button}`}
                  >
                    Next
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className={`ml-auto ${accentClasses.button}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
