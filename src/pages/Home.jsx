import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/CPG Images - Kitchen Counter 1.jpg';
import trainingImage from '../assets/CPG Images - Prep 1.jpg';
import systemsImage from '../assets/CPG Images - Standards 1.jpg';
import standardsImage2 from '../assets/standards-2.jpg';
import standardsImage3 from '../assets/standards-3.jpg';
import paperworkImage from '../assets/paperwork-5.jpg';
import ingredients3 from '../assets/Ingredients 3.jpg';
import ingredients5 from '../assets/Ingredients 5.jpg';
import ingredients6 from '../assets/Ingredients 6.jpg';
import { FiTarget, FiBarChart2, FiUsers, FiArrowRight, FiAlertCircle, FiTrendingDown, FiMaximize } from 'react-icons/fi';  

const Home = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/10 selection:text-accent">
      {/* 1. HERO SECTION (RESTORED STRUCTURE WITH IMAGE BG) */}
      <header 
        className="relative min-h-[100vh] flex items-center overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${paperworkImage})` }}
      >
        {/* Subtle Overlay to ensure original text stays visible */}
        <div className="absolute inset-0 bg-background/80 z-0" />

        <div className="container mx-auto px-6 md:px-12 z-20 pt-32 pb-20 grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="md:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              {/* <span className="w-12 h-px bg-accent/50"></span> */}
              {/* <span className=" text-accent  text-xs uppercase font-bold tracking-[0.5em] block">
                CULINARY PROVISION GROUP
              </span> */}
            </div>
            
            <h1 className="text-6xl md:text-8xl mb-5 max-w-4xl leading-[1.1] tracking-tight font-headline text-primary">
              Operational Clarity <br />
              <span className="text-neutral/50 font-light">for Food Systems</span>
            </h1>
            
            <p className="text-xl text-neutral/80 mb-12 max-w-2xl font-body leading-relaxed border-l-4 border-accent/20 pl-8">
              Advisory, systems design, and workforce development for foodservice businesses. We build systems that scale performance through structured training and internal alignment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link to="/contact" className="bg-primary text-white flex items-center gap-3 px-10 py-5 rounded-full text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
                Request a Consultation
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/approach" className="font-headline text-lg italic text-neutral/60 border-b border-transparent hover:border-neutral/20 pb-1 hover:text-neutral/80 transition-all">
                Learn our methodology →
              </Link>
            </div>
          </div>

          {/* Right Image/Graphic (RESTORED) */}
          <div className="md:col-span-5 relative h-full flex items-center justify-center mt-16 md:mt-0">
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl opacity-50 scale-150"></div>
            <div 
              className="relative z-10 w-full h-[600px] bg-center bg-cover bg-no-repeat rounded-t-full rounded-b-3xl shadow-2xl shadow-black/20 border-8 border-white transition-transform hover:scale-[1.03] duration-700"
              style={{ backgroundImage: `url(${standardsImage3})` }}
            >
              {/* Trust Badge Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl flex gap-4 items-center border border-black/5">
                <div className="text-5xl font-bold text-accent">15+</div>
                <div className="text-xs uppercase tracking-wider text-neutral/50 font-bold">Years of <br/>Industry Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. PROBLEM FRAMING (RESTRUCTURED) */}
      <article className="relative bg-primary py-40 text-white overflow-hidden">
        {/* Architectural Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
          <svg width="100%" height="100%">
            <pattern id="grid-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Large Subtle Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-headline font-black italic text-white/[0.02] whitespace-nowrap pointer-events-none select-none tracking-tighter">
          STRUCTURAL
        </div>

        <div className="container mx-auto px-8 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            
            {/* Narrative Framing */}
            <div className="lg:col-span-5 flex flex-col items-start space-y-10">
              <div className="flex items-center gap-4 group">
                <span className="w-12 h-px bg-accent/50 group-hover:w-20 transition-all duration-500"></span>
                <span className="text-accent text-[10px] uppercase font-black tracking-[0.5em] block">
                  The Audit
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-headline italic leading-[0.95] tracking-tighter">
                Structural issues <br />
                <span className="text-accent not-italic font-light opacity-80">MASQUERADING</span> <br />
                as situational ones.
              </h2>
              
              <div className="space-y-6 max-w-md">
                <p className="text-xl text-white/50 leading-relaxed font-body border-l-2 border-white/10 pl-8">
                  Most foodservice businesses treat symptoms through individual effort. We reframe the problem into <span className="text-white italic">organizational architecture</span>.
                </p>
                
                <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-widest text-accent font-bold mb-2 italic">The Reality</p>
                  <p className="text-sm text-white/40 leading-relaxed">
                    Inconsistency isn't a lack of talent—it's a lack of repeatable systems. Effort cannot scale; structure can.
                  </p>
                </div>
              </div>
            </div>

            {/* Diagnostic Symptom Flow */}
            <div className="lg:col-span-7 relative">
              {/* Subtle Vertical Connector for Desktop */}
              <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 relative">
                {[
                  { 
                    icon: <FiAlertCircle />, 
                    title: 'Inconsistent Systems', 
                    desc: 'Teams work at capacity, yet output quality and speed vary wildly across shifts.' 
                  },
                  { 
                    icon: <FiTrendingDown />, 
                    title: 'Obscured Margins', 
                    desc: 'Revenue exists, but true operational margins are hidden behind process leaks.' 
                  },
                  { 
                    icon: <FiMaximize />, 
                    title: 'Fragile Scaling', 
                    desc: 'Activity levels are unsustainably high while formal structure remains shallow.' 
                  },
                  { 
                    icon: <FiUsers />, 
                    title: 'Labor Misalignment', 
                    desc: 'Workforce deployment fails to align consistently with fluctuating demands.' 
                  },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`group p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] transition-all duration-500 hover:bg-white/[0.08] hover:border-accent/30 hover:-translate-y-2
                      ${i % 2 !== 0 ? 'md:mt-12' : ''} /* Staggered Effect */
                    `}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent text-2xl mb-8 group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-xl">
                      {item.icon}
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-white text-2xl font-headline italic tracking-tight">{item.title}</h4>
                        <span className="text-[10px] font-black text-white/10 group-hover:text-accent transition-colors">0{i+1}</span>
                      </div>
                      <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/70 transition-colors">
                        {item.desc}
                      </p>
                    </div>

                    {/* Decorative Accent Line */}
                    <div className="mt-8 h-px w-0 bg-accent group-hover:w-full transition-all duration-700" />
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </article>

      {/* 3. CORE DOMAINS (IMAGE-ON-TOP CARDS) */}
      <section className="py-16 bg-[#EDF2EE]" id="domains">
        <div className="mx-auto px-6 md:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-4">Core Domains</h2>
             <div className="flex justify-center gap-2"> 
              <div className="w-2 h-2 rounded-full  bg-[#4C6444]"></div>
              <div className="w-2 h-2 rounded-full bg-[#4C6444]/20"></div>
              <div className="w-2 h-2 rounded-full bg-[#4C6444]/20"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-9">
            {[
              { 
                title: 'Systems Design', 
                desc: 'Operational modeling, financial structure, and process design to clarify functions.', 
                img: ingredients3
              },
              { 
                title: 'Operations strategy', 
                desc: 'Improving efficiency through labor alignment and workflow analysis.', 
                img: ingredients5
              },
              { 
                title: 'Workforce development', 
                desc: 'Building internal capability through structured training systems.', 
                img: ingredients6
              },
              
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-1 shadow-xl shadow-primary/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden group">
                <div className="relative h-64 rounded-[2rem] overflow-hidden mb-8">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="px-6 pb-6 text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 font-body">{item.title}</h3>
                  <p className="text-primary/50 text-sm leading-relaxed mb-10">{item.desc}</p>
                  <button className="bg-[#4C6444] text-white w-full py-5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-primary transition-all shadow-lg shadow-black/10 active:scale-95">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRAINING SECTION (REFINED) */}
      <section className="py-32 bg-background/50 border-y border-black/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl group-hover:bg-accent/20 transition-colors duration-500"></div>
              <div 
                className="relative z-10 h-[550px] bg-center bg-cover rounded-3xl shadow-xl border-4 border-white transition-transform hover:scale-[1.02] duration-700" 
                style={{ backgroundImage: `url(${standardsImage2})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-10 left-10 text-white p-6 bg-white/10 backdrop-blur rounded-xl border border-white/10 max-w-sm">
                   <p className="text-sm italic">Structured training isn't just about knowledge transfer; it's the mechanism that scales consistent, high-level performance across the organization.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-start pt-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-accent/50"></span>
                <span className="text-accent text-xs uppercase font-bold tracking-[0.4em] block">THE METHOD</span>
              </div>
              <h2 className="text-5xl md:text-6xl mb-10 font-headline leading-tight tracking-tight">Training as Leverage</h2>
              <p className="text-lg text-neutral/80 leading-relaxed font-body mb-12 border-l-4 border-accent pl-8 py-2">
                We don’t just improve operations—we build systems that scale performance through structured training and internal alignment. Training is not an add-on; it is the fundamental mechanism through which consistent performance scales.
              </p>
              <Link to="/approach" className="bg-white text-primary flex items-center gap-3 px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral/10">
                Explore Our Approach
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CREDIBILITY (ELEVATED) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            {[
              { title: 'Advisory-focused', label: 'Strategic Partnerships' },
              { title: 'Systems-driven', label: 'Structural Integrity' },
              { title: 'Measurable Outcomes', label: 'Performance Accountability' },
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col items-center">
                <h4 className="text-3xl font-headline italic mb-3 text-primary tracking-tight">{pillar.title}</h4>
                <div className="w-16 h-px bg-accent/30 mb-4"></div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral/50 font-bold">{pillar.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA (HIGH CONVERSION) */}
      <section className="relative py-12 bg-background flex flex-col items-center justify-center text-center overflow-hidden border-t border-black/5">
        <div className="absolute inset-0 z-0 bg-accent/5 rounded-full blur-[150px] scale-150"></div>
        
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center relative z-10">
          <span className="text-accent text-xs uppercase font-bold tracking-[0.5em] mb-6 block">NEXT STEPS</span>
          <h2 className="text-6xl md:text-7xl mb-16 max-w-3xl leading-tight font-headline tracking-tighter">Ready for <br/>Operational Clarity?</h2>
          <Link to="/contact" className="bg-primary text-white flex items-center gap-3 px-12 py-6 rounded-full text-xl shadow-2xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
            Request a Consultation
            <FiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <p className="text-sm text-neutral/50 mt-10 max-w-sm">Schedule a primary callback to discuss your current operational structure and performance goals.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;