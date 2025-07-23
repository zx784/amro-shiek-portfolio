"use client";

import { useEffect, useState } from "react";

export const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    domContentLoaded: 0,
    firstPaint: 0,
    firstContentfulPaint: 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const firstPaint = paint.find(entry => entry.name === 'first-paint');
      const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint');

      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: firstPaint ? firstPaint.startTime : 0,
        firstContentfulPaint: firstContentfulPaint ? firstContentfulPaint.startTime : 0,
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
      <div>DOM Ready: {metrics.domContentLoaded.toFixed(2)}ms</div>
      <div>First Paint: {metrics.firstPaint.toFixed(2)}ms</div>
      <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
    </div>
  );
}; 