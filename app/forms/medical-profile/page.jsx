'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { COUNTRY_CODES } from '@/lib/country-codes';
import { supabase } from '@/lib/supabase';

const initialInjuries = [
  'Head',
  'Neck',
  'Collarbone',
  'Shoulder',
  'Upper Arm',
  'Forearm/Elbow',
  'Wrist',
  'Hand/Fingers',
  'Ribs/ Chest',
  'Thoracic Spine',
  'Lumber Spine',
  'Hip/ Inguinal',
  'Quadricep',
  'Hamstring',
  'Knee',
  'Lower Limb',
  'Ankle',
  'Foot',
];

const familyHistoryOptions = [
  'cardiovascular disease',
  'heart surgery',
  'diagnosed with any other cardiac conditions',
  'history of cancer',
  'connected tissue disorders',
  'high blood pressure',
  'diabetes, liver, lung or kidney condtions',
  'None of the above',
  'Other',
];
const personalHistoryOptions = [
  'Cardiovascular disease',
  'Heart surgery',
  'Diagnosed with any other cardiac conditions',
  'History of cancer',
  'Connective tissue disorders',
  'High blood pressure',
  'Diabetes (Type 1 or 2)',
  'Kidney/ Renal condition',
  'Liver Condition',
  'Bowel Condition',
  'None of the above',
  'Other',
];
const neuroHistoryOptions = [
  'Concussion in the last 12 months',
  'Concussion in the last 6 months',
  'Concussion in the last 3 months',
  'History of seizures',
  'Diagnosed with Epilepsy',
  'Pre-existing nerve problems',
  'Diagnosed with ADHD or ADD or any other learning disability',
  'Diagnosed with any other Neurological disorder',
  'None of the above',
  'Other',
];

