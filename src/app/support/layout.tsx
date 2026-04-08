"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LifeBuoy,
  ChevronRight,
  MessageCircle,
  Wrench,
  Settings,
} from "lucide-react";

const TABS = [
  { id: "contact-us", title: "Contact Us", icon: <MessageCircle size={20} />, sub: "Get Support" },
  { id: "frequently-asked-question", title: "FAQs", icon: <LifeBuoy size={20} />, sub: "Knowledge Base" },
  { id: "installation-guide", title: "Installation", icon: <Wrench size={20} />, sub: "Setup Manual" },
  { id: "maintenance-guide", title: "Maintenance", icon: <Settings size={20} />, sub: "Long-term Care" }
];

const TAB_CONTENT_MAP: Record<string, { title: string; desc: string }> = {
  "contact-us": {
    title: "Support Hub",
    desc: "Connect with our technical specialists for immediate assistance, project consultations, and premium support."
  },
  "frequently-asked-question": {
    title: "Knowledge Base",
    desc: "Find quick answers to common queries about our modular solutions, site preparation, and logistics."
  },
  "installation-guide": {
    title: "Setup Protocol",
    desc: "Official technical procedures for the safe and efficient assembly of your Kazema modular units."
  },
  "maintenance-guide": {
    title: "Care & Precision",
    desc: "Professional protocols for maintaining the structural integrity and performance of your sanitation facilities."
  }
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop() || "contact-us";
  
  const content = TAB_CONTENT_MAP[currentSlug] || TAB_CONTENT_MAP["contact-us"];

  return (
    <main className="w-full min-h-screen py-10 md:py-20 relative overflow-x-clip bg-muted/10 dark:bg-muted/5">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#006217]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#006217]/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <header className="mb-12 animate-in fade-in slide-in-from-left-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#006217] dark:text-[#28a745] tracking-tighter mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed">
            {content.desc}
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Sidebar/Category Navigation */}
          <aside className="w-full lg:w-1/3 xl:w-1/4 sticky top-16 lg:top-24 z-40 lg:z-10 space-y-6 -mx-4 md:mx-0 px-4 md:px-0 bg-background/50 backdrop-blur-lg lg:bg-transparent lg:backdrop-blur-none py-4 lg:py-0">
            <div className="bg-card rounded-3xl p-2 md:p-3 border border-border shadow-2xl shadow-black/5 overflow-hidden">
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible no-scrollbar pb-1 lg:pb-0">
                {TABS.map((tab) => {
                  const isActive = currentSlug === tab.id;
                  return (
                    <Link
                      key={tab.id}
                      href={`/support/${tab.id}`}
                      className={`group flex items-center justify-between p-3.5 md:p-4 rounded-2xl transition-all duration-300 flex-shrink-0 min-w-[180px] md:min-w-[220px] lg:min-w-0 ${
                        isActive
                          ? "bg-[#006217] text-white shadow-xl shadow-[#006217]/20 lg:translate-x-2"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className={`p-2 md:p-2.5 rounded-xl transition-colors ${isActive ? "bg-white/20" : "bg-muted group-hover:bg-[#006217]/10"}`}>
                           {React.cloneElement(tab.icon as React.ReactElement<any>, {
                            className: isActive ? "text-white" : "text-[#006217]",
                            size: 18
                          })}
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="font-bold text-xs md:text-sm tracking-tight leading-tight">{tab.title}</span>
                          <span className={`text-[9px] md:text-[10px] font-medium uppercase tracking-widest ${isActive ? "text-white/60" : "text-muted-foreground/60"}`}>
                            {tab.sub}
                          </span>
                        </div>
                      </div>
                      <ChevronRight size={16} className={`hidden lg:block transition-transform duration-300 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="w-full lg:w-2/3 xl:w-3/4 min-h-[500px] space-y-12">
            {children}

            {/* Repositioned Direct Support Card - Now at Bottom */}
            <div className="bg-[#006217] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden group shadow-2xl shadow-[#006217]/20 mt-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div className="max-w-xl">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-white/20 px-4 py-1.5 rounded-full mb-4 inline-block">Direct Engineering Access</span>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 italic">Need Instant Help?</h3>
                  <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed">
                    Our technical engineers are currently online and ready to assist you with structural calculations, site drawings, and emergency technical support via a live session.
                  </p>
                </div>
                <div className="w-full md:w-fit flex-shrink-0">
                  <button className="w-full md:w-auto bg-white text-[#006217] px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/90 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-black/20">
                    <MessageCircle size={20} /> Open Support Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
