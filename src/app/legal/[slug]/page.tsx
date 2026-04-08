"use client";

import React, { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Clock, 
  FileText, 
  ShieldAlert,
  Calendar,
  UserCheck
} from "lucide-react";

/**
 * Professional Dummy Content for Legal Policies
 */
const POLICY_CONTENT: Record<string, {
    title: string;
    lastUpdated: string;
    sections: { title: string; content: string }[] 
}> = {
  "terms-and-conditions": {
    title: "Terms and Conditions",
    lastUpdated: "Sept 10, 2024",
    sections: [
      { 
        title: "1. Authorized Website Use", 
        content: "The content on this website is for informational purposes only. Users may browse, inquire, and request quotations for our modular solutions. Any unlawful or unauthorized use of the platform is strictly prohibited." 
      },
      { 
        title: "2. Order and Quotation Framework", 
        content: "Kazema does not facilitate direct online sales. Orders are initiated through inquiries (WhatsApp, Email, Phone) and are officially confirmed only after quotation approval and receipt of 100% advance payment." 
      },
      { 
        title: "3. Comprehensive Payment Terms", 
        content: "Full payment is mandatory before production or delivery begins. We accept bank transfers, cheques, or other methods explicitly agreed upon in the quotation. Work commences only after payment confirmation." 
      },
      { 
        title: "4. Refund and Cancellation Policy", 
        content: "Because most products are custom-manufactured, refunds are generally not permitted once production begins. Any exemption is subject to Kazema Management review, with deductions applied for labor and material costs." 
      },
      { 
        title: "5. Delivery and Installation", 
        content: "Kazema provides professional installation for rental units. Customers must ensure site accessibility, level ground, and the availability of necessary utilities for successful deployment as per the quote." 
      },
      { 
        title: "6. Intellectual Property & Liability", 
        content: "All content, logos, and designs are owned by Kazema. We are not liable for damages arising from reliance on website information, as product specifications may vary due to custom manufacturing." 
      },
      { 
        title: "7. Governance and Policy Updates", 
        content: "These terms are governed by the applicable laws of the user's location. Kazema reserves the right to modify these terms at any time. We encourage periodic review of this document for updates." 
      }
    ]
  },
  "privacy-policy": {
    title: "Privacy Policy",
    lastUpdated: "Aug 12, 2024",
    sections: [
      { 
        title: "1. Information Categorization", 
        content: "Kazema collects Personal Information (name, email, phone, company details) when you submit inquiries via contact forms or WhatsApp. We also collect Non-Personal Information (IP address, usage data) automatically for website performance analytics." 
      },
      { 
        title: "2. Strategic Use of Data", 
        content: "We use your information to respond to inquiries, provide customized quotations for modular solutions, manage customer relationships, and improve the digital functionality of our website. Promotional communications are only sent with your explicit consent." 
      },
      { 
        title: "3. Transparency and Sharing", 
        content: "Kazema does NOT sell or rent your personal data. Sharing only occurs with internal management for order processing, when required by UAE law, or in the event of a corporate merger or acquisition." 
      },
      { 
        title: "4. Cookies and External Links", 
        content: "Our website uses tracking technologies to analyze traffic and provide essential functionality. For a detailed breakdown of these technologies, please refer to our dedicated Cookie Policy." 
      },
      { 
        title: "5. Rights and Updates", 
        content: "We may update this policy periodically to reflect evolving legal standards. We encourage you to review this page regularly to stay informed about our data protection protocols." 
      }
    ]
  },
  "cookie-policy": {
    title: "Cookie Policy",
    lastUpdated: "July 02, 2024",
    sections: [
      { 
        title: "1. Understanding Cookies", 
        content: "Cookies are small text files stored on your device by your web browser. They help our website function properly, enhance your overall user experience, and provide us with vital information about how visitors interact with our modular solution catalog." 
      },
      { 
        title: "2. Categories of Cookies Used", 
        content: "We utilize Essential cookies for site stability, Performance/Analytics cookies to optimize page speed, and Functional cookies to remember your form inputs. Occasionally, we use Marketing cookies to evaluate the effectiveness of our online presence across the GCC." 
      },
      { 
        title: "3. Third-Party Integrations", 
        content: "Our platform may use third-party services such as Google Analytics or professional social media plugins. These services place their own cookies, which are subject to the specific privacy and cookie policies of those respective providers." 
      },
      { 
        title: "4. Managing Your Preferences", 
        content: "While most browsers automatically accept cookies, you can manage or disable them through your browser's security settings. Please note that disabling cookies may limit your ability to use certain interactive features of our website." 
      },
      { 
        title: "5. Policy Evolution & Consent", 
        content: "By continuing to navigate the Kazema website, you consent to our use of cookies. We may update this policy periodically to reflect changes in digital standards and UAE regulations." 
      }
    ]
  },
  "refund-policy": {
    title: "Refund Policy",
    lastUpdated: "June 08, 2024",
    sections: [
      { 
        title: "1. Scope and Applicability", 
        content: "This Refund Policy applies to all products and services provided by Kazema General Trading LLC. We prioritize transparency in our financial transactions and service agreements." 
      },
      { 
        title: "2. Order and Quotation Process", 
        content: "Kazema does not sell products directly through online checkout. Our website is designed for product discovery and inquiry submission via Email, WhatsApp, Phone, or Contact Forms. Our team prepares detailed quotations identifying specific product dimensions, pricing, and logistical details based on your unique site requirements." 
      },
      { 
        title: "3. Payment and Confirmation", 
        content: "Upon approval of a quotation, 100% advance payment is required to initialize the order. Production, customization, or logistical preparation begins strictly after the advance payment has been confirmed by our finance department." 
      },
      { 
        title: "4. Refund Eligibility and Deductions", 
        content: "As most units are manufactured or customized to client specifications, refunds are generally not applicable once production has commenced. If a request is submitted mid-process, any potential refund will be adjusted to account for incurred costs in materials, labor, and manufacturing preparation." 
      },
      { 
        title: "5. Management Authority", 
        content: "All refund requests are subject to internal audit by Kazema Management. The final decision regarding adjustments or deductions rests with the higher corporate authority of Kazema, and such decisions are final and binding." 
      },
      { 
        title: "6. Updates and Communication", 
        content: "Kazema reserves the right to modify this policy without prior notice. For any questions regarding your quotation or this policy, please reach out through our official corporate communication channels." 
      }
    ]
  },
  "disclaimer": {
    title: "Legal Disclaimer",
    lastUpdated: "May 22, 2024",
    sections: [] // Empty sections because we handle disclaimer specially in the UI
  }
};

