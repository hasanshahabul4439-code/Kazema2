import React from "react";
import { Building2, Users, Mail, MessageSquare, CheckCircle } from "lucide-react";

const stats = [
  {
    number: "5773+",
    label: "Projects Completed",
  },
  {
    number: "5573+",
    label: "Happy Clients",
  },
  {
    number: "3757+",
    label: "Mail Conversation",
  },
  {
    number: "3784+",
    label: "Comments Reserved",
  },
];

export default function CounterStats() {
  return (
    <section className="w-full relative overflow-hidden bg-muted/30 dark:bg-muted/10 pointer-events-auto">
      {/* Floating Icon Texture Layer */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute top-[10%] left-[5%] animate-bounce scale-150" style={{ animationDuration: '8s' }}>
          <Building2 size={120} />
        </div>
        <div className="absolute top-[60%] left-[15%] animate-pulse scale-110" style={{ animationDuration: '6s' }}>
          <CheckCircle size={80} />
        </div>
        <div className="absolute top-[20%] right-[10%] animate-bounce scale-125" style={{ animationDuration: '10s' }}>
          <Users size={100} />
        </div>
        <div className="absolute top-[70%] right-[20%] animate-pulse" style={{ animationDuration: '7s' }}>
          <Mail size={90} />
        </div>
        <div className="absolute top-[40%] left-[45%] animate-bounce scale-150 opacity-50" style={{ animationDuration: '12s' }}>
          <MessageSquare size={130} />
        </div>
        
        {/* Subtle Horizontal Lining */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(0,0,0,0.1)_50%,transparent_51%)] bg-[length:100%_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-border/50">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center text-center p-4 gap-3 group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#006217] dark:text-[#28a745] flex items-center gap-1 group-hover:scale-110 transition-transform duration-500">
                <span className="text-muted-foreground/30 font-extralight">[</span>
                <span className="font-medium">{stat.number}</span>
                <span className="text-muted-foreground/30 font-extralight">]</span>
              </div>
              <div className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
