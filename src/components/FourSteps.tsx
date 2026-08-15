"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface StepItem {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    number: "01",
    label: "Schedule an appointment",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="10" width="32" height="30" rx="4" stroke="#FFFFFF" />
        <line x1="8" y1="18" x2="40" y2="18" stroke="#FFFFFF" />
        <line x1="16" y1="6" x2="16" y2="12" stroke="#FFFFFF" />
        <line x1="32" y1="6" x2="32" y2="12" stroke="#FFFFFF" />
        <circle cx="16" cy="24" r="1.5" fill="#FFFFFF" />
        <circle cx="24" cy="24" r="1.5" fill="#FFFFFF" />
        <circle cx="32" cy="24" r="1.5" fill="#FFFFFF" />
        <circle cx="16" cy="30" r="1.5" fill="#FFFFFF" />
        <circle cx="24" cy="30" r="1.5" fill="#FCF38A" />
        <circle cx="32" cy="30" r="1.5" fill="#FCF38A" />
        <path d="M14 34L17 37L22 32" stroke="#FCF38A" strokeWidth="2" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Connect with your provider",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12" stroke="#FFFFFF" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 26L20 20L25 25L22 28L17 23" />
        <path d="M34 26L28 20L23 25L26 28L31 23" />
        <path d="M10 22L16 16L21 21" stroke="#FCF38A" />
        <path d="M38 22L32 16L27 21" stroke="#FCF38A" />
        <path d="M8 20L12 24" />
        <path d="M40 20L36 24" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Discuss your comprehensive assessment",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26 12H38C40 12 42 14 42 16V22C42 24 40 26 38 26H35L31 30V26H28" stroke="#FCF38A" />
        <circle cx="33" cy="19" r="1" fill="#FCF38A" />
        <circle cx="36" cy="19" r="1" fill="#FCF38A" />
        <circle cx="16" cy="18" r="4" stroke="#FFFFFF" />
        <path d="M8 32C8 28 11.5 25 16 25C20.5 25 24 28 24 32" stroke="#FFFFFF" />
        <circle cx="28" cy="24" r="3.5" stroke="#FFFFFF" />
        <path d="M22 36C22 33 24.5 30.5 28 30.5C31.5 30.5 34 33 34 36" stroke="#FFFFFF" />
      </svg>
    ),
  },
  {
    number: "04",
    label: "Receive your individualized treatment plan",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12" stroke="#FFFFFF" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="10" width="24" height="30" rx="3" stroke="#FFFFFF" />
        <path d="M19 10V7C19 6 20 5 21 5H27C28 5 29 6 29 7V10" stroke="#FCF38A" />
        <circle cx="18" cy="18" r="1.5" stroke="#FCF38A" />
        <line x1="23" y1="18" x2="30" y2="18" />
        <circle cx="18" cy="25" r="1.5" stroke="#FCF38A" />
        <line x1="23" y1="25" x2="30" y2="25" />
        <circle cx="18" cy="32" r="1.5" stroke="#FCF38A" />
        <line x1="23" y1="32" x2="28" y2="32" />
      </svg>
    ),
  },
];

export default function FourSteps() {
  return (
    <section className="relative w-full bg-black py-14 sm:py-20 lg:py-24 border-y-4 border-[#C18C2C] overflow-hidden" style={{
      borderImageSource: "linear-gradient(90deg, #C18C2C 0%, #FCF38A 50.52%, #C18C2C 100%)",
      borderImageSlice: 1
    }}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Heading in Warm Gold */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-20 lg:mb-24"
        >
          <h2 className="font-abhaya font-bold text-[30px] sm:text-[42px] lg:text-[46px] leading-[38px] sm:leading-[50px] lg:leading-[54px] text-transparent bg-clip-text bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C]">
            Four Simple Steps To Get
            <br />
            Started
          </h2>
        </motion.div>

        {/* 4 Steps Flow */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-8 sm:gap-12 md:gap-4 lg:gap-8">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;

            return (
              <React.Fragment key={step.number}>
                {/* Step Item */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col items-center text-center w-full max-w-[240px] z-10 cursor-pointer group"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="h-12 sm:h-14 flex items-center justify-center mb-2 sm:mb-3"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Step Number in Gold */}
                  <span className="font-abhaya font-bold text-[22px] sm:text-[26px] leading-tight text-[#FCF38A] mb-1.5 sm:mb-2 select-none group-hover:scale-110 transition-transform">
                    {step.number}
                  </span>

                  {/* Step Label */}
                  <p className="font-work font-normal text-[14px] sm:text-[15px] leading-[20px] sm:leading-[22px] text-white/95 group-hover:text-white transition-colors">
                    {step.label}
                  </p>
                </motion.div>

                {/* Connecting Line between steps (Horizontal on desktop, subtle vertical dot on mobile) */}
                {!isLast && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
                      className="hidden md:flex flex-1 items-center justify-center pt-8 px-2 origin-left"
                    >
                      <div className="w-full border-t border-dotted border-white/40" />
                    </motion.div>
                    
                    {/* Mobile vertical divider line */}
                    <div className="flex md:hidden w-[2px] h-6 border-l border-dotted border-white/30 my-0.5" />
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Schedule a Call CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-20 lg:mt-24 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="btn-gold w-full sm:w-[210px] h-[50px] rounded-[50px] flex items-center justify-center gap-2.5 font-work font-medium text-[15px] leading-[18px] text-black cursor-pointer group select-none shadow-lg shadow-[#C18C2C]/20"
          >
            <span>Schedule a Call</span>
            <ArrowRight className="w-[18px] h-[18px] stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
