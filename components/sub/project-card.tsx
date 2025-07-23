import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  technologies?: readonly string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  technologies = [],
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:shadow-xl hover:shadow-[#2A0E61]/20 transition-all duration-300 flex-1 group hover:scale-105 hover:border-[#7042f88b] h-full flex flex-col"
    >
      <div className="relative flex-shrink-0">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:brightness-110 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="relative p-3 sm:p-4 bg-black/20 backdrop-blur-sm flex-1 flex flex-col">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-[#b49bff] transition-colors duration-300 line-clamp-2">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 flex-1 line-clamp-3">
          {description}
        </p>
        
        {/* Technologies Badges */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
            {technologies.slice(0, 8).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-[#2A0E61]/50 text-[#b49bff] rounded-full border border-[#7042f88b]/30 hover:bg-[#2A0E61]/70 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 8 && (
              <span className="px-2 py-1 text-xs bg-[#2A0E61]/50 text-gray-400 rounded-full border border-[#7042f88b]/30">
                +{technologies.length - 8} more
              </span>
            )}
          </div>
        )}
        
        {/* View Project Link */}
        <div className="flex items-center text-[#b49bff] text-sm font-medium group-hover:text-white transition-colors duration-300 mt-auto">
          <span>View Project</span>
          <svg 
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </Link>
  );
};
