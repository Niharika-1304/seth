import React from 'react';
import heroBg from '../assets/Prep 1.jpg';

const TermsOfService = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/20 font-body">
      {/* Hero Section */}
      <header className="relative min-h-[45vh] flex items-center pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Terms & Conditions"
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
              Terms &{' '}
              <span className="text-accent not-italic font-bold">
                Conditions.
              </span>
            </h1>

            <p className="text-lg text-white/60 max-w-2xl leading-relaxed font-body">
              Terms governing the use of Culinary Provision Group services,
              training programs, educational materials, consultations, and
              website access.
            </p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto prose prose-lg prose-neutral">

            <div className="mb-16">
              <p className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">
                Effective Date: May 5, 2026
              </p>

              <p className="text-neutral/70 leading-[1.9] mb-6">
                These Terms & Conditions govern your use of the Culinary
                Provision Group website, services, consultation request forms,
                educational content, courses, training materials, downloadable
                resources, and related communications.
              </p>

              <p className="text-neutral/70 leading-[1.9]">
                By accessing or using the Culinary Provision Group website,
                submitting a consultation request, enrolling in a course,
                purchasing services, downloading materials, or communicating
                with Culinary Provision Group, you agree to these Terms &
                Conditions.
              </p>
            </div>

            {/* Section 1 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              1. About Culinary Provision Group
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              Culinary Provision Group provides consulting, training, workforce
              development, operational strategy, implementation support,
              educational resources, and related services for foodservice
              businesses, hospitality operators, culinary teams, and other
              organizations. Services may include business consultation,
              operational review, systems design, implementation planning,
              staffing support, workforce development, training design, and
              professional educational services.
            </p>

            {/* Section 2 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              2. Website Use
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-6">
              You may use the Culinary Provision Group website for lawful
              purposes only.
            </p>

            <ul className="list-disc pl-6 text-neutral/70 leading-[1.9] mb-12 space-y-3">
              <li>Violates any applicable law or regulation</li>
              <li>Interferes with website security or availability</li>
              <li>Submits false or misleading information</li>
              <li>Copies or reproduces content without permission</li>
              <li>Uses the platform for harmful or fraudulent purposes</li>
              <li>
                Attempts unauthorized access to systems, accounts, or data
              </li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              3. Consultation Requests
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              Submitting a consultation request, contact form, phone inquiry,
              email, or similar communication does not create a client
              relationship or service agreement. A formal engagement begins only
              when Culinary Provision Group and the client agree to services,
              scope, terms, and fees in writing.
            </p>

            {/* Section 4 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              4. Separate Agreements
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              Certain consulting engagements, custom projects, courses, or
              training programs may be governed by separate written agreements,
              proposals, invoices, or enrollment terms. Where separate written
              terms apply, those terms will control the specific engagement to
              the extent they conflict with these Terms & Conditions.
            </p>

            {/* Section 5 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              5. Educational Content & Business Resources
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              Information provided through the website, training programs,
              downloadable materials, and communications is intended for
              educational and informational purposes only. Users are responsible
              for evaluating whether recommendations, guidance, or operational
              practices are appropriate for their own business needs, legal
              obligations, and operational environment.
            </p>

            {/* Section 6 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              6. No Professional Legal or Regulatory Advice
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              Culinary Provision Group does not provide legal, tax, accounting,
              insurance, HR compliance, financial, labor-law, or regulatory
              advice. Clients and users should consult qualified professionals
              regarding their own legal, compliance, financial, operational, or
              regulatory circumstances.
            </p>

            {/* Section 7 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              7. No Guarantee of Results
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              Culinary Provision Group may provide operational guidance,
              educational resources, implementation support, training materials,
              and strategic recommendations. However, no guarantees are made
              regarding business performance, staffing outcomes, revenue growth,
              operational improvements, hiring success, employee retention,
              compliance outcomes, or other results.
            </p>

            {/* Section 8 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              8. Courses, Training Programs & LMS Access
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              Access to courses, downloadable resources, videos, templates,
              guides, workbooks, or training programs may be subject to
              additional enrollment terms, payment requirements, and platform
              rules. Users may not share login credentials, reproduce restricted
              materials, or distribute paid content without authorization.
            </p>

            {/* Section 9 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              9. User Accounts & Login Credentials
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              If account access is required for any service or platform, you are
              responsible for maintaining the confidentiality of your login
              credentials and for all activity conducted through your account.
            </p>

            {/* Section 10 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              10. Payments, Refunds & Cancellations
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              Certain services, courses, consultations, or educational programs
              may require payment. Refund policies, cancellation terms, payment
              schedules, and service scope may be outlined in separate invoices,
              agreements, enrollment pages, or written communications.
            </p>

            {/* Section 11 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              11. Client & User Responsibilities
            </h2>

            <ul className="list-disc pl-6 text-neutral/70 leading-[1.9] mb-12 space-y-3">
              <li>Provide accurate and complete information</li>
              <li>Implement recommendations responsibly</li>
              <li>Maintain lawful and ethical business operations</li>
              <li>Train and supervise employees appropriately</li>
              <li>Follow applicable laws and health regulations</li>
              <li>Seek professional advice where needed</li>
            </ul>

            {/* Section 12 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              12. Intellectual Property
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              All website content, course materials, guides, frameworks,
              branding, graphics, downloadable resources, videos, templates,
              consulting systems, and written materials are owned by Culinary
              Provision Group or used with permission unless otherwise stated.
            </p>

            {/* Section 13 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              13. Limited License to Use Materials
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              Users are granted a limited, non-exclusive, non-transferable
              license to use provided materials for internal educational or
              business purposes only. Materials may not be resold, publicly
              distributed, copied into competing products, or uploaded to public
              systems without written permission.
            </p>

            {/* Section 14 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              14. Client Materials & Information
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              Clients retain ownership of materials they provide to Culinary
              Provision Group. By submitting materials, clients confirm they
              have the authority to share them and authorize their use as needed
              to provide requested services.
            </p>

            {/* Section 15 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              15. Confidentiality
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              Culinary Provision Group will use reasonable efforts to treat
              sensitive client business information as confidential and use it
              only for purposes related to services, consultations, or training
              support.
            </p>

            {/* Section 16 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              16. Testimonials & Public References
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              If you voluntarily provide testimonials, reviews, or endorsements,
              Culinary Provision Group may use them for marketing or promotional
              purposes unless otherwise agreed in writing.
            </p>

            {/* Section 17 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              17. Third-Party Platforms & Links
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              The website or services may integrate with third-party platforms,
              payment processors, scheduling systems, or learning management
              systems. Culinary Provision Group is not responsible for the
              policies, security, or availability of third-party services.
            </p>

            {/* Section 18 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              18. Website Availability & Errors
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              Culinary Provision Group does not guarantee uninterrupted access to
              the website, training materials, or services and may update,
              modify, or discontinue content or features at any time.
            </p>

            {/* Section 19 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              19. Limitation of Liability
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              To the fullest extent permitted by law, Culinary Provision Group
              and its affiliates will not be liable for indirect, incidental,
              special, or consequential damages related to the use of services,
              materials, recommendations, or communications.
            </p>

            {/* Section 20 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              20. Indemnification
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              You agree to indemnify and hold harmless Culinary Provision Group,
              its representatives, affiliates, contractors, and service
              providers against claims, damages, liabilities, and expenses
              arising from your misuse of services, violation of these Terms, or
              violation of applicable laws.
            </p>

            {/* Section 21 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              21. Termination or Restricted Access
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              Culinary Provision Group may suspend or terminate access to
              services, courses, or materials if users violate these Terms,
              misuse content, share restricted access, or engage in harmful
              conduct.
            </p>

            {/* Section 22 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              22. Changes to These Terms
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              Culinary Provision Group may revise these Terms & Conditions at
              any time. Continued use of the website or services after updates
              are posted constitutes acceptance of the revised Terms.
            </p>

            {/* Section 23 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              23. Governing Law & Dispute Resolution
            </h2>

            <p className="text-neutral/70 leading-[1.9] mb-12">
              These Terms & Conditions are governed by the laws of the State of
              Alaska. Disputes arising from these Terms or related services
              shall be resolved in a court of competent jurisdiction unless
              otherwise agreed in writing.
            </p>

            {/* Section 24 */}
            <h2 className="text-3xl font-headline text-primary mb-8 italic">
              24. Contact Information
            </h2>

            <div className="text-neutral/70 leading-[1.9] mb-16">
              <p>Culinary Provision Group</p>
              <p>Email: support@culinaryprovisiongroup.com</p>
              <p>Phone: +1 (800) 721-5434</p>
              <p>Website: www.culinaryprovisiongroup.com</p>
            </div>

            {/* Update Notice */}
            <div className="mt-20 p-8 border border-accent/20 rounded-[2rem] bg-accent/5">
              <h3 className="text-xl font-headline text-primary mb-4 italic">
                Update Notice
              </h3>

              <p className="text-sm text-neutral/60 leading-[1.8]">
                Culinary Provision Group may update these Terms & Conditions at
                any time without prior notice. Continued use of the website,
                services, educational materials, consultations, or training
                programs constitutes acceptance of the updated terms.
                <br />
                <span className="text-accent font-bold">
                  Last Updated: May 5, 2026
                </span>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;