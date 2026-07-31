"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaStrip() {
  const pathname = usePathname();

  // Hide on contact, careers, and individual service detail pages (which have their own CTA blocks)
  const hideCta = 
    pathname.startsWith("/contact") || 
    pathname.startsWith("/careers") || 
    (pathname.startsWith("/services/") && pathname !== "/services");

  if (hideCta) return null;

  return (
    <div className="bg-blue-600 py-8 md:py-12 px-6 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">Ready to transform your business?</h3>
          <p className="text-blue-100 font-medium text-lg">Partner with Alaska Digital Solutions today.</p>
        </div>
        <Link href="/contact" className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center gap-2">
          Get Started Now <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
