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
    <section id="why-choose-us" className="relative w-full bg-[#F7EED9] overflow-hidden select-none">
      <div className="max-w-[1440px] min-h-[643px] mx-auto px-6 sm:px-10 lg:px-[100px] flex items-center py-12 lg:py-0">
        
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14 xl:gap-16">
          
          {/* Left: Image with Offset Gold Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[560px] lg:w-[588px] shrink-0"
          >
            {/* Offset Gold Border Frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-5 sm:translate-y-5 lg:translate-x-6 lg:translate-y-6 border border-[#DAA520] pointer-events-none z-0" />
            
            {/* Main Consultation Image (six.png: 588px x 438px) */}
            <div className="relative z-10 w-full h-[320px] sm:h-[390px] lg:h-[438px] overflow-hidden bg-neutral-200 shadow-md">
              <Image
                src="/six.png"
                alt="Therapy session at Ada Psychiatry"
                fill
                sizes="(max-width: 1024px) 100vw, 588px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Right: Section Heading & Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="w-full max-w-[488px] flex flex-col justify-center text-left"
          >
            {/* Section Title: Abhaya Libre 700 Bold 40px / 47.5px #000000 */}
            <h2 className="font-abhaya font-bold text-[32px] sm:text-[36px] lg:text-[40px] leading-[38px] sm:leading-[44px] lg:leading-[47.5px] text-[#000000] tracking-[0px] mb-6 sm:mb-8 max-w-[483px]">
              Why Should You Choose Ada Psychiatry?
            </h2>

            {/* Accordion List with #DAA520 border dividers */}
            <div className="flex flex-col">
              {accordionItems.map((item, index) => {
                const isOpen = openId === item.id;
                const isFirst = index === 0;

                return (
                  <div
                    key={item.id}
                    className={`py-3.5 sm:py-4 ${
                      !isFirst ? "border-t border-[#DAA520]" : ""
                    } transition-colors`}
                  >
                    {/* Header Row: Abhaya Libre 700 Bold 24px #000000 */}
                    <button
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`why-choose-answer-${item.id}`}
                      className="w-full flex items-center justify-start text-left gap-3.5 group cursor-pointer focus:outline-none"
                    >
                      <span className="shrink-0 text-[#000000] group-hover:text-[#B37E22] transition-colors">
                        {isOpen ? (
                          <Minus className="w-5 h-5 stroke-[1.8]" />
                        ) : (
                          <Plus className="w-5 h-5 stroke-[1.8]" />
                        )}
                      </span>

                      <span className="font-abhaya font-bold text-[20px] sm:text-[22px] lg:text-[24px] leading-[100%] text-[#000000] tracking-[0%] group-hover:text-[#B37E22] transition-colors">
                        {item.title}
                      </span>
                    </button>

                    {/* Expandable Content: Work Sans 400 Regular 18px / 134% leading */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`why-choose-answer-${item.id}`}
                          key="content"
                          role="region"
                          aria-labelledby={`why-choose-header-${item.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2.5 pb-1 pl-8 max-w-[488px]">
                            <p className="font-work font-normal text-[15px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[134%] text-[#000000]/80 tracking-[0%]">
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
