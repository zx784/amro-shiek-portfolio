"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[6px] sm:py-[8px] px-[6px] sm:px-[7px] border border-[#7042f88b] opacity-[0.9] w-fit"
      >
        <SparklesIcon className="text-[#b49bff] mr-[8px] sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
        <h1 className="Welcome-text text-[11px] sm:text-[13px]">
          CS Student | Data Scientist
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-xl sm:text-2xl md:text-[30px] text-white font-medium mt-[8px] sm:mt-[10px] text-center mb-[12px] sm:mb-[15px]"
      >
        Building Data-Driven Solutions That Deliver Real Results.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-base sm:text-lg md:text-[20px] text-gray-200 mb-8 sm:mb-10 mt-[8px] sm:mt-[10px] text-center"
      >
        From Machine Learning to Fullstack Engineering — I turn complexity into clarity and performance.
      </motion.div>
    </div>
  );
};
