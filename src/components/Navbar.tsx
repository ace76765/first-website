"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { content } from "@/data/content";

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpenedOnPath, setMenuOpenedOnPath] = useState(pathname);

  // Close dropdowns on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Keep track of which page the menu was opened on to avoid animation layout shifts
  useEffect(() => {
    if (mobileMenuOpen) {
      setMenuOpenedOnPath(pathname);
    }
  }, [mobileMenuOpen]);

  // Removed scroll lock for dropdown menu

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
      setMobileMenuOpen(false);
    }
  };

  const handleMobileLinkClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
    }
    setMobileMenuOpen(false);
  };

  const closeDropdown = () => setDropdownOpen(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > 50; // 50px threshold
    if (isUpSwipe) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-[2.5%] right-[2.5%] md:left-1/2 md:-translate-x-1/2 md:w-[95%] max-w-6xl z-50 rounded-full transition-all duration-300 group">
        {/* Floating Bar Backdrop */}
        <div 
          className="absolute inset-0 bg-white/60 shadow-[0_20px_40px_-10px_rgba(31,38,135,0.2),inset_0_0_0_1px_rgba(255,255,255,0.6)] rounded-full -z-10 transition-all duration-300 group-hover:bg-white/70"
          style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
        />
        <div className="px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          
          {/* Logo & Company Name */}
          <Link href="/" onClick={handleHomeClick} className="flex items-center gap-2 md:gap-3 group shrink min-w-0 max-w-[85%]">
            <Image 
              src="/icons/logo4.webp" 
              alt="Alaska Digital Logo" 
              width={56}
              height={56}
              className="w-9 h-9 md:w-14 md:h-14 object-contain shrink-0 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" 
            />
            <div className="flex flex-col leading-[1] min-w-0">
              <span className="font-outfit font-black text-lg md:text-2xl tracking-tighter text-slate-700 truncate">ALASKA</span>
              <span className="text-[7px] md:text-[9px] font-bold text-slate-500 tracking-[0.05em] uppercase mt-0 md:mt-0.5 truncate">DIGITAL SOLUTIONS PVT. LTD.</span>
            </div>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-lg font-black font-nunito text-blue-950">
            {pathname !== "/" && (
              <Link href="/" onClick={handleHomeClick} className="hover:text-blue-600 hover:-translate-y-1 transition-all">Home</Link>
            )}
            <Link href="/about" className="hover:text-blue-600 hover:-translate-y-1 transition-all">About</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative h-20 flex items-center"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link href="/services" className="hover:text-blue-600 hover:-translate-y-1 transition-all flex items-center gap-1">
                Services
                <svg className={`w-5 h-5 text-blue-950/50 transition-all duration-500 ${dropdownOpen ? 'text-blue-600 -rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              <div 
                className={`absolute top-20 left-1/2 -translate-x-1/2 w-80 transition-all duration-300 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}
                style={{ borderTop: '16px solid transparent' }}
              >
                <div 
                  className="bg-white/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5),0_8px_32px_0_rgba(31,38,135,0.15)] rounded-3xl p-3 flex flex-col gap-1"
                  style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
                >
                  {content.services.map((service, index) => (
                    <div key={service.id}>
                      <Link href={`/services/${service.id}`} onClick={closeDropdown} className="relative z-10 px-4 py-3 rounded-2xl hover:bg-black/5 text-blue-950 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center">
                        <span className="block font-semibold text-sm text-center leading-snug">{service.title}</span>
                      </Link>
                      {index < content.services.length - 1 && (
                        <div className="w-1/3 mx-auto border-t border-blue-900/10"></div>
                      )}
                    </div>
                  ))}
                  
                  <div className="w-1/3 mx-auto border-t border-blue-900/10 mt-1 mb-1"></div>
                  <Link href="/services" onClick={closeDropdown} className="relative z-10 px-4 py-3 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-600 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group/link">
                    <span className="block font-bold text-sm text-center">View All Services</span>
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/careers" className="hover:text-blue-600 hover:-translate-y-1 transition-all">Careers</Link>
            
            <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(59,130,246,0.3)] border border-white/20 text-white rounded-full hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all hover:scale-105 text-lg">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 relative focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-blue-950 rounded-full origin-center"
            />
            <motion.span 
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-blue-950 rounded-full"
            />
            <motion.span 
              animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-blue-950 rounded-full origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Click-away backdrop overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-transparent lg:hidden z-30"
            onClick={() => setMobileMenuOpen(false)}
            onTouchStart={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[88px] left-[4%] right-[4%] z-40 bg-white/60 shadow-[0_20px_40px_-10px_rgba(31,38,135,0.2),inset_0_0_0_1px_rgba(255,255,255,0.6)] lg:hidden flex flex-col p-6 rounded-3xl max-h-[75vh] overflow-y-auto"
            style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
          >
            <div className="flex flex-col gap-3 font-outfit">
              {menuOpenedOnPath !== "/" && (
                <Link href="/" onClick={handleHomeClick} className="border-b border-slate-900/10 pb-2.5 text-lg font-semibold text-blue-950 hover:text-blue-600 transition-colors">Home</Link>
              )}
              <Link href="/about" onClick={handleMobileLinkClick("/about")} className="border-b border-slate-900/10 pb-2.5 text-lg font-semibold text-blue-950 hover:text-blue-600 transition-colors">About</Link>
              
              <div className="flex flex-col gap-1 border-b border-slate-900/10 pb-2.5">
                <Link href="/services" onClick={handleMobileLinkClick("/services")} className="group flex items-center justify-between text-blue-950/50 hover:text-blue-600 transition-colors uppercase tracking-widest text-[10px] font-bold py-0.5">
                  Our Services
                  <div className="w-5 h-5 rounded-full bg-slate-900/5 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-all">
                    <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
                <div className="flex flex-col gap-1.5 mt-1 pl-2">
                  {content.services.map((service) => (
                    <Link key={service.id} href={`/services/${service.id}`} onClick={handleMobileLinkClick(`/services/${service.id}`)} className="text-[15px] font-medium text-slate-700 hover:text-blue-600 transition-colors py-0.5">
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link href="/careers" onClick={handleMobileLinkClick("/careers")} className="border-b border-slate-900/10 pb-2.5 text-lg font-semibold text-blue-950 hover:text-blue-600 transition-colors">Careers</Link>
              
              <Link href="/contact" onClick={handleMobileLinkClick("/contact")} className="mt-2 block w-full py-3.5 text-center bg-gradient-to-r from-sky-400 to-blue-500 text-white font-bold text-[15px] rounded-full shadow-[0_4px_12px_rgba(56,189,248,0.25)] active:scale-95 transition-all">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
