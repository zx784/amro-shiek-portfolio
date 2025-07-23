import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  // Manually flatten all footer data into one array
  const allLinks: Array<{ name: string; icon: any; link: string }> = [];
  FOOTER_DATA.forEach(column => {
    column.data.forEach(item => {
      allLinks.push(item);
    });
  });

  // Color palette matching the page theme
  const colors = [
    "text-purple-400", // Purple
    "text-cyan-400", // Cyan
    "text-blue-400", // Blue
    "text-emerald-400", // Emerald
    "text-pink-400", // Pink
    "text-indigo-400", // Indigo
    "text-amber-400",  // Amber
  ];

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-3 sm:p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        {/* Single horizontal scrolling line with circular effect */}
        <div className="w-full overflow-hidden">
          <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 animate-scroll-fast" style={{ width: 'max-content' }}>
            {/* Duplicate the links to create seamless loop */}
            {[...allLinks, ...allLinks].map(({ icon: Icon, name, link }, index) => (
              <Link
                key={`footer-link-${index}`}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className={`flex flex-row items-center whitespace-nowrap hover:text-white transition-colors duration-300 ${
                  colors[index % colors.length]
                }`}
              >
                {Icon && <Icon className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />}
                <span className="text-xs sm:text-sm md:text-[15px] font-medium">{name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-[15px] sm:mb-[20px] text-xs sm:text-sm md:text-[15px] text-center mt-6 sm:mt-8 px-4">
          &copy; Amro Shiek {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
