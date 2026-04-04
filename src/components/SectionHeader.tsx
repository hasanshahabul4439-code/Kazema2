"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

interface SectionHeaderProps {
  title: string;
  description: string;
  viewMoreText?: string;
  onViewMore?: () => void;
}

export default function SectionHeader({ title, description, viewMoreText = "View All", onViewMore }: SectionHeaderProps) {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
    if (onViewMore) onViewMore();
  };

  return (

    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full mb-8">
      <div className="flex flex-col max-w-2xl flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          {description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 md:mt-0">
        <Button
          onClick={handleClick}
          className="flex items-center gap-2 px-6 font-semibold transition-all"
        >
          {viewMoreText}
          <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isRotated ? "rotate-180" : ""}`} />
        </Button>
      </div>
    </div>

  );
}
