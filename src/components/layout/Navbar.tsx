"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/common/Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-[1440px] mx-auto h-[76px] sm:h-[83px] px-5 sm:px-8 lg:px-[40px] flex items-center justify-between">
        
        {/* Left: Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] group-hover:scale-105 transition-transform duration-200" />
          <span className="font-work font-semibold text-[16px] sm:text-[18px] leading-[52px] tracking-[2.5px] sm:tracking-[3px] text-white whitespace-nowrap">
            Ada Psychiatry
          </span>
        </Link>

        {/* Right: Desktop Navigation Links + CTA Button */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-[42px]">
          {/* Navigation Links */}
          <nav className="flex items-center gap-6 xl:gap-[36px]">
            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1.5 font-work font-medium text-[14px] leading-[52px] text-white hover:text-[#FCF38A] transition-colors">
                <span>Who we are</span>
                <ChevronDown className="w-3.5 h-3.5 text-white group-hover:text-[#FCF38A] group-hover:rotate-180 transition-transform duration-200" />
              </button>
            </div>

            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1.5 font-work font-medium text-[14px] leading-[52px] text-white hover:text-[#FCF38A] transition-colors">
                <span>Who we treat</span>
                <ChevronDown className="w-3.5 h-3.5 text-white group-hover:text-[#FCF38A] group-hover:rotate-180 transition-transform duration-200" />
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
                <ChevronDown className="w-3.5 h-3.5 text-white group-hover:text-[#FCF38A] group-hover:rotate-180 transition-transform duration-200" />
              </button>
            </div>
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-gold w-[209px] h-[46px] rounded-[50px] font-work font-medium text-[14px] leading-[18px] text-black flex items-center justify-center cursor-pointer select-none"
          >
            Book an Appointment
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-neutral-900/80 text-white hover:text-[#FCF38A] border border-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Modern Glassmorphic Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-black/95 border-b border-neutral-800 backdrop-blur-xl px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              
              {/* Who we are */}
              <div className="border-b border-neutral-900/80 py-2">
                <Link
                  href="#founder"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white font-work font-medium text-[16px] py-2 hover:text-[#FCF38A] transition-colors"
                >
                  Who we are
                </Link>
              </div>

              {/* Who we treat */}
              <div className="border-b border-neutral-900/80 py-2">
                <Link
                  href="#treatment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white font-work font-medium text-[16px] py-2 hover:text-[#FCF38A] transition-colors"
                >
                  Who we treat
                </Link>
              </div>

              {/* Services */}
              <div className="border-b border-neutral-900/80 py-2">
                <Link
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white font-work font-medium text-[16px] py-2 hover:text-[#FCF38A] transition-colors"
                >
                  Services
                </Link>
              </div>

              {/* Resources */}
              <div className="border-b border-neutral-900/80 py-2">
                <Link
                  href="#why-choose-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white font-work font-medium text-[16px] py-2 hover:text-[#FCF38A] transition-colors"
                >
                  Resources
                </Link>
              </div>

            </div>

            {/* Mobile Contact & CTA Bar */}
            <div className="pt-6 space-y-3">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-gold w-full h-[48px] rounded-[50px] font-work font-medium text-[15px] text-black flex items-center justify-center gap-2 shadow-lg shadow-[#C18C2C]/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </motion.button>
              
              <a
                href="tel:4805269292"
                className="w-full h-[44px] rounded-[50px] border border-white/20 text-white font-work font-medium text-[14px] flex items-center justify-center gap-2 hover:border-[#FCF38A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FCF38A]" />
                <span>Call: (480) 526-9292</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
