'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 sm:px-6 md:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[5px] sm:px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center"
        >
          <Image
            src="/my_photo/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-[#7042f8] shadow-md bg-black/60 mr-2 align-middle"
            draggable={false}
          />
          <div className="hidden md:flex font-bold ml-[10px] text-gray-300">Amro Shiek</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[24px] py-[10px] rounded-full text-gray-200 gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-base font-semibold"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5 items-center">
          {SOCIALS.map(({ link, name, icon: Icon }) => {
            const isMail = link.startsWith('mailto:');
            return (
              <Link
                href={link}
                {...(!isMail && { target: "_blank", rel: "noreferrer noopener" })}
                key={name}
                className="flex items-center gap-1 group"
              >
                <Icon className="h-6 w-6 text-white group-hover:text-[#7042f8] transition" />
                <span className="hidden lg:inline text-white group-hover:text-[#7042f8] text-sm font-medium transition">{name}</span>
              </Link>
            );
          })}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-2xl sm:text-3xl md:text-4xl p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] bg-opacity-95 backdrop-blur-md p-4 sm:p-5 flex flex-col items-center text-gray-300 md:hidden border-t border-[#2A0E61]/50">
          {/* Links */}
          <div className="flex flex-col items-center gap-4 w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center w-full py-2 text-lg font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-[#2A0E61]/50 w-full">
            {SOCIALS.map(({ link, name, icon: Icon }) => {
              const isMail = link.startsWith('mailto:');
              return (
                <Link
                  href={link}
                  {...(!isMail && { target: "_blank", rel: "noreferrer noopener" })}
                  key={name}
                  className="flex items-center gap-2 p-2 hover:bg-[#2A0E61]/20 rounded-lg transition"
                >
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  <span className="text-white text-base sm:text-lg font-medium">{name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};