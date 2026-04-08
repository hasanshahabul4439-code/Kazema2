"use client";

import React, { useState, use } from "react";
import {
  FileText,
  ShieldCheck,
  Wrench,
  Settings,
  LifeBuoy,
  ChevronDown,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Droplets,
  Users,
  LayoutGrid,
} from "lucide-react";

// --- Data Structures ---

const FAQS = [
  {
    category: "Portable Toilets",
    icon: <LifeBuoy size={18} />,
    questions: [
      {
        q: "How often do portable toilets need servicing?",
        a: "For standard construction sites, we recommend weekly servicing which includes waste removal, thorough sanitization, and recharging of chemicals. For high-traffic events, daily servicing is advised."
      },
      {
        q: "What chemicals are used for odor control?",
        a: "We use eco-friendly, biodegradable blue deodorizers that effectively break down waste and provide long-lasting fragrance, compliant with UAE environmental standards."
      }
    ]
  },
  {
    category: "Portable Cabins",
    icon: <MessageSquare size={18} />,
    questions: [
      {
        q: "Are your cabins suitable for offshore use?",
        a: "Yes, we provide specially reinforced offshore cabins with marine-grade coatings and explosion-proof electrical fittings, certified for high-salinity and extreme industrial environments."
      },
      {
        q: "Can I join multiple cabins to create a larger office?",
        a: "Absolutely. Our modular design allows for seamless 'multi-plex' configurations, enabling you to create large open-plan offices or multi-room facilities by joining standard units."
      }
    ]
  },
  {
    category: "Security Cabins",
    icon: <ShieldCheck size={18} />,
    questions: [
      {
        q: "What is the visibility range of your security cabins?",
        a: "Our standard security cabins feature 360-degree panoramic windows using tinted 6mm safety glass, ensuring maximum visibility for site personnel while maintaining thermal comfort."
      },
      {
        q: "Can security cabins be equipped with AC units?",
        a: "All our security cabins come pre-wired for split or window AC units. We typically install 1-ton or 1.5-ton units as standard to ensure a productive environment for guards."
      }
    ]
  },
  {
    category: "Ablution Blocks",
    icon: <Droplets size={18} />,
    questions: [
      {
        q: "What are the power requirements for an ablution block?",
        a: "Standard units require a 220V-240V single-phase connection. Large units with industrial water heaters may require a 3-phase supply (380V-415V). We can provide generators if site power is unavailable."
      },
      {
        q: "Do you offer water tank and sewage tank rentals?",
        a: "Yes, we provide the complete 'wet-hire' ecosystem, including clean water storage tanks, sewage holding tanks, and specialized pumping services for sites without mainland connections."
      }
    ]
  },
  {
    category: "Handwash Stations",
    icon: <Users size={18} />,
    questions: [
      {
        q: "Do your handwash stations require a main water connection?",
        a: "We offer both! Our 'Independent' units have internal tanks for water and waste, while our 'Main-Connect' units can be plumbed directly into site utilities for continuous use."
      },
      {
        q: "Are your stations hands-free or foot-operated?",
        a: "Most of our tactical handwash stations are foot-pump operated to minimize surface contact and ensure the highest hygiene standards for your site labor or event guests."
      }
    ]
  },
  {
    category: "Container Conversion",
    icon: <LayoutGrid size={18} />,
    questions: [
      {
        q: "Can you convert a 40ft container into a luxury living space?",
        a: "Yes, container conversion is our specialty. We provide full internal fit-outs including gypsum walling, laminate flooring, luxury plumbing, and high-efficiency HVAC systems."
      },
      {
        q: "Is it possible to stack converted containers?",
        a: "Certainly. Our engineering team ensures they are structurally reinforced for multi-story stacking, including the installation of external staircases and safety railings."
      }
    ]
  },
  {
    category: "Support & Logistics",
    icon: <Settings size={18} />,
    questions: [
      {
        q: "What documents are required for unit rental?",
        a: "For corporate clients, we require a Trade License copy, TRN certificate, and an official Purchase Order. For individuals, an Emirates ID or Passport copy with a security deposit is sufficient."
      },
      {
        q: "How quickly can you respond to a repair request?",
        a: "Our technical teams are on standby 24/7. Emergency repairs in Ajman/Dubai area are typically addressed within 4-6 hours. Rural site visits are scheduled within 24 hours."
      }
    ]
  }
];

