import React from "react";

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
    <section className="w-full relative overflow-hidden bg-muted/30 dark:bg-muted/10 border-y border-border pointer-events-auto">
      {/* Subtle diagonal striped background texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
          backgroundSize: "10px 10px"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 relative z-10">
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
