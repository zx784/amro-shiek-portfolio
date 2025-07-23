"use client";

import { useState, useEffect } from "react";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  FRONTEND_SKILL,
  BACKEND_SKILL,
  DATABASE_SKILL,
  DEVTOOLS_SKILL,
  DATASCIENCE_SKILL,
  OTHER_SKILL,
} from "@/constants";

// Performance detection
const isLowPerformanceDevice = () => {
  if (typeof window === 'undefined') return false;
  const connection = (navigator as any).connection;
  return connection?.effectiveType === 'slow-2g' || 
         connection?.effectiveType === '2g' ||
         window.innerWidth < 768;
};

export const Skills = () => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay video loading to prioritize content
    const timer = setTimeout(() => setShouldLoadVideo(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    let element: HTMLElement | null = null;
    if (typeof document !== 'undefined') {
      element = document.getElementById('skills');
      if (element) {
        observer.observe(element);
      }
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <SkillText />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-12 md:py-16 text-white bg-black bg-opacity-40 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-sm w-full max-w-7xl mx-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-center mb-6 sm:mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Technologies I Use</span>
        </h2>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white mb-4 sm:mb-6">Frontend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 justify-items-center">
              {FRONTEND_SKILL.map((skill, i) => (
                <div key={skill.skill_name} className="p-2 sm:p-3 md:p-4 bg-black rounded-lg sm:rounded-xl shadow-lg hover:scale-105 transition w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <SkillDataProvider
                    src={skill.image}
                    name={skill.skill_name}
                    width={32}
                    height={32}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>

          <hr className="my-6 sm:my-8 border-purple-500 opacity-30" />

          {/* Backend Skills */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white mb-4 sm:mb-6">Backend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 justify-items-center">
              {BACKEND_SKILL.map((skill, i) => (
                <div key={skill.skill_name} className="p-2 sm:p-3 md:p-4 bg-black rounded-lg sm:rounded-xl shadow-lg hover:scale-105 transition w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <SkillDataProvider
                    src={skill.image}
                    name={skill.skill_name}
                    width={32}
                    height={32}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>

          <hr className="my-6 sm:my-8 border-purple-500 opacity-30" />

          {/* Database Skills */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white mb-4 sm:mb-6">Databases</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 justify-items-center">
              {DATABASE_SKILL.map((skill, i) => (
                <div key={skill.skill_name} className="p-2 sm:p-3 md:p-4 bg-black rounded-lg sm:rounded-xl shadow-lg hover:scale-105 transition w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <SkillDataProvider
                    src={skill.image}
                    name={skill.skill_name}
                    width={32}
                    height={32}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>

          <hr className="my-6 sm:my-8 border-purple-500 opacity-30" />

          {/* Dev Tools & APIs */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white mb-4 sm:mb-6">Dev Tools & APIs</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 justify-items-center mx-auto" style={{ width: 'fit-content' }}>
              {DEVTOOLS_SKILL.map((skill, i) => (
                <div key={skill.skill_name} className="p-2 sm:p-3 md:p-4 bg-black rounded-lg sm:rounded-xl shadow-lg hover:scale-105 transition w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <SkillDataProvider
                    src={skill.image}
                    name={skill.skill_name}
                    width={32}
                    height={32}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>

          <hr className="my-6 sm:my-8 border-purple-500 opacity-30" />

          {/* Data Science & Machine Learning */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-white mb-4 sm:mb-6 px-2">Data Science & Machine Learning</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6 justify-items-center">
              {DATASCIENCE_SKILL.map((skill, i) => (
                <div key={skill.skill_name} className="p-2 sm:p-3 md:p-4 bg-black rounded-lg sm:rounded-xl shadow-lg hover:scale-105 transition w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <SkillDataProvider
                    src={skill.image}
                    name={skill.skill_name}
                    width={32}
                    height={32}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>

          <hr className="my-6 sm:my-8 border-purple-500 opacity-30" />

          {/* Other Skills */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white mb-4 sm:mb-6">Other</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 justify-items-center mx-auto" style={{ width: 'fit-content' }}>
              {OTHER_SKILL.map((skill, i) => (
                <div key={skill.skill_name} className="p-2 sm:p-3 md:p-4 bg-black rounded-lg sm:rounded-xl shadow-lg hover:scale-105 transition w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <SkillDataProvider
                    src={skill.image}
                    name={skill.skill_name}
                    width={32}
                    height={32}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {shouldLoadVideo && !isLowPerformanceDevice() && (
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="metadata"
              playsInline
              loop
              muted
              autoPlay
            >
              <source src="/videos/skills-bg.webm" type="video/webm" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};
