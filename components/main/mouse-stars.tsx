"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface SymbolParticle {
  id: number;
  x: number;
  y: number;
  symbol: string;
  size: number;
  opacity: number;
  velocity: { x: number; y: number };
}

const symbols = [
  "AI", "ML", "⚡", "NN", "DL", "RL", "CV", "NLP",
  "∑", "∫", "π", "∞", "√", "±", "×", "÷", "=", "≠", "≤", "≥", "∈", "∉", "⊂", "⊃", "∪", "∩",
  "JS", "TS", "HTML", "CSS", "SQL", "NoSQL", "REST", "GQL", "{ }", "< />", "</>",
  "&&", "||", "!=", "==", "++", "--", "=>", "->", "//", "/* */",
  "@", "#", "$", "%", "^", "&", "*", "_", "~"
];

const MAX_PARTICLES = 100;
const PARTICLE_SIZE_MIN = 10;
const PARTICLE_SIZE_MAX = 16;

// Performance detection
const isLowPerformanceDevice = () => {
  if (typeof window === 'undefined') return false;
  const connection = (navigator as any).connection;
  return connection?.effectiveType === 'slow-2g' || 
         connection?.effectiveType === '2g' ||
         window.innerWidth < 768;
};

export const MouseStars = () => {
  const [particles, setParticles] = useState<SymbolParticle[]>([]);
  const [shouldRender, setShouldRender] = useState(false);
  const animationRef = useRef<number>();
  const symbolIdRef = useRef(0);
  const lastMouse = useRef({ x: 0, y: 0 });
  const lastMoveTime = useRef(Date.now());
  const throttleRef = useRef(0);

  // Throttled particle creation
  const addParticles = useCallback((x: number, y: number, dx: number, dy: number) => {
    const now = Date.now();
    if (now - throttleRef.current < 16) return; // ~60fps throttle
    throttleRef.current = now;

    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 3) return;
    
    const numParticles = Math.max(1, Math.min(3, Math.floor(distance / 5)));
    let newParticles: SymbolParticle[] = [];
    for (let i = 0; i < numParticles; i++) {
      const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.5;
      const speed = 1 + Math.random() * 1;
      const velocity = {
        x: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.2,
        y: Math.sin(angle) * speed + (Math.random() - 0.5) * 0.2,
      };
      newParticles.push({
        id: symbolIdRef.current++,
        x,
        y,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        size: Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN) + PARTICLE_SIZE_MIN,
        opacity: 1,
        velocity,
      });
    }
    setParticles(prev => {
      const combined = [...prev, ...newParticles];
      return combined.length > MAX_PARTICLES ? combined.slice(combined.length - MAX_PARTICLES) : combined;
    });
  }, []);

  useEffect(() => {
    // Delay rendering to prioritize critical content
    const timer = setTimeout(() => setShouldRender(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!shouldRender || isLowPerformanceDevice()) return;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMouse.current.x;
      const dy = e.clientY - lastMouse.current.y;
      addParticles(e.clientX, e.clientY, dx, dy);
      lastMouse.current = { x: e.clientX, y: e.clientY };
      lastMoveTime.current = Date.now();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Animation loop
    const animate = () => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.velocity.x,
            y: p.y + p.velocity.y,
            opacity: p.opacity - 0.03,
          }))
          .filter(p => p.opacity > 0.05)
      );
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [shouldRender, addParticles]);

  if (!shouldRender || isLowPerformanceDevice()) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute select-none font-bold"
          style={{
            left: p.x,
            top: p.y,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            color: "#fff",
            transform: `translate(-50%, -50%)`,
            pointerEvents: 'none',
            textShadow: `0 0 8px #3B82F6, 0 0 2px #fff`,
            filter: `drop-shadow(0 0 4px #6366F1)`
          }}
        >
          {p.symbol}
        </div>
      ))}
    </div>
  );
}; 