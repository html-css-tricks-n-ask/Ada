"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MeetFounder() {
  return (
    <section id="founder" className="relative w-full bg-[#FAF4E6] overflow-hidden">
      
      {/* Upper Main Box with #F7EED9 background */}
      <div className="w-full bg-[#F7EED9] pt-8 sm:pt-12 pb-6 sm:pb-8">
        
        {/* Centered Canvas Container */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-0">
          
          {/* Desktop View (>= 1200px) */}
          <div className="hidden xl:block relative w-[1440px] h-[550px] mx-auto">
            
            {/* Rectangle 164665: Gold Border Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute border-2 border-[#DAA520] rounded-[20px]"
              style={{
                width: "722px",
                height: "410px",
                left: "480px",
                top: "70px",
              }}
            />

            {/* Rectangle 164664: Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute rounded-[20px] overflow-hidden z-10 bg-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              style={{
                width: "509px",
                height: "330px",
                left: "154px",
                top: "110px",
              }}
            >
              <Image
                src="/founder.jpg"
                alt="Lakeisha Appleton - Founder"
                fill
                sizes="509px"
                className="object-cover object-center"
                priority
              />
            </motion.div>

            {/* Group 1948761079: Founder Details & Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute z-20 flex flex-col justify-start"
              style={{
                width: "514px",
                left: "690px",
                top: "110px",
              }}
            >
              <h2 className="font-abhaya font-bold text-[36px] leading-[32px] text-black">
                Meet The Founder
              </h2>

              <h3 className="font-abhaya font-bold text-[24px] leading-[24px] text-black mt-7">
                Lakeisha Appleton
              </h3>

              <p className="font-work font-medium text-[20px] leading-[22px] text-black mt-2">
                FNP-C, PMHNP- BC
              </p>

              <p className="font-work font-normal text-[19px] leading-[26px] text-black mt-5 max-w-[514px]">
                “Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN.” — Matt Haig
              </p>

              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-gold w-[163px] h-[50px] rounded-[50px] flex items-center justify-center gap-2.5 font-work font-medium text-[16px] leading-[27px] text-black cursor-pointer group select-none"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-[18px] h-[18px] stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            </motion.div>

          </div>

          {/* Mobile & Tablet View (< 1200px) */}
          <div className="block xl:hidden max-w-xl mx-auto py-6 sm:py-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative border-2 border-[#DAA520] rounded-[20px] p-5 sm:p-8 flex flex-col items-center shadow-sm"
            >
              {/* Responsive Image */}
              <div className="w-full max-w-[480px] h-[240px] xs:h-[280px] sm:h-[320px] rounded-[16px] overflow-hidden mb-6 relative bg-neutral-200 shadow-md">
                <Image
                  src="/founder.jpg"
                  alt="Lakeisha Appleton - Founder"
                  fill
                  sizes="(max-width: 1200px) 100vw, 509px"
                  className="object-cover object-center"
                />
              </div>

              {/* Responsive Text */}
              <div className="w-full text-left space-y-3.5 sm:space-y-4">
                <h2 className="font-abhaya font-bold text-[28px] sm:text-[34px] leading-tight text-black">
                  Meet The Founder
                </h2>
                <div>
                  <h3 className="font-abhaya font-bold text-[20px] sm:text-[24px] text-black">
                    Lakeisha Appleton
                  </h3>
                  <p className="font-work font-medium text-[16px] sm:text-[18px] text-black mt-0.5">
                    FNP-C, PMHNP- BC
                  </p>
                </div>
                <p className="font-work font-normal text-[15px] sm:text-[17px] leading-[24px] sm:leading-[26px] text-black/90">
                  “Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN.” — Matt Haig
                </p>
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-gold w-full sm:w-[163px] h-[48px] sm:h-[50px] rounded-[50px] flex items-center justify-center gap-2.5 font-work font-medium text-[15px] sm:text-[16px] text-black shadow-md shadow-[#C18C2C]/20"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-[18px] h-[18px] stroke-[2.2]" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Wave Divider in #F7EED9 transitioning to #FAF4E6 background */}
      <div className="w-full bg-[#FAF4E6] overflow-hidden leading-none -mt-[1px] flex pointer-events-none">
        <svg
          viewBox="-85 285 720 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-1/2 h-[26px] xs:h-[32px] sm:h-[45px] lg:h-[55px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M635 0V316.87C632.294 316.95 629.421 317 626.345 317C576.061 317 576.061 295.14 525.776 295.14C475.492 295.14 475.492 317 425.208 317C374.924 317 374.924 295.14 324.64 295.14C274.355 295.14 274.355 317 224.071 317C173.787 317 173.787 295.14 123.503 295.14C73.218 295.14 73.218 317 22.934 317C-27.35 317 -27.3499 295.14 -77.6213 295.14C-80.1873 295.14 -82.6384 295.22 -85 295.37L-84.9998 0H635Z"
            fill="#F7EED9"
          />
        </svg>
        <svg
          viewBox="-85 285 720 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-1/2 h-[26px] xs:h-[32px] sm:h-[45px] lg:h-[55px] block scale-x-[-1]"
          preserveAspectRatio="none"
        >
          <path
            d="M635 0V316.87C632.294 316.95 629.421 317 626.345 317C576.061 317 576.061 295.14 525.776 295.14C475.492 295.14 475.492 317 425.208 317C374.924 317 374.924 295.14 324.64 295.14C274.355 295.14 274.355 317 224.071 317C173.787 317 173.787 295.14 123.503 295.14C73.218 295.14 73.218 317 22.934 317C-27.35 317 -27.3499 295.14 -77.6213 295.14C-80.1873 295.14 -82.6384 295.22 -85 295.37L-84.9998 0H635Z"
            fill="#F7EED9"
          />
        </svg>
      </div>

    </section>
  );
}
