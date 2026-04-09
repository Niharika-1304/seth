import { FiTarget, FiShield, FiBarChart, FiArrowDownRight, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import heroBg from '../assets/Standards 4.jpg';
import bentoImg1 from '../assets/CPG Images - Prep 2.jpg';
import bentoImg2 from '../assets/CPG Images - Standards 1.jpg';
import bentoImg3 from '../assets/CPG Images - Meeting 1.jpg';
import bentoImg4 from '../assets/Standards 6.jpg';

const About = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/20">
      
      {/* 1. HERO: Full Width Background Hero */}
      <header className="relative min-h-[100vh] flex items-center pt-32 pb-32 overflow-hidden">
        {/* Full Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="About the Firm" 
            className="w-full h-full object-cover"
          />
          {/* Dark Professional Overlay */}
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-accent"></span>
              <span className="text-accent text-[10px] uppercase font-black tracking-[0.5em]">About the Firm</span>
            </div>
            <h1 className="text-6xl md:text-[5rem] font-headline leading-[1.1] text-white mb-12 tracking-tighter italic">
              Establishing trust <br />
              <span className="text-accent not-italic font-bold">through philosophy.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed font-body">
              Culinary Provision Group was established to address structural inefficiencies in the foodservice industry. We focus on <span className="text-accent font-bold">systems</span>, not isolated adjustments.
            </p>
          </div>
        </div>

        {/* Decorative subtle gradient at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
      </header>

      {/* 2. VALUES: Modern Bento Grid */}
      <section className="py-24 bg-background relative overflow-hidden border-b border-neutral/5">
        <div className="container mx-auto px-8 relative z-10">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div className="max-w-xl">
               <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">About us</span>
               <h2 className="text-5xl md:text-6xl font-headline text-primary tracking-tight">
                  Replicable <span className="text-accent italic">Results</span>
               </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl text-neutral/60 font-body text-sm leading-relaxed">
              <p>
                Our core values support everything we do. By emphasizing long-term advisory roles and using clear frameworks, we ensure results are consistent.
              </p>
              <p>
                We hold ourselves accountable to measurable outcomes, focusing on metrics that reflect the actual performance and health of the firm.
              </p>
            </div>
          </div>

          {/* Bento Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            
            {/* Card 1: White Background (Advisory-focused) */}
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-neutral/5 flex flex-col group overflow-hidden relative min-h-[400px]">
              <div className="mb-6 z-10 relative">
                <h3 className="text-4xl text-primary font-bold mb-2 tracking-tight">Advisory-<br/>focused</h3>
                <p className="text-xs font-body text-neutral/60 font-medium leading-relaxed max-w-[90%]">
                  Working closely with leadership to define structural goals and long-term vision.
                </p>
              </div>
              <div className="rounded-[1.5rem] overflow-hidden mt-auto relative z-10 shadow-lg aspect-square lg:aspect-auto flex-grow -mx-2 -mb-2">
                <img src={bentoImg1} alt="Advisory" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
              </div>
            </div>

            {/* Card 2: Standalone Image block (Slightly shorter relative to row, aligned down) */}
            <div className="rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[75%] mt-auto shadow-lg relative group">
               <img src={bentoImg2} alt="Standards" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
            </div>

            {/* Card 3: Dark Background with Arrow (Systems-driven) */}
            <div className="bg-primary rounded-[2rem] p-8 shadow-xl flex flex-col relative overflow-hidden group min-h-[400px]">
              <FiArrowDownRight className="text-3xl text-accent/80 mb-6 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" strokeWidth={1.5} />
              <div className="relative z-10 flex-grow">
                <h3 className="text-4xl text-white font-bold mb-2 tracking-tight">Systems-<br/>driven</h3>
                <p className="text-xs font-body text-white/70 leading-relaxed font-medium">
                  Using clear frameworks to ensure that results are replicable and sustainable.
                </p>
              </div>
              <div className="rounded-[1.5rem] overflow-hidden mt-6 relative shadow-lg aspect-[16/9] -mx-2 -mb-2">
                 <img src={bentoImg3} alt="Systems" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
              </div>
            </div>

            {/* Card 4: Light Gradient Base (Measurable Outcomes) */}
            <div className="bg-gradient-to-br from-white to-[#e8f0eb] rounded-[2rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden border border-primary/5 group relative min-h-[400px]">
              <div className="mb-6 z-10 relative">
                <h3 className="text-4xl text-primary font-bold mb-2 tracking-tight">Measurable<br/>Outcomes</h3>
                <p className="text-xs font-body text-primary/60 font-medium leading-relaxed">
                  Focusing on metrics that reflect the actual performance and health of the firm.
                </p>
              </div>
              <div className="rounded-[1.5rem] overflow-hidden mt-auto relative shadow-lg aspect-[4/3] lg:aspect-auto flex-grow -mx-2 -mb-2">
                 <img src={bentoImg4} alt="Measurable" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MISSION: The "Architectural" Split */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-20 items-stretch">
            
            {/* Left: Interactive Quote Frame */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 border-2 border-accent/20 rounded-[3rem] translate-x-6 translate-y-6 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-700" />
              <div className="relative z-10 h-full min-h-[500px] bg-background flex flex-col justify-center p-16 rounded-[3rem] shadow-2xl shadow-black/[0.03] border border-neutral/5 overflow-hidden">
                {/* Visual Background Pattern */}
                <div className="absolute top-0 right-0 p-8 text-8xl font-headline italic text-accent/5 pointer-events-none">"</div>
                
                <h3 className="text-3xl md:text-4xl font-headline italic text-primary leading-[1.4] relative z-20">
                  The firm focuses on improving how businesses operate, train, and scale <span className="text-accent">through systems.</span>
                </h3>
                
                <div className="mt-12 h-px w-20 bg-accent/30" />
              </div>
            </div>

            {/* Right: Narrative Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
              <div>
                <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">A Measured Approach</span>
                <h2 className="text-4xl md:text-5xl mb-8 leading-tight font-headline italic text-primary tracking-tight">
                  A professional, <br />non-promotional tone.
                </h2>
                <div className="space-y-8">
                  <p className="text-lg text-neutral/60 leading-[1.8] font-body border-l-2 border-accent/20 pl-8">
                    Our focus is on the fundamental structure of the foodservice business. We prioritize measurable improvement and operational integrity over personal narrative. 
                  </p>
                  <p className="text-lg text-neutral/60 leading-[1.8] font-body pl-8 opacity-80">
                    By building alignment across operations, finance, and training, we ensure that every decision is structural, not situational. Our engagements are designed to leave your business stronger and more resilient for scale.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOCUS: Architectural Split (Reversed) */}
      <section className="py-12 bg-white relative border-t border-neutral/5">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-20 items-stretch">
            
            {/* Left: Narrative Content (Order 2 on Mobile, Order 1 on Desktop) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-12 order-2 lg:order-1">
              <div>
                <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Our Focus</span>
                <h2 className="text-4xl md:text-5xl mb-8 leading-tight font-headline italic text-primary tracking-tight">
                  Structural growth, <br />beyond situational fixes.
                </h2>
                <div className="space-y-8">
                  <p className="text-lg text-neutral/60 leading-[1.8] font-body border-l-2 border-accent/20 pl-8 font-medium">
                    The firm focuses on improving how businesses operate, train, and scale through systems, not isolated adjustments.
                  </p>
                  <p className="text-lg text-neutral/60 leading-[1.8] font-body pl-8 opacity-80">
                    We believe true growth comes from embedding sound structures rather than repeatedly applying band-aids to recurring issues. Our approach transforms business operations into predictable, high-performing engines that run efficiently whether we are in the room or not.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Quote Frame (Order 1 on Mobile, Order 2 on Desktop) */}
            <div className="lg:col-span-5 relative group order-1 lg:order-2">
              <div className="absolute inset-0 border-2 border-accent/20 rounded-[3rem] -translate-x-6 translate-y-6 transition-transform group-hover:-translate-x-4 group-hover:translate-y-4 duration-700" />
              <div className="relative z-10 h-full min-h-[500px] bg-primary flex flex-col justify-center p-16 rounded-[3rem] shadow-2xl shadow-accent/10 border border-neutral/5 overflow-hidden">
                {/* Visual Background Pattern */}
                <div className="absolute top-0 right-0 p-8 text-8xl font-headline italic text-white/5 pointer-events-none">"</div>
                
                <h3 className="text-3xl md:text-4xl font-headline italic text-white leading-[1.4] relative z-20">
                  Building <span className="text-accent">systems</span>, <br/>not isolated adjustments.
                </h3>
                
                <div className="mt-12 h-px w-20 bg-accent/30" />
              </div>
            </div>

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

export default About;