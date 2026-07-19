"use client";

import { content } from "@/data/content";
import { motion } from "framer-motion";
import { CheckCircle2, Server, Phone, ShieldCheck, Database, FileText, ArrowRight, Zap, Globe2 } from "lucide-react";
import Link from "next/link";

const serviceIcons: Record<string, React.ReactNode> = {
  "call-center": <Phone className="w-8 h-8" />,
  "consulting": <Globe2 className="w-8 h-8" />,
  "technology-infrastructure": <Server className="w-8 h-8" />,
  "electrical-network-audits": <ShieldCheck className="w-8 h-8" />,
  "telecom-services": <Database className="w-8 h-8" />,
  "value-added-services": <Zap className="w-8 h-8" />,
  "scanning-digitization": <FileText className="w-8 h-8" />,
};

const serviceColors: Record<string, string> = {
  "call-center": "from-rose-500 to-pink-400",
  "consulting": "from-emerald-500 to-teal-400",
  "technology-infrastructure": "from-violet-500 to-fuchsia-400",
  "electrical-network-audits": "from-blue-500 to-sky-400",
  "telecom-services": "from-indigo-500 to-purple-400",
  "value-added-services": "from-amber-500 to-yellow-400",
  "scanning-digitization": "from-orange-500 to-amber-400",
};

export default function Services() {
  return (
    <div className="min-h-screen text-indigo-950 pb-32">
      {/* Simple, Elegant Hero Section — matching About Us */}
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-indigo-950 mb-6 tracking-tight drop-shadow-sm"
          >
            Our <span className="text-blue-600">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-indigo-900/70 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            End-to-end IT solutions driving the future of connectivity, infrastructure, and business operations.
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-32 h-1.5 bg-blue-600 mx-auto mt-12 rounded-full"
          ></motion.div>
        </div>
      </div>      <div className="max-w-7xl mx-auto px-6 mt-12 sm:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-10">
          {content.services.map((service, index) => {
            const isLarge = index === 0; // Make the first item take full width on large screens? Actually let's just make it a masonry-like grid
            
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative ${index === 6 ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                <div className="relative bg-gradient-to-br from-white/70 via-white/40 to-blue-50/20 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/60 flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:border-blue-500/30 hover:from-white/90 hover:to-blue-50/40">
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center bg-blue-50 border border-blue-100 text-blue-600 shadow-sm shrink-0">
                        {serviceIcons[service.id] || <Zap className="w-8 h-8 sm:w-10 sm:h-10" />}
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight leading-tight">{service.title}</h2>
                    </div>
                    
                    <p 
                      className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-8 sm:mb-10 flex-grow"
                      dangerouslySetInnerHTML={{ __html: service.description }}
                    />
                    
                    <div className="flex flex-col gap-3 sm:gap-3.5 mb-8 sm:mb-10">
                      {service.features?.flatMap(f => f.items).slice(0, 4).map((sub, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-[15px] font-semibold text-slate-700 leading-normal">{sub}</span>
                        </div>
                      ))}
                    </div>
 
                    <Link 
                      href={`/services/${service.id}`}
                      className="mt-auto relative inline-flex items-center justify-center gap-2 w-full py-4 text-blue-900 hover:text-white rounded-2xl font-bold transition-colors duration-350 group/btn border border-blue-100/50 hover:border-blue-600 shadow-sm overflow-hidden"
                    >
                      {/* Default light gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/60 to-indigo-50/60 transition-opacity duration-350 group-hover/btn:opacity-0" />
                      {/* Hover dark gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-350 group-hover/btn:opacity-100" />
                      
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Explore Service 
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16 sm:mt-24">
        <div className="bg-gradient-to-br from-indigo-950 to-blue-900 rounded-[3rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('/images/cubes.png')] opacity-10"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-2000"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">Need a Custom Solution?</h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8 sm:mb-10 font-medium">
              We specialize in tailoring enterprise-grade architectures that fit your unique requirements perfectly.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-indigo-950 rounded-full font-black text-base sm:text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Talk to our Experts <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
