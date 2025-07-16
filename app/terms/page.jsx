const page = () => {
    return (
      <div className="min-h-screen bg-gray-50 pt-[80px] md:pt-[150px] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" rounded-lg overflow-hidden">
            {/* Header */}
            <div className="px-4 md:px-8 py-8 md:py-12 text-center">
              <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
              <p className=" text-lg">British AUC Sport - Programme Terms & Conditions</p>
            </div>

            {/* Content */}
            <div className="md:px-8 px-3 py-4 md:py-12 space-y-12">
              {/* Section 1: Bookings */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">1. Bookings</h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    All bookings submitted to British AUC Sport are only accepted on receipt of written confirmation from
                    British AUC Sport or its authorized representative. A 50% deposit is due at the time of booking.
                    Payment in full must be received at the latest 6 weeks before the scheduled start date. Bookings made
                    within 6 weeks of a scheduled start date must be paid in full at the time of booking. All payments
                    must be in sterling. All bank charges in the country of origin and the UK are to be paid in remittance
                    by the applicant. British AUC Sport must be notified of all arrival and departure details at least 20
                    days before the start of the course.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    British AUC Sport reserves the right to cancel or withhold confirmation of a booking or to withdraw
                    educational and accommodation facilities after course commencement, at its discretion, if at any time
                    incorrect information is supplied by or on behalf of the client, fees due to British AUC Sport from
                    the client have not been received, or if such action is otherwise deemed necessary in the interests of
                    the client.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    British AUC Sport reserves the right to charge 1% per month on the unpaid amount of the fees due with
                    effect from four weeks before the date of course commencement.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Any last-minute requests or bookings must be confirmed in writing. British AUC Sport will charge a
                    further administration fee of £75 (for UK programmes) in addition to any new booking fees incurred.
                    British AUC Sport cannot guarantee any last minute requests or bookings will be fulfilled.
                  </p>
                </div>
              </section>

              {/* Section 2: Cancellations */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">2. Cancellations</h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    All cancellations must be made in writing and will be confirmed in writing by British AUC Sport.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Cancellations are subject to the following charges:
                  </p>

                  <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">a. Individuals:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          • Up to three months before the client&apos;s scheduled start date: Full amount paid refunded minus a
                          £150 application fee.
                        </li>
                        <li>
                          • Cancellation between three months and one month: 50% of the total fees of the programme
                          refunded.
                        </li>
                        <li>• All cancellations made one month or less before a scheduled start date: No refund.</li>
                        <li>• The registration booking fee is non-refundable.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">b. Groups:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          • Up to three months before the group&apos;s scheduled start date: 90% of amount paid refunded minus
                          a £150 application fee.
                        </li>
                        <li>
                          • Cancellation between three months and one month: 50% of the total fees of the programme
                          refunded.
                        </li>
                        <li>• All cancellations made one month or less before a scheduled start date: No refund.</li>
                        <li>• The registration booking fee is non-refundable.</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Once the programme has started, fees are non-refundable. A participant who fails to attend any part of
                    his/her course due to illness or any other reason whatsoever, whether within or outside the
                    participant&apos;s control, shall not be entitled to a refund of any fees paid, nor to attend any classes
                    or training in place of those missed.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    In the case of a participant being badly sick or injured, and diagnosed by a doctor as not being in a
                    condition to train, he/her must leave the programme immediately. Parents will be notified so that they
                    can make the appropriate arrangements for his/her immediate departure/repatriation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    In such an event, British AUC Sport will not be liable for any expenses, and any costs incurred will
                    be charged to the participant or their parents or guardians.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We highly recommend taking out our or another cancellation insurance to cover the eventual payment of
                    all repatriation expenses.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    A £20 fee will be applied to any refunds issued by bank transfer.
                  </p>
                </div>
              </section>

              {/* Section 3: Conditions */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">3. Conditions</h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    All programme places will be confirmed when either the deposit or full fees have been received.
                    Payment of the deposit fee is regarded as acceptance of the booking terms & conditions and is
                    non-refundable.
                  </p>
                </div>
              </section>

              {/* Section 4: Liability and Insurance */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  4. Liability and Insurance
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    British AUC Sport will NOT be liable for loss, damage, illness or injury to persons or property,
                    however caused, except where such liability is expressly imposed beyond exclusion by statute. We
                    highly recommend taking out our medical insurance to cover the payment of all medical expenses.
                  </p>
                </div>
              </section>

              {/* Section 5: Acceptance Conditions */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  5. Acceptance Conditions
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We accept participants on the assumption that they are of sound health. Participants who contract the
                    British AUC Sport programmes take full responsibility of the risks inherent to the sports practice, as
                    well as those related to the activity, including travelling in the company vehicles or on Public
                    Transport. Parents, legal tutors or guardians of participants, voluntarily choose to allow their
                    son/daughter to participate in the programme knowing the risk inherent to sports practice or
                    recreational activities, which could involve long-term injuries, disabling injuries or even death.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    British AUC Sport reserves the right to terminate your enrolment on a Programme if your participation
                    represents a risk to you, other players, or to our staff members&apos; health and safety.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Parents or tutors give consent to British AUC Sport to take participants, accompanied by coaches or
                    tutor, to journeys outside the premises in order to participate to recreational activities.
                  </p>
                </div>
              </section>

              {/* Section 6: Behaviour */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">6. Behaviour</h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    British AUC Sport reserves the right to refuse or exclude any person at any time prior to or during
                    the operational dates of the centre if in the opinion of British AUC Sport, that person is
                    incompatible with the general well-being and safe running of the centre. In this instance no refund
                    will be given and any costs incurred, including any damage, will be passed on to the participant or
                    their parents or guardians, who will also be held responsible for any repatriation costs.
                  </p>
                </div>
              </section>

              {/* Section 7: Property Damages */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  7. Property Damages
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    British AUC Sport will vehemently pursue any participant damaging or defacing property while at the
                    programme and strong action will be taken against such participants. Payments will be sought in full
                    from any such participant (or responsible parents) BEFORE departure to repair such damage.
                    Participants must keep their room tidy, clean and in the same conditions as it was when they arrived
                    at the programme. British AUC Sport reserves the right to expel any participant from its centres if
                    there is any damage to property, theft of property or act of vandalism.
                  </p>
                </div>
              </section>

              {/* Section 8: Force Majeure Event */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  8. Force Majeure Event
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    British AUC Sport may cancel the reservation due to a Force Majeure Event which shall include
                    circumstances beyond the control of British AUC Sport, including but not limited to: war, threat of
                    war, political crisis, civil commotion or strife, terrorist activity, strike or industrial action,
                    natural disaster, fire and technical problems due to closure of airports or other transport problems
                    making it impossible or unreasonable to travel. Physical injury of participant prior to date of
                    attendance is not a force majeure event but one reason why we urge you to obtain insurance coverage.
                    In such an event, British AUC Sport will propose an alternative date programme or grant you a credit
                    note for the following year.
                  </p>
                </div>
              </section>

              {/* Section 9: Negligence */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">9. Negligence</h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We accept responsibility for those course elements under our direct control, if caused by proven
                    negligence of British AUC Sport or its employees. We cannot accept responsibility for loss of
                    enjoyment due to travel, strikes, weather, loss or damage to luggage or personal property, personal
                    injury, or illness while on the course, including use of subcontractors such as transport companies.
                  </p>
                </div>
              </section>

              {/* Section 10: Amendment Charges */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  10. Amendment Charges
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Any alterations to bookings must be confirmed in writing. British AUC Sport reserves the right to
                    charge a further administration charge of £50. No changes will be allowed under any circumstances once
                    the programme has started.
                  </p>
                </div>
              </section>

              {/* Section 11: Use of Electronic Devices and Phones */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  11. Use of Electronic Devices and Phones
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Mobile phones and electronic devices are not allowed during the training and academic classes.
                    Students will be getting their phone at night after activities for 45 minutes to speak to their
                    family. Our staff will collect all phones before bedtime.
                  </p>
                </div>
              </section>

              {/* Section 12: Arrival and Departure Dates */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  12. Arrival and Departure Dates
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    You should arrive at the residence for your Programme as per your stipulated schedule. There will be
                    no compensation due for late arrivals and/or missed activities and excursions, missed as a result of
                    not arriving on a scheduled arrival date, in accordance with the programme terms.
                  </p>
                </div>
              </section>

              {/* Section 13: Level of English */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  13. Level of English
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    If student do not have the minimum level of English required to follow a specific course, British AUC
                    Sport reserves the right to move you to an appropriate course one to one for your level with a teacher
                    which incur additional charges for you. Minimum course levels are specified before enrolment.
                  </p>
                </div>
              </section>

              {/* Section 14: Damage to the Property */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  14. Damage to the Property
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    You acknowledge that you must pay the full cost of any damage done by you to any grounds,
                    accommodation, or property. A refundable deposit of £250 in cash will be required on arrival to the
                    camp, which will be returned on departure in full if there isn&apos;t any damage. To lose the keys will
                    imply a charge of £181 that will be automatically deducted from your deposit.
                  </p>
                </div>
              </section>

              {/* Section 15: Complaints */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">15. Complaints</h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Any complaints against any aspect of the services provided by British AUC Sport should be addressed in
                    the first instance to the local representative on site. In the event that the matter is not resolved,
                    the client or his agent should make an immediate complaint in writing to our head office. Such
                    complaints will be investigated by the company.
                  </p>
                </div>
              </section>

              {/* Section 16: Airport Transfers */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  16. Airport Transfers
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We provide a &apos;meet and greet&apos; service at an additional charge from the airport to the participant&apos;s
                    accommodation. Our staff and authorised driver will meet participants on arrival and will be identify
                    and carry a British AUC Sport sign with the participant&apos;s name.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Airport transfer fees include a maximum of 1 hour waiting time. Further delays may result in
                    additional charges for you. You are allowed one suitcase any extra one will have an additional extra
                    cost that will be charged to you on arrival.
                  </p>
                </div>
              </section>

              {/* Section 17: Data Protection */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  17. Data Protection
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    References in this clause to the GDPR are to the General Data Protection Regulation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    In order to deliver education and protect welfare, British AUC Sport will collect and process personal
                    data, including special category personal data (as defined in the GDPR) that relates to the
                    participant and their circumstances.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    For the purpose of the Data Protection Act 2018 (the Act), the data controller is British AUC Sport of
                    128 City Road, London, EC1V 2NX United Kingdom. Full details of the personal data collected and
                    processed by British AUC Sport, the purposes for which it is collected and the legal basis for doing
                    so are all contained in British AUC Sport&apos;s private policy which can be accessed via this Email:
                    sports@britishauc.com/ British AUC Sport will comply at all the times with our obligations.
                  </p>
                </div>
              </section>

              {/* Section 18: Assignment and Subcontracting */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  18. Assignment and Subcontracting
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We may transfer our rights and obligations under these Terms to another organization. British AUC
                    Sport reserve the right to subcontract various elements of our services under these Terms to reputable
                    companies selected by us.
                  </p>
                </div>
              </section>

              {/* Section 19: Disclaimer */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">19. Disclaimer</h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Arrangements and courses outlined in British AUC Sport publicity materials are given in good faith.
                    However, courses, accommodation, training facilities, activities and timetables may be subject to
                    change for reasons of safety, or in the event of unsuitable weather conditions or other factors, which
                    may arise beyond our control. British AUC Sport reserves the right to change the particularities of
                    programmes, including changes to courses, venues, facilities or dates of programmes where
                    circumstances beyond our control necessitate such changes or where the level of bookings received does
                    not exceed the minimum number required to operate a course viably. In this event we shall either
                    provide comparable services or refund such part of that service which relates to the change. In either
                    case, British AUC Sport&apos;s liability shall cease, and clients shall have no other or further claim
                    against us. It is automatically assumed that pictures taken of players participating in training or
                    lessons can be used in future brochures and advertising material. British AUC Sport reserve the right,
                    by giving notice to clients at any time before the start date, to increase the price of the services
                    being provided to reflect any increase in costs to our organizations, which is due to factors beyond
                    our control, such as, without limitations, significant increases in accommodation costs, transport
                    costs, labour costs etc. British AUC Sport does not accept liability for personal injury or the death
                    of any participant unless caused by the proven negligence of our staff.
                  </p>
                </div>
              </section>

              {/* Section 20: Parents' Visits */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  20. Parents&apos; Visits
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    To prevent any interference with the proper operation of the programmes and to encourage team spirit
                    and personal development of participants, it is STRICTLY FORBIDDEN for parents or relatives of the
                    participants to visit any of the training and academic facilities during the weekly programme.
                  </p>
                </div>
              </section>

              {/* Section 21: Refunds */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">21. Refunds</h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    All refunds will be made to the original fee payer only via the same method that original payment was
                    made. All refunds will be made within 90 days of cancellation.
                  </p>
                </div>
              </section>

              {/* Section 22: Programme Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  22. Programme Information
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Programmes are run with various start days and in sessions of two weeks and one week. They are
                    scheduled in the morning with sports activities and in the afternoon with English classes or
                    additional training, depending on the product chosen. British AUC Sport reserves the right to change
                    the timetable structure for any Programme. British AUC Sport reserves the right to use alternative
                    premises of a similar standard for Programmes or to offer alternative activities. British AUC Sport
                    will endeavour to fulfil your special requests, but these cannot be guaranteed.
                  </p>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-6 ">
              <p className="text-sm text-gray-600 text-center">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default page
