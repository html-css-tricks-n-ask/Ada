"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: "convenient-access",
    title: "Convenient access",
    content:
      "We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.",
  },
  {
    id: "concierge-approach",
    title: "Concierge approach",
    content:
      "Personalized, attentive mental health care tailored to your unique lifestyle, schedule, and individual wellness goals with direct practitioner access.",
  },
  {
    id: "high-quality-service",
    title: "High quality service",
    content:
      "Evidence-based psychiatric evaluations, compassionate ongoing care, and comprehensive treatment plans adhering to the highest medical standards.",
  },
  {
    id: "trusted-providers",
    title: "Trusted and empathic providers",
    content:
      "Board-certified, highly experienced psychiatric professionals who prioritize warm listening, safety, empathy, and patient empowerment.",
  },
];

export default function WhyChooseUs() {
  const [openId, setOpenId] = useState<string>("convenient-access");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section className="relative w-full bg-[#F7EED9] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left: Image with Offset Gold Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[580px] lg:max-w-[620px] shrink-0"
          >
            {/* Offset Gold Border Frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 border border-[#DAA520] pointer-events-none rounded-none z-0" />
            
            {/* Main Image / Placeholder */}
            <div className="relative z-10 w-full h-[320px] sm:h-[400px] lg:h-[430px] overflow-hidden bg-neutral-200 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80"
                alt="Therapy session at Ada Psychiatry"
                fill
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-cover object-center"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Right: Section Heading & Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="w-full max-w-[580px] flex flex-col justify-center"
          >
            {/* Section Title */}
            <h2 className="font-abhaya font-bold text-[34px] sm:text-[40px] lg:text-[44px] leading-[42px] sm:leading-[48px] lg:leading-[52px] text-black mb-8 sm:mb-10">
              Why Should You Choose Ada Psychiatry?
            </h2>

            {/* Accordion List */}
            <div className="flex flex-col">
              {accordionItems.map((item, index) => {
                const isOpen = openId === item.id;
                const isLast = index === accordionItems.length - 1;

                return (
                  <div
                    key={item.id}
                    className={`py-4 sm:py-5 ${
                      !isLast ? "border-b border-[#DAA520]" : ""
                    } transition-colors`}
                  >
                    {/* Header Row */}
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex items-center justify-start text-left gap-3.5 group cursor-pointer focus:outline-none"
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 0 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0 text-black group-hover:text-[#B37E22] transition-colors"
                      >
                        {isOpen ? (
                          <Minus className="w-5 h-5 stroke-[2]" />
                        ) : (
                          <Plus className="w-5 h-5 stroke-[2]" />
                        )}
                      </motion.span>

                      <span className="font-abhaya font-bold text-[20px] sm:text-[22px] leading-[26px] text-black group-hover:text-[#B37E22] transition-colors">
                        {item.title}
                      </span>
                    </button>

                    {/* Expandable Content with AnimatePresence */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 pb-1 pl-8 sm:pl-9 pr-2">
                            <p className="font-work font-normal text-[15px] sm:text-[16px] leading-[25px] text-neutral-800">
                              {item.content}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
