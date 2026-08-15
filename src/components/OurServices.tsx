"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItem {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    title: "Psychiatric",
    subtitle: "Evaluation",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-[#B37E22]" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 38V34C14 30 16 28 18 28H22C24 28 26 26 26 24V22" />
        <path d="M14 38H30" />
        <path d="M26 22C26 22 28 22 30 20C32 18 32 15 32 15" />
        <path d="M24 10C21 10 19 12 19 15C19 17 20 18 21 19C19 20 18 22 19 24C20 26 22 27 24 27" />
        <path d="M24 10C27 10 29 12 29 15C29 17 28 18 27 19C29 20 30 22 29 24C28 26 26 27 24 27" />
        <path d="M24 10V27" />
      </svg>
    ),
  },
  {
    title: "Medication",
    subtitle: "Management",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-[#B37E22]" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 16V32" />
        <path d="M16 24H32" />
        <path d="M21 16H27V21H32V27H27V32H21V27H16V21H21V16Z" fill="#B37E22" fillOpacity="0.1" />
      </svg>
    ),
  },
  {
    title: "Supportive",
    subtitle: "Psychotherapy",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-[#B37E22]" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 20C14 20 12 22 12 24C12 26 13.5 27.5 15 28C14 29 14 31 15 32C16 33 18 34 20 33" />
        <path d="M32 20C34 20 36 22 36 24C36 26 34.5 27.5 33 28C34 29 34 31 33 32C32 33 30 34 28 33" />
        <path d="M18 16C18 13.5 20.5 12 23 12C25 12 26.5 13 27 14C27.5 13 29 12 31 12C33.5 12 36 13.5 36 16" />
        <path d="M24 22C21 19 18 21 18 24C18 27 24 32 24 32C24 32 30 27 30 24C30 21 27 19 24 22Z" fill="#B37E22" fillOpacity="0.15" />
        <path d="M24 24V28M22 26H26" />
      </svg>
    ),
  },
  {
    title: "ADHD",
    subtitle: "Screening",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-[#B37E22]" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 20C14 20 13 22 13 24C13 26 14.5 28 16 29C15 31 16 33 18 34C20 35 22 35 24 34" />
        <path d="M32 20C34 20 35 22 35 24C35 26 33.5 28 32 29C33 31 32 33 30 34C28 35 26 35 24 34" />
        <path d="M17 18C17 15 19.5 13 22 13C23 13 24 13.5 24 14C24 13.5 25 13 26 13C28.5 13 31 15 31 18" />
        <text x="24" y="27" textAnchor="middle" fill="#B37E22" stroke="none" fontFamily="'Work Sans', sans-serif" fontSize="8" fontWeight="bold" letterSpacing="0.5">
          ADHD
        </text>
      </svg>
    ),
  },
  {
    title: "MAT",
    subtitle: "Treatment",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-[#B37E22]" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 37V33C15 29 17 27 19 27H23C25 27 27 25 27 23V21" />
        <path d="M15 37H29" />
        <path d="M27 21C27 21 29 21 31 19C33 17 33 14 33 14" />
        <circle cx="24" cy="16" r="5" fill="#B37E22" fillOpacity="0.15" />
        <path d="M22 14L26 18M26 14L22 18" />
      </svg>
    ),
  },
  {
    title: "Gene Sight",
    subtitle: "Testing",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-[#B37E22]" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="16" />
        <path d="M20 18H28V20H20V18Z" />
        <path d="M20 28H28V30H20V28Z" />
        <path d="M22 20V28" />
        <path d="M26 20V28" />
        <path d="M24 16V32" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M18 24H30" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function OurServices() {
  return (
    <section id="services" className="relative w-full bg-[#FAF4E6] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-16 lg:mb-20"
        >
          <h2 className="font-abhaya font-bold text-[36px] sm:text-[42px] lg:text-[46px] leading-tight text-black">
            Our Services
          </h2>
        </motion.div>

        {/* 6 Services Items with exact 102px gap on desktop */}
        <div className="flex flex-wrap lg:flex-nowrap items-start justify-center gap-y-10 gap-x-6 sm:gap-x-10 lg:gap-x-[102px]">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center group cursor-pointer shrink-0"
            >
              {/* Circular Icon Container */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-[86px] h-[86px] sm:w-[94px] sm:h-[94px] rounded-full bg-[#F3E8D3] group-hover:bg-[#EBDDC3] border border-[#DFC377]/30 flex items-center justify-center shadow-[0_4px_16px_rgba(193,140,44,0.12)]"
              >
                {item.icon}
              </motion.div>

              {/* Title & Subtitle */}
              <div className="mt-4 sm:mt-5 flex flex-col items-center">
                <span className="font-abhaya font-bold text-[17px] sm:text-[18px] leading-[22px] text-black whitespace-nowrap group-hover:text-[#B37E22] transition-colors">
                  {item.title}
                </span>
                {item.subtitle && (
                  <span className="font-abhaya font-bold text-[17px] sm:text-[18px] leading-[22px] text-black whitespace-nowrap group-hover:text-[#B37E22] transition-colors">
                    {item.subtitle}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 sm:mt-16 lg:mt-20 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="btn-gold px-8 h-[50px] rounded-[50px] flex items-center justify-center gap-2.5 font-work font-medium text-[15px] leading-[18px] text-black cursor-pointer group select-none"
          >
            <span>View our services</span>
            <ArrowRight className="w-[18px] h-[18px] stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
