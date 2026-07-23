"use client";

import { content } from "@/data/content";
import Link from "next/link";
import { motion, useInView, animate, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Shield, ShieldCheck, Cloud, Server, Users, BarChart, ChevronDown, Globe2, Award, Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import HeroCarousel from "@/components/HeroCarousel";
import MobileDashboard from "@/components/MobileDashboard";
import Image from "next/image";

// --- Sub-components for Interactivity ---


function AnimatedCounter({ from, to, suffix, label }: { from: number, to: number, suffix: string, label: string }) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 1.2,
        ease: "easeOut",
        onUpdate(value) {
          setValue(Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [from, to, isInView]);

  // Premium Lucide Icons matching the metrics
  const getIcon = () => {
    if (label.includes("Experience")) return <Award className="w-7 h-7 text-blue-600" />;
    if (label.includes("Delivered")) return <Zap className="w-7 h-7 text-indigo-600" />;
    return <ShieldCheck className="w-7 h-7 text-sky-600" />;
  };

  return (
    <div 
      ref={nodeRef} 
      className="relative overflow-hidden flex items-center gap-6 p-7 bg-gradient-to-br from-white/70 via-blue-50/30 to-indigo-50/40 backdrop-blur-xl rounded-3xl border border-blue-200/50 shadow-[0_20px_40px_-20px_rgba(30,58,138,0.12)] hover:shadow-[0_25px_50px_-20px_rgba(30,58,138,0.18)] hover:scale-[1.03] transition-all duration-300 group"
    >
      {/* Dynamic ambient color glow matched to the metric icon */}
      <div className={`absolute -right-4 -bottom-4 w-28 h-28 rounded-full blur-2xl opacity-40 transition-all duration-300 group-hover:scale-125 ${
        label.includes("Experience") ? "bg-blue-400/20" : label.includes("Delivered") ? "bg-indigo-400/20" : "bg-sky-400/20"
      }`} />
      
      {/* Elegant glassmorphic icon container */}
      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-110 ${
        label.includes("Experience") ? "bg-blue-50/80 border-blue-100/50" : label.includes("Delivered") ? "bg-indigo-50/80 border-indigo-100/50" : "bg-sky-50/80 border-sky-100/50"
      }`}>
        {getIcon()}
      </div>

      <div className="flex flex-col relative z-10">
        <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-blue-800 tracking-tight leading-none mb-1">
          {value}{suffix}
        </div>
        <div className="text-blue-950/60 font-bold text-[15px] tracking-wide">{label}</div>
      </div>
    </div>
  );
}

function FAQAccordion({ faq, index }: { faq: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen ? 'bg-white shadow-md border-blue-200' : 'bg-white/40 border-blue-100 hover:bg-white/60'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6 transition-colors cursor-pointer"
      >
        <h3 className="text-lg md:text-xl font-semibold text-blue-950 leading-snug">{faq.question}</h3>
        <div className={`shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-md transition-all duration-300 ${isOpen ? 'shadow-inner' : ''}`}>
          <ChevronDown className={`w-5 h-5 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 md:px-8 pb-8 pt-0">
          <p 
            className="text-blue-950/75 text-[15px] md:text-base leading-relaxed font-medium"
            dangerouslySetInnerHTML={{ __html: faq.answer }}
          />
        </div>
      </motion.div>
    </div>
  );
}

// --- Main Page Component ---

export default function Home() {
  return (
    <div className="flex flex-col w-full text-blue-950">
      <section 
        className="relative w-full min-h-[100svh] flex items-center justify-center pt-32 pb-16 lg:pt-40 lg:pb-32 overflow-hidden -mt-20 lg:[mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
      >
        {/* Mobile Backdrop: Optimized 3D Globe with Hollow Center for Text Legibility */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0 lg:hidden pointer-events-none flex items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,black_10%,transparent_55%,black_95%)] [-webkit-mask-image:linear-gradient(to_bottom,black_10%,transparent_55%,black_95%)]"
        >
          <div className="relative w-[900px] h-[900px] flex items-center justify-center opacity-75">
            {/* Optimized 3D Rotating Wireframe Globe (Reduced ring count for performance) */}
            <motion.div 
              className="absolute w-[80%] h-[80%] rounded-full"
              animate={{ rotateZ: [0, 360], rotateX: [10, 30, 10], rotateY: [-20, 20, -20] }}
              transition={{ 
                rotateZ: { duration: 60, ease: "linear", repeat: Infinity },
                rotateX: { duration: 30, ease: "easeInOut", repeat: Infinity },
                rotateY: { duration: 40, ease: "easeInOut", repeat: Infinity }
              }}
              style={{ perspective: 1200, transformStyle: "preserve-3d" }}
            >
              {/* Latitudes */}
              <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-400/60" style={{ transform: "rotateX(0deg)" }} />
              <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-400/60" style={{ transform: "rotateX(30deg)" }} />
              <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-400/60" style={{ transform: "rotateX(60deg)" }} />
              <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-400/60" style={{ transform: "rotateX(90deg)" }} />
              <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-400/60" style={{ transform: "rotateX(120deg)" }} />
              <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-400/60" style={{ transform: "rotateX(150deg)" }} />
              
              {/* Longitudes */}
              <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-400/60" style={{ transform: "rotateY(0deg)" }} />
              <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-400/60" style={{ transform: "rotateY(30deg)" }} />
              <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-400/60" style={{ transform: "rotateY(60deg)" }} />
              <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-400/60" style={{ transform: "rotateY(90deg)" }} />
              <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-400/60" style={{ transform: "rotateY(120deg)" }} />
              <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-400/60" style={{ transform: "rotateY(150deg)" }} />
            </motion.div>
          </div>
        </motion.div>

        <div className="max-w-[95%] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full mt-4 lg:mt-4">
          
          <div className="w-full lg:w-1/2 relative pointer-events-none z-20 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-3 lg:mb-6 pointer-events-auto"
            >
              {/* Desktop version (clean transparent pill) */}
              <div 
                className="hidden lg:inline-flex items-center gap-3 px-8 py-3 rounded-full bg-blue-600/5 backdrop-blur-md border border-blue-600/20 text-base font-semibold text-blue-800 shadow-[0_2px_10px_-4px_rgba(37,99,235,0.1)] relative overflow-hidden"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse relative z-10"></span>
                <span className="relative z-10 drop-shadow-sm">Pioneering Enterprise Solutions</span>
              </div>

              {/* Mobile version (clean elegant pre-header text tag) */}
              <div className="lg:hidden inline-flex items-center gap-2 px-2 py-1 text-[11px] font-bold text-blue-600/90 tracking-widest uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                Pioneering enterprise solutions
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-[2.75rem] leading-[1.05] md:text-7xl lg:text-[5rem] font-black font-[family-name:var(--font-inter)] mb-4 lg:mb-6 tracking-tighter drop-shadow-sm pointer-events-auto text-blue-950"
            >
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 inline-block pr-2 pb-2"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                style={{ backgroundSize: "200% auto" }}
              >
                Transforming
              </motion.span>
              <br className="hidden lg:block" />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 pb-2 inline-block pr-2"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                style={{ backgroundSize: "200% auto" }}
              >
                Digital Horizons
              </motion.span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-blue-950/70 mb-6 lg:mb-8 leading-[1.7] font-medium pointer-events-auto max-w-[95%] lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left"
              dangerouslySetInnerHTML={{ 
                __html: content.description
                  .replace('Alaska Digital Solutions', '<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-950 via-blue-700 to-blue-950 font-extrabold tracking-tight text-[17px] sm:text-xl md:text-2xl animate-bg-pan inline-block pr-1">Alaska Digital Solutions</span>')
                  .replace('tech-driven', '<span class="underline decoration-blue-400/60 decoration-2 sm:decoration-4 underline-offset-[3px] sm:underline-offset-4 font-bold text-blue-950">tech-driven</span>') 
                  .replace('IT and telecom services', '<span class="underline decoration-blue-400/60 decoration-2 sm:decoration-4 underline-offset-[3px] sm:underline-offset-4 font-bold text-blue-950">IT and telecom services</span>') 
              }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-6 lg:mt-8 pointer-events-auto w-full sm:w-auto max-w-[320px] lg:max-w-none mx-auto lg:mx-0 items-stretch sm:items-center justify-center lg:justify-start"
            >
              <Link href="/services" className="group px-8 py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-500 bg-[length:200%_auto] hover:bg-[position:right_center] text-white font-bold rounded-full hover:scale-105 transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.8)] text-[15px] lg:text-lg flex items-center justify-center gap-2 border border-white/20">
                Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
              <Link href="/contact" className="px-8 py-4 lg:px-10 lg:py-5 bg-white/40 backdrop-blur-md text-blue-950 font-bold border border-blue-200 rounded-full hover:bg-white/60 hover:scale-105 transition-all shadow-sm text-[15px] lg:text-lg flex items-center justify-center">
                Contact Sales
              </Link>
            </motion.div>
          </div>

          <div 
            style={{ perspective: 1200 }}
            className="hidden lg:flex w-full lg:w-[45%] aspect-[4/3] relative z-30 items-center justify-center mt-0"
          >
            {/* Ultra-Sophisticated 3D Wireframe Globe & Liquid Aura */}
            <div className="absolute inset-[-70%] z-[-1] opacity-100 pointer-events-none flex items-center justify-center">
              
              {/* Layer 1: True 3D Rotating Wireframe Globe */}
              <motion.div 
                className="absolute w-[80%] h-[80%] rounded-full"
                animate={{ rotateZ: [0, 360], rotateX: [10, 30, 10], rotateY: [-20, 20, -20] }}
                transition={{ 
                  rotateZ: { duration: 40, ease: "linear", repeat: Infinity },
                  rotateX: { duration: 20, ease: "easeInOut", repeat: Infinity },
                  rotateY: { duration: 30, ease: "easeInOut", repeat: Infinity }
                }}
                style={{ perspective: 1200, transformStyle: "preserve-3d" }}
              >
                {/* Latitudes */}
                <div className="absolute inset-0 rounded-full border-[0.5px] border-blue-500/50" style={{ transform: "rotateX(0deg)" }} />
                <div className="absolute inset-0 rounded-full border-[0.5px] border-blue-500/50" style={{ transform: "rotateX(30deg)" }} />
                <div className="absolute inset-0 rounded-full border-[0.5px] border-blue-500/50" style={{ transform: "rotateX(60deg)" }} />
                <div className="absolute inset-0 rounded-full border-[0.5px] border-blue-500/50" style={{ transform: "rotateX(90deg)" }} />
                <div className="absolute inset-0 rounded-full border-[0.5px] border-blue-500/50" style={{ transform: "rotateX(120deg)" }} />
                <div className="absolute inset-0 rounded-full border-[0.5px] border-blue-500/50" style={{ transform: "rotateX(150deg)" }} />
                
                {/* Longitudes */}
                <div className="absolute inset-0 rounded-full border-[0.5px] border-blue-500/50" style={{ transform: "rotateY(0deg)" }} />
                <div className="absolute inset-0 rounded-full border-[0.5px] border-blue-500/50" style={{ transform: "rotateY(30deg)" }} />
                <div className="absolute inset-0 rounded-full border-[0.5px] border-blue-500/50" style={{ transform: "rotateY(60deg)" }} />
                <div className="absolute inset-0 rounded-full border-[0.5px] border-blue-500/50" style={{ transform: "rotateY(90deg)" }} />
                <div className="absolute inset-0 rounded-full border-[0.5px] border-blue-500/50" style={{ transform: "rotateY(120deg)" }} />
                <div className="absolute inset-0 rounded-full border-[0.5px] border-blue-500/50" style={{ transform: "rotateY(150deg)" }} />
              </motion.div>

              {/* Layer 2: Ethereal Liquid Aura (Hidden on mobile to preserve text clarity) */}
              <motion.div 
                className="hidden lg:block absolute w-[70%] h-[70%] bg-blue-500/20 rounded-full mix-blend-multiply filter blur-[70px]"
                animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
              />
              <motion.div 
                className="hidden lg:block absolute w-[50%] h-[50%] bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-[70px]"
                animate={{ scale: [1.25, 1, 1.25], opacity: [0.8, 0.5, 0.8], x: [30, -30, 30], y: [-20, 20, -20] }}
                transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
              />
            </div>
            
            <div className="hidden lg:block w-full h-full relative z-10 group">
                
                {/* Outer Wrapper for Spinning Border Effect */}
                <div className="relative w-full h-full rounded-[2.5rem] bg-blue-100/30 z-10 shadow-[0_30px_80px_-20px_rgba(30,58,138,0.3)]">

                  {/* Sharp Clipped Border Line (Subtle) */}
                  <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden p-[4px] z-10">
                    <motion.div 
                      className="absolute top-1/2 left-1/2 w-[150%] h-[150%] origin-center pointer-events-none"
                      style={{
                        x: "-50%",
                        y: "-50%",
                        background: "conic-gradient(from 0deg, transparent 0%, transparent 40%, rgba(56, 189, 248, 1) 50%, rgba(59, 130, 246, 1) 60%, transparent 70%, transparent 100%)",
                      }}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                    />
                    
                    {/* Inner Carousel Container */}
                    <div className="w-full h-full rounded-[calc(2.5rem-4px)] overflow-hidden relative bg-white z-10">
                        <HeroCarousel />
                    </div>
                  </div>

                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stats Section */}
      <section className="py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedCounter from={0} to={10} suffix="+" label="Years Experience" />
            <AnimatedCounter from={0} to={200} suffix="+" label="Projects Delivered" />
            <AnimatedCounter from={0} to={98} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* Core Advantages Grid */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-black mb-4 sm:mb-6 text-blue-950 tracking-tight">Our Core Offerings</h2>
            <p className="text-blue-950/70 max-w-4xl mx-auto text-lg sm:text-xl font-medium">Equipping enterprises with cutting-edge IT, telecom, and consultative infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { 
                title: "Digital IT Solutions", 
                desc: (
                  <span>
                    We provide businesses with technology for success. Equip your firm to <span className="underline decoration-blue-400/60 decoration-4 underline-offset-4 font-bold text-blue-950">innovate, automate, and scale</span>.
                  </span>
                ),
                bullets: ["Small, medium, and large firms", "Cutting-edge digital integrations", "Optimized workflow efficiency"]
              },
              { 
                title: "Telecom Services", 
                desc: (
                  <span>
                    We offer <span className="underline decoration-blue-400/60 decoration-4 underline-offset-4 font-bold text-blue-950">reliable, cost-effective connectivity</span> solutions. Stay globally connected with our telecom networks.
                  </span>
                ),
                bullets: ["Faster than the industry average", "100% transparent agreements", "High-performance access networks"]
              },
              { 
                title: "Expert Consultation", 
                desc: (
                  <span>
                    Strategic guidance propels your business forward. Collaborate with our <span className="underline decoration-blue-400/60 decoration-4 underline-offset-4 font-bold text-blue-950">seasoned engineers</span> for growth today.
                  </span>
                ),
                bullets: ["Tailored network architectures", "Strategic risk mitigation", "Operational improvement plans"]
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-sm border border-blue-200/60 hover:shadow-md hover:bg-white/60 transition-all duration-300 flex flex-col justify-start relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <div className="h-auto md:h-[195px] lg:h-[175px] flex flex-col justify-start">
                    <h3 className="text-2xl sm:text-3xl font-black text-blue-950 mb-3 sm:mb-4 tracking-tight">{feature.title}</h3>
                    <p className="text-blue-950/70 font-medium leading-relaxed text-base sm:text-lg">{feature.desc}</p>
                  </div>
                </div>
                <ul className="space-y-3 sm:space-y-4 border-t border-blue-100/50 pt-5 sm:pt-6 relative z-10">
                  {feature.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 sm:gap-3.5 text-sm sm:text-base font-bold text-blue-950/80">
                      <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 text-white mt-0.5 shadow-sm border border-blue-500">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3.5]" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bento Box Layout */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-950 tracking-tight">Cutting-edge solutions</h2>
            <p className="text-blue-950/70 max-w-4xl mx-auto text-xl font-medium">Discover our primary service domains designed for enterprise success.</p>
          </div>
          
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto] md:auto-rows-[380px]">
            {/* Box 1: Technology Infrastructure (Glass UI) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 bg-white/40 backdrop-blur-xl border border-blue-200/60 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden group shadow-sm hover:shadow-md hover:bg-white/60 transition-all duration-300"
            >
              {/* Grid pattern backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-60"></div>
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="relative z-10 flex flex-col justify-between h-full w-full md:w-1/2">
                <div>
                  <div className="bg-blue-500/10 text-blue-600 border border-blue-500/20 px-3.5 py-1.5 rounded-full font-bold tracking-widest text-[11px] uppercase mb-6 w-fit shadow-[inset_0_0_12px_rgba(59,130,246,0.1)]">
                    Infrastructure
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">Technology Infrastructure</h3>
                  <p className="text-blue-950/70 font-medium text-base sm:text-lg leading-relaxed">
                    Enterprise server systems, secure cloud architecture, and database environments built for absolute uptime.
                  </p>
                </div>
                <Link href="/services/technology-infrastructure" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-base mt-6 transition-all group/link w-fit">
                  Configure Systems <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Server chassis widget */}
              <div className="relative w-full md:w-1/2 max-w-[280px] bg-white/60 border border-blue-200/50 p-5 rounded-2xl flex flex-col gap-3.5 shadow-sm z-10">
                <div className="flex items-center justify-between border-b border-blue-100 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                    <span className="text-[10px] text-blue-950/60 uppercase tracking-widest font-black">Node-01 Active</span>
                  </div>
                  <span className="text-[9px] font-mono text-blue-600 bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded">99.98% uptime</span>
                </div>
                <div className="flex flex-col gap-3">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="flex flex-col gap-1.5 bg-white/85 p-2.5 rounded-lg border border-blue-100/80">
                      <div className="flex justify-between items-center text-[9px] font-mono text-blue-950/50">
                        <span>CPU-Slot {index + 1}</span>
                        <span>{index === 0 ? "42%" : index === 1 ? "18%" : "77%"}</span>
                      </div>
                      <div className="h-1 bg-blue-50 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: index === 0 ? "42%" : index === 1 ? "18%" : "77%" }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Box 2: Telecom Solutions (Glass UI) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 bg-white/40 backdrop-blur-xl border border-blue-200/60 rounded-[2.5rem] p-8 flex flex-col justify-between group overflow-hidden relative shadow-sm hover:shadow-md hover:bg-white/60 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl -mr-10 -mt-10 rounded-full"></div>
              
              {/* Visual Frequency Wave widget */}
              <div className="relative h-24 flex items-center justify-center bg-blue-500/5 rounded-2xl border border-blue-500/10 overflow-hidden mb-6">
                <svg className="w-full h-full opacity-80" viewBox="0 0 200 100" preserveAspectRatio="none">
                  {/* Outer frequency waves */}
                  <motion.path 
                    d="M0,50 Q25,20 50,50 T100,50 T150,50 T200,50" 
                    fill="none" 
                    stroke="#2563eb" 
                    strokeWidth="1.5"
                    animate={{ strokeDashoffset: [0, -200] }}
                    transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                    strokeDasharray="8 8"
                  />
                  <motion.path 
                    d="M0,50 Q25,75 50,50 T100,50 T150,50 T200,50" 
                    fill="none" 
                    stroke="#6366f1" 
                    strokeWidth="1"
                    animate={{ strokeDashoffset: [200, 0] }}
                    transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                    strokeDasharray="4 6"
                  />
                </svg>
                <div className="absolute flex items-center gap-1.5 bg-blue-50/80 backdrop-blur-sm border border-blue-100 px-2.5 py-1 rounded-full shadow-sm text-[9px] font-bold text-blue-600 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
                  Uptime 99.9%
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold mb-3 text-blue-950">Telecom Networks</h3>
                <p className="text-blue-950/70 font-semibold text-[15px] leading-relaxed">
                  Next-generation VoIP communications and robust fiber architectures.
                </p>
              </div>
              <Link href="/services/telecom-services" className="relative z-10 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-base mt-6 transition-all group/link w-fit">
                Explore Telecom <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Box 3: Security & Audits (Glass UI) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 bg-white/40 backdrop-blur-xl border border-blue-200/60 rounded-[2.5rem] p-8 flex flex-col justify-between group overflow-hidden relative shadow-sm hover:shadow-md hover:bg-white/60 transition-all duration-300"
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500/10 blur-2xl -mr-10 -mb-10 rounded-full"></div>
              
                {/* Audio Wave widget for Call Center */}
              <div className="relative h-24 flex items-center justify-center bg-indigo-500/5 rounded-2xl border border-indigo-500/10 overflow-hidden mb-6">
                <svg className="w-full h-full opacity-70" viewBox="0 0 200 100" preserveAspectRatio="none">
                  {/* Audio Wave Pattern */}
                  <motion.path 
                    d="M10,50 Q20,30 30,50 T50,50 T70,50 T90,50 T110,50 T130,50 T150,50 T170,50 T190,50" 
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="2"
                    animate={{ 
                      d: [
                        "M10,50 Q20,20 30,50 T50,30 T70,50 T90,10 T110,50 T130,40 T150,50 T170,20 T190,50",
                        "M10,50 Q20,40 30,50 T50,10 T70,50 T90,30 T110,50 T130,20 T150,50 T170,40 T190,50",
                        "M10,50 Q20,20 30,50 T50,30 T70,50 T90,10 T110,50 T130,40 T150,50 T170,20 T190,50"
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>

                {/* Centered status badge */}
                <div className="absolute z-20 flex items-center gap-1.5 bg-emerald-50/90 backdrop-blur-sm border border-emerald-100 px-2.5 py-1 rounded-full shadow-sm text-[9px] font-bold text-emerald-600 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Agents Active
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold mb-3 text-blue-950">Call Center Services</h3>
                <p className="text-blue-950/70 font-semibold text-[15px] leading-relaxed">
                  24/7 inbound customer support, technical helpdesks, and enterprise telemarketing solutions.
                </p>
              </div>
              <Link href="/services/call-center" className="relative z-10 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-bold text-base mt-6 transition-all group/link w-fit">
                Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            {/* Box 4: Strategy & Consulting (Glass UI) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-8 bg-white/40 backdrop-blur-xl border border-blue-200/60 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden group shadow-sm hover:shadow-md hover:bg-white/60 transition-all duration-300"
            >
              {/* Grid pattern backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="relative z-10 flex flex-col justify-between h-full w-full md:w-1/2">
                <div>
                  <div className="bg-indigo-500/10 text-indigo-600 border border-indigo-500/20 px-3.5 py-1.5 rounded-full font-bold tracking-widest text-[11px] uppercase mb-6 w-fit shadow-[inset_0_0_12px_rgba(129,140,248,0.1)]">
                    Advisory
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">Consulting</h3>
                  <p className="text-blue-950/70 font-medium text-base sm:text-lg leading-relaxed">
                    Partner with our veteran IT consultants to align your technology deployments with your corporate growth targets and optimize performance.
                  </p>
                </div>
                <Link href="/services/consulting" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-bold text-base mt-6 transition-all group/link w-fit">
                  Consult Experts <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Chart widget */}
              <div className="relative w-full md:w-1/2 max-w-[280px] bg-white/60 border border-blue-200/50 p-5 rounded-2xl flex flex-col justify-between shadow-sm z-10 h-[210px]">
                <span className="text-[10px] text-blue-950/60 uppercase tracking-widest font-black mb-2 block">Growth Projection</span>
                <div className="relative w-full h-[120px] flex items-end">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-10">
                    <div className="w-full border-t border-blue-900"></div>
                    <div className="w-full border-t border-blue-900"></div>
                    <div className="w-full border-t border-blue-900"></div>
                  </div>
                  
                  {/* SVG chart line */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                    <motion.path 
                      d="M0,45 Q20,38 40,25 T80,10 T100,5" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="2.5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </svg>
                  
                  {/* Animated points */}
                  <div className="absolute bottom-1/2 left-1/3 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] border border-white flex items-center justify-center">
                    <span className="absolute -top-6 text-[8px] bg-white border border-blue-100 px-1 py-0.5 rounded text-blue-950 font-mono font-bold">+35%</span>
                  </div>
                  <div className="absolute bottom-3/4 right-0 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] border border-white flex items-center justify-center">
                    <span className="absolute -top-6 text-[8px] bg-white border border-blue-100 px-1 py-0.5 rounded text-blue-950 font-mono font-bold">+90%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 text-center flex justify-center">
            <motion.div 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, ease: "linear", repeat: Infinity }}
              style={{ 
                backgroundSize: "200% 200%",
                backgroundImage: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #93c5fd 100%)"
              }}
              className="rounded-full shadow-lg hover:shadow-blue-400/25 hover:scale-105 transition-all duration-300 border border-white/30 overflow-hidden"
            >
              <Link href="/services" className="inline-flex items-center gap-3 px-10 py-5 text-white font-bold text-lg cursor-pointer">
                Explore Enterprise Solutions <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-950 tracking-tight">Client Success Stories</h2>
            <p className="text-blue-950/70 max-w-4xl mx-auto text-xl font-medium">What our enterprise partners say about our services and delivery.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
            {[
              {
                portrait: "/images/portrait_sarah.jpg",
                author: "Sarah Jenkins",
                title: "Chief Technology Officer",
                headline: "Alaska is a wonderful provider of IT and telecom services.",
                quote: (
                  <span>
                    We are thrilled with Alaska's IT, telecom, cloud, and security services. Their expert team delivered <span className="underline decoration-blue-400/60 decoration-4 underline-offset-4 font-bold text-blue-950">exceptional results</span> while staying quick, polite, and professional.
                  </span>
                )
              },
              {
                portrait: "/images/portrait_david.jpg",
                author: "David Miller",
                title: "Director of IT",
                headline: "We are very happy with the services provided by Alaska.",
                quote: (
                  <span>
                    We are pleased with Alaska's call centre setup, technology infrastructure, electrical planning, and networking solutions. They delivered impressive results that <span className="underline decoration-blue-400/60 decoration-4 underline-offset-4 font-bold text-blue-950">exceeded our expectations</span> across all operations.
                  </span>
                )
              }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-gradient-to-br from-white/90 via-stone-50/90 to-blue-50/70 backdrop-blur-xl pt-24 pb-10 px-10 flex flex-col justify-between rounded-[2.5rem] shadow-md border border-amber-900/5 relative group hover:shadow-lg transition-all duration-500 mt-20"
              >
                {/* Portrait Circle Top Center Sticking Out */}
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-stone-50 bg-slate-200 z-20 group-hover:scale-105 transition-transform duration-500">
                  <Image src={testimonial.portrait} alt={testimonial.author} fill className="object-cover" />
                </div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Decorative Quote Mark */}
                    <span className="text-blue-200 text-[6rem] font-serif leading-none block -mb-10">"</span>
                    
                    <h3 className="text-[1.6rem] font-bold text-blue-950 mb-4 leading-[1.25] tracking-[-0.02em]">
                      {testimonial.headline}
                    </h3>
                    
                    <p className="text-blue-950/70 font-medium leading-relaxed text-[17px] md:text-[18px] mb-8">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Clean Bottom Label */}
                  <div className="border-t border-gray-100 pt-4 flex flex-col">
                    <span className="font-extrabold text-blue-950 text-base tracking-tight">{testimonial.author}</span>
                    <span className="text-blue-600/80 font-bold text-xs tracking-wider mt-0.5">{testimonial.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-white/10 to-white/20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-950 tracking-tight">Common Questions</h2>
            <p className="text-xl text-blue-950/70 font-medium">Everything you need to know about our services.</p>
          </div>
          
          <div className="space-y-3">
            {content.faq.map((faq, index) => (
              <FAQAccordion key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
