import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/Kitchen Counter 1.jpg';
import trainingImage from '../assets/Prep 1.jpg';
import systemsImage from '../assets/Standards 1.jpg';
import standardsImage2 from '../assets/standards-2.jpg';
import standardsImage3 from '../assets/standards-3.jpg';
import paperworkImage from '../assets/paperwork-5.jpg';
import ingredients3 from '../assets/Ingredients 3.jpg';
import ingredients4 from '../assets/Ingredients 4.jpg';
import ingredients5 from '../assets/Ingredients 5.jpg';
import ingredients6 from '../assets/Ingredients 6.jpg';
import meeting1 from '../assets/Meeting 1.jpg';
import meeting3 from '../assets/Meeting 3.jpg';
import meeting5 from '../assets/Meeting 5.jpg';
import backoffice3 from '../assets/Backoffice 3.jpg';
import symbolLogo from '../assets/Symbol Final.png';
import { FiTarget, FiBarChart2, FiUsers, FiArrowRight, FiAlertCircle, FiTrendingDown, FiMaximize, FiArrowUpRight, FiSearch } from 'react-icons/fi';  

const Home = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/10 selection:text-accent">
      {/* 1. HERO SECTION (FULL SCREEN) */}
      <header 
        className="relative h-screen w-full flex items-center overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("${meeting3}")` }}
      >
        {/* Cinematic Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-10" />

        <div className="container mx-auto px-8 md:px-16 relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl mb-8 leading-[1.05] tracking-tight font-headline text-white drop-shadow-2xl">
              Operational Clarity <br />
              <span className="text-lime font-light italic opacity-90">for Food Systems</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link to="/contact" className="bg-lime text-primary flex items-center gap-4 px-10 py-6 rounded-full text-xl font-bold hover:bg-white transition-all duration-300 group shadow-2xl">
                Request a Consultation
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FiArrowUpRight className="text-primary text-2xl" />
                </div>
              </Link>
            </div>

            {/* Re-positioned & Resized Stats Cards */}
            <div className="mt-12 flex flex-col md:flex-row gap-4 max-w-3xl">
              <div className="bg-white/10 backdrop-blur-xl px-6 py-5 rounded-2xl flex-1 border border-white/20 shadow-xl transition-all duration-300 hover:bg-white/20">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-lime mb-2">Trusted Partner</p>
                <p className="text-white font-bold text-sm">ADVISORY & SYSTEMS DESIGN</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl px-6 py-5 rounded-2xl flex-[1.4] border border-white/20 shadow-xl transition-all duration-300 hover:bg-white/20">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-lime mb-2">Strategic Alignment</p>
                <p className="text-white font-bold text-sm">FINANCIAL STRUCTURE & WORKFORCE PERFORMANCE</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. THE AUDIT SECTION (REDESIGNED) */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[120px] -z-0" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content: Narrative */}
            <div className="lg:col-span-5 space-y-8 md:sticky md:top-32">
              <div className="inline-flex items-center gap-3">
                <span className="w-10 h-[1px] bg-lime"></span>
                <span className="px-4 py-2 rounded-full bg-background text-[10px] font-black uppercase tracking-widest text-primary/40">
                  The Audit
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-headline italic leading-[1.05] tracking-tighter text-primary">
                Structural issues <br />
                <span className="text-lime-600 not-italic font-bold">MASQUERADING</span> <br />
                as situational ones.
              </h2>
              
              <div className="space-y-6 max-w-md">
                <p className="text-xl text-primary/60 leading-relaxed font-body border-l-4 border-lime/30 pl-8">
                  Most foodservice businesses treat symptoms through individual effort. We reframe the problem into <span className="text-primary italic font-semibold">organizational architecture</span>.
                </p>
                
                <div className="p-8 bg-background/50 border border-black/[0.03] rounded-3xl backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-widest text-lime-600 font-black mb-3 italic">The Reality</p>
                  <p className="text-sm text-primary/50 leading-relaxed italic">
                    "Inconsistency isn't a lack of talent—it's a lack of repeatable systems. Effort cannot scale; structure can."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content: Diagnostic cards */}
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-6 relative">
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
                  className={`group p-8 bg-background/30 border border-black/[0.03] rounded-[2.5rem] transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 flex flex-col h-full 
                    ${i === 1 || i === 3 ? 'md:mt-12' : ''}
                  `}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-lime-600 text-3xl mb-12 shadow-sm group-hover:bg-lime group-hover:text-primary transition-all duration-500">
                    {item.icon}
                  </div>
                  
                  <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-primary text-2xl font-headline font-bold leading-tight">{item.title}</h4>
                      <div className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center text-[10px] font-black pointer-events-none text-primary/20 group-hover:text-lime-600">
                        0{i+1}
                      </div>
                    </div>
                    <p className="text-sm text-primary/40 leading-relaxed font-body">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Decorative underline */}
                  <div className="mt-8 h-px w-full bg-black/5 relative overflow-hidden">
                    <div className="absolute inset-0 w-0 bg-lime group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. CORE DOMAINS (RESTORED TO CENTERED CARD STYLE) */}
      <section className="py-24 bg-[#EDF2EE]" id="domains">
        <div className="container mx-auto px-12 md:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-6">Core Domains</h2>
             <div className="flex justify-center gap-2"> 
              <div className="w-2.5 h-2.5 rounded-full bg-[#4C6444]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#4C6444]/30"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#4C6444]/10"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              { 
                title: 'Systems Design', 
                desc: 'Operational modeling, financial structure, and process design to clarify functions.', 
                img: ingredients3
              },
              { 
                title: 'Operations Strategy', 
                desc: 'Improving efficiency through labor alignment and workflow analysis.', 
                img: ingredients5
              },
              { 
                title: 'Workforce Development', 
                desc: 'Building internal capability through structured training systems.', 
                img: ingredients6
              },
              { 
                title: 'Implementation Support', 
                desc: 'Translating theoretical systems into daily practice through rollout and performance tracking.', 
                img: ingredients4
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-2 shadow-xl shadow-primary/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden group flex flex-col h-full">
                <div className="relative h-60 rounded-[1.5rem] overflow-hidden mb-6">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="px-6 pb-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-3 font-body">{item.title}</h3>
                  <p className="text-primary/50 text-xs leading-relaxed mb-8 flex-grow">{item.desc}</p>
                  <button className="bg-[#4C6444] text-white w-full py-4 rounded-full font-bold text-[9px] uppercase tracking-[0.2em] hover:bg-primary transition-all shadow-lg shadow-black/5 active:scale-95">
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
      <section 
        className="relative py-40 flex flex-col items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${backoffice3}")` }}
      >
        {/* Transparent Modern Overlay (Reduced Greenish Tint) */}
        <div className="absolute inset-0 z-0 bg-black/60"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center relative z-10">
          <span className="text-lime text-xs uppercase font-bold tracking-[0.5em] mb-6 block">NEXT STEPS</span>
          <h2 className="text-6xl md:text-7xl mb-16 max-w-3xl leading-tight font-headline tracking-tighter text-white">Ready for <br/>Operational Clarity?</h2>
          <Link to="/contact" className="bg-lime text-primary flex items-center gap-4 px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:bg-white hover:-translate-y-1 transition-all duration-300 group">
            Request a Consultation
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
          <p className="text-sm text-white/50 mt-10 max-w-sm italic">Schedule a primary callback to discuss your current operational structure and performance goals.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;