export default function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { slug } = use(params);
  const policy = POLICY_CONTENT[slug] || POLICY_CONTENT["disclaimer"];

  return (
    <main className="w-full max-w-4xl mx-auto px-6 md:px-8 py-10 min-h-screen bg-background text-foreground font-body">
      
      {/* Sticky Back Navigation */}
      <div className="sticky top-16 z-40 -mx-4 md:-mx-8 px-4 md:px-8 py-4 bg-background/0 backdrop-blur-[2px] pointer-events-none mb-4">
        <button
          onClick={() => router.push('/legal')}
          className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 bg-background dark:bg-card hover:bg-white dark:hover:bg-muted/40 hover:border-[#006217]/30 hover:text-[#006217] transition-all duration-500 text-xs font-black uppercase tracking-widest shadow-lg pointer-events-auto cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform duration-500" />
          Back to Legal Hub
        </button>
      </div>

      {/* Hero Header */}
      <div className="mb-12 pt-8">
        <div className="flex items-center gap-3 text-[#006217] mb-4">
            <FileText size={20} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Official Document</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-headline font-black text-foreground mb-6 tracking-tighter leading-tight">
          {policy.title}
        </h1>
        <div className="flex flex-wrap gap-4 items-center text-muted-foreground text-xs font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/30 rounded-full border border-border/40">
                <Clock size={12} />
                Last Updated: {policy.lastUpdated}
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/30 rounded-full border border-border/40">
                <UserCheck size={12} />
                Verified Compliance
            </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-border/80 via-transparent to-transparent mb-12"></div>

      {/* Content Sections */}
      <div className="space-y-12 mb-24">
        {slug === "disclaimer" ? (
          <div className="bg-muted/10 border border-border/40 rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden group hover:border-[#006217]/20 transition-all duration-500">
            <div className="absolute inset-0 blueprint-pattern opacity-5 pointer-events-none"></div>
            <p className="text-xl md:text-2xl font-headline font-medium text-foreground leading-relaxed max-w-3xl mx-auto relative z-10">
              This Disclaimer governs the use of the website operated by Kazema. 
              By accessing or using this website, you agree to the {" "}
              <Link 
                href="/legal/terms-and-conditions" 
                className="text-[#006217] font-black underline underline-offset-8 decoration-2 hover:decoration-[#006217]/40 transition-all cursor-pointer"
              >
                terms
              </Link>
              {" "} outlined in this disclaimer.
            </p>
          </div>
        ) : (
          policy.sections.map((section, idx) => (
            <div key={idx} className="group transition-all">
              <h2 className="text-lg md:text-xl font-headline font-black text-[#006217] mb-4 flex items-center gap-3 tracking-tight">
                  <span className="w-8 h-8 rounded-lg bg-[#006217]/5 flex items-center justify-center text-[12px] font-black">
                      0{idx + 1}
                  </span>
                  {section.title}
              </h2>
              <div className="pl-11 border-l-2 border-border/20 group-hover:border-[#006217]/20 transition-colors">
                  <p className="text-muted-foreground text-[15px] md:text-[16px] leading-[1.8] font-medium max-w-3xl">
                  {section.content}
                  </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer Disclaimer */}
      <section className="bg-muted/20 border border-border/40 rounded-3xl p-8 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
            <ShieldAlert size={100} />
        </div>
        <div className="relative z-10">
            <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground mb-4">
                <ShieldAlert size={14} className="text-[#006217]" />
                Compliance Notice
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed italic">
                This document is a representational dummy template generated for UI verification. 
                For enforceable legal contracts, please refer to the official hardcopy documentation 
                provided by Kazema Global during the procurement process.
            </p>
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center py-8 border-t border-border/40">
        <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-[#006217] transition-colors cursor-pointer group"
        >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            previous Page
        </button>
        <div className="flex items-center gap-2 text-[10px] font-black text-[#006217] uppercase tracking-widest bg-[#006217]/5 px-4 py-2 rounded-full border border-[#006217]/10">
            <Calendar size={12} />
            GCC Region • 2024
        </div>
      </div>
    </main>
  );
}
