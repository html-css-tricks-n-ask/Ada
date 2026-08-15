"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative w-full h-[565px] bg-black overflow-hidden select-none">
      
      {/* Hero Background Image (1440px x 565px) */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/hero.png"
          alt="Ada Psychiatry Care"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] lg:object-right"
        />
        
        {/* Figma Exact Gradient Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background: "linear-gradient(90deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.70) 28%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0) 62%)"
          }}
        />

        {/* Mobile Gradient Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none block md:hidden"
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.75) 60%, rgba(0, 0, 0, 0.3) 100%)"
          }}
        />
      </div>

      {/* Main Content Container - Exact Figma 1440px width & 100px left offset */}
      <div className="relative z-10 max-w-[1440px] h-[565px] mx-auto px-6 sm:px-12 lg:px-[100px] flex flex-col justify-between pt-[75px] sm:pt-[95px] lg:pt-[106px] pb-[34px]">
        
        {/* Content Group (Group 1948761154: width: 465px) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[465px] flex flex-col"
        >
          {/* Main Title - Abhaya Libre 400 Regular 48px / 56.5px uppercase */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-abhaya font-normal text-[36px] sm:text-[44px] lg:text-[48px] leading-[44px] sm:leading-[52px] lg:leading-[56.5px] uppercase text-[#FFFFFF] tracking-[0px] w-full max-w-[465px]"
          >
            Need A Mental
            <br />
            Health Provider?
          </motion.h1>

          {/* Subtitle - Abhaya Libre 400 Regular 20px / 28px */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-abhaya font-normal text-[18px] sm:text-[20px] leading-[28px] text-[#FFFFFF] tracking-[0px] mt-[6px]"
          >
            No Look Further
          </motion.p>

          {/* Description - Abhaya Libre 400 Regular 20px / 28px max-w-[425px] */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-abhaya font-normal text-[18px] sm:text-[20px] leading-[28px] text-[#FFFFFF] tracking-[0px] mt-[6px] max-w-[425px]"
          >
            Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.
          </motion.p>

          {/* Learn More Button - 163px x 50px */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-[40px]"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gold w-[163px] h-[50px] rounded-[50px] flex items-center justify-center gap-2.5 font-work font-medium text-[16px] leading-[27px] text-black cursor-pointer group select-none shadow-lg shadow-[#C18C2C]/20"
            >
              <span>Learn More</span>
              <ArrowRight className="w-[18px] h-[18px] stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom-left Hexagonal Carousel Pagination Dots */}
        <div className="flex items-center gap-2.5">
          {Array.from({ length: 5 }).map((_, idx) => {
            const isActive = idx === activeSlide;

            return (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Hero slide ${idx + 1}`}
                className="focus:outline-none group p-1 cursor-pointer"
              >
                <div
                  className={`w-2.5 h-2.5 rotate-45 transition-all duration-300 ${
                    isActive
                      ? "bg-[#FCF38A] scale-110 shadow-[0_0_8px_rgba(252,243,138,0.6)]"
                      : "border-[1.2px] border-white/50 bg-transparent hover:border-[#FCF38A]"
                  }`}
                  style={{ borderRadius: "1px" }}
                />
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