export default function MedicalProfilePage() {
  const defaultPhoneCode = String(COUNTRY_CODES[0].value);
  const initialForm = {
    name: '',
    nationality: '',
    address: '',
    phoneCode: defaultPhoneCode,
    phoneNumber: '',
    country: '',
    dob: '',
    doctor: '',
    emergencyContact: '',
    familyHistory: [],
    familyHistoryOther: '',
    familyHistoryDetails: '',
    personalHistory: [],
    personalHistoryOther: '',
    personalHistoryDetails: '',
    neuroHistory: [],
    neuroHistoryOther: '',
    neuroHistoryDetails: '',
    injuries: initialInjuries.map(() => ({ left: false, right: false, none: false })),
    injuryDetails: '',
    prescriptionTaken: '',
    prescriptionDetails: '',
    prescriptionReason: '',
    prescriptionDuration: '',
    prescriptionCurrent: '',
    prescriptionWho: '',
    allergies: '',
    allergySubstance: '',
    allergyLast: '',
    allergyType: '',
    allergyMedication: '',
    athleteDeclaration1: '',
    athleteDeclaration2: '',
    parentalDeclaration: '',
  };
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name.startsWith('familyHistory')) {
      const option = value;
      setForm((prev) => ({
        ...prev,
        familyHistory: checked
          ? [...prev.familyHistory, option]
          : prev.familyHistory.filter((item) => item !== option),
      }));
    } else if (type === 'checkbox' && name.startsWith('personalHistory')) {
      const option = value;
      setForm((prev) => ({
        ...prev,
        personalHistory: checked
          ? [...prev.personalHistory, option]
          : prev.personalHistory.filter((item) => item !== option),
      }));
    } else if (type === 'checkbox' && name.startsWith('neuroHistory')) {
      const option = value;
      setForm((prev) => ({
        ...prev,
        neuroHistory: checked
          ? [...prev.neuroHistory, option]
          : prev.neuroHistory.filter((item) => item !== option),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleInjuryChange = (idx, side) => (e) => {
    const checked = e.target.checked;
    setForm((prev) => {
      const injuries = prev.injuries.map((inj, i) => {
        if (i !== idx) return inj;
        // Allow multiple selections per row
        return { ...inj, [side]: checked };
      });
      return { ...prev, injuries };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Prepare data for Supabase (do not include 'phone' field)
    const payload = {
      name: form.name,
      nationality: form.nationality,
      address: form.address,
      phone_code: form.phoneCode,
      phone_number: form.phoneNumber,
      country: form.country,
      dob: form.dob,
      doctor: form.doctor,
      emergency_contact: form.emergencyContact,
      family_history: form.familyHistory,
      family_history_other: form.familyHistoryOther,
      family_history_details: form.familyHistoryDetails,
      personal_history: form.personalHistory,
      personal_history_other: form.personalHistoryOther,
      personal_history_details: form.personalHistoryDetails,
      neuro_history: form.neuroHistory,
      neuro_history_other: form.neuroHistoryOther,
      neuro_history_details: form.neuroHistoryDetails,
      injuries: form.injuries,
      injury_details: form.injuryDetails,
      prescription_taken: form.prescriptionTaken,
      prescription_details: form.prescriptionDetails,
      prescription_reason: form.prescriptionReason,
      prescription_duration: form.prescriptionDuration,
      prescription_current: form.prescriptionCurrent,
      prescription_who: form.prescriptionWho,
      allergies: form.allergies,
      allergy_substance: form.allergySubstance,
      allergy_last: form.allergyLast,
      allergy_type: form.allergyType,
      allergy_medication: form.allergyMedication,
      athlete_declaration1: form.athleteDeclaration1,
      athlete_declaration2: form.athleteDeclaration2,
      parental_declaration: form.parentalDeclaration,
    };
    try {
      const { error } = await supabase.from('medical_profiles').insert([payload]);
      if (error) {
        alert('Error submitting form: ' + error.message);
      } else {
        alert('Form submitted successfully!');
        setForm(initialForm);
      }
    } catch (err) {
      alert('Unexpected error: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white rounded-xl  border-t-4">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-red-700">Medical Profile</CardTitle>
            <p className="text-muted-foreground mt-2 text-base">Please complete all sections accurately. All information is confidential and used only for medical and safety purposes.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name (as appears on passport)</Label>
                    <Input id="name" name="name" value={form.name} onChange={handleChange} required autoComplete="name" className="mt-1" placeholder="Full name" />
                  </div>
                  <div>
                    <Label htmlFor="nationality">Nationality</Label>
                    <Input id="nationality" name="nationality" value={form.nationality} onChange={handleChange} required className="mt-1" placeholder="Nationality" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Home Address</Label>
                    <Input id="address" name="address" value={form.address} onChange={handleChange} required className="mt-1" placeholder="Address" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Contact Phone Number</Label>
                    <div className="flex gap-2 mt-1">
                      <Select
                        value={form.phoneCode}
                        onValueChange={(value) => setForm((prev) => ({ ...prev, phoneCode: value }))}
                        required
                      >
                        <SelectTrigger id="phoneCode" className="rounded-r-none w-32 border-r-0 focus:z-10">
                          <SelectValue>
                            {form.phoneCode ? `+${form.phoneCode}` : `+${COUNTRY_CODES[0].value}`}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="max-h-64 overflow-y-auto">
                          {COUNTRY_CODES.map(({ code, value, name }) => (
                            <SelectItem key={code} value={String(value)}>
                              {name} (+{value})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={form.phoneNumber}
                        onChange={e => setForm((prev) => ({ ...prev, phoneNumber: e.target.value }))}
                        required
                        className="flex-1 rounded-l-none border-l-0 focus:z-10"
                        placeholder="123-456-7890"
                        autoComplete="tel"
                        pattern="[0-9\-\s]+"
                        aria-label="Phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="country">Country you are currently living in</Label>
                    <Input id="country" name="country" value={form.country} onChange={handleChange} required className="mt-1" placeholder="Country" />
                  </div>
                  <div>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" name="dob" type="date" value={form.dob} onChange={handleChange} required className="mt-1" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="doctor">Registered Dr (name of surgery, physician, contact or address)</Label>
                    <Input id="doctor" name="doctor" value={form.doctor} onChange={handleChange} required className="mt-1" placeholder="Dr. Name, Surgery, Contact" />
                  </div>
                </div>
              </div>

              {/* Family Medical History */}
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Family Medical History</h2>
                <div className="mb-4">
                  <Label htmlFor="emergencyContact">Emergency contact information (next of kin, name, relationship, contact number and home address)</Label>
                  <Textarea id="emergencyContact" name="emergencyContact" value={form.emergencyContact} onChange={handleChange} required className="mt-1" placeholder="Next of kin details" />
                </div>
                <div className="mb-2">Family History - Have any of your immediate family had...</div>
                <div className="grid md:grid-cols-2 gap-2 mb-2">
                  {familyHistoryOptions.map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                      <Checkbox
                        id={`familyHistory-${opt}`}
                        name="familyHistory"
                        value={opt}
                        checked={form.familyHistory.includes(opt)}
                        onCheckedChange={(checked) => handleChange({ target: { name: 'familyHistory', value: opt, type: 'checkbox', checked } })}
                        aria-checked={form.familyHistory.includes(opt)}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
                {form.familyHistory.includes('Other') && (
                  <div className="mb-2">
                    <Label htmlFor="familyHistoryOther">Other</Label>
                    <Input id="familyHistoryOther" name="familyHistoryOther" value={form.familyHistoryOther} onChange={handleChange} className="mt-1" placeholder="Other family history" />
                  </div>
                )}
                <div>
                  <Label htmlFor="familyHistoryDetails">If you have ticked any of the questions above, please elaborate</Label>
                  <Textarea id="familyHistoryDetails" name="familyHistoryDetails" value={form.familyHistoryDetails} onChange={handleChange} className="mt-1" placeholder="Details..." />
                </div>
              </div>

              {/* Personal Medical History */}
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Personal Medical History</h2>
                <div className="mb-2">Personal History - Have you had/ Do you have</div>
                <div className="grid md:grid-cols-2 gap-2 mb-2">
                  {personalHistoryOptions.map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                      <Checkbox
                        id={`personalHistory-${opt}`}
                        name="personalHistory"
                        value={opt}
                        checked={form.personalHistory.includes(opt)}
                        onCheckedChange={(checked) => handleChange({ target: { name: 'personalHistory', value: opt, type: 'checkbox', checked } })}
                        aria-checked={form.personalHistory.includes(opt)}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
                {form.personalHistory.includes('Other') && (
                  <div className="mb-2">
                    <Label htmlFor="personalHistoryOther">Other</Label>
                    <Input id="personalHistoryOther" name="personalHistoryOther" value={form.personalHistoryOther} onChange={handleChange} className="mt-1" placeholder="Other personal history" />
                  </div>
                )}
                <div>
                  <Label htmlFor="personalHistoryDetails">If you have ticked any of the questions above, please elaborate</Label>
                  <Textarea id="personalHistoryDetails" name="personalHistoryDetails" value={form.personalHistoryDetails} onChange={handleChange} className="mt-1" placeholder="Details..." />
                </div>
              </div>

              {/* Neurology and Concussion Questions */}
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Neurology and Concussion Questions</h2>
                <div className="mb-2">Have you had/ Do you have</div>
                <div className="grid md:grid-cols-2 gap-2 mb-2">
                  {neuroHistoryOptions.map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                      <Checkbox
                        id={`neuroHistory-${opt}`}
                        name="neuroHistory"
                        value={opt}
                        checked={form.neuroHistory.includes(opt)}
                        onCheckedChange={(checked) => handleChange({ target: { name: 'neuroHistory', value: opt, type: 'checkbox', checked } })}
                        aria-checked={form.neuroHistory.includes(opt)}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
                {form.neuroHistory.includes('Other') && (
                  <div className="mb-2">
                    <Label htmlFor="neuroHistoryOther">Other</Label>
                    <Input id="neuroHistoryOther" name="neuroHistoryOther" value={form.neuroHistoryOther} onChange={handleChange} className="mt-1" placeholder="Other neuro history" />
                  </div>
                )}
                <div>
                  <Label htmlFor="neuroHistoryDetails">If you have ticked any of the questions above, please elaborate</Label>
                  <Textarea id="neuroHistoryDetails" name="neuroHistoryDetails" value={form.neuroHistoryDetails} onChange={handleChange} className="mt-1" placeholder="Details..." />
                </div>
              </div>

              {/* Previous Injuries */}
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Previous Injuries</h2>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="min-w-full bg-white text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-3 text-left font-semibold">Injury sustained</th>
                        <th className="py-2 px-3 text-center font-semibold">Left Side</th>
                        <th className="py-2 px-3 text-center font-semibold">Right Side</th>
                        <th className="py-2 px-3 text-center font-semibold">No previous injury</th>
                      </tr>
                    </thead>
                    <tbody>
                      {initialInjuries.map((injury, idx) => (
                        <tr key={injury} className="even:bg-gray-50">
                          <td className="py-2 px-3">{injury}</td>
                          <td className="py-2 px-3 text-center">
                            <Checkbox
                              checked={form.injuries[idx].left}
                              onCheckedChange={(checked) => handleInjuryChange(idx, 'left')({ target: { checked } })}
                              aria-label={`Left side for ${injury}`}
                            />
                          </td>
                          <td className="py-2 px-3 text-center">
                            <Checkbox
                              checked={form.injuries[idx].right}
                              onCheckedChange={(checked) => handleInjuryChange(idx, 'right')({ target: { checked } })}
                              aria-label={`Right side for ${injury}`}
                            />
                          </td>
                          <td className="py-2 px-3 text-center">
                            <Checkbox
                              checked={form.injuries[idx].none}
                              onCheckedChange={(checked) => handleInjuryChange(idx, 'none')({ target: { checked } })}
                              aria-label={`No previous injury for ${injury}`}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <Label htmlFor="injuryDetails">If you have ticked Yes for any of the above, please provide the following details</Label>
                  <Textarea id="injuryDetails" name="injuryDetails" value={form.injuryDetails} onChange={handleChange} className="mt-1" placeholder="Year/date, diagnosis, medical professional, treatment, etc." />
                </div>
              </div>

              {/* Medical and Allergies */}
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Medical and Allergies</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Prescription (left) */}
                  <div>
                    <Label htmlFor="prescriptionTaken">Have you taken any prescriptions in the last 12 months?</Label>
                    <Select
                      value={form.prescriptionTaken}
                      onValueChange={(value) => handleChange({ target: { name: 'prescriptionTaken', value } })}
                      required
                    >
                      <SelectTrigger id="prescriptionTaken" className="mt-1">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="mt-4 grid gap-4">
                      {['prescriptionDetails','prescriptionReason','prescriptionDuration','prescriptionCurrent','prescriptionWho'].map((field, i) => (
                        <div key={field} className={i === 4 ? '' : ''}>
                          <Label htmlFor={field}>{
                            field === 'prescriptionDetails' ? 'Substance prescribed' :
                            field === 'prescriptionReason' ? 'Reason' :
                            field === 'prescriptionDuration' ? 'How long you have been prescribed the medication (if applicable)' :
                            field === 'prescriptionCurrent' ? 'Are you currently taking said prescription (if applicable)' :
                            'Who has prescribed the medication'
                          }</Label>
                          <Input
                            id={field}
                            name={field}
                            value={form[field] || ''}
                            onChange={handleChange}
                            className="mt-1"
                            placeholder={
                              field === 'prescriptionDetails' ? 'Substance' :
                              field === 'prescriptionReason' ? 'Reason' :
                              field === 'prescriptionDuration' ? 'Duration' :
                              field === 'prescriptionCurrent' ? 'Yes/No' :
                              'Prescriber'
                            }
                            disabled={form.prescriptionTaken !== 'Yes'}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Allergies (right) */}
                  <div>
                    <Label htmlFor="allergies">Do you have any Allergies?</Label>
                    <Select
                      value={form.allergies}
                      onValueChange={(value) => handleChange({ target: { name: 'allergies', value } })}
                      required
                    >
                      <SelectTrigger id="allergies" className="mt-1">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="mt-4 grid gap-4">
                      {['allergySubstance','allergyLast','allergyType','allergyMedication'].map((field) => (
                        <div key={field}>
                          <Label htmlFor={field}>{
                            field === 'allergySubstance' ? 'Substance/Cause' :
                            field === 'allergyLast' ? 'Last episode' :
                            field === 'allergyType' ? 'Type or Reaction' :
                            'Medication prescribed'
                          }</Label>
                          <Input
                            id={field}
                            name={field}
                            value={form[field] || ''}
                            onChange={handleChange}
                            className="mt-1"
                            placeholder={
                              field === 'allergySubstance' ? 'Substance/Cause' :
                              field === 'allergyLast' ? 'Last episode' :
                              field === 'allergyType' ? 'Type/Reaction' :
                              'Medication'
                            }
                            disabled={form.allergies !== 'Yes'}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Athlete Declaration */}
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Athlete Declaration</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="athleteDeclaration1">I acknowledge that all information given is factual and consent for information to be reviewed and used by BRITISH AUC SPORT/MEDICAL TEAM.</Label>
                    <Select
                      value={form.athleteDeclaration1}
                      onValueChange={(value) => handleChange({ target: { name: 'athleteDeclaration1', value } })}
                      required
                    >
                      <SelectTrigger id="athleteDeclaration1" className="mt-1">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="athleteDeclaration2">I understand that failure to provide Medical details to BRITISH AUC SPORT is a breach of Contract and may result in actions taken.</Label>
                    <Select
                      value={form.athleteDeclaration2}
                      onValueChange={(value) => handleChange({ target: { name: 'athleteDeclaration2', value } })}
                      required
                    >
                      <SelectTrigger id="athleteDeclaration2" className="mt-1">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Parental Declaration */}
    <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Parental Declaration</h2>
                <Label htmlFor="parentalDeclaration">I acknowledge that all Medical information given is factual and up to date for my Son/Daughter prior to taking a place up at the BRITISH AUC Academy.</Label>
                <Input id="parentalDeclaration" name="parentalDeclaration" value={form.parentalDeclaration} onChange={handleChange} required className="mt-1" placeholder="Parent/Guardian Name" />
              </div>

              <div className="pt-6 flex justify-end">
                <Button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
    </div>
    </section>
  );
}
