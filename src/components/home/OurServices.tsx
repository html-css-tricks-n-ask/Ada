"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItem {
  title: string;
  subtitle?: string;
  imageIcon: string;
}

const services: ServiceItem[] = [
  {
    title: "Psychiatric",
    subtitle: "Evaluation",
    imageIcon: "/human-brain.png",
  },
  {
    title: "Medication",
    subtitle: "Management",
    imageIcon: "/hospital.png",
  },
  {
    title: "Supportive",
    subtitle: "Psychotherapy",
    imageIcon: "/mental-health (3).png",
  },
  {
    title: "ADHD",
    subtitle: "Screening",
    imageIcon: "/brain.png",
  },
  {
    title: "MAT",
    subtitle: "Treatment",
    imageIcon: "/human-brain.png",
  },
  {
    title: "Gene Sight",
    subtitle: "Testing",
    imageIcon: "/hospital.png",
  },
];

export default function OurServices() {
  return (
    <section id="services" className="relative w-full bg-[#FAF4E6] py-16 sm:py-20 lg:py-24 overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Heading: Abhaya Libre 700 Bold 40px */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-16 lg:mb-20"
        >
          <h2 className="font-abhaya font-bold text-[34px] sm:text-[38px] lg:text-[40px] leading-tight text-[#000000]">
            Our Services
          </h2>
        </motion.div>

        {/* 6 Services Items with exact 80px gap on desktop */}
        <div className="flex flex-wrap lg:flex-nowrap items-start justify-center gap-y-10 gap-x-6 sm:gap-x-10 lg:gap-x-[80px] max-w-[1050px] mx-auto">
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
                className="w-[94px] h-[94px] rounded-full bg-[#F3E8D3] group-hover:bg-[#EBDDC3] border border-[#DFC377]/30 flex items-center justify-center shadow-[0_4px_16px_rgba(193,140,44,0.12)] p-4"
              >
                <div className="relative w-[56px] h-[56px] flex items-center justify-center">
                  <Image
                    src={item.imageIcon}
                    alt={`${item.title} ${item.subtitle || ""}`}
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Title & Subtitle: Abhaya Libre 700 Bold #000000 */}
              <div className="mt-4 sm:mt-5 flex flex-col items-center">
                <span className="font-abhaya font-bold text-[18px] sm:text-[19px] leading-[22px] text-[#000000] whitespace-nowrap group-hover:text-[#B37E22] transition-colors">
                  {item.title}
                </span>
                {item.subtitle && (
                  <span className="font-abhaya font-bold text-[18px] sm:text-[19px] leading-[22px] text-[#000000] whitespace-nowrap group-hover:text-[#B37E22] transition-colors">
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
            className="btn-gold px-8 h-[50px] rounded-[50px] flex items-center justify-center gap-2.5 font-work font-medium text-[15px] leading-[18px] text-black cursor-pointer group select-none shadow-md shadow-[#C18C2C]/20"
          >
            <span>View our services</span>
            <ArrowRight className="w-[18px] h-[18px] stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
