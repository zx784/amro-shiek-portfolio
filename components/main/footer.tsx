export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-3 sm:p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="mb-[15px] sm:mb-[20px] text-xs sm:text-sm md:text-[15px] text-center mt-6 sm:mt-8 px-4">
          &copy; Amro Shiek {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
