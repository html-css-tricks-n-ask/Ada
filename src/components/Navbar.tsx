"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-white/5">
      <div className="max-w-[1440px] mx-auto h-[83px] px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        
        {/* Left: Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <Logo className="w-[46px] h-[46px] group-hover:scale-105 transition-transform duration-200" />
          <span className="font-work font-semibold text-[18px] leading-[52px] tracking-[3px] text-white whitespace-nowrap">
            Ada Psychiatry
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1.5 font-work font-medium text-[14px] leading-[52px] text-white hover:text-[#FCF38A] transition-colors">
              <span>Who we are</span>
              <ChevronDown className="w-4 h-4 text-white group-hover:text-[#FCF38A] group-hover:rotate-180 transition-transform duration-200" />
            </button>
          </div>

          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1.5 font-work font-medium text-[14px] leading-[52px] text-white hover:text-[#FCF38A] transition-colors">
              <span>Who we treat</span>
              <ChevronDown className="w-4 h-4 text-white group-hover:text-[#FCF38A] group-hover:rotate-180 transition-transform duration-200" />
            </button>
          </div>

          <Link
            href="#services"
            className="font-work font-medium text-[14px] leading-[52px] text-white hover:text-[#FCF38A] transition-colors"
          >
            Services
          </Link>

          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1.5 font-work font-medium text-[14px] leading-[52px] text-white hover:text-[#FCF38A] transition-colors">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4 text-white group-hover:text-[#FCF38A] group-hover:rotate-180 transition-transform duration-200" />
            </button>
          </div>
        </nav>

        {/* Right: Book an Appointment CTA */}
        <div className="hidden lg:flex items-center">
          <button
            className="btn-gold w-[209px] h-[46px] rounded-[50px] font-work font-medium text-[14px] leading-[18px] text-black flex items-center justify-center cursor-pointer select-none"
          >
            Book an Appointment
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#FCF38A] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-b border-neutral-800 px-6 py-6 space-y-4 backdrop-blur-md animate-fadeIn">
          <div className="flex flex-col space-y-3">
            <Link
              href="#who-we-are"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-white font-work font-medium text-base py-2 hover:text-[#FCF38A]"
            >
              <span>Who we are</span>
              <ChevronDown className="w-4 h-4" />
            </Link>
            <Link
              href="#who-we-treat"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-white font-work font-medium text-base py-2 hover:text-[#FCF38A]"
            >
              <span>Who we treat</span>
              <ChevronDown className="w-4 h-4" />
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-work font-medium text-base py-2 hover:text-[#FCF38A]"
            >
              Services
            </Link>
            <Link
              href="#resources"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-white font-work font-medium text-base py-2 hover:text-[#FCF38A]"
            >
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-4 border-t border-neutral-800">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold w-full h-[46px] rounded-[50px] font-work font-medium text-[14px] text-black flex items-center justify-center"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
