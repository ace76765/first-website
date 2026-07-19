import type { Metadata } from "next";
import { Inter, Outfit, Nunito } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { content } from "@/data/content";
import InteractiveBackground from "@/components/InteractiveBackground";
import Navbar from "@/components/Navbar";
import ScrollManager from "@/components/ScrollManager";
import CtaStrip from "@/components/CtaStrip";
import Image from "next/image";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: content.companyName,
  description: content.tagline,
};

import { Mail, MapPin, ArrowRight } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-white/20 backdrop-blur-[40px] text-blue-950 pt-0 mt-auto border-t border-white/40 relative z-10">
      {/* Massive CTA Strip - Rendered conditionally */}
      <CtaStrip />

      <div className="max-w-7xl mx-auto px-6 py-6 md:py-20 grid grid-cols-2 md:grid-cols-12 gap-5 md:gap-12">
        <div className="col-span-2 md:col-span-4">
          <Link href="/" className="flex items-center gap-2 md:gap-3 mb-2 md:mb-6 group">
            <Image src="/icons/logo4.webp" alt="Alaska Digital Logo" width={64} height={64} className="w-10 h-10 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" />
            <div className="flex flex-col leading-none">
              <span className="font-outfit font-black text-xl md:text-3xl tracking-tighter text-slate-700">ALASKA</span>
              <span className="text-[8px] md:text-[10px] font-bold text-slate-500 tracking-[0.05em] uppercase mt-0.5 md:mt-1.5 drop-shadow-sm">DIGITAL SOLUTIONS PVT. LTD.</span>
            </div>
          </Link>
          <p className="max-w-xs text-sm md:text-[15px] leading-relaxed text-blue-950/80 font-bold mt-2 md:mt-4">{content.tagline}</p>
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-blue-950 font-black mb-2 md:mb-6 text-base md:text-xl tracking-wide">Company</h4>
          <div className="flex flex-col gap-2 md:gap-4 text-xs md:text-base font-bold">
            <Link href="/about" className="hover:text-blue-600 text-blue-950/80 transition-colors">About Us</Link>
            <Link href="/careers" className="hover:text-blue-600 text-blue-950/80 transition-colors">Careers</Link>
            <Link href="/contact" className="hover:text-blue-600 text-blue-950/80 transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-3">
          <h4 className="text-blue-950 font-black mb-2 md:mb-6 text-base md:text-xl tracking-wide">Services</h4>
          <div className="flex flex-col gap-2 md:gap-4 text-xs md:text-base font-bold">
            <Link href="/services" className="hover:text-blue-600 text-blue-950/80 transition-colors">All Services</Link>
            {content.services.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`} className="hover:text-blue-600 text-blue-950/80 transition-colors">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="col-span-2 md:col-span-3">
          <h4 className="text-blue-950 font-black mb-2 md:mb-6 text-base md:text-xl tracking-wide">Contact</h4>
          <div className="flex items-start gap-3 mb-2 md:mb-5">
            <div className="w-4 flex justify-center shrink-0 mt-0.5">
              <Mail className="w-4 h-4 text-blue-600" />
            </div>
            <p className="font-bold text-blue-950 text-xs md:text-base break-all">{content.contact.email}</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-4 flex justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-blue-600" />
            </div>
            <p className="leading-relaxed text-xs md:text-base text-blue-950/80 font-bold">{content.contact.address}</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/40 bg-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-8 text-xs md:text-sm text-center flex justify-center">
          <p className="text-blue-950/60 font-bold">© {new Date().getFullYear()} {content.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${nunito.variable} font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col min-h-screen text-blue-950 bg-sky-100 relative overflow-x-hidden w-full`}>
        <ScrollManager />
        <InteractiveBackground />

        <Navbar />
        <main className="flex-grow pt-20 relative z-10">
          {children}
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
