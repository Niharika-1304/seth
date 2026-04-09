import React from 'react';
import heroBg from '../assets/CPG Images - Prep 1.jpg';

const TermsOfService = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/20 font-body">
      {/* Hero Section */}
      <header className="relative min-h-[45vh] flex items-center pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Terms of Service" 
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
              Terms of <span className="text-accent not-italic font-bold">Service.</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed font-body">
              The rules, regulations, and guidelines for working with Culinary Provision Group.
            </p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-neutral">
              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">1. Agreement to Terms</h2>
              <p className="text-neutral/70 leading-[1.8] mb-12">
                By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our site or services.
              </p>

              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">2. Use License</h2>
              <p className="text-neutral/70 leading-[1.8] mb-6">
                Permission is granted to temporarily download one copy of the architectural materials or operational frameworks on Culinary Provision Group's website for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-neutral/70 leading-[1.8] mb-12">
                This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose; or attempt to decompile or reverse engineer any software or frameworks contained on the website.
              </p>

              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">3. Disclaimer</h2>
              <p className="text-neutral/70 leading-[1.8] mb-12">
                The materials on Culinary Provision Group's website are provided on an 'as is' basis. CPG makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">4. Limitations</h2>
              <p className="text-neutral/70 leading-[1.8] mb-12">
                In no event shall Culinary Provision Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CPG's website, even if CPG or a CPG authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-3xl font-headline text-primary mb-8 tracking-tight italic">5. Governing Law</h2>
              <p className="text-neutral/70 leading-[1.8] mb-12">
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>

              <div className="mt-20 p-8 border border-accent/20 rounded-[2rem] bg-accent/5">
                <h3 className="text-xl font-headline text-primary mb-4 italic">Update Notice</h3>
                <p className="text-sm text-neutral/60">
                  Culinary Provision Group may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service. Last updated: <span className="text-accent font-bold">April 2026</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