const INSTALLATION_STEPS = [
  { title: "Site Leveling", desc: "Ensure the ground is flat and compacted to support the weight of the unit without shifting." },
  { title: "Base Preparation", desc: "Use concrete pads or steel beams for stable long-term placement, especially for larger cabins." },
  { title: "Utility Connection", desc: "Coordinate with licensed professionals for plumbing and electrical hookups." },
  { title: "Structural Anchoring", desc: "Secure the modular unit against high winds using specialized industrial anchoring kits." }
];

const MAINTENANCE_CHECKLIST = [
  { title: "Roof & Seals", desc: "Inspect roofing panels and silicone seals every 6 months for any wear or water ingress." },
  { title: "HVAC Servicing", desc: "Clean or replace air filters monthly in high-dust environments to ensure efficient cooling." },
  { title: "Plumbing Systems", desc: "Check all pipe connections and drainage outlets for blockages or leaks quarterly." },
  { title: "Exterior Cleaning", desc: "Wash exterior panels with mild detergent to maintain protective coatings and aesthetics." }
];

// --- Sub-components ---

const FAQSection = ({ faqs, openFaqIndices, toggleFaq, activeFaqCategory, setActiveFaqCategory }: any) => {
  const currentCategoryData = faqs.find((f: any) => f.category === activeFaqCategory) || faqs[0];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-muted/30 p-1.5 rounded-2xl border border-border/50 flex flex-nowrap overflow-x-auto no-scrollbar gap-1">
        {faqs.map((cat: any) => (
          <button
            key={cat.category}
            onClick={() => setActiveFaqCategory(cat.category)}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-xs transition-all whitespace-nowrap
              ${activeFaqCategory === cat.category 
                ? 'bg-[#006217] text-white shadow-lg shadow-[#006217]/20 scale-105 z-10' 
                : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              }`}
          >
            <span className={activeFaqCategory === cat.category ? 'text-white' : 'text-[#006217]'}>
               {cat.icon}
            </span>
            {cat.category}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-6 px-1">
          <div className="w-1.5 h-6 bg-[#006217] dark:bg-[#28a745] rounded-full"></div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] opacity-40">
            {activeFaqCategory} Solutions
          </h3>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          {currentCategoryData.questions.map((faq: any, faqIdx: number) => {
            const isOpen = openFaqIndices.includes(`${activeFaqCategory}-${faqIdx}`);
            return (
              <div 
                key={faqIdx} 
                className={`border border-border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-card shadow-xl border-[#006217]/20 translate-x-1' : 'bg-muted/20 hover:border-[#006217]/30'}`}
              >
                <button 
                  onClick={() => toggleFaq(activeFaqCategory, faqIdx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 group"
                >
                  <span className={`font-bold text-sm transition-colors ${isOpen ? 'text-[#006217] dark:text-[#28a745]' : 'group-hover:text-[#006217] dark:group-hover:text-[#28a745]'}`}>{faq.q}</span>
                  <div className={`p-1 rounded-lg transition-all ${isOpen ? 'bg-[#006217] text-white rotate-180' : 'bg-background text-muted-foreground'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-border/10 mx-6 mt-[-1px]">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-8 bg-[#006217]/5 border border-dashed border-[#006217]/20 rounded-3xl mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-bold text-lg mb-1">Didn't find what you're looking for?</h4>
          <p className="text-sm text-muted-foreground italic font-medium">Our technical specialists are available 24/7 for custom enquiries.</p>
        </div>
        <button className="bg-[#006217] text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#006217]/20">
          Request Custom FAQ
        </button>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [formType, setFormType] = useState('general');

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#006217] rounded-3xl p-8 flex flex-col justify-between text-white relative overflow-hidden group min-h-[280px] shadow-xl shadow-[#006217]/10">
          <div className="relative z-10">
            <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 inline-block backdrop-blur-sm">Direct Access</span>
            <h3 className="text-3xl font-bold mb-4 tracking-tight">WhatsApp Support</h3>
            <p className="text-white/80 mb-6 max-w-xs font-medium leading-relaxed"> Instant messaging for quick queries, technical status updates, and emergency support. </p>
            <a href="https://wa.me/971556025765" target="_blank" className="flex items-center gap-3 bg-white text-[#006217] px-6 py-3.5 rounded-full font-black uppercase tracking-widest text-xs group-hover:scale-105 transition-all shadow-lg active:scale-95 w-fit">
              Chat Now <MessageSquare className="w-4 h-4" />
            </a>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
            <MessageSquare size={240} strokeWidth={1} />
          </div>
        </div>

        <div className="bg-muted/30 dark:bg-card/50 rounded-3xl p-8 border border-border/50 flex flex-col justify-between shadow-sm">
          <div>
            <div className="bg-[#006217]/10 w-12 h-12 rounded-2xl flex items-center justify-center text-[#006217] mb-6">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 tracking-tight">Support Hotlines</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">24/7 assistance for critical infrastructure and portable solutions.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-border/50 pb-3">
              <span className="text-[10px] font-black uppercase opacity-40 tracking-widest">Office</span>
              <a href="tel:+97167407114" className="text-sm font-bold hover:text-[#006217] transition-colors">+971 67 407 114</a>
            </div>
            <div className="flex items-center justify-between border-b border-border/50 pb-3">
              <span className="text-[10px] font-black uppercase opacity-40 tracking-widest">Support</span>
              <a href="tel:800529362" className="text-sm font-bold hover:text-[#006217] transition-colors">800-KAZEMA</a>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase opacity-40 tracking-widest">Hire</span>
              <a href="tel:8008645387" className="text-sm font-bold hover:text-[#006217] transition-colors">800-TOILETS</a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted/30 dark:bg-card/50 rounded-3xl p-8 border border-border/50 shadow-sm">
          <div className="bg-[#006217]/10 w-12 h-12 rounded-2xl flex items-center justify-center text-[#006217] mb-6">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2 tracking-tight">Email Support</h3>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">Detailed technical enquiries and professional project consultation.</p>
          <div className="space-y-3">
            <div className="p-4 bg-background/50 rounded-2xl border border-border/50 flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase opacity-40">Sales Department</span>
              <a href="mailto:sales@kazemaportabletoilets.com" className="text-xs font-bold text-[#006217] hover:underline break-all">sales@kazemaportabletoilets.com</a>
            </div>
            <div className="p-4 bg-background/50 rounded-2xl border border-border/50 flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase opacity-40">Rentals & Hire</span>
              <a href="mailto:rentals@kazemaportabletoilets.com" className="text-xs font-bold text-[#006217] hover:underline break-all">rentals@kazemaportabletoilets.com</a>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 dark:bg-card/80 rounded-3xl p-8 flex flex-col justify-between border border-border/50 shadow-sm">
          <div>
            <div className="bg-[#006217]/10 w-12 h-12 rounded-2xl flex items-center justify-center text-[#006217] mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">Corporate Office</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6"> 1402, Falcon Business Towers B1,<br /> PO Box: 30758, Rashidiya,<br /> Ajman, United Arab Emirates </p>
          </div>
          <div className="flex items-center gap-3 text-[#006217] py-3 px-5 bg-[#006217]/5 rounded-2xl w-fit">
            <div className="w-2 h-2 rounded-full bg-[#006217] animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest">Mon - Sat, 8:30AM - 6:30PM</span>
          </div>
        </div>
      </div>

      <section className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-2xl shadow-black/5 mt-4">
        <div className="flex flex-col xl:flex-row gap-12">
          <div className="w-full xl:w-1/4">
            <h2 className="text-3xl font-extrabold text-[#006217] dark:text-[#28a745] mb-6 leading-tight tracking-tighter">Send a Message</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8"> Fill out the form and our technical specialist will respond within 4 business hours. We treat every request with absolute precision. </p>
            <div className="pt-8 border-t border-border/50 hidden xl:block">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-40 mb-2">Response Policy</p>
              <p className="text-xs font-bold italic text-[#006217]">Standard Response Time: Under 4 Business Hours</p>
            </div>
          </div>

          <div className="w-full xl:w-3/4 flex flex-col gap-8">
            <div>
              <div className="flex p-1 bg-muted rounded-xl mb-6 w-fit border border-border/50">
                <button onClick={() => setFormType('general')} className={`px-8 py-2 rounded-lg font-bold text-sm transition-all ${formType === 'general' ? 'bg-[#006217] text-white shadow-md' : 'text-muted-foreground hover:text-foreground'}`} > General Enquiry </button>
                <button onClick={() => setFormType('sales')} className={`px-8 py-2 rounded-lg font-bold text-sm transition-all ${formType === 'sales' ? 'bg-[#006217] text-white shadow-md' : 'text-muted-foreground hover:text-foreground'}`} > Sales Enquiry </button>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                  <input required className="w-full bg-muted/30 border border-border/50 rounded-lg py-2 px-3.5 text-sm focus:ring-2 focus:ring-[#006217] focus:outline-none transition-all placeholder:opacity-50" placeholder="Your Name" type="text" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                  <input required className="w-full bg-muted/30 border border-border/50 rounded-lg py-2 px-3.5 text-sm focus:ring-2 focus:ring-[#006217] focus:outline-none transition-all placeholder:opacity-50" placeholder="email@example.com" type="email" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Phone Number</label>
                  <input required className="w-full bg-muted/30 border border-border/50 rounded-lg py-2 px-3.5 text-sm focus:ring-2 focus:ring-[#006217] focus:outline-none transition-all placeholder:opacity-50" placeholder="+971 -- --- ----" type="tel" />
                </div>
                {formType === 'general' && ( <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300"> <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Subject</label> <input className="w-full bg-muted/30 border border-border/50 rounded-lg py-2 px-3.5 text-sm focus:ring-2 focus:ring-[#006217] focus:outline-none transition-all placeholder:opacity-50" placeholder="Inquiry Subject" type="text" /> </div> )}
                {formType === 'sales' && (
                  <>
                    <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300"> <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Organization</label> <input className="w-full bg-muted/30 border border-border/50 rounded-lg py-2 px-3.5 text-sm focus:ring-2 focus:ring-[#006217] focus:outline-none transition-all placeholder:opacity-50" placeholder="Company Name" type="text" /> </div>
                    <div className="space-y-1.5 md:col-span-2 animate-in fade-in slide-in-from-top-2 duration-300"> <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Product Interest</label> <select className="w-full bg-muted/30 border border-border/50 rounded-lg py-2 px-3.5 text-sm focus:ring-2 focus:ring-[#006217] focus:outline-none transition-all cursor-pointer"> <option>Portable Toilets</option> <option>Portable Cabins</option> <option>Ablution Blocks</option> <option>Security Cabins</option> <option>Container Conversion</option> <option>Miscellaneous</option> </select> </div>
                  </>
                )}
                <div className="space-y-1.5 md:col-span-2"> <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Message</label> <textarea required className="w-full bg-muted/30 border border-border/50 rounded-lg py-2 px-3.5 text-sm focus:ring-2 focus:ring-[#006217] focus:outline-none transition-all placeholder:opacity-50" placeholder="How can we assist you today?" rows={3}></textarea> </div>
                <div className="md:col-span-2"> <button type="submit" className="w-full bg-[#006217] text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs hover:bg-[#004d12] transition-all active:scale-[0.98] shadow-lg shadow-[#006217]/20 flex items-center justify-center gap-3"> <Send className="w-4 h-4" /> Send Request </button> </div>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full h-[400px] bg-muted rounded-3xl overflow-hidden relative border border-border shadow-inner group mt-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230667.52554234178!2d55.16004808671873!3d25.3987818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f582d17c28bc1%3A0x155001c116d2eeb5!2sPortable%20Sanitation%20Company!5e0!3m2!1sen!2sae!4v1775539783272!5m2!1sen!2sae" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="transition-all duration-700" ></iframe>
          <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-black/80 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-border/50 flex flex-col gap-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#006217] dark:text-[#28a745]">Office Location</p>
            <p className="text-sm font-bold">Rashidiya, Ajman, UAE</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const GuideSection = ({ title, steps, icon: Icon }: any) => (
  <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="flex flex-col md:flex-row md:items-center gap-6 border-b border-border pb-8">
      <div className="p-4 bg-[#006217]/10 rounded-2xl text-[#006217] w-fit"> <Icon size={32} /> </div>
      <div>
        <h2 className="text-3xl font-extrabold tracking-tighter text-[#006217] dark:text-[#28a745]">{title}</h2>
        <p className="text-sm text-muted-foreground mt-1 font-medium italic">Official procedure for maintaining structural integrity and operational performance.</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {steps.map((step: any, i: number) => (
        <div key={i} className="p-8 border border-border bg-card rounded-3xl hover:border-[#006217]/30 transition-all group relative overflow-hidden shadow-sm">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-black bg-[#006217] text-white w-6 h-6 flex items-center justify-center rounded-lg shadow-lg shadow-[#006217]/20"> 0{i + 1} </span>
              <h4 className="font-bold text-lg group-hover:text-[#006217] transition-colors tracking-tight">{step.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">{step.desc}</p>
          </div>
          <span className="absolute right-[-10px] bottom-[-20px] text-8xl font-black opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.07] transition-opacity"> {i + 1} </span>
        </div>
      ))}
    </div>
    <div className="p-10 bg-muted/30 border border-dashed border-border rounded-3xl text-center relative overflow-hidden">
      <div className="relative z-10">
        <p className="text-sm font-medium italic mb-6 max-w-lg mx-auto opacity-80"> "Following these precise technological guidelines ensures your Kazema units remain compliant with international safety, hygiene, and modular efficiency standards." </p>
        <button className="text-[10px] font-black uppercase text-[#006217] dark:text-[#28a745] tracking-[0.2em] bg-white dark:bg-card px-8 py-4 rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto border border-border">
          <FileText size={16} /> Download Full Technical Manual (PDF)
        </button>
      </div>
    </div>
  </div>
);

export default function SupportSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [activeFaqCategory, setActiveFaqCategory] = useState(FAQS[0].category);
  const [openFaqIndices, setOpenFaqIndices] = useState<string[]>([]);

  const toggleFaq = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setOpenFaqIndices(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  return (
    <>
      {slug === "contact-us" && <ContactSection />}
      {slug === "frequently-asked-question" && (
        <FAQSection 
          faqs={FAQS} 
          openFaqIndices={openFaqIndices} 
          toggleFaq={toggleFaq}
          activeFaqCategory={activeFaqCategory}
          setActiveFaqCategory={setActiveFaqCategory}
        />
      )}
      {slug === "installation-guide" && <GuideSection title="Installation Guide" steps={INSTALLATION_STEPS} icon={Wrench} />}
      {slug === "maintenance-guide" && <GuideSection title="Maintenance Guide" steps={MAINTENANCE_CHECKLIST} icon={Settings} />}
    </>
  );
}
