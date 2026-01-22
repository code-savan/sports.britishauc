'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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
  Users,
  Video,
  Building,
  Globe,
  BookOpen,
  Award
} from 'lucide-react';
import { TrialFormData } from '@/types/trial-form';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      persistSession: false
    }
  }
);

interface TrialRegistrationProps {
  eventTitle: string;
  heroImage: string;
  accentColor?: string;
  successRedirectPath: string;
  paymentLink: string;
  eventType: 'manchester_trial' | 'spain_trial' | 'manchester_2025_trial' | 'helsby_2025_trial' | 'manchester_2026_trial';
  eventFee?: string;
}

export default function TrialRegistration({
  eventTitle,
  heroImage,
  accentColor = 'blue',
  successRedirectPath,
  paymentLink,
  eventType,
  eventFee
}: TrialRegistrationProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 7;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<TrialFormData>();

  const accentClasses = {
    gradient: accentColor === 'orange'
      ? 'from-orange-900/50 to-orange-900/90'
      : 'from-blue-900/50 to-blue-900/90',
    badge: accentColor === 'orange'
      ? 'bg-orange-500'
      : 'bg-blue-500',
    button: accentColor === 'orange'
      ? 'bg-orange-500 hover:bg-orange-600 text-white'
      : 'bg-blue-500 hover:bg-blue-600 text-white'
  };

  const onSubmit = async (data: TrialFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('trial_registrations')
        .insert([{ ...data, event: eventType }]);

      if (error) throw error;

      // Send emails via API
      try {
        await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userEmail: data.email,
            userName: `${data.first_name} ${data.surname}`,
            eventTitle,
            ...data
          })
        });
      } catch (emailError) {
        toast.error('Registration saved, but failed to send email notification.');
      }

      toast.success('Trial registration submitted successfully!');

      // Store event details in localStorage before redirecting
      if (paymentLink) {
        localStorage.setItem('paymentLink', paymentLink);
      }
      localStorage.setItem('eventTitle', eventTitle);
      localStorage.setItem('heroImage', heroImage);
      localStorage.setItem('accentColor', accentColor);
      if (eventFee) {
        localStorage.setItem('eventFee', eventFee);
      }

      // Redirect to success page
      router.push('/events/football-trial-2025/trial-reg-success');

    } catch (error) {
      console.error('Error submitting registration:', error);
      toast.error('Failed to submit registration. Please try again.');
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
      {/* Hero Section */}
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
            <span className={`${accentClasses.badge} text-white text-sm font-medium px-3 py-1 rounded-full`}>
              Trial Registration Form
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">{eventTitle}</h1>
          <p className="text-lg md:text-xl text-white">Complete all sections to register for the trial</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Step 1: Player Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Player Information</h3>

                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Label htmlFor="first_name" className="text-slate-700">First Name</Label>
                      <div className="relative mt-1">
                        <Input
                          id="first_name"
                          placeholder="Enter your first name"
                          {...register('first_name', { required: 'First name is required' })}
                          className={`pl-10 ${errors.first_name ? 'border-red-500' : ''}`}
                        />
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                      {errors.first_name && (
                        <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>
                      )}
                    </div>

                    <div className="relative">
                      <Label htmlFor="surname" className="text-slate-700">Surname</Label>
                      <div className="relative mt-1">
                        <Input
                          id="surname"
                          placeholder="Enter your surname"
                          {...register('surname', { required: 'Surname is required' })}
                          className={`pl-10 ${errors.surname ? 'border-red-500' : ''}`}
                        />
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                      {errors.surname && (
                        <p className="text-red-500 text-sm mt-1">{errors.surname.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Date and Place of Birth */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Label htmlFor="date_of_birth" className="text-slate-700">Date of Birth</Label>
                      <div className="relative mt-1">
                        <Input
                          id="date_of_birth"
                          type="date"
                          {...register('date_of_birth', { required: 'Date of birth is required' })}
                          className={`pl-10 ${errors.date_of_birth ? 'border-red-500' : ''}`}
                        />
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                      {errors.date_of_birth && (
                        <p className="text-red-500 text-sm mt-1">{errors.date_of_birth.message}</p>
                      )}
                    </div>

                    <div className="relative">
                      <Label htmlFor="place_of_birth" className="text-slate-700">Place of Birth</Label>
                      <div className="relative mt-1">
                        <Input
                          id="place_of_birth"
                          placeholder="Enter your place of birth"
                          {...register('place_of_birth', { required: 'Place of birth is required' })}
                          className={`pl-10 ${errors.place_of_birth ? 'border-red-500' : ''}`}
                        />
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                      {errors.place_of_birth && (
                        <p className="text-red-500 text-sm mt-1">{errors.place_of_birth.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Address Fields */}
                  <div className="space-y-6">
                    <div className="relative">
                      <Label htmlFor="address" className="text-slate-700">Address</Label>
                      <div className="relative mt-1">
                        <Textarea
                          id="address"
                          placeholder="Enter your current address"
                          {...register('address', { required: 'Address is required' })}
                          className={`pl-10 min-h-[80px] ${errors.address ? 'border-red-500' : ''}`}
                        />
                        <Home className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                      </div>
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                      )}
                    </div>

                    <div className="relative">
                      <Label htmlFor="permanent_address" className="text-slate-700">Permanent Address</Label>
                      <div className="relative mt-1">
                        <Textarea
                          id="permanent_address"
                          placeholder="Enter your permanent address"
                          {...register('permanent_address', { required: 'Permanent address is required' })}
                          className={`pl-10 min-h-[80px] ${errors.permanent_address ? 'border-red-500' : ''}`}
                        />
                        <Home className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                      </div>
                      {errors.permanent_address && (
                        <p className="text-red-500 text-sm mt-1">{errors.permanent_address.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Label htmlFor="telephone" className="text-slate-700">Telephone</Label>
                      <div className="relative mt-1">
                        <Input
                          id="telephone"
                          placeholder="Enter your telephone number"
                          {...register('telephone', { required: 'Telephone number is required' })}
                          className={`pl-10 ${errors.telephone ? 'border-red-500' : ''}`}
                        />
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                      {errors.telephone && (
                        <p className="text-red-500 text-sm mt-1">{errors.telephone.message}</p>
                      )}
                    </div>

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
                  </div>
                </div>
              )}

              {/* Step 2: School Information */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">School Information</h3>

                  <div className="relative">
                    <Label htmlFor="college_university" className="text-slate-700">College/University</Label>
                    <div className="relative mt-1">
                      <Input
                        id="college_university"
                        placeholder="Enter your college or university name"
                        {...register('college_university', { required: 'College/University is required' })}
                        className={`pl-10 ${errors.college_university ? 'border-red-500' : ''}`}
                      />
                      <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.college_university && (
                      <p className="text-red-500 text-sm mt-1">{errors.college_university.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <Label htmlFor="course_of_study" className="text-slate-700">Course of Study</Label>
                    <div className="relative mt-1">
                      <Input
                        id="course_of_study"
                        placeholder="Enter your course of study"
                        {...register('course_of_study', { required: 'Course of study is required' })}
                        className={`pl-10 ${errors.course_of_study ? 'border-red-500' : ''}`}
                      />
                      <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.course_of_study && (
                      <p className="text-red-500 text-sm mt-1">{errors.course_of_study.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <Label htmlFor="duration" className="text-slate-700">Duration</Label>
                    <div className="relative mt-1">
                      <Input
                        id="duration"
                        placeholder="Enter course duration (e.g., 4 years)"
                        {...register('duration', { required: 'Duration is required' })}
                        className={`pl-10 ${errors.duration ? 'border-red-500' : ''}`}
                      />
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.duration && (
                      <p className="text-red-500 text-sm mt-1">{errors.duration.message}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Football History */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Football History</h3>

                  <div className="space-y-3">
                    <Label className="text-slate-700">Have you played for any club/academy?</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="played-yes"
                          value="yes"
                          {...register('has_played_club', { required: 'Please answer this question' })}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="played-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="played-no"
                          value="no"
                          {...register('has_played_club')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="played-no" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                    {watch('has_played_club') !== 'no' && (
                      <div className="space-y-3">
                        <div className="relative mt-3">
                          <Label htmlFor="video_clip_url" className="text-slate-700">Video Clip URL</Label>
                          <div className="relative mt-1">
                            <Input
                              id="video_clip_url"
                              placeholder="Enter the URL of your video clip"
                              {...register('video_clip_url')}
                              className="pl-10"
                            />
                            <Video className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <Label htmlFor="club_academy_affiliation" className="text-slate-700">Club/Academy Affiliation</Label>
                    <div className="relative mt-1">
                      <Input
                        id="club_academy_affiliation"
                        placeholder="Enter any club/academy affiliations"
                        {...register('club_academy_affiliation')}
                        className="pl-10"
                      />
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="relative">
                    <Label htmlFor="football_trials" className="text-slate-700">Football Trials</Label>
                    <div className="relative mt-1">
                      <Textarea
                        id="football_trials"
                        placeholder="List any previous football trials you've participated in"
                        {...register('football_trials')}
                        className="pl-10 min-h-[80px]"
                      />
                      <Award className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Residence Information */}
              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Residence Information</h3>

                  <div className="relative">
                    <Label htmlFor="nationality" className="text-slate-700">Nationality</Label>
                    <div className="relative mt-1">
                      <Input
                        id="nationality"
                        placeholder="Enter your nationality"
                        {...register('nationality', { required: 'Nationality is required' })}
                        className={`pl-10 ${errors.nationality ? 'border-red-500' : ''}`}
                      />
                      <Flag className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.nationality && (
                      <p className="text-red-500 text-sm mt-1">{errors.nationality.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <Label htmlFor="residence_status" className="text-slate-700">Residence Status</Label>
                    <div className="relative mt-1">
                      <Input
                        id="residence_status"
                        placeholder="Enter your residence status"
                        {...register('residence_status', { required: 'Residence status is required' })}
                        className={`pl-10 ${errors.residence_status ? 'border-red-500' : ''}`}
                      />
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.residence_status && (
                      <p className="text-red-500 text-sm mt-1">{errors.residence_status.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <Label htmlFor="country_of_residence" className="text-slate-700">Country of Residence</Label>
                    <div className="relative mt-1">
                      <Input
                        id="country_of_residence"
                        placeholder="Enter your country of residence"
                        {...register('country_of_residence', { required: 'Country of residence is required' })}
                        className={`pl-10 ${errors.country_of_residence ? 'border-red-500' : ''}`}
                      />
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.country_of_residence && (
                      <p className="text-red-500 text-sm mt-1">{errors.country_of_residence.message}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label className="text-slate-700">Do you have a Schengen Visa?</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="schengen-yes"
                          {...register('has_schengen')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="schengen-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="schengen-no"
                          {...register('has_schengen')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="schengen-no" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Parent/Guardian Information */}
              {step === 5 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Parent/Guardian Information</h3>

                  <div className="relative">
                    <Label htmlFor="parent_name" className="text-slate-700">Full Name</Label>
                    <div className="relative mt-1">
                      <Input
                        id="parent_name"
                        placeholder="Enter parent/guardian's full name"
                        {...register('parent_name', { required: 'Parent/Guardian name is required' })}
                        className={`pl-10 ${errors.parent_name ? 'border-red-500' : ''}`}
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.parent_name && (
                      <p className="text-red-500 text-sm mt-1">{errors.parent_name.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <Label htmlFor="parent_address" className="text-slate-700">Address</Label>
                    <div className="relative mt-1">
                      <Textarea
                        id="parent_address"
                        placeholder="Enter parent/guardian's address"
                        {...register('parent_address', { required: 'Parent/Guardian address is required' })}
                        className={`pl-10 min-h-[80px] ${errors.parent_address ? 'border-red-500' : ''}`}
                      />
                      <Home className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.parent_address && (
                      <p className="text-red-500 text-sm mt-1">{errors.parent_address.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <Label htmlFor="parent_permanent_address" className="text-slate-700">Permanent Address</Label>
                    <div className="relative mt-1">
                      <Textarea
                        id="parent_permanent_address"
                        placeholder="Enter parent/guardian's permanent address"
                        {...register('parent_permanent_address', { required: 'Parent/Guardian permanent address is required' })}
                        className={`pl-10 min-h-[80px] ${errors.parent_permanent_address ? 'border-red-500' : ''}`}
                      />
                      <Home className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.parent_permanent_address && (
                      <p className="text-red-500 text-sm mt-1">{errors.parent_permanent_address.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Label htmlFor="parent_telephone" className="text-slate-700">Telephone</Label>
                      <div className="relative mt-1">
                        <Input
                          id="parent_telephone"
                          placeholder="Enter parent/guardian's telephone"
                          {...register('parent_telephone', { required: 'Parent/Guardian telephone is required' })}
                          className={`pl-10 ${errors.parent_telephone ? 'border-red-500' : ''}`}
                        />
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                      {errors.parent_telephone && (
                        <p className="text-red-500 text-sm mt-1">{errors.parent_telephone.message}</p>
                      )}
                    </div>

                    <div className="relative">
                      <Label htmlFor="parent_email" className="text-slate-700">Email</Label>
                      <div className="relative mt-1">
                        <Input
                          id="parent_email"
                          type="email"
                          placeholder="Enter parent/guardian's email"
                          {...register('parent_email', {
                            required: 'Parent/Guardian email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                          className={`pl-10 ${errors.parent_email ? 'border-red-500' : ''}`}
                        />
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                      {errors.parent_email && (
                        <p className="text-red-500 text-sm mt-1">{errors.parent_email.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Medical Information */}
              {step === 6 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Medical Information</h3>

                  <div className="space-y-3">
                    <Label className="text-slate-700">Do you have any medical conditions?</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="medical-yes"
                          value="true"
                          {...register('has_medical_condition', {
                            setValueAs: (value) => value === 'true'
                          })}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="medical-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="medical-no"
                          value="false"
                          {...register('has_medical_condition', {
                            setValueAs: (value) => value === 'true'
                          })}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="medical-no" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                    {watch('has_medical_condition') === true && (
                      <div className="relative mt-3">
                        <Label htmlFor="medical_document_url" className="text-slate-700">Medical Document URL</Label>
                        <div className="relative mt-1">
                          <Input
                            id="medical_document_url"
                            placeholder="Enter URL to your medical document"
                            {...register('medical_document_url')}
                            className="pl-10"
                          />
                          <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label className="text-slate-700">Do you have any history of lung/heart disease?</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="heart-yes"
                          value="true"
                          {...register('has_heart_lung_disease')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="heart-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="heart-no"
                          value="false"
                          {...register('has_heart_lung_disease')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="heart-no" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-slate-700">Do you have any history of knee injury?</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="knee-yes"
                          value="true"
                          {...register('has_knee_injury')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="knee-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="knee-no"
                          value="false"
                          {...register('has_knee_injury')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="knee-no" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-slate-700">Do you have any history of foot injury?</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="foot-yes"
                          value="true"
                          {...register('has_foot_injury')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="foot-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="foot-no"
                          value="false"
                          {...register('has_foot_injury')}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="foot-no" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 7: Emergency Contact Information */}
              {step === 7 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Emergency Contact Information</h3>

                  <div className="relative">
                    <Label htmlFor="emergency_name" className="text-slate-700">Full Name</Label>
                    <div className="relative mt-1">
                      <Input
                        id="emergency_name"
                        placeholder="Enter emergency contact's full name"
                        {...register('emergency_name', { required: 'Emergency contact name is required' })}
                        className={`pl-10 ${errors.emergency_name ? 'border-red-500' : ''}`}
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.emergency_name && (
                      <p className="text-red-500 text-sm mt-1">{errors.emergency_name.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <Label htmlFor="emergency_telephone" className="text-slate-700">Telephone</Label>
                    <div className="relative mt-1">
                      <Input
                        id="emergency_telephone"
                        placeholder="Enter emergency contact's telephone"
                        {...register('emergency_telephone', { required: 'Emergency contact telephone is required' })}
                        className={`pl-10 ${errors.emergency_telephone ? 'border-red-500' : ''}`}
                      />
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.emergency_telephone && (
                      <p className="text-red-500 text-sm mt-1">{errors.emergency_telephone.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <Label htmlFor="emergency_address" className="text-slate-700">Address</Label>
                    <div className="relative mt-1">
                      <Textarea
                        id="emergency_address"
                        placeholder="Enter emergency contact's address"
                        {...register('emergency_address', { required: 'Emergency contact address is required' })}
                        className={`pl-10 min-h-[80px] ${errors.emergency_address ? 'border-red-500' : ''}`}
                      />
                      <Home className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.emergency_address && (
                      <p className="text-red-500 text-sm mt-1">{errors.emergency_address.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <Label htmlFor="emergency_relationship" className="text-slate-700">Relationship</Label>
                    <div className="relative mt-1">
                      <Input
                        id="emergency_relationship"
                        placeholder="Enter relationship to emergency contact"
                        {...register('emergency_relationship', { required: 'Emergency contact relationship is required' })}
                        className={`pl-10 ${errors.emergency_relationship ? 'border-red-500' : ''}`}
                      />
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.emergency_relationship && (
                      <p className="text-red-500 text-sm mt-1">{errors.emergency_relationship.message}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="declaration"
                        {...register('declaration_accepted', { required: 'You must accept the declaration' })}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <Label htmlFor="declaration" className="cursor-pointer">
                        I declare that all information provided is accurate and complete
                      </Label>
                    </div>
                    {errors.declaration_accepted && (
                      <p className="text-red-500 text-sm">{errors.declaration_accepted.message}</p>
                    )}
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
