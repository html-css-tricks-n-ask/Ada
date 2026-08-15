"use client";

import React from "react";
import Image from "next/image";
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
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        <Image
          src="/calender.png"
          alt="Schedule an appointment"
          width={52}
          height={52}
          className="object-contain w-auto h-auto max-w-full max-h-full"
        />
      </div>
    ),
  },
  {
    number: "02",
    label: "Connect with your provider",
    icon: (
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        <Image
          src="/hand.png"
          alt="Connect with your provider"
          width={52}
          height={52}
          className="object-contain w-auto h-auto max-w-full max-h-full"
        />
      </div>
    ),
  },
  {
    number: "03",
    label: "Discuss your comprehensive assessment",
    icon: (
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        <Image
          src="/chat.png"
          alt="Discuss your comprehensive assessment"
          width={52}
          height={52}
          className="object-contain w-auto h-auto max-w-full max-h-full"
        />
      </div>
    ),
  },
  {
    number: "04",
    label: "Receive your individualized treatment plan",
    icon: (
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        <Image
          src="/notePad.png"
          alt="Receive your individualized treatment plan"
          width={52}
          height={52}
          className="object-contain w-auto h-auto max-w-full max-h-full"
        />
      </div>
    ),
  },
];

export default function FourSteps() {
  return (
    <section className="relative w-full bg-black overflow-hidden select-none flex flex-col justify-between">
      
      {/* Top 6px Gold Gradient Border (1440px x 6px, Rotation: 180°) */}
      <div
        className="w-full h-[6px] flex-shrink-0"
        style={{
          background: "linear-gradient(90deg, #C18C2C 0%, #FCF38A 50.52%, #C18C2C 100%)",
        }}
      />

      <div className="max-w-[1440px] w-full mx-auto min-h-[515.4px] px-4 sm:px-8 lg:px-[100px] flex flex-col justify-between py-10 lg:py-[46px]">
        
        {/* Section Heading: Abhaya Libre 700 Bold 40px / 60px Warm Gold */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-abhaya font-bold text-[30px] sm:text-[36px] lg:text-[40px] leading-[42px] sm:leading-[50px] lg:leading-[60px] tracking-[0px] max-w-[466px] mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C]">
            Four Simple Steps To Get
            <br />
            Started
          </h2>
        </motion.div>

        {/* Steps Row (Desktop & Tablet) */}
        <div className="hidden md:flex items-start justify-between relative max-w-[1240px] mx-auto w-full my-6">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;

            return (
              <React.Fragment key={step.number}>
                {/* Step Item */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="flex flex-col items-center text-center w-[220px] lg:w-[240px] z-10"
                >
                  {/* Icon */}
                  <div className="h-14 flex items-center justify-center mb-3">
                    {step.icon}
                  </div>

                  {/* Step Number in Gold: Abhaya Libre 700 */}
                  <span className="font-abhaya font-bold text-[28px] lg:text-[30px] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C] mb-2 select-none">
                    {step.number}
                  </span>

                  {/* Step Label: Work Sans 400 14px / 20px */}
                  <div className="min-h-[44px] max-w-[204px] flex items-center justify-center">
                    <p className="font-work font-normal text-[14px] leading-[20px] tracking-[0px] text-white/95 text-center">
                      {step.label}
                    </p>
                  </div>
                </motion.div>

                {/* Connecting Dashed Line: exact width 158.88px, border 1px dashed 2,2 */}
                {!isLast && (
                  <div className="flex-1 flex items-center justify-center pt-7 px-1 min-w-[60px]">
                    <svg width="159" height="2" viewBox="0 0 159 2" className="w-full max-w-[159px] h-[2px]">
                      <line x1="0" y1="1" x2="159" y2="1" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 2" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile Flow (< 768px) */}
        <div className="flex md:hidden flex-col items-center gap-8 max-w-sm mx-auto my-6">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;

            return (
              <React.Fragment key={step.number}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center w-full"
                >
                  <div className="h-14 flex items-center justify-center mb-2.5">
                    {step.icon}
                  </div>
                  <span className="font-abhaya font-bold text-[26px] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C] mb-1.5 select-none">
                    {step.number}
                  </span>
                  <div className="min-h-[44px] max-w-[204px] flex items-center justify-center">
                    <p className="font-work font-normal text-[14px] leading-[20px] tracking-[0px] text-white/95 text-center">
                      {step.label}
                    </p>
                  </div>
                </motion.div>

                {!isLast && (
                  <svg width="2" height="32" viewBox="0 0 2 32" className="w-[2px] h-8 my-0.5">
                    <line x1="1" y1="0" x2="1" y2="32" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Schedule a Call CTA Button with gold glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="btn-gold w-full sm:w-[210px] h-[50px] rounded-[50px] flex items-center justify-center gap-2.5 font-work font-medium text-[15px] leading-[18px] text-black cursor-pointer group select-none shadow-[0_4px_24px_rgba(193,140,44,0.35)]"
          >
            <span>Schedule a Call</span>
            <ArrowRight className="w-[18px] h-[18px] stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>

      </div>

      {/* Bottom 6px Gold Gradient Border (1440px x 6px) */}
      <div
        className="w-full h-[6px] flex-shrink-0"
        style={{
          background: "linear-gradient(90deg, #C18C2C 0%, #FCF38A 50.52%, #C18C2C 100%)",
        }}
      />

    </section>
  );
}
