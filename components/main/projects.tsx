"use client";

import { useState, useRef, useEffect } from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Calculate how many navigation positions we need
  const projectsPerView = 3; // Show 3 projects at a time
  const totalNavigationPositions = Math.ceil(PROJECTS.length / projectsPerView);

  const scrollToIndex = (index: number) => {
    setIsScrolling(true);
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / PROJECTS.length;
      const targetScrollLeft = index * projectsPerView * cardWidth;
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    }
    // Reset scrolling flag after animation
    setTimeout(() => setIsScrolling(false), 500);
  };

  // Move to next view when clicking dots
  const moveToNextView = () => {
    console.log('Current index:', currentIndex, 'Total positions:', totalNavigationPositions);
    if (currentIndex < totalNavigationPositions - 1) {
      console.log('Moving to next view:', currentIndex + 1);
      scrollToIndex(currentIndex + 1);
    } else {
      console.log('Already at last view');
    }
  };

  // Track scroll position to update current index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isScrolling) return; // Don't update during programmatic scrolling
      
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / PROJECTS.length;
      const projectsPerViewWidth = projectsPerView * cardWidth;
      
      // Calculate which view we're currently in
      const currentView = Math.floor(scrollLeft / projectsPerViewWidth);
      const clampedIndex = Math.max(0, Math.min(currentView, totalNavigationPositions - 1));
      
      console.log('Scroll position:', scrollLeft, 'Card width:', cardWidth, 'View width:', projectsPerViewWidth, 'Current view:', currentView, 'Clamped index:', clampedIndex);
      
      if (clampedIndex !== currentIndex) {
        setCurrentIndex(clampedIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex, totalNavigationPositions, projectsPerView, isScrolling]);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < totalNavigationPositions - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < totalNavigationPositions - 1;

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 relative"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-12 sm:py-16 md:py-20 text-center">
        My Projects
      </h1>
      
      {/* Projects Container */}
      <div className="relative w-full max-w-7xl">
        {/* Left Navigation Button */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-[38%] transform -translate-x-20 z-10 bg-[#2A0E61]/80 hover:bg-[#2A0E61] text-white p-4 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Right Navigation Button */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-20 z-10 bg-[#2A0E61]/80 hover:bg-[#2A0E61] text-white p-4 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Projects Horizontal Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 md:gap-10 overflow-x-auto scrollbar-hidden scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {PROJECTS.map((project, index) => (
            <div 
              key={project.title}
              className="flex-shrink-0 w-full sm:w-80 md:w-96 lg:w-[400px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
                technologies={project.technologies}
              />
            </div>
          ))}
        </div>

        {/* Back to Left Button (when scrolled right) */}
        {currentIndex > 0 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => scrollToIndex(0)}
              className="bg-[#7042f88b] hover:bg-[#7042f8] text-white px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to First Project
            </button>
          </div>
        )}

        {/* Navigation Position Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalNavigationPositions }, (_, index) => (
            <button
              key={index}
              onClick={moveToNextView}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#7042f8] scale-125' 
                  : 'bg-[#2A0E61]/50 hover:bg-[#2A0E61]'
              }`}
              aria-label={`Move to next view`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
