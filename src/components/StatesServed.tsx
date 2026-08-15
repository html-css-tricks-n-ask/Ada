"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface StateItem {
  name: string;
  status: string;
  image: string;
  isArch: boolean;
}

const states: StateItem[] = [
  {
    name: "Arizona",
    status: "Virtual Appointment",
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80",
    isArch: false,
  },
  {
    name: "Washington",
    status: "Virtual Appointment",
    image: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=800&q=80",
    isArch: true,
  },
  {
    name: "Oregon",
    status: "Coming Soon",
    image: "https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=800&q=80",
    isArch: true,
  },
  {
    name: "New Mexico",
    status: "Virtual Appointment",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    isArch: false,
  },
  {
    name: "Colorado",
    status: "Virtual Appointment",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    isArch: true,
  },
  {
    name: "Kansas",
    status: "Virtual Appointment",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
    isArch: true,
  },
];

export default function StatesServed() {
  return (
    <section className="relative w-full bg-[#FAF5EB] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-16 lg:mb-20"
        >
          <h2 className="font-abhaya font-bold text-[34px] sm:text-[40px] lg:text-[46px] leading-[42px] sm:leading-[48px] lg:leading-[52px] text-black">
            Now Accepting Patients In
            <br />
            The Following States
          </h2>
        </motion.div>

        {/* 6 States Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-10 lg:gap-x-14 gap-y-12 sm:gap-y-16 max-w-[1240px] mx-auto">
          {states.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.15 }}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Image Container (Rectangle or Arched Semicircle) */}
              <motion.div
                className={`w-full max-w-[360px] h-[190px] sm:h-[210px] lg:h-[220px] relative overflow-hidden bg-neutral-200 shadow-sm transition-shadow duration-300 group-hover:shadow-md ${
                  item.isArch
                    ? "rounded-t-full rounded-b-none"
                    : "rounded-none"
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.name} psychiatric services`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </motion.div>

              {/* State Name */}
              <h3 className="font-abhaya font-bold text-[28px] sm:text-[32px] leading-[36px] text-black mt-5 sm:mt-6 group-hover:text-[#B37E22] transition-colors">
                {item.name}
              </h3>

              {/* Status / Subtitle */}
              <p className="font-work font-normal text-[15px] sm:text-[16px] leading-[22px] text-neutral-800 mt-1">
                {item.status}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
