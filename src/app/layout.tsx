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

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <Image src="/icons/logo4.webp" alt="Alaska Digital Logo" width={64} height={64} className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" />
            <div className="flex flex-col leading-none">
              <span className="font-outfit font-black text-3xl tracking-tighter text-slate-700">ALASKA</span>
              <span className="text-[10px] font-bold text-slate-500 tracking-[0.05em] uppercase mt-1.5 drop-shadow-sm">DIGITAL SOLUTIONS PVT. LTD.</span>
            </div>
          </Link>
          <p className="max-w-xs text-[15px] leading-relaxed text-blue-950/80 font-semibold mt-4">{content.tagline}</p>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="text-blue-950 font-black mb-6 text-xl tracking-wide">Company</h4>
          <div className="flex flex-col gap-4 text-base font-bold">
            <Link href="/about" className="hover:text-blue-600 text-blue-950/80 transition-colors">About Us</Link>
            <Link href="/careers" className="hover:text-blue-600 text-blue-950/80 transition-colors">Careers</Link>
            <Link href="/contact" className="hover:text-blue-600 text-blue-950/80 transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="text-blue-950 font-black mb-6 text-xl tracking-wide">Services</h4>
          <div className="flex flex-col gap-4 text-base font-bold">
            {content.services.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`} className="hover:text-blue-600 text-blue-950/80 transition-colors">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="text-blue-950 font-black mb-6 text-xl tracking-wide">Contact</h4>
          <div className="flex items-start gap-4 mb-5">
            <div className="w-5 flex justify-center shrink-0 mt-1">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <p className="font-bold text-blue-950 break-all">{content.contact.email}</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-5 flex justify-center shrink-0 mt-1">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <p className="leading-relaxed text-base text-blue-950/80 font-bold">{content.contact.address}</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/40 bg-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-center flex justify-center">
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
      <body className={`${inter.variable} ${outfit.variable} ${nunito.variable} font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col min-h-screen text-blue-950 bg-slate-50 relative overflow-x-hidden w-full`}>
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
