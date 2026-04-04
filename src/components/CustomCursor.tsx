"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  
  const activeInteractiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Disable on touch devices
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      
      const target = e.target as HTMLElement;
      // Determine if hovering an interactive element (button or link)
      const interactive = target.closest('a') || target.closest('button');
      
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" || !!interactive
      );

      // Global Magnetic Effect implementation
      if (interactive) {
        if (activeInteractiveRef.current !== interactive) {
          // If we had a previous one, reset it
          if (activeInteractiveRef.current) {
            activeInteractiveRef.current.style.transform = '';
          }
          activeInteractiveRef.current = interactive as HTMLElement;
        }

        const rect = interactive.getBoundingClientRect();
        const midX = rect.left + rect.width / 2;
        const midY = rect.top + rect.height / 2;
        
        const maxPull = 25; // Stronger physical pull boundary (px)
        let x = (e.clientX - midX) * 0.5; // High responsiveness
        let y = (e.clientY - midY) * 0.5;
        
        // Clamp the magnetic effect to avoid extreme jumps
        if (Math.abs(x) > maxPull) x = Math.sign(x) * maxPull;
        if (Math.abs(y) > maxPull) y = Math.sign(y) * maxPull;
        
        // Apply transform via style (overrides tailwind momentarily)
        interactive.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        interactive.style.transition = 'transform 0.1s ease-out';
        
        // * Snap the custom cursor itself to the element center like two magnets connecting *
        setPosition({ 
          x: midX + (e.clientX - midX) * 0.15, 
          y: midY + (e.clientY - midY) * 0.15 
        });
        
      } else {
        // Free movement
        setPosition({ x: e.clientX, y: e.clientY });

        if (activeInteractiveRef.current) {
          // Reset when mouse leaves interactive area securely
          activeInteractiveRef.current.style.transform = '';
          activeInteractiveRef.current.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
          activeInteractiveRef.current = null;
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      // Reset any active magnetic pull
      if (activeInteractiveRef.current) {
        activeInteractiveRef.current.style.transform = '';
        activeInteractiveRef.current.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
        activeInteractiveRef.current = null;
      }
    };
    
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Light Mode Dotted Texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-2] dark:hidden transition-opacity duration-300"
        style={{
          display: isVisible ? 'block' : 'none',
          backgroundImage: `radial-gradient(circle, rgba(0,98,23,0.3) 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
          WebkitMaskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black 10%, transparent 100%)`,
          maskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black 10%, transparent 100%)`,
        }}
      />
      {/* Dark Mode Dotted Texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-2] hidden dark:block transition-opacity duration-300"
        style={{
          display: isVisible ? 'block' : 'none',
          backgroundImage: `radial-gradient(circle, rgba(40,167,69,0.35) 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
          WebkitMaskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black 10%, transparent 100%)`,
          maskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black 10%, transparent 100%)`,
        }}
      />
      {/* Liquid Goo Filter Definition */}
      <svg className="hidden absolute pointer-events-none">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="goo" />
          </filter>
        </defs>
      </svg>
      
      {/* Gooey Cursor Container */}
      <div style={{ filter: 'url(#goo)' }} className="fixed inset-0 pointer-events-none z-[9999]">
        {/* Fast Inner Core */}
        <div 
          className="absolute top-0 left-0 w-4 h-4 bg-[#006217] dark:bg-[#28a745] rounded-full will-change-transform transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(${position.x - 8}px, ${position.y - 8}px, 0) scale(${isPointer ? 1.5 : 1})`,
            opacity: isVisible ? 1 : 0
          }}
        />
        {/* Slow Outer Liquid Mass */}
        <div 
          className="absolute top-0 left-0 w-12 h-12 bg-[#006217] dark:bg-[#28a745] rounded-full will-change-transform transition-all duration-[600ms] ease-out"
          style={{
            transform: `translate3d(${position.x - 24}px, ${position.y - 24}px, 0) scale(${isPointer ? 1.5 : 1})`,
            opacity: isVisible ? (isPointer ? 0.3 : 0.7) : 0,
          }}
        />
      </div>
    </>
  );
}
