"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait until the page is fully loaded, and add a small artificial delay
    // to allow the animation to play
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback timeout just in case load is already complete or takes too long
      const fallbackTimer = setTimeout(() => setLoading(false), 3500);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="liquid-loader">
        <div className="loading-text">
          Loading<span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </div>

        <div className="loader-track">
          <div className="liquid-fill"></div>
        </div>
      </div>
    </div>
  );
}
