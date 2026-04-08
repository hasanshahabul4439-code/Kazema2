"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { 
  Building2, 
  Globe2, 
  TrendingUp, 
  ShieldCheck, 
  MapPin, 
  Briefcase, 
  ChevronRight, 
  ArrowDown, 
  Mail, 
  Phone, 
  CloudUpload,
  ArrowUpRight,
  Filter,
  Search
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { MOCK_JOBS, DEPARTMENTS, LOCATIONS } from "@/data/careers";

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedLoc, setSelectedLoc] = useState("All Locations");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = MOCK_JOBS.filter(job => {
    const matchesDept = selectedDept === "All Departments" || job.department === selectedDept;
    const matchesLoc = selectedLoc === "All Locations" || job.location === selectedLoc;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesLoc && matchesSearch;
  });

  return (
    <main className="w-full bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden blueprint-pattern bg-background border-b border-border/40">
        <div className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none opacity-5 shadow-[inset_0_0_100px_rgba(0,98,23,0.1)]">
            <svg className="text-[#006217] transform translate-x-1/4" height="600" viewBox="0 0 100 100" width="600">
                <rect fill="none" height="60" stroke="currentColor" strokeWidth="0.5" width="80" x="10" y="10"></rect>
                <path d="M10 10 L30 30 M90 10 L70 30 M10 70 L30 50 M90 70 L70 50" stroke="currentColor" strokeWidth="0.5"></path>
                <circle cx="50" cy="40" fill="none" r="15" stroke="currentColor" strokeWidth="0.5"></circle>
            </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full grid lg:grid-cols-2 gap-16 items-center py-20">
          <div className="flex flex-col gap-8">
            <span className="inline-block px-5 py-2 rounded-full bg-[#006217]/10 text-[#006217] text-[10px] font-black uppercase tracking-[0.2em] w-fit">
              Join the Industry Leader
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-foreground">
              Build Your <br/><span className="text-[#006217] italic">Future</span> with Kazema
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
              Join the leading force in modular excellence across the UAE. We don't just manufacture units; we define the future of modular infrastructure.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#positions" className="bg-[#006217] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center gap-3 hover:bg-[#004e12] transition-all shadow-xl shadow-[#006217]/20 cursor-pointer group">
                  View Open Positions
                  <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="#apply" className="bg-card border border-border text-foreground px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-muted/50 transition-all cursor-pointer">
                  Submit Your CV
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-background transition-transform hover:scale-[1.02] duration-700">
            <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Kazema Professionals" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#006217]/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Why Kazema Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-black tracking-tighter text-foreground mb-6 leading-tight">Why Kazema Global?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Established as the gold standard in modular solutions since 2012, we offer more than just a job. We offer a platform to lead infrastructure evolution.
            </p>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {[
                { title: "Industry Leader", icon: <Building2 />, desc: "Setting the standard in modular and portable sanitation across the Middle East." },
                { title: "GCC Opportunities", icon: <Globe2 />, desc: "Work on landmark projects across Dubai, Abu Dhabi, Saudi Arabia, and beyond." },
                { title: "Growth Path", icon: <TrendingUp />, desc: "Continuous learning and clear professional progression for every team member." },
                { title: "Safe Environment", icon: <ShieldCheck />, desc: "Highest safety protocols to ensure a secure workplace for everyone, every day." }
            ].map((feature, i) => (
                <div key={i} className="bg-card border border-border p-8 rounded-3xl group hover:border-[#006217]/50 hover:shadow-xl hover:shadow-[#006217]/5 transition-all duration-500 cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-[#006217]/5 flex items-center justify-center text-[#006217] mb-6 group-hover:bg-[#006217] group-hover:text-white transition-colors duration-500">
                        {React.cloneElement(feature.icon as React.ReactElement<{size: number}>, { size: 28 })}
                    </div>
                    <h3 className="text-xl font-black tracking-tight mb-2 uppercase text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed">{feature.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Positions Section */}
      <section className="py-24 bg-muted/5 border-y border-border/40" id="positions">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
            <div>
              <div className="flex items-center gap-2 text-[#006217] text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                <Briefcase size={14} />
                Careers at Kazema
              </div>
              <h2 className="text-4xl font-black tracking-tighter mb-4 text-foreground">Open Positions</h2>
              <p className="text-muted-foreground font-medium">Find your next challenge in our growing ecosystem.</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
               <div className="flex flex-col gap-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground pl-1">Department</label>
                 <select 
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="bg-card border border-border rounded-xl px-4 py-2.5 text-xs font-bold focus:ring-[#006217] focus:border-[#006217] outline-none"
                 >
                    {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
                 </select>
               </div>
               <div className="flex flex-col gap-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground pl-1">Location</label>
                 <select 
                    value={selectedLoc}
                    onChange={(e) => setSelectedLoc(e.target.value)}
                    className="bg-card border border-border rounded-xl px-4 py-2.5 text-xs font-bold focus:ring-[#006217] focus:border-[#006217] outline-none"
                 >
                    {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
                 </select>
               </div>
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.length > 0 ? filteredJobs.map((job) => (
              <Link key={job.id} href={`/careers/${job.slug}`}>
                <div className="group bg-card border border-border hover:border-[#006217]/40 p-8 rounded-[2rem] transition-all hover:shadow-2xl hover:shadow-[#006217]/5 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-black tracking-tight text-foreground group-hover:text-[#006217] transition-colors">{job.title}</h3>
                      <span className="bg-[#006217]/10 text-[#006217] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">{job.type}</span>
                    </div>
                    <div className="flex flex-wrap gap-6 text-muted-foreground text-xs font-bold">
                      <span className="flex items-center gap-2">
                        <MapPin size={14} className="text-[#006217]" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Building2 size={14} className="text-[#006217]" />
                        {job.department}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl font-medium">{job.description}</p>
                  </div>
                  <div className="bg-[#006217] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] whitespace-nowrap hover:bg-[#004e12] transition-all shadow-lg active:scale-95 flex items-center justify-center overflow-hidden">
                    Apply Now
                  </div>
                </div>
              </Link>
            )) : (
              <div className="text-center py-20 border-2 border-dashed border-border rounded-3xl">
                <Search size={48} className="mx-auto text-muted-foreground opacity-20 mb-4" />
                <p className="text-muted-foreground font-black uppercase tracking-widest text-xs">No matching positions found</p>
                <button onClick={() => {setSelectedDept("All Departments"); setSelectedLoc("All Locations");}} className="mt-4 text-[#006217] text-xs font-black uppercase tracking-widest cursor-pointer">Reset Filters</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-background" id="apply">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-card border border-border rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            
            {/* Left Info Panel */}
            <div className="lg:w-1/3 bg-[#006217] p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                  <svg className="w-96 h-96" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="50" fill="currentColor" />
                  </svg>
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl font-black tracking-tighter mb-6 leading-tight">Submit Your CV</h2>
                <p className="text-[#91f8b7] leading-relaxed font-medium mb-12">
                    Can't find a perfect match? Send us your CV anyway. We are always looking for exceptional talent to join our modular evolution.
                </p>
              </div>
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Email Us</p>
                    <p className="text-sm font-bold">careers@kazemaglobal.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Call Us</p>
                    <p className="text-sm font-bold">800 KAZEMA (529362)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:w-2/3 p-12">
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#006217] ml-1">Full Name</label>
                  <input className="w-full bg-muted/30 border border-border rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#006217]/20 focus:border-[#006217] focus:bg-background outline-none transition-all font-medium text-sm" placeholder="John Doe" type="text"/>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#006217] ml-1">Email Address</label>
                  <input className="w-full bg-muted/30 border border-border rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#006217]/20 focus:border-[#006217] focus:bg-background outline-none transition-all font-medium text-sm" placeholder="john@example.com" type="email"/>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#006217] ml-1">Phone Number</label>
                  <input className="w-full bg-muted/30 border border-border rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#006217]/20 focus:border-[#006217] focus:bg-background outline-none transition-all font-medium text-sm" placeholder="+971 -- --- ----" type="tel"/>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#006217] ml-1">Target Position</label>
                  <select className="w-full bg-muted/30 border border-border rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#006217]/20 focus:border-[#006217] focus:bg-background outline-none transition-all font-bold text-sm">
                    <option>General Application</option>
                    <option>Sales Executive</option>
                    <option>Project Engineer</option>
                    <option>Mechanical Technician</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#006217] ml-1">Upload CV (PDF/DOC)</label>
                  <div className="w-full border-2 border-dashed border-border rounded-[2rem] p-12 text-center bg-muted/10 hover:bg-[#006217]/5 hover:border-[#006217]/40 transition-all cursor-pointer group">
                    <CloudUpload size={48} className="mx-auto text-muted-foreground mb-4 group-hover:text-[#006217] transition-colors" />
                    <p className="text-sm font-black tracking-tight text-foreground uppercase">Drag & drop or <span className="text-[#006217]">browse files</span></p>
                    <p className="text-xs text-muted-foreground mt-2 font-medium">Supported formats: PDF, DOC, DOCX (Max 10MB)</p>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#006217] ml-1">Professional Summary</label>
                  <textarea className="w-full bg-muted/30 border border-border rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#006217]/20 focus:border-[#006217] focus:bg-background outline-none transition-all font-medium text-sm" placeholder="Briefly describe your expertise..." rows={4}></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full bg-[#006217] text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#004e12] transition-all shadow-xl shadow-[#006217]/10 active:scale-[0.98] cursor-pointer" type="submit">
                      Submit Your Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Line Strip */}
      <div className="bg-[#006217] text-white py-14 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black tracking-tighter mb-2">Direct Recruitment Line</h3>
            <p className="text-[#91f8b7] font-black uppercase tracking-[0.3em] text-[10px]">Connect with our HR team directly</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#006217] transition-all">
                <Phone size={18} />
              </div>
              <span className="text-xl font-black tracking-tighter">800 KAZEMA</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#006217] transition-all">
                <Mail size={18} />
              </div>
              <span className="text-xl font-black tracking-tighter">sales@kazemaportabletoilets.com</span>
            </div>
          </div>
        </div>
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

    </main>
  );
}
