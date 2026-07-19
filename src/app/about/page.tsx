"use client";

import { content } from "@/data/content";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen text-indigo-950 pb-16 sm:pb-32">
      
      {/* Simple, Elegant Hero Section */}
      <div className="relative pt-24 sm:pt-32 pb-10 sm:pb-12 px-6 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-indigo-950 mb-4 sm:mb-6 tracking-tight drop-shadow-sm"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-indigo-900/70 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            A Total Solution Provider offering integrated turnkey solutions and cutting-edge IT-enabled services.
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-32 h-1.5 bg-blue-600 mx-auto mt-8 sm:mt-12 rounded-full"
          ></motion.div>
        </div>
      </div>
 
      <div className="max-w-5xl mx-auto px-6 mt-12 sm:mt-20 space-y-10 sm:space-y-16">
        
        {/* Our Story, Mission & Vision */}
        <section className="space-y-10 sm:space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50/30 via-stone-50/70 to-blue-50/30 backdrop-blur-xl rounded-[2.5rem] shadow-xl p-6 sm:p-10 md:p-16 border border-amber-900/5"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-indigo-950 mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-indigo-950/5 tracking-tight">Our Story</h2>
            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-indigo-950/80 font-medium space-y-6 sm:space-y-8">
              <p>
                <motion.span 
                  className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-950 via-blue-600 to-blue-950 inline-block tracking-tight mr-1"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  Alaska Digital Solutions
                </motion.span>{" "}
                is a Total Solution Provider offering <span className="underline decoration-blue-400/60 decoration-4 underline-offset-4 font-bold text-blue-950">integrated turnkey solutions</span> and cutting-edge IT-enabled services. 
              </p>
              <p>
                Established with a vision to revolutionize the digital landscape, we seamlessly integrate technology into <span className="underline decoration-blue-400/60 decoration-4 underline-offset-4 font-bold text-blue-950">complex business environments</span>. 
              </p>
              <p>
                By deeply understanding our clients' requirements, we design, deploy, and manage tailored solutions that empower organizations to achieve unparalleled operational efficiency, sustainable growth, and a <span className="underline decoration-blue-400/60 decoration-4 underline-offset-4 font-bold text-blue-950">definitive competitive edge</span>.
              </p>
            </div>
          </motion.div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50/30 via-stone-50/70 to-blue-50/30 backdrop-blur-xl rounded-[2.5rem] shadow-xl p-6 sm:p-10 border border-amber-900/5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-indigo-950 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-indigo-950/5 tracking-tight">Our Mission</h3>
                <p className="text-base sm:text-lg text-indigo-950/80 font-medium leading-relaxed">
                  To seamlessly integrate cutting-edge technology into complex business environments, empowering our clients to achieve <span className="underline decoration-blue-400/60 decoration-4 underline-offset-4 font-bold text-blue-950">unparalleled operational efficiency</span> and sustainable growth.
                </p>
              </div>
            </motion.div>
 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50/30 via-stone-50/70 to-blue-50/30 backdrop-blur-xl rounded-[2.5rem] shadow-xl p-6 sm:p-10 border border-amber-900/5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-indigo-950 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-indigo-950/5 tracking-tight">Our Vision</h3>
                <p className="text-base sm:text-lg text-indigo-950/80 font-medium leading-relaxed">
                  To be the globally recognized pioneer in digital connections, leading the evolution of <span className="underline decoration-blue-400/60 decoration-4 underline-offset-4 font-bold text-blue-950">IT and telecom services</span> for tomorrow's interconnected world.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
 
        {/* Leadership */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50/30 via-stone-50/70 to-blue-50/30 backdrop-blur-xl rounded-[2.5rem] shadow-xl p-6 sm:p-10 md:p-16 border border-amber-900/5"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-indigo-950 mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-indigo-50 tracking-tight">Leadership</h2>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              
              <div className="w-full">
                <h3 className="text-2xl sm:text-3xl font-black text-indigo-950 mb-1 sm:mb-2">{content.company.leadership.name}</h3>
                <p className="text-blue-600 font-extrabold mb-6 sm:mb-8 text-sm sm:text-base uppercase tracking-widest">{content.company.leadership.role}</p>
                <div className="text-base sm:text-lg md:text-xl leading-relaxed text-indigo-950/80 font-medium space-y-4 sm:space-y-6">
                  <p>
                    {content.company.leadership.name} serves as the Managing Director of Alaska Digital Solutions Pvt. Ltd. since January 19, 2015. He holds a Bachelor's degree in Mechanical Engineering from Nagpur University and a Master's degree in Business Administration.
                  </p>
                  <p>
                    With <span className="underline decoration-blue-400/60 decoration-4 underline-offset-4 font-bold text-blue-950">22+ Years of IT Industry Experience</span>, Mr. Srivastav held key positions at SIFY Technologies, where he oversaw all SMB products for the UP West region prior to joining Alaska.
                  </p>
                  <p>
                    He also contributed significantly at Software Technology Parks of India (STPI), playing a crucial role in telemedicine projects with SGPGI Lucknow and Biotech Parks.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
 
      </div>
    </div>
  );
}
