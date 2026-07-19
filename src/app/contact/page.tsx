"use client";

import { content } from "@/data/content";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, PhoneForwarded } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen text-indigo-950 pb-24">
      {/* Photographic Glass Header */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="relative rounded-[2.5rem] overflow-hidden glass-panel p-2 shadow-2xl">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden">
            <Image 
              src="/first-website/images/contact_hero.jpg" 
              alt="Network Connections" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-indigo-950/70 backdrop-blur-sm"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white drop-shadow-md"
              >
                Get in <span className="text-accent-violet">Touch</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto font-medium"
              >
                We have a proven track record in IT and business support services.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-16 flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Contact Card */}
          <div className="glass-panel glass-panel-hover rounded-[2rem] p-10 group transition-all">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-white/50 border border-white/60 text-accent-violet rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-accent-violet group-hover:to-accent-sky group-hover:text-white group-hover:border-transparent transition-all shadow-sm">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-indigo-950">Email Us</h3>
                <p className="text-indigo-950/70 font-medium">We usually reply within 24 hours</p>
              </div>
            </div>
            <a href={`mailto:${content.contact.email}`} className="text-2xl font-bold text-accent-violet hover:text-accent-sky break-all drop-shadow-sm">
              {content.contact.email}
            </a>
          </div>

          {/* Location Card */}
          <div className="glass-panel glass-panel-hover rounded-[2rem] p-10 group transition-all">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-white/50 border border-white/60 text-accent-sky rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-accent-sky group-hover:to-accent-violet group-hover:text-white group-hover:border-transparent transition-all shadow-sm">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-indigo-950">Headquarters</h3>
              </div>
            </div>
            <p className="text-indigo-950/80 leading-relaxed text-xl font-medium">
              {content.contact.address}
            </p>
          </div>

          {/* Presence Card */}
          <div className="glass-panel rounded-[2rem] p-10">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-white/50 border border-white/60 text-indigo-900 rounded-2xl flex items-center justify-center shadow-sm">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-indigo-950">Our Presence</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {content.contact.locations.map((loc, i) => (
                <span key={i} className="px-6 py-3 bg-white/60 border border-white/60 rounded-xl font-bold text-indigo-900 shadow-sm backdrop-blur-md">
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
