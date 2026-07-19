"use client";

import { content } from "@/data/content";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, PhoneForwarded } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen text-indigo-950 pb-24">
      {/* Simple, Elegant Hero Section — matching About Us & Services */}
      <div className="relative pt-24 sm:pt-32 pb-10 sm:pb-12 px-6 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-indigo-950 mb-4 sm:mb-6 tracking-tight drop-shadow-sm"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-indigo-900/70 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            We have a proven track record in IT and business support services.
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-32 h-1.5 bg-blue-600 mx-auto mt-8 sm:mt-12 rounded-full"
          ></motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-8 sm:mt-16 flex flex-col gap-8 sm:gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Contact Card */}
          <div className="glass-panel glass-panel-hover rounded-[2rem] p-6 sm:p-10 group transition-all">
            <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/50 border border-white/60 text-accent-violet rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-accent-violet group-hover:to-accent-sky group-hover:text-white group-hover:border-transparent transition-all shadow-sm shrink-0">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-3xl font-extrabold text-indigo-950">Email Us</h3>
                <p className="text-xs sm:text-base text-indigo-950/70 font-medium">We usually reply within 24 hours</p>
              </div>
            </div>
            <a href={`mailto:${content.contact.email}`} className="text-lg sm:text-2xl font-bold text-accent-violet hover:text-accent-sky break-all drop-shadow-sm">
              {content.contact.email}
            </a>
          </div>
 
          {/* Location Card */}
          <div className="glass-panel glass-panel-hover rounded-[2rem] p-6 sm:p-10 group transition-all">
            <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/50 border border-white/60 text-accent-sky rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-accent-sky group-hover:to-accent-violet group-hover:text-white group-hover:border-transparent transition-all shadow-sm shrink-0">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-3xl font-extrabold text-indigo-950">Headquarters</h3>
              </div>
            </div>
            <p className="text-indigo-950/80 leading-relaxed text-base sm:text-xl font-medium">
              {content.contact.address}
            </p>
          </div>
 
          {/* Presence Card */}
          <div className="glass-panel glass-panel-hover rounded-[2rem] p-6 sm:p-10 group transition-all">
            <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/50 border border-white/60 text-accent-violet rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-accent-violet group-hover:to-accent-sky group-hover:text-white group-hover:border-transparent transition-all shadow-sm shrink-0">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-indigo-950">Our Presence</h3>
            </div>
            <div className="flex flex-wrap gap-2.5 sm:gap-4">
              {content.contact.locations.map((loc, i) => (
                <span key={i} className="px-4 sm:px-6 py-2 sm:py-3 bg-white/60 border border-white/60 rounded-xl font-bold text-xs sm:text-sm text-indigo-900 shadow-sm backdrop-blur-md">
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
