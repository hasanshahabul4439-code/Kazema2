import { Building2, Factory, Rocket, Landmark, Gem, Briefcase, Globe2, ShieldCheck, Cpu } from "lucide-react";

export default function OurClients() {
  const clients = [
    { name: "ConstructCo", icon: Building2 },
    { name: "ModularTech", icon: Factory },
    { name: "AeroSpace", icon: Rocket },
    { name: "CapitalTrust", icon: Landmark },
    { name: "DiamondGroup", icon: Gem },
    { name: "GlobalTrade", icon: Briefcase },
    { name: "EcoNexus", icon: Globe2 },
    { name: "SecureLine", icon: ShieldCheck },
    { name: "CyberCore", icon: Cpu },
  ];

  // We duplicate the array to allow for a seamless infinite scroll loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-10 md:py-16 bg-muted/30 dark:bg-muted/10 overflow-hidden">
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Trusted by Industry Leaders
          </span>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden group">
          {/* Fading Edges for pure aesthetic depth */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background to-transparent z-10"></div>

          {/* Scrolling Track */}
          <div className="animate-infinite-scroll flex items-center gap-16 md:gap-24 opacity-80 pl-16 md:pl-24">
            {duplicatedClients.map((Client, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-muted-foreground hover:text-[#006217] dark:hover:text-[#28a745] transition-all duration-300 cursor-pointer grayscale hover:grayscale-0 flex-shrink-0"
              >
                <Client.icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-bold text-lg md:text-xl tracking-tight">
                  {Client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
