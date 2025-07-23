import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Performance detection utilities
export const isLowPerformanceDevice = () => {
  if (typeof window === 'undefined') return false;
  const connection = (navigator as any).connection;
  return connection?.effectiveType === 'slow-2g' || 
         connection?.effectiveType === '2g' ||
         window.innerWidth < 768;
};

export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

export const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
