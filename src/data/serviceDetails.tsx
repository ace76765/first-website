import React from "react";
import { CheckCircle2, ShieldCheck, Database, Phone, BarChart, Server } from "lucide-react";

export const serviceDetails: Record<string, React.ReactNode> = {
  "telecom-networking": (
    <div className="space-y-8 sm:space-y-12">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-950 mb-4 sm:mb-6 flex items-center gap-3">
          <Server className="text-accent-sky w-6 h-6 shrink-0" /> Access & Backhaul Networks
        </h3>
        <p className="text-base sm:text-lg text-indigo-950/80 mb-4">
          Access Network on PTMP, MPTP and Wimax. Backhaul Networks on Fibre and Wireless.
        </p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-950 mb-4 sm:mb-6 flex items-center gap-3">
          <Phone className="text-accent-violet w-6 h-6 shrink-0" /> Telecom Networks
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {[
            "Voice over IP (VoIP)",
            "G. SHDSL ipDSLAMs",
            "Broadband transmission",
            "Dial-up (V.90) and dedicated (xDSL) access servers",
            "Network Termination Units (NTUs)",
            "Base-band and short-range modems",
            "Fiber-optic modems",
            "Interface converters and surge protectors"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 sm:gap-3 bg-white/50 p-3.5 sm:p-4 rounded-2xl border border-indigo-50">
              <CheckCircle2 className="w-5 h-5 text-accent-sky shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-indigo-950/80 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ),

  "cloud-it-support": (
    <div className="space-y-8 sm:space-y-12">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-950 mb-4 sm:mb-6 flex items-center gap-3">
          <Server className="text-accent-sky w-6 h-6 shrink-0" /> Technology Infrastructure & Enterprise Solutions
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {[
            "Data Center Optimization & Consolidation Consulting",
            "Infrastructure Solutions - Architect & Design",
            "Servers & Storage Solutions",
            "Performance Engineering",
            "Disaster Recovery",
            "System Integration",
            "Infrastructure Review, Analysis, & Remediation",
            "Platform Migration & Roll-outs"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 sm:gap-3 bg-white/50 p-3.5 sm:p-4 rounded-2xl border border-indigo-50">
              <CheckCircle2 className="w-5 h-5 text-accent-sky shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-indigo-950/80 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-950 mb-4 sm:mb-6 flex items-center gap-3">
          <ShieldCheck className="text-accent-violet w-6 h-6 shrink-0" /> Security & Audits
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {[
            "Security Device management - Log Analysis",
            "Security Information management - Event management",
            "Anti-Virus management",
            "User access prevention",
            "Data Loss prevention",
            "Electrical Audit Services & Power Supply Optimization"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 sm:gap-3 bg-white/50 p-3.5 sm:p-4 rounded-2xl border border-indigo-50">
              <CheckCircle2 className="w-5 h-5 text-accent-sky shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-indigo-950/80 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ),

  "data-digital-transformation": (
    <div className="space-y-8 sm:space-y-12">
      <div>
        <p className="text-base sm:text-xl text-indigo-950/80 font-medium leading-relaxed bg-indigo-50/50 p-6 sm:p-8 rounded-[2rem] border border-indigo-50 mb-8 sm:mb-12">
          Gone are the days when a hardware reseller based on box moving abilities could understand and satisfy a client's IT Infrastructure needs. In today's environment of multiple brands and ever increasing technology platforms, you need <span className="underline decoration-blue-400/60 decoration-4 underline-offset-4 font-bold text-blue-950">more than a reseller</span> to help you choose the right products and solutions. Our team of product experts will help you with such decisions keeping in mind your requirement, existing infrastructure and also the <span className="underline decoration-blue-400/60 decoration-4 underline-offset-4 font-bold text-blue-950">cost implications</span>.
        </p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-950 mb-4 sm:mb-6 flex items-center gap-3">
          <BarChart className="text-accent-sky w-6 h-6 shrink-0" /> Consulting & Strategy
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {[
            "Fundamentals of growth",
            "Business unit & Corporate strategy",
            "Digital & Emerging markets",
            "IT strategy & performance improvement",
            "IT M&A & project effectiveness"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 sm:gap-3 bg-white/50 p-3.5 sm:p-4 rounded-2xl border border-indigo-50">
              <CheckCircle2 className="w-5 h-5 text-accent-sky shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-indigo-950/80 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-950 mb-4 sm:mb-6 flex items-center gap-3">
          <Database className="text-accent-violet w-6 h-6 shrink-0" /> Risk Assurance & Audits
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {[
            "Audit programs (business process, ERP and technology specific)",
            "Industry-specific control libraries to benchmark best practices",
            "Manage the risks and opportunities of digital transformation",
            "Implement the latest data and analytics tools and approaches to help you create competitive advantages."
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 sm:gap-3 bg-white/50 p-3.5 sm:p-4 rounded-2xl border border-indigo-50">
              <CheckCircle2 className="w-5 h-5 text-accent-sky shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-indigo-950/80 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ),

  "scanning-digitization": (
    <div className="space-y-8 sm:space-y-12">
      <div>
        <p className="text-base sm:text-lg text-indigo-950/80 mb-6 sm:mb-8 bg-indigo-50/50 p-6 sm:p-8 rounded-[2rem] border border-indigo-50">
          Alaska Digital Solutions Pvt Limited proposes technical solutions for the Scanning and Digitization of Official Documents & Development of Cloud Based Document Management System. We deploy efficient resources and scanners for capturing documents, with a state of the art Cloud Based Document Management Solution (DMS) featuring a <span className="underline decoration-blue-400/60 decoration-4 underline-offset-4 font-bold text-blue-950">Hybrid mode</span> (accessible through cloud and local server/storage).
        </p>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-950 mb-6 sm:mb-8">Approach and Methodology Workflow</h3>
        
        <div className="space-y-4 sm:space-y-6">
          {[
            {
              num: 1,
              title: "Pre-Scanning Work Stage",
              desc: "Documents are prepared for scanning work. They are untied in a controlled fashion and prepared for respective scanning stations with proper bookkeeping.",
              color: "bg-accent-sky/10 text-accent-sky"
            },
            {
              num: 2,
              title: "Digitization Work Stage",
              desc: "A0/A1/A2/A3/A4/Legal/A5 size documents are transformed/converted into digital format (images/PDF) and archived with proper indexing for easy retrieval.",
              color: "bg-accent-violet/10 text-accent-violet"
            },
            {
              num: 3,
              title: "Quality Check (QC) Work Stage",
              desc: "Scanned documents undergo a rigorous quality check stage to ensure scanning and digitization specifications are fully met.",
              color: "bg-indigo-900/10 text-indigo-900"
            },
            {
              num: 4,
              title: "Editing, Indexing and Readying",
              desc: "Alaska deploys efficient resources for editing, indexing, and readying the documents for the upload stage to achieve 100% accuracy.",
              color: "bg-accent-sky/10 text-accent-sky"
            },
            {
              num: 5,
              title: "Configuration of Cloud based DMS",
              desc: "Our state of the art cloud-based Document Management Solution is deployed as per client requirements, available in both pure cloud and hybrid configurations.",
              color: "bg-accent-violet/10 text-accent-violet"
            }
          ].map((step, idx) => (
            <div key={idx} className="bg-white/50 p-5 sm:p-6 rounded-[1.5rem] border border-indigo-50 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-lg sm:text-xl shrink-0 ${step.color}`}>{step.num}</div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-indigo-950 mb-1.5 sm:mb-2">{step.title}</h4>
                <p className="text-sm sm:text-base text-indigo-950/70">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  "business-operations": (
    <div className="space-y-8 sm:space-y-12">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-950 mb-4 sm:mb-6 flex items-center gap-3">
          <Phone className="text-accent-sky w-6 h-6 shrink-0" /> Call Center Services
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {[
            "Inbound Web Chat",
            "Inbound Sales & Customer Service",
            "Tech Support & Technical Helpdesk",
            "Lead Generation",
            "Real-time email answering services",
            "Prompt 24/7 email responses",
            "Centralized helpdesk system for better accessibility",
            "Telemarketing lead management",
            "Appointment Setting Services",
            "Research Surveys and Polling"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 sm:gap-3 bg-white/50 p-3.5 sm:p-4 rounded-2xl border border-indigo-50">
              <CheckCircle2 className="w-5 h-5 text-accent-sky shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-indigo-950/80 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-950 mb-4 sm:mb-6 flex items-center gap-3">
          <BarChart className="text-accent-violet w-6 h-6 shrink-0" /> Total Outsourcing Services
        </h3>
        <p className="text-base sm:text-lg text-indigo-950/80 mb-6">
          Through a combination of offsite and onsite resources, we become <span className="underline decoration-blue-400/60 decoration-4 underline-offset-4 font-bold text-blue-950">your IT arm</span> that manages all your technology requirements.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {[
            "Entity Formation & Pre-Investment Regulatory Advisory",
            "Business Registrations & Government Incentives",
            "Automate Workflow & Improve Performance",
            "Effective Change Management",
            "Partner with us to manage your mission critical equipment"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 sm:gap-3 bg-white/50 p-3.5 sm:p-4 rounded-2xl border border-indigo-50">
              <CheckCircle2 className="w-5 h-5 text-accent-sky shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-indigo-950/80 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};
