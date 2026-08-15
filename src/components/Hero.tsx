"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[565px] bg-black overflow-hidden">
      
      {/* Hero Background Image (hero.png) */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/hero.png"
          alt="Ada Psychiatry Care"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />
        
        {/* Figma Exact Gradient Overlay: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 56.01%) */}
        <div 
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background: "linear-gradient(90deg, #000000 0%, #000000 32%, rgba(0, 0, 0, 0.85) 44%, rgba(0, 0, 0, 0) 56.01%)"
          }}
        />

        {/* Mobile Gradient Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none block md:hidden"
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.4) 100%)"
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[100px] py-14 sm:py-20 lg:py-[106px] min-h-[500px] sm:min-h-[565px] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[465px] flex flex-col"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-abhaya font-normal text-[32px] xs:text-[36px] sm:text-[44px] lg:text-[48px] leading-[40px] xs:leading-[44px] sm:leading-[52px] lg:leading-[56px] uppercase text-white tracking-wide"
          >
            Need A Mental Health Provider?
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-abhaya font-normal text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-white mt-5 sm:mt-7"
          >
            No Look Further
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="font-abhaya font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] text-white/90 mt-1 max-w-[425px]"
          >
            Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.
          </motion.p>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 sm:mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gold w-full sm:w-[163px] h-[50px] rounded-[50px] flex items-center justify-center gap-2.5 font-work font-medium text-[16px] leading-[27px] text-black cursor-pointer group select-none shadow-lg shadow-[#C18C2C]/20"
            >
              <span>Learn More</span>
              <ArrowRight className="w-[18px] h-[18px] stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
