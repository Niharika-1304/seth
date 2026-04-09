import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTarget, FiActivity, FiLayers, FiCheckCircle, FiShield, FiTrendingUp, FiUsers } from 'react-icons/fi';
import trainingImage from '../assets/CPG Images - Prep 1.jpg';
import backOfficeImage from '../assets/backoffice-2.jpg';

const Services = () => {
  const [activeArea, setActiveArea] = useState(0);

  const serviceAreas = [
    {
      icon: <FiLayers />,
      title: "Systems Advisory",
      focus: "Structural Level",
      description: "Clarifying how the business functions at its core through modeling and refined process design.",
      items: ["Operational modeling", "Cost structure analysis", "Process design and refinement"]
    },
    {
      icon: <FiActivity />,
      title: "Operational Optimization",
      focus: "Day-to-Day Execution",
      description: "Improving efficiency through labor alignment and deep-dive workflow analysis.",
      items: ["Workflow analysis", "Labor alignment", "Inventory and cost control"]
    },
    {
      icon: <FiTarget />,
      title: "Workforce Development",
      focus: "Internal Capability",
      description: "Building internal capability through structured training and AI-assisted course design.",
      items: ["Training system design", "AI-assisted course development", "Internal knowledge frameworks"]
    },
    {
      icon: <FiCheckCircle />,
      title: "Implementation",
      focus: "Systems in Practice",
      description: "Translating theoretical systems into daily practice through rollout and performance tracking.",
      items: ["Systems rollout", "Integration into operations", "Performance tracking and refinement"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="flex flex-col bg-white selection:bg-accent/20">
      
      {/* 1. OPENING FRAME: The Problem Reframe */}
      <header 
        className="relative pt-32 pb-32 overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${backOfficeImage})` }}
      >
        {/* Neutral Background Overlay for Max Clarity */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-0" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-[1px] bg-accent"></span>
              <span className="py-5 text-accent text-[10px] uppercase font-black tracking-[0.5em]">The Perspective</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-headline leading-[0.95] text-white mb-8 tracking-tighter"
            >
              Performance is not a staffing problem— <br />
              <span className="text-accent italic font-light">it is a systems problem.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed font-body italic border-l-2 border-accent/20 pl-8"
            >
              Most foodservice businesses operate under constant pressure. Without a defined system, performance becomes dependent on effort rather than design.
            </motion.p>
          </div>
        </div>
      </header>

      {/* Structural Realities Cards: Overlapping Placement */}
        <div className="container mx-auto px-8 relative z-20 -mt-24 mb-0">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Realities Card 1: White */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-neutral/5 group transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary text-xl mb-8">
                <FiActivity />
              </div>
              <p className="text-primary font-bold text-lg leading-snug mb-4">Inconsistent <br/>Operational Processes</p>
              <p className="text-neutral/40 text-xs font-bold uppercase tracking-widest leading-relaxed">Lack of Standardized Workflow</p>
            </motion.div>

            {/* Realities Card 2: Gold */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(194, 164, 109, 0.3)"
              }}
              className="bg-accent p-10 rounded-[2.5rem] shadow-2xl shadow-accent/20 group transition-all duration-500 text-primary cursor-default"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl mb-8">
                <FiTrendingUp />
              </div>
              <p className="font-bold text-lg leading-snug mb-4">Unclear Cost & <br/>Resource Drivers</p>
              <p className="text-primary/40 text-xs font-bold uppercase tracking-widest leading-relaxed">Obscured Profit Leaks</p>
            </motion.div>

            {/* Realities Card 3: Deep Blue-Grey */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)"
              }}
              className="bg-[#334E5E] p-10 rounded-[2.5rem] shadow-2xl shadow-black/10 text-white group transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent text-xl mb-8">
                <FiTarget />
              </div>
              <p className="font-bold text-lg leading-snug mb-4">Fragmented & <br/>Reactive Training</p>
              <p className="text-white/30 text-xs font-bold uppercase tracking-widest leading-relaxed">Knowledge Depth Gap</p>
            </motion.div>

          </div>
        </div>

      {/* 2. WHAT WE DO: The Solution Definition */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7"
            >
              <h2 className="text-4xl md:text-5xl font-headline italic text-primary mb-8 tracking-tighter leading-tight">
                We design systems that improve how food businesses operate, train, and perform.
              </h2>
              <p className="text-lg text-neutral/50 font-body leading-relaxed border-l-4 border-accent pl-10 py-2">
                Culinary Provision Group provides structured advisory focused on aligning operations, financial clarity, and workforce capability into a cohesive model.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-accent/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src={trainingImage} 
                alt="Operational Prep" 
                className="relative z-10 rounded-[2rem] shadow-2xl  border-background hover:scale-[1.02] transition-transform duration-700 w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICE AREAS: Functional Domains */}
      <section className="py-32 bg-neutral/5 relative">
        <div className="container mx-auto px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-6"
          >
            {serviceAreas.map((area, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
                }}
                onDoubleClick={() => setActiveArea(null)}
                onClick={() => setActiveArea(activeArea === index ? null : index)}
                className={`cursor-pointer group p-12 rounded-[2.5rem] border overflow-hidden flex flex-col transition-colors duration-500 ${
                  activeArea === index 
                  ? 'bg-white border-accent shadow-2xl shadow-accent/5' 
                  : 'bg-white/50 border-neutral/5 hover:bg-white hover:border-neutral/10'
                }`}
              >
                <div className="flex justify-between items-start mb-10">
                  <div className={`text-3xl transition-transform duration-500 ${
                    activeArea === index ? 'text-accent scale-110' : 'text-accent/40 group-hover:text-accent group-hover:scale-110'
                  }`}>
                    {area.icon}
                  </div>
                  <span className={`text-[10px] font-black tracking-[0.4em] uppercase italic transition-colors ${
                    activeArea === index ? 'text-accent' : 'text-neutral-500/20'
                  }`}>Domain 0{index + 1}</span>
                </div>

                <h3 className="text-3xl mb-2 font-headline italic text-primary">{area.title}</h3>
                <p className={`text-[9px] font-black uppercase tracking-widest mb-6 italic transition-opacity ${
                  activeArea === index ? 'text-accent opacity-100' : 'text-accent opacity-60'
                }`}>Focus: {area.focus}</p>
                
                <p className="text-neutral/60 text-lg leading-relaxed mb-10 font-body flex-grow">
                  {area.description}
                </p>

                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-y-4 pt-8 border-t transition-colors ${
                  activeArea === index ? 'border-accent/10' : 'border-neutral/5'
                }`}>
                  {area.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[11px] font-bold text-primary/70 uppercase tracking-widest">
                      <FiArrowRight className={`transition-transform ${activeArea === index ? 'text-accent translate-x-1' : 'text-accent/30'}`} />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Moving Border Line Hover Effect */}
                <div className={`absolute bottom-0 left-0 h-1 bg-accent transition-all duration-700 ease-in-out ${
                  activeArea === index ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. ENGAGEMENT MODEL: Methodology */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        {/* Abstract "Step" background watermark */}
        <div className="absolute right-0 bottom-0 text-[30rem] font-headline font-black italic text-white/[0.02] leading-none pointer-events-none translate-y-20">
          STAGE
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-10 block">Engagement Model</span>
              <h2 className="text-5xl md:text-7xl font-headline italic leading-[0.95] tracking-tighter mb-12">
                Clarity first, <br />
                <span className="text-accent not-italic font-light">Implementation</span>
              </h2>
              <p className="text-xl text-white/60 font-body leading-relaxed max-w-md">
                Work begins with a focused assessment to identify inefficiencies. From there, engagements expand into system design and workforce development.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { label: "Assessment Engagements", type: "Discovery" },
                { label: "Systems Optimization", type: "Architecture" },
                { label: "Training & Workforce Systems", type: "Scale" },
                { label: "Ongoing Advisory", type: "Continuity" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="group p-8 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between transition-all cursor-default"
                >
                  <div>
                    <span className="text-accent text-[10px] font-black tracking-widest uppercase mb-1 block opacity-50 group-hover:opacity-100 transition-opacity italic">Phase 0{i+1} // {item.type}</span>
                    <h4 className="text-2xl font-headline italic text-white">{item.label}</h4>
                  </div>
                  <FiArrowRight className="text-white/10 group-hover:text-accent group-hover:translate-x-2 transition-all" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. DIFFERENTIATION & TRAINING: Integrated Philosophy */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            {/* The "Why" */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="p-12 bg-neutral/5 rounded-[3rem] border border-neutral/10">
                <h3 className="text-3xl font-headline italic text-primary mb-6">Alignment for Growth</h3>
                <p className="text-neutral/50 text-lg leading-relaxed mb-8 italic">
                  Most improvements fail because they are isolated—menu changes or staffing shifts. These are temporary. Consistent results require the alignment of:
                </p>
                <div className="space-y-4">
                  {[["Operations", <FiActivity />], ["Financial Structure", <FiTrendingUp />], ["Workforce Performance", <FiUsers />]].map(([text, icon], idx) => (
                    <div key={idx} className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.2em] text-xs">
                      <span className="text-accent">{icon}</span> {text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Training Position */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Capability Scaling</span>
              <h2 className="text-4xl md:text-5xl font-headline italic text-primary mb-8 tracking-tighter">
                Training is not an add-on—it is how performance scales.
              </h2>
              <p className="text-lg text-neutral/50 leading-relaxed font-body mb-8">
                Structured training is integrated into the broader system. It allows businesses to standardize processes, improve consistency, and reduce operational friction.
              </p>
              <div className="h-1 w-24 bg-accent/20" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-24 bg-primary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/10 rounded-full blur-[150px] scale-150 z-0" />
        
        <div className="container mx-auto px-8 relative z-10">
          <span className="text-accent text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">Engagement Start</span>
          <h2 className="text-5xl md:text-6xl font-headline italic text-white mb-10 tracking-tighter leading-tight">
            Start with a <br />
            <span className="not-italic text-accent font-light">Structured Assessment.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto mb-12 italic font-body">
            Every engagement begins with a clear understanding of where the business stands and where inefficiencies exist.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-4 bg-white text-primary px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-500 shadow-2xl">
            Request a Consultation
            <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;