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
          <div className="absolute inset-0 bg-primary/90 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-accent"></span>
              <span className="text-accent text-[10px] uppercase font-black tracking-[0.5em]">Legal documentation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-headline leading-[1.1] text-white mb-6 italic">
              Privacy <span className="text-accent not-italic font-bold">Policy.</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed font-body">
              How we handle and protect your information at Culinary Provision Group.
            </p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-neutral">
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">1. Introduction</h2>
              <p className="text-neutral/70 leading-[1.8] mb-12">
                At Culinary Provision Group ("CPG", "we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>

              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">2. The Data We Collect</h2>
              <p className="text-neutral/70 leading-[1.8] mb-6">
                Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 text-neutral/70 leading-[1.8] mb-12 space-y-4">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
              </ul>

              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">3. How We Use Your Data</h2>
              <p className="text-neutral/70 leading-[1.8] mb-12">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide our services, manage our relationship with you, and improve our website and client communications.
              </p>

              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">4. Data Security</h2>
              <p className="text-neutral/70 leading-[1.8] mb-12">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>

              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">5. Your Legal Rights</h2>
              <p className="text-neutral/70 leading-[1.8] mb-12">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.
              </p>

              <div className="mt-20 p-8 border border-accent/20 rounded-[2rem] bg-accent/5">
                <h3 className="text-xl font-headline text-primary mb-4 italic">Contact Us</h3>
                <p className="text-sm text-neutral/60">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at <span className="text-accent font-bold">sjb@culinaryprovisiongroup.com</span>.
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
