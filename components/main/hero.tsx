"use client";

import { useState, useEffect } from "react";
import { HeroContent } from "@/components/sub/hero-content";

// Performance detection
const isLowPerformanceDevice = () => {
  if (typeof window === 'undefined') return false;
  const connection = (navigator as any).connection;
  return connection?.effectiveType === 'slow-2g' || 
         connection?.effectiveType === '2g' ||
         window.innerWidth < 768;
};

export const Hero = () => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    // Delay video loading to prioritize content
    const timer = setTimeout(() => setShouldLoadVideo(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col h-full w-full min-h-screen">
      {shouldLoadVideo && !isLowPerformanceDevice() && (
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-200px] sm:top-[-250px] md:top-[-300px] lg:top-[-340px] left-0 w-full h-full object-cover -z-20"
          preload="metadata"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      )}

      <HeroContent />
    </div>
  );
};
