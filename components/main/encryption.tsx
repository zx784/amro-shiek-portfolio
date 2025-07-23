"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

import { slideInFromTop } from "@/lib/motion";
import { isLowPerformanceDevice } from "@/lib/utils";
import { Player } from "@lottiefiles/react-lottie-player";

export const Encryption = () => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    // Delay video loading to prioritize content
    const timer = setTimeout(() => setShouldLoadVideo(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20 px-4 sm:px-6 md:px-8">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          AI & Data Intelligence Flow
        </motion.div>
      </div>

      {/* Responsive AI/Data Intelligence Flow Animation with Input/Output Streams */}
      <div className="flex flex-col items-center justify-center translate-y-[-30px] sm:translate-y-[-40px] md:translate-y-[-50px] absolute z-[20] w-full h-auto">
        <div className="flex flex-row items-center justify-center w-full gap-4 sm:gap-8 md:gap-16">
          {/* Input stream */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            className="hidden sm:flex flex-col items-end justify-center flex-1"
          >
            <span className="text-xs text-cyan-400 font-mono">{`{data}`}</span>
            <span className="text-xs text-purple-400 font-mono">101010</span>
            <span className="text-xs text-cyan-400 font-mono">Σ ∫ π</span>
            <span className="text-xs text-purple-400 font-mono">AI →</span>
          </motion.div>

          {/* Lottie Animation Centerpiece */}
          <div className="flex flex-col items-center justify-center">
            <Player
              autoplay
              loop
              src="/lottie/ai-intelligence.json"
              style={{ height: '220px', width: '220px', maxWidth: '60vw', background: 'transparent' }}
            />
            {/* Input → Processing → Output label */}
            <div className="mt-3 text-xs text-gray-400 flex flex-row gap-2 items-center justify-center">
              <span className="text-cyan-400">Input</span>
              <span className="text-gray-500">→</span>
              <span className="text-purple-400">Processing</span>
              <span className="text-gray-500">→</span>
              <span className="text-cyan-400">Output</span>
            </div>
          </div>

          {/* Output stream */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
            className="hidden sm:flex flex-col items-start justify-center flex-1"
          >
            <span className="text-xs text-cyan-400 font-mono">← ML</span>
            <span className="text-xs text-purple-400 font-mono">f(x)</span>
            <span className="text-xs text-cyan-400 font-mono">Output</span>
            <span className="text-xs text-purple-400 font-mono">Result</span>
          </motion.div>
        </div>
        <div className="Welcome-box px-[12px] sm:px-[15px] py-[3px] sm:py-[4px] z-[20] border my-[15px] sm:my-[20px] border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-[10px] sm:text-[12px]">AI/Data Intelligence</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px] w-full">
        <div className="cursive text-base sm:text-lg md:text-[20px] font-medium text-center text-gray-300 px-2">
          Empower your business with smart, data-driven intelligence.
        </div>
      </div>
    </div>
  );
};
