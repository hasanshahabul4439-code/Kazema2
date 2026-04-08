"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";

// WhatsApp SVG icon (no lucide equivalent)
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function FloatingContact() {
  const [hovered, setHovered] = useState<string | null>(null);

  const contacts = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      shortLabel: "WhatsApp",
      href: "https://wa.me/971800529362",
      icon: <WhatsAppIcon />,
      bg: "bg-[#25D366]",
      hoverBg: "hover:bg-[#1da851]",
      text: "text-white",
      mobileText: "text-foreground",
    },
    {
      id: "phone",
      label: "800 KAZEMA",
      shortLabel: "Calls",
      href: "tel:800529362",
      icon: <Phone className="w-5 h-5" />,
      bg: "bg-[#006217]",
      hoverBg: "hover:bg-[#004e12]",
      text: "text-white",
      mobileText: "text-foreground",
    },
    {
      id: "email",
      label: "Email Us",
      shortLabel: "Email",
      href: "mailto:sales@kazemaportabletoilets.com",
      icon: <Mail className="w-5 h-5" />,
      bg: "bg-foreground dark:bg-white",
      hoverBg: "hover:opacity-80",
      text: "text-background dark:text-foreground",
      mobileText: "text-foreground",
    },
  ];

  return (
    <>
      {/* ───────────────────────────────────────────────────────── */}
      {/* 1. DESKTOP FLOATING SIDEBAR                               */}
      {/* ───────────────────────────────────────────────────────── */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-0">
        {contacts.map((c, i) => (
          <a
            key={c.id}
            href={c.href}
            target={c.id === "whatsapp" ? "_blank" : undefined}
            rel={c.id === "whatsapp" ? "noopener noreferrer" : undefined}
            onMouseEnter={() => setHovered(c.id)}
            onMouseLeave={() => setHovered(null)}
            className={`
              group flex items-center gap-3 overflow-hidden shadow-lg
              ${c.bg} ${c.hoverBg} ${c.text}
              transition-all duration-300 ease-in-out
              ${i === 0 ? "rounded-tl-xl" : ""}
              ${i === contacts.length - 1 ? "rounded-bl-xl" : ""}
            `}
            style={{
              width: hovered === c.id ? "160px" : "48px",
              height: "48px",
              paddingLeft: "14px",
              paddingRight: "12px",
            }}
          >
            <span className="flex-shrink-0">{c.icon}</span>
            <span
              className="text-xs font-bold uppercase tracking-wider whitespace-nowrap overflow-hidden transition-all duration-300"
              style={{
                opacity: hovered === c.id ? 1 : 0,
                maxWidth: hovered === c.id ? "120px" : "0px",
              }}
            >
              {c.label}
            </span>
          </a>
        ))}
      </div>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 2. REFINED MOBILE BOTTOM BAR (WHATSAPP-STYLE CLEAN)      */}
      {/* ───────────────────────────────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[150] bg-background border-t border-border/80 pt-2 pb-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-around px-2">
          {contacts.map((c) => (
            <a
              key={c.id}
              href={c.href}
              className="flex flex-col items-center gap-1 group active:scale-95 transition-transform"
              target={c.id === "whatsapp" ? "_blank" : undefined}
              rel={c.id === "whatsapp" ? "noopener noreferrer" : undefined}
            >
              <div className="relative px-5 py-1 rounded-full group-hover:bg-muted/50 transition-colors">
                <div className={`${c.mobileText} opacity-90`}>
                  {c.icon}
                </div>
              </div>
              <span className="text-[11px] font-bold tracking-tight text-foreground/90">
                {c.shortLabel}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
