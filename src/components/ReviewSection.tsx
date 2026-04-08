"use client";

import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const reviews = [
  {
    text: "Kazema delivered exceptional portable setups for our VIP construction site. The luxury units were spotless, durable, and highly professional. Exceeded our expectations!",
    name: "Ahmed Al Mansoori",
    role: "Operations Manager, ConstructCo"
  },
  {
    text: "Their modular cabins completely transformed how our teams operate on remote locations. Fast delivery, superior build quality, and exactly as promised.",
    name: "Sarah Jenkins",
    role: "Site Director, ModularTech"
  },
  {
    text: "We rely on Kazema for all our large-scale corporate events. The sanitation stations are resilient against high traffic and seamlessly fit into our aesthetics.",
    name: "Fahad Tariq",
    role: "Event Coordinator, GlobalTrade"
  },
  {
    text: "The custom ablution blocks we ordered were perfect for our remote mining camp. Built to withstand extreme weather while maintaining excellent hygiene standards.",
    name: "Marcus Thorne",
    role: "Logistics Coordinator, EcoNexus"
  },
  {
    text: "Incredible turnaround time! We needed 50 portable units for a festival within a week, and Kazema delivered without a single compromise on quality.",
    name: "Elena Rodriguez",
    role: "Festival Director, LiveArts"
  },
  {
    text: "Their security cabins are robust, well-insulated, and provide excellent visibility. It's clear Kazema understands the rigorous demands of industrial security.",
    name: "Khalid Youssef",
    role: "Security Chief, SecureLine"
  },
  {
    text: "Specialized site offices for our PeakBuild project. The customization was exactly what we needed for a high-traffic urban construction zone.",
    name: "Robert Chen",
    role: "Site Manager, PeakBuild"
  },
  {
    text: "Managing a desert expedition requires housing that can take the heat. Kazema's insulated cabins are a game-changer for my team.",
    name: "Layla Hassan",
    role: "Operations Lead, DesertEx"
  },
  {
    text: "Offshore units require precision and high-grade materials. Kazema delivered modular blocks that met all our rigorous safety standards.",
    name: "Michael O'Neill",
    role: "Project Coordinator, OilGrid"
  },
  {
    text: "Public infrastructure sanitation simplified. Their units are easy to maintain and fit perfectly into our urban renewal projects.",
    name: "Fatima Zahra",
    role: "General Manager, UrbanPulse"
  }
];

export default function ReviewSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scrollBy = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.review-card');
      if (card) {
        const cardWidth = card.clientWidth + 32; // width + gap
        const offset = direction === 'left' ? -cardWidth : cardWidth;
        scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-10 md:py-16 w-full relative">
      <SectionHeader
        title="What Our Clients Say"
        description="Discover why industry leaders trust Kazema for their modular and sanitation solutions."
      />

      <div className="mt-12 max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Navigation Arrows (Middle Sides) */}
        <button 
          onClick={() => scrollBy('left')}
          disabled={!showLeftArrow}
          className={`absolute left-0 lg:-left-6 top-[calc(50%-2rem)] -translate-y-1/2 z-30 p-3 md:p-4 rounded-full border border-border bg-background/90 backdrop-blur-sm shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 ${!showLeftArrow ? 'opacity-0 pointer-events-none' : 'opacity-100 cursor-pointer hover:bg-muted hover:border-primary/50'}`}
          aria-label="Previous review"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>

        <button 
          onClick={() => scrollBy('right')}
          disabled={!showRightArrow}
          className={`absolute right-0 lg:-right-6 top-[calc(50%-2rem)] -translate-y-1/2 z-30 p-3 md:p-4 rounded-full border border-border bg-background/90 backdrop-blur-sm shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 ${!showRightArrow ? 'opacity-0 pointer-events-none' : 'opacity-100 cursor-pointer hover:bg-muted hover:border-primary/50'}`}
          aria-label="Next review"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>

        {/* Slider Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="review-card w-[85vw] md:w-[45vw] lg:w-[calc(33.333%-1.35rem)] flex-shrink-0 snap-start bg-card border border-border mt-2 shadow-md rounded-2xl p-8 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-500 group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Star className="w-32 h-32 text-[#006217] dark:text-[#28a745] fill-[#006217] dark:fill-[#28a745]" />
              </div>

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500 hover:scale-110 transition-transform" />
                ))}
              </div>

              <p className="text-muted-foreground italic leading-relaxed text-sm md:text-base flex-1 relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 relative z-10 pt-4">
                <div className="w-12 h-12 rounded-full bg-[#006217] text-white dark:bg-[#28a745] dark:text-black flex items-center justify-center font-bold text-lg shadow-inner flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="font-bold text-foreground text-sm truncate">{review.name}</span>
                  <span className="text-xs text-muted-foreground font-medium truncate">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
