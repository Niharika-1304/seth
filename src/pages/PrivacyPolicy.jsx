import React from 'react';
import heroBg from '../assets/Standards 4.jpg';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/20 font-body">
      {/* Hero Section */}
      <header className="relative min-h-[45vh] flex items-center pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Privacy Policy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/75 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-accent"></span>
              <span className="text-accent text-[10px] uppercase font-black tracking-[0.5em]">
                Legal documentation
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-headline leading-[1.1] text-white mb-6 italic">
              Privacy{' '}
              <span className="text-accent not-italic font-bold">
                Policy.
              </span>
            </h1>

            <p className="text-lg text-white/60 max-w-2xl leading-relaxed font-body">
              How Culinary Provision Group collects, uses, protects, and manages
              your information across our website, consultations, courses, and
              communications.
            </p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-neutral">

              {/* Intro */}
              <div className="mb-16">
                <p className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">
                  Effective Date: May 5, 2026
                </p>

                <p className="text-neutral/70 leading-[1.9] mb-6">
                  Culinary Provision Group respects the privacy of customers,
                  prospective customers, course participants, business contacts,
                  and website visitors.
                </p>

                <p className="text-neutral/70 leading-[1.9]">
                  This Privacy Policy explains how we collect, use, share, and
                  protect information provided to us through our website,
                  consultation requests, courses, training activities, email,
                  phone, text messaging, forms, and related business
                  communications.
                </p>
              </div>

              {/* Section 1 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                1. Information We Collect
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-6">
                We collect information voluntarily provided through consultation
                requests, website forms, courses, emails, phone calls, text
                messages, and business communications.
              </p>

              <ul className="list-disc pl-6 text-neutral/70 leading-[1.9] mb-12 space-y-3">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Organization or business name</li>
                <li>Job title or role</li>
                <li>Business location or service area</li>
                <li>Consultation request details</li>
                <li>Course enrollment information</li>
                <li>Billing or account-related information</li>
                <li>Communications submitted through business channels</li>
              </ul>

              {/* Section 2 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                2. How We Use Information
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-6">
                Culinary Provision Group uses collected information for
                legitimate business purposes, including:
              </p>

              <ul className="list-disc pl-6 text-neutral/70 leading-[1.9] mb-12 space-y-3">
                <li>Responding to inquiries</li>
                <li>Scheduling and managing consultations</li>
                <li>Providing customer support</li>
                <li>Delivering course-related communications</li>
                <li>Supporting account or enrollment activity</li>
                <li>Improving website and educational services</li>
                <li>Maintaining internal business records</li>
                <li>Complying with legal or regulatory obligations</li>
              </ul>

              {/* Section 3 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                3. Consultation Requests & Communications
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-12">
                Information submitted through consultation requests or business
                communications may be used to evaluate inquiries, prepare for
                meetings, schedule consultations, and provide relevant
                information about Culinary Provision Group services.
              </p>

              {/* Section 4 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                4. Course, Training & LMS Information
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-12">
                If you enroll in a course, training program, or learning
                platform, we may collect information necessary to provide
                account access, enrollment support, technical assistance, and
                course-related communications. Some services may be hosted
                through third-party platforms.
              </p>

              {/* Section 5 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                5. Text Messaging & SMS Communications
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-6">
                Culinary Provision Group may use text messaging for customer
                support, consultation coordination, account assistance, and
                service-related communication.
              </p>

              <p className="text-neutral/70 leading-[1.9] mb-6">
                Message frequency varies. Message and data rates may apply.
              </p>

              <p className="text-neutral/70 leading-[1.9] mb-12">
                You may opt out at any time by texting{' '}
                <span className="font-bold text-primary">STOP</span> or{' '}
                <span className="font-bold text-primary">CANCEL</span>. For
                assistance, reply{' '}
                <span className="font-bold text-primary">HELP</span> or contact
                us directly at support@culinaryprovisiongroup.com.
              </p>

              {/* Section 6 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                6. Data Sharing
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-12">
                Culinary Provision Group does not sell customer data and does
                not share customer information with third parties for marketing
                purposes. Information may be shared with trusted service
                providers only as necessary to support business operations,
                website functionality, payment processing, communication
                systems, or educational platforms.
              </p>

              {/* Section 7 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                7. Mobile Opt-In & Consent Data
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-12">
                Mobile opt-in and consent information, including phone numbers
                and SMS consent records, will not be shared with third parties
                for any purpose unrelated to required service operations.
              </p>

              {/* Section 8 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                8. Cookies, Analytics & Website Tools
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-12">
                Our website may use cookies, analytics tools, and embedded
                services to understand website usage, improve performance,
                support security, and enhance user experience. Browser settings
                may allow you to limit or disable cookies.
              </p>

              {/* Section 9 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                9. Email Communications
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-12">
                We may use your email address to respond to inquiries, deliver
                requested information, provide updates related to consultations,
                courses, or services, and send administrative or business
                communications. Promotional emails may be unsubscribed from at
                any time.
              </p>

              {/* Section 10 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                10. Payment & Billing Information
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-12">
                Payment processing may be handled through third-party providers.
                Culinary Provision Group does not intentionally store complete
                credit card information unless otherwise stated.
              </p>

              {/* Section 11 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                11. Data Security
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-12">
                We use reasonable administrative, technical, and organizational
                safeguards to protect information from unauthorized access,
                misuse, disclosure, or destruction. However, no electronic
                system can be guaranteed completely secure.
              </p>

              {/* Section 12 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                12. Data Retention
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-12">
                Information is retained only as long as reasonably necessary to
                support business operations, provide services, maintain records,
                comply with legal obligations, and resolve disputes.
              </p>

              {/* Section 13 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                13. Your Choices
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-12">
                You may request updates, corrections, or deletion of certain
                personal information. You may also opt out of SMS or promotional
                email communications at any time through the methods provided.
              </p>

              {/* Section 14 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                14. Children’s Privacy
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-12">
                Culinary Provision Group services are intended for business
                owners, professionals, operators, and adult learners. Our
                website and services are not directed to children under the age
                of 13.
              </p>

              {/* Section 15 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                15. Links to Third-Party Websites
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-12">
                Our website may contain links to third-party websites or
                services. Culinary Provision Group is not responsible for the
                privacy practices, security, or content of third-party
                platforms.
              </p>

              {/* Section 16 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                16. Changes to This Privacy Policy
              </h2>

              <p className="text-neutral/70 leading-[1.9] mb-12">
                Culinary Provision Group may update this Privacy Policy from
                time to time. Continued use of the website or services after
                updates are posted constitutes acceptance of the revised policy.
              </p>

              {/* Section 17 */}
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">
                17. Contact Information
              </h2>

              <div className="text-neutral/70 leading-[1.9] mb-16">
                <p>Culinary Provision Group</p>
                <p>Email: support@culinaryprovisiongroup.com</p>
                <p>Phone: +1 (800) 721-5434</p>
                <p>Website: www.culinaryprovisiongroup.com</p>
              </div>

              {/* Footer Notice */}
              <div className="mt-20 p-8 border border-accent/20 rounded-[2rem] bg-accent/5">
                <h3 className="text-xl font-headline text-primary mb-4 italic">
                  Privacy Notice
                </h3>

                <p className="text-sm text-neutral/60 leading-[1.8]">
                  Culinary Provision Group may revise this Privacy Policy at any
                  time without prior notice. Continued use of the website,
                  services, training programs, or communications after updates
                  are posted constitutes acceptance of the revised policy.
                  <br />
                  <span className="text-accent font-bold">
                    Last Updated: May 5, 2026
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;