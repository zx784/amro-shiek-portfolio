"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-20 mt-20 sm:mt-24 md:mt-32 lg:mt-40 w-full z-[20] gap-8 lg:gap-12"
    >
      <div className="h-full w-full flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center m-auto text-start order-2 lg:order-1">
        {/* Badge/Small Heading */}
        <motion.div
          variants={slideInFromTop}
          className="py-[6px] sm:py-[8px] px-[10px] sm:px-[14px] border border-[#7042f88b] opacity-[0.95] w-fit rounded-full bg-gradient-to-r from-[#2A0E61]/80 to-[#7042f8]/60 mb-2 flex items-center gap-2"
        >
          <SparklesIcon className="text-[#b49bff] h-4 w-4 sm:h-5 sm:w-5" />
          <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
            🚀 Data Science Enthusiast & Fullstack Developer
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white max-w-[700px] w-auto h-auto leading-tight"
        >
          Hi, I'm Amro Shiek — turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">data</span> into decisions and ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">products</span>.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-300 my-3 sm:my-4 md:my-5 max-w-[700px]"
        >
          A Computer Science student specializing in Data Science with mastery in Machine Learning, Data Analysis, and Software Engineering. I build smart, high-performing solutions that combine logic, creativity, and speed.
        </motion.p>

        {/* Motivational Quote */}
        <motion.p
          variants={slideInFromLeft(1)}
          className="italic text-gray-400 text-sm sm:text-base mb-4"
        >
          "I work smart and hard — delivering high-quality results in less time."
        </motion.p>

        {/* Buttons */}
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center order-1 lg:order-2"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={300}
          width={300}
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[650px] xl:h-[650px] select-none"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
};
