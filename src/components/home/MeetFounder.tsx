"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MeetFounder() {
  return (
    <section id="founder" className="relative w-full bg-[#F7EED9] overflow-hidden select-none">
      
      {/* Centered Canvas Container (1440px x 637px) */}
      <div className="max-w-[1440px] mx-auto relative">
        
        {/* Desktop View (>= 1200px): Exact 1440px x 637px */}
        <div className="hidden xl:block relative w-[1440px] h-[637px] mx-auto">
          
          {/* Decorative Gold Accent Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute border-[1.5px] border-[#DAA520] rounded-[24px]"
            style={{
              width: "722px",
              height: "410px",
              left: "480px",
              top: "113.5px",
            }}
          />

          {/* Founder Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute rounded-[24px] overflow-hidden z-10 bg-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            style={{
              width: "509px",
              height: "330px",
              left: "154px",
              top: "153.5px",
            }}
          >
            <Image
              src="/second.png"
              alt="Lakeisha Appleton - Founder"
              fill
              sizes="509px"
              className="object-cover object-center"
            />
          </motion.div>

          {/* Founder Profile Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="absolute z-20 flex flex-col justify-start"
            style={{
              width: "460px",
              left: "703px",
              top: "148px",
            }}
          >
            {/* Title: Abhaya Libre 700 Bold 36px / 32px */}
            <h2 className="font-abhaya font-bold text-[36px] leading-[32px] text-[#000000] tracking-[0px]">
              Meet The Founder
            </h2>

            {/* Name: Abhaya Libre 700 Bold 24px / 18.5px */}
            <h3 className="font-abhaya font-bold text-[24px] leading-[18.5px] text-[#000000] tracking-[0px] mt-[16px]">
              Lakeisha Appleton
            </h3>

            {/* Credentials: Work Sans 500 Medium 20px / 18.5px */}
            <p className="font-work font-medium text-[20px] leading-[18.5px] text-[#000000] tracking-[0px] mt-[10px]">
              FNP-C, PMHNP- BC
            </p>

            {/* Quote: Work Sans 400 Regular 17px / 26px with max-w-[455px] fitting neatly inside card */}
            <p className="font-work font-normal text-[17px] leading-[26px] text-[#000000] tracking-[0px] mt-[20px] max-w-[455px]">
              “Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN.” — Matt Haig
            </p>

            {/* CTA Button: 163px x 50px */}
            <div className="mt-[24px]">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gold w-[163px] h-[50px] rounded-[50px] flex items-center justify-center gap-2.5 font-work font-medium text-[16px] leading-[27px] text-black cursor-pointer group select-none shadow-md shadow-[#C18C2C]/20"
              >
                <span>Learn More</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </div>
          </motion.div>

        </div>

        {/* Mobile & Tablet View (< 1200px) */}
        <div className="block xl:hidden max-w-xl mx-auto px-4 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative border-2 border-[#DAA520] rounded-[24px] p-5 sm:p-8 flex flex-col items-center shadow-sm"
          >
            {/* Responsive Image */}
            <div className="w-full max-w-[480px] h-[240px] xs:h-[280px] sm:h-[320px] rounded-[20px] overflow-hidden mb-6 relative bg-neutral-200 shadow-md">
              <Image
                src="/second.png"
                alt="Lakeisha Appleton - Founder"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover object-center"
              />
            </div>

            {/* Content Group */}
            <div className="w-full flex flex-col items-center text-center">
              <h2 className="font-abhaya font-bold text-[28px] sm:text-[32px] leading-tight text-[#000000] tracking-[0px]">
                Meet The Founder
              </h2>
              <h3 className="font-abhaya font-bold text-[20px] sm:text-[22px] leading-tight text-[#000000] tracking-[0px] mt-3">
                Lakeisha Appleton
              </h3>
              <p className="font-work font-medium text-[16px] sm:text-[18px] leading-tight text-[#000000] tracking-[0px] mt-1.5">
                FNP-C, PMHNP- BC
              </p>
              <p className="font-work font-normal text-[15px] sm:text-[16px] leading-[24px] text-[#000000] tracking-[0px] mt-4 max-w-md">
                “Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN.” — Matt Haig
              </p>
              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-gold w-[163px] h-[48px] rounded-[50px] flex items-center justify-center gap-2 font-work font-medium text-[15px] leading-normal text-black cursor-pointer group select-none shadow-md shadow-[#C18C2C]/20"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
