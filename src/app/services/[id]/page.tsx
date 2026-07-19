import { content } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, Zap } from "lucide-react";
import { FadeUpAnimator, FadeInViewAnimator } from "@/components/ClientAnimator";

// Generate static params for all services
export async function generateStaticParams() {
  return content.services.map((service) => ({
    id: service.id,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // @ts-ignore - Using dynamic access since we added detailedDescription and workflow to some items
  const service = content.services.find((s) => s.id === id) as any;

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-32 sm:pb-24 relative z-10 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        
        <Link href="/services" className="inline-flex items-center gap-2 text-blue-950/60 hover:text-blue-600 transition-colors font-bold mb-6 sm:mb-12 text-sm uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4" /> All Services
        </Link>
        
        {/* Main Header Card - Mobile Full Bleed illusion */}
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] shadow-sm p-6 sm:p-12 border border-slate-200/60 mb-8 sm:mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3"></div>
          
          <FadeUpAnimator delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-extrabold text-xs tracking-widest mb-6 uppercase border border-blue-100">
              <Zap className="w-3.5 h-3.5" />
              ENTERPRISE SOLUTION
            </div>
          </FadeUpAnimator>
          
          <FadeUpAnimator delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-blue-950 mb-6 tracking-tight relative z-10 leading-[1.1]">
              {service.title}
            </h1>
          </FadeUpAnimator>
          
          <FadeUpAnimator delay={0.3}>
            <p 
              className="text-lg sm:text-2xl text-blue-950/70 font-medium leading-relaxed relative z-10 max-w-3xl"
              dangerouslySetInnerHTML={{ __html: service.description }}
            />
          </FadeUpAnimator>

          {service.detailedDescription && (
            <FadeUpAnimator delay={0.4}>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <p 
                  className="text-base sm:text-lg text-slate-600 leading-loose max-w-4xl"
                  dangerouslySetInnerHTML={{ __html: service.detailedDescription }}
                />
              </div>
            </FadeUpAnimator>
          )}
        </div>
        
        {/* Workflow Section (If exists) */}
        {service.workflow && (
          <FadeInViewAnimator delay={0.1} className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-blue-950 mb-8 px-2">How it works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {service.workflow.map((step: any, idx: number) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl mb-6 bg-slate-100 text-slate-800 border border-slate-200/60">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-3">{step.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </FadeInViewAnimator>
        )}

        {/* Features / Capabilities */}
        {service.features && service.features.length > 0 && (
          <FadeInViewAnimator delay={0.2} className="space-y-6 sm:space-y-10">
            <h2 className="text-2xl sm:text-3xl font-black text-blue-950 px-2">Capabilities</h2>
            {service.features.map((feature: any, idx: number) => (
              <div key={idx} className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/50 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-black text-blue-950 mb-6 sm:mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 rounded-full bg-blue-600 block"></span>
                  {feature.title}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {feature.items.map((item: string, itemIdx: number) => (
                    <li key={itemIdx} className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors group">
                      <div className="mt-0.5 bg-white rounded-full shadow-sm">
                        <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                      </div>
                      <span className="text-base font-semibold text-slate-700 group-hover:text-blue-950 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </FadeInViewAnimator>
        )}
        {/* Responsive CTA Card */}
        <FadeInViewAnimator delay={0.3} className="block mt-12 sm:mt-20 bg-blue-950 rounded-3xl p-6 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-transparent opacity-70"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4">Ready to transform your business?</h3>
            <p className="text-blue-200 text-sm sm:text-lg mb-6 sm:mb-8 font-medium">Talk to our enterprise sales team to get a tailored quote for {service.title}.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-white text-blue-950 font-black rounded-full hover:scale-105 transition-transform shadow-xl text-base sm:text-lg group">
              Contact Sales
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeInViewAnimator>

      </div>

    </div>
  );
}
