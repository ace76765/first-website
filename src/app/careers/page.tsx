"use client";

import { content } from "@/data/content";
import { motion } from "framer-motion";
import { Briefcase, Mail } from "lucide-react";

export default function Careers() {
  return (
    <div className="min-h-screen text-indigo-950 pb-24">
      {/* Simple, Elegant Hero Section — matching About Us */}
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-indigo-950 mb-6 tracking-tight drop-shadow-sm"
          >
            Join Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-indigo-900/70 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Our aim is to create a culture of freedom where individuals can grasp the initiative, capitalize on opportunities and make change happen.
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-32 h-1.5 bg-blue-600 mx-auto mt-12 rounded-full"
          ></motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">

        <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 sm:mb-10 text-indigo-950 flex items-center justify-center gap-3 sm:gap-4 drop-shadow-sm">
          <div className="bg-white/50 border border-white/60 text-accent-violet p-2 sm:p-3 rounded-2xl shadow-sm">
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          Current Openings
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {content.careers.openings.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-[2rem] p-6 sm:p-8 transition-all group flex flex-col relative overflow-hidden"
            >
              <h3 className="text-xl sm:text-3xl font-bold text-indigo-950 mb-2 sm:mb-3 relative z-10">{job.title}</h3>
              <p className="text-indigo-950/60 font-medium text-xs sm:text-[15px] leading-relaxed mb-4 sm:mb-6 relative z-10">
                {job.description}
              </p>
              <div className="mt-auto relative z-10">
                <span className="text-accent-violet font-bold bg-white/60 border border-white/60 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm shadow-sm inline-block">
                  Experience: {job.experience}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel !bg-indigo-950/80 !border-white/10 rounded-[2.5rem] p-6 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-sky/30 blur-3xl -mr-20 -mt-20 rounded-full"></div>
          
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 relative z-10">Ready to Apply?</h3>
          <p className="text-indigo-200 mb-6 sm:mb-8 text-base sm:text-xl max-w-2xl mx-auto relative z-10">
            If you want to be a part of Alaska Digital Solutions, send your resume to our HR team.
          </p>
          <a href={`mailto:${content.careers.contactEmail}`} className="relative z-10 inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-accent-violet to-accent-sky text-white font-bold px-6 sm:px-10 py-4 sm:py-5 rounded-full transition-all shadow-lg hover:shadow-accent-violet/30 hover:-translate-y-1 hover:scale-105 text-sm sm:text-lg border border-white/20 max-w-full">
            <Mail className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" />
            <span className="truncate">{content.careers.contactEmail}</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
