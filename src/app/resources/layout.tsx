"use client";

import React from "react";

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen relative overflow-x-clip bg-background">
      {/* Universal Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#006217]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#006217]/5 rounded-full blur-[100px] -z-10" />
      
      {/* Content Container */}
      <div className="w-full">
        {children}
      </div>
    </main>
  );
}
