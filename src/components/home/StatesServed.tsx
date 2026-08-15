"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface StateItem {
  name: string;
  status: string;
  image: string;
}

const states: StateItem[] = [
  {
    name: "Arizona",
    status: "Virtual Appointment",
    image: "/Image (Arizona).png",
  },
  {
    name: "Washington",
    status: "Virtual Appointment",
    image: "/Image (Washington).png",
  },
  {
    name: "Oregon",
    status: "Coming Soon",
    image: "/Image (Oregon).png",
  },
  {
    name: "New Mexico",
    status: "Virtual Appointment",
    image: "/Image (Arizona) (1).png",
  },
  {
    name: "Colorado",
    status: "Virtual Appointment",
    image: "/Image (Colorado).png",
  },
  {
    name: "Kansas",
    status: "Virtual Appointment",
    image: "/Image (Kansas).png",
  },
];

export default function StatesServed() {
  return (
    <section className="relative w-full bg-[#FAF4E6] py-16 sm:py-20 lg:py-24 overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px]">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-16 lg:mb-20"
        >
          <h2 className="font-abhaya font-bold text-[34px] sm:text-[40px] lg:text-[46px] leading-[42px] sm:leading-[48px] lg:leading-[52px] text-[#000000]">
            Now Accepting Patients In
            <br />
            The Following States
          </h2>
        </motion.div>

        {/* 6 States Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-12 sm:gap-y-16 max-w-[1280px] mx-auto justify-items-center">
          {states.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.15 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center group cursor-pointer w-full max-w-[400px]"
            >
              {/* Arched Semicircle Dome Image: 400px x 200px */}
              <div className="w-full max-w-[400px] h-[200px] relative overflow-hidden rounded-t-[200px] rounded-b-none bg-neutral-200 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                <Image
                  src={item.image}
                  alt={`${item.name} psychiatric services`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Exact Figma Shade Layer 1: #000000 25% tint */}
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />

                {/* Exact Figma Shade Layer 2: Linear Gradient #232020 0% -> 45% -> 100% */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(35, 32, 32, 0) 0%, rgba(35, 32, 32, 0.45) 45%, rgba(35, 32, 32, 0.9) 100%)",
                  }}
                />
              </div>

              {/* State Name: Abhaya Libre 700 Bold 44px / 100% leading #000000 */}
              <h3 className="font-abhaya font-bold text-[32px] sm:text-[38px] lg:text-[44px] leading-[100%] text-[#000000] mt-5 sm:mt-6 group-hover:text-[#C18C2C] transition-colors">
                {item.name}
              </h3>

              {/* Status / Subtitle: Work Sans 400 Regular 18px / 38.5px line-height #1B1B1B */}
              <p className="font-work font-normal text-[16px] sm:text-[18px] leading-[30px] sm:leading-[38.5px] text-[#1B1B1B]">
                {item.status}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
