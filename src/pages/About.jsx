import { FiTarget, FiShield, FiBarChart, FiArrowDownRight, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../assets/Kitchen Counter 1.jpg';
import bentoImg1 from '../assets/Prep 2.jpg';
import bentoImg2 from '../assets/Standards 1.jpg';
import bentoImg3 from '../assets/Meeting 1.jpg';
import bentoImg4 from '../assets/Standards 6.jpg';

const About = () => {
  return (
    <div className="flex flex-col bg-background selection:bg-accent/20">
      
      {/* 1. HERO: Sophisticated Architectural Hero */}
      <header className="relative min-h-[100vh] flex items-center pt-32 pb-32 overflow-hidden bg-neutral-950">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroBg} 
            alt="About the Firm" 
            className="w-full h-full object-cover"
          />
          
          {/* Architectural Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.1] pointer-events-none select-none">
            <svg width="100%" height="100%">
              <pattern id="grid-pattern-about" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-pattern-about)" />
            </svg>
          </div>

          {/* Neutral Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/60 to-transparent z-10" />
        </div>
        
        <div className="container mx-auto px-8 relative z-20">
          <div className="max-w-4xl -mt-40">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-[1px] bg-accent"></span>
              <span className="text-accent text-[10px] uppercase font-black tracking-[0.5em]">About the Firm</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-[5rem] font-headline leading-[1.1] text-white mb-12 tracking-tighter italic"
            >
              Establishing trust <br />
              <span className="text-accent not-italic font-bold">through philosophy.</span>
            </motion.h1>
          </div>
        </div>

        {/* Decorative architectural line */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "12rem" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 right-24 w-px bg-gradient-to-t from-accent/50 to-transparent hidden md:block" 
        />
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

            {/* Card 2: Standalone Image block */}
            <div className="rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[70%] mt-auto shadow-lg relative group">
               <img src={bentoImg2} alt="Standards" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
            </div>

            {/* Card 3: Dark Background with Arrow (Systems-driven) */}
            <div className="bg-primary rounded-[2rem] p-10 shadow-xl flex flex-col relative overflow-hidden group min-h-[400px]">
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

      {/* 3. MISSION & FOCUS: Precise Screenshot Replication */}
      <section className="bg-[#FBFAF8] relative overflow-hidden">
        
        {/* Curved Green Banner */}
        <div className="bg-[#4C6444] pt-32 pb-48 rounded-bl-[10rem] relative z-10">
          
          <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
               <div className="flex items-center gap-2 mb-6">
                 <span className="text-white text-lg">♥</span>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Experience Exceptional Advisory</span>
               </div>
               <h2 className="text-5xl md:text-7xl font-headline italic mb-8 tracking-tighter">
                 Culinary <br /> <span className="text-accent not-italic font-bold">Provision Group.</span>
               </h2>
               <div className="space-y-6 max-w-lg text-white/70 font-body text-base leading-relaxed">
                 <p>
                   We provide structured advisory focused on aligning operations, financial clarity, and workforce capability into a cohesive model.
                 </p>
                 <p>
                   Our approach transforms business operations into predictable, high-performing engines that run efficiently long after our engagement.
                 </p>
               </div>
            </motion.div>

            {/* Right Featured Image with specific curvature */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-[450px] bg-white p-2 rounded-[5rem] rounded-tl-none shadow-3xl overflow-hidden">
                <img src={bentoImg4} className="w-full h-full object-cover rounded-[4.5rem] rounded-tl-none" alt="" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Lower White Area with Overlapping Card */}
        <div className="container mx-auto px-8 relative z-20 -mt-32 pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Overlapping Diagnostic Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
               <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-neutral-100 w-full max-w-sm text-center relative"
               >
                  <div className="absolute top-10 right-10 flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <div className="w-2 h-2 rounded-full bg-accent/20" />
                  </div>
                  
                  <span className="text-[#4C6444] text-[10px] uppercase font-black tracking-widest mb-4 block">Focus Area</span>
                  <h4 className="text-3xl font-headline italic text-primary mb-12">Systems <br/>Design</h4>
                  
                  <div className="relative w-52 h-52 mx-auto">
                    <div className="absolute -top-4 right-8 bg-[#4C6444] text-white p-3 rounded-full shadow-lg z-20 border-4 border-white">
                       <FiArrowDownRight size={20} />
                    </div>
                    <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-xl relative z-10 transition-transform duration-700 hover:scale-105">
                       <img src={bentoImg3} className="w-full h-full object-cover" alt="" />
                    </div>
                  </div>
               </motion.div>
            </div>

            {/* Mission Text Area */}
            <div className="lg:col-span-7 pt-20">
               <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
               >
                 <div className="flex items-center gap-3 mb-6">
                   <span className="text-[#4C6444] text-lg">♥</span>
                   <span className="text-[12px] font-black uppercase tracking-[0.4em] text-white">We Are Committed</span>
                 </div>
                 
                 <h3 className="text-4xl md:text-6xl font-headline italic text-primary mt-12 mb-12 tracking-tighter">
                   Our Mission Statement
                 </h3>
                 
                 <div className="space-y-8 max-w-xl text-neutral/50 font-body text-base leading-relaxed mb-12 border-l-2 border-accent/20 pl-10">
                   <p className="italic">
                     "The firm focuses on improving how businesses operate, train, and scale through systems, not isolated adjustments."
                   </p>
                   <p>
                     By building alignment across operations, finance, and training, we ensure that every decision is structural, not situational. Our engagements leave businesses stronger and more resilient for the future.
                   </p>
                 </div>
                 
                 <Link to="/contact" className="bg-[#4C6444] text-white px-12 py-5 mt-10 rounded-full font-bold uppercase tracking-widest hover:bg-primary transition-all duration-500 shadow-xl shadow-primary/20 inline-flex items-center gap-4 group">
                   Learn More About Us 
                   <FiArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                 </Link>
               </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative Wave Transition (Optional but matches image feel) */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* 6. FINAL CTA: Screenshot Style Horizontal Banner */}
      <section className="relative overflow-hidden bg-white w-full border-none">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[450px]">
          
          {/* Left Content Area - Padded to align with container */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center py-24 px-8 md:pl-[10%] lg:pl-[15%] lg:pr-24 text-left relative z-20 bg-white">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent text-[10px] font-black uppercase tracking-[0.6em] mb-4 block"
            >
              NEXT STEPS
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl font-headline tracking-tighter text-primary leading-tight"
            >
              Ready for <br/> 
              <span className="text-accent italic font-light">Operational Clarity?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-neutral/40 max-w-lg mt-6 font-body italic"
            >
              Schedule a primary callback to discuss your current operational structure and performance goals.
            </motion.p>
          </div>

          {/* Right Image Area - Truly Edge to Edge */}
          <div className="w-full lg:w-[45%] relative min-h-[300px] flex items-center justify-center lg:justify-start">
            {/* Diagonal Fade Transition */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/40 to-transparent hidden lg:block" />
            
            {/* Background Image Container */}
            <div className="absolute inset-0">
              <img src={heroBg} className="w-full h-full object-cover grayscale-[0.3] opacity-80" alt="" />
              <div className="absolute inset-0 bg-primary/5" />
            </div>

            {/* Floating Action Button (Overlapping Position) */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative z-20 lg:-ml-40"
            >
              <Link to="/contact" className="bg-accent text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest shadow-[0_20px_50px_rgba(194,164,109,0.4)] hover:bg-primary hover:shadow-primary/30 transition-all duration-500 flex items-center gap-4 group">
                Request a Consultation
                <FiArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

     
    </div>
  );
};

export default About;