"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

// Performance detection
const isLowPerformanceDevice = () => {
  if (typeof window === 'undefined') return false;
  const connection = (navigator as any).connection;
  return connection?.effectiveType === 'slow-2g' || 
         connection?.effectiveType === '2g' ||
         window.innerWidth < 768;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Delay animations on low-performance devices
    const timer = setTimeout(() => setShouldAnimate(true), isLowPerformanceDevice() ? 200 : 50);
    return () => clearTimeout(timer);
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = isLowPerformanceDevice() ? 0.05 : 0.1;

  if (isLowPerformanceDevice()) {
    return (
      <div
        ref={ref}
        className="w-full h-full flex items-center justify-center"
        style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.3s ease' }}
      >
        <Image 
          src={`/skills/${src}`} 
          width={width} 
          height={height} 
          alt={name}
          className="object-contain w-full h-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={shouldAnimate ? imageVariants : undefined}
      animate={inView && shouldAnimate ? "visible" : "hidden"}
      transition={{ 
        delay: shouldAnimate ? index * animationDelay : 0,
        duration: 0.3,
        ease: "easeOut"
      }}
      className="w-full h-full flex items-center justify-center"
    >
      <Image 
        src={`/skills/${src}`} 
        width={width} 
        height={height} 
        alt={name}
        className="object-contain w-full h-full"
        loading="lazy"
      />
    </motion.div>
  );
};
