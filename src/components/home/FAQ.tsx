"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "confidential",
    question: "Is Ada psychiatry confidential?",
    answer:
      "We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.",
  },
  {
    id: "schedule",
    question: "What is the best way to schedule a appointment?",
    answer:
      "You can easily book online directly through our website by clicking 'Book an Appointment' or by calling our care coordination team during business hours.",
  },
  {
    id: "controlled-substance",
    question: "Do you prescribe controlled substance medication?",
    answer:
      "When clinically indicated following a comprehensive evaluation, our board-certified psychiatric practitioners can prescribe appropriate medications in accordance with state and federal regulations.",
  },
  {
    id: "appointment-duration",
    question: "How long does the initial appointment take?",
    answer:
      "Initial psychiatric evaluations typically take between 45 to 60 minutes to ensure a thorough understanding of your medical history, symptoms, and treatment goals.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string>("confidential");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section id="faq" className="relative w-full bg-[#FAF4E6] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[220px]">
        
        {/* Section Heading - Abhaya Libre 700 Bold 40px / 56px #000000 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="font-abhaya font-bold text-[32px] sm:text-[36px] lg:text-[40px] leading-[44px] sm:leading-[50px] lg:leading-[56px] text-[#000000] tracking-[0px]">
            Frequently asked questions
          </h2>
        </motion.div>

        {/* FAQ Accordion List with #E8DFC8 border dividers */}
        <div className="flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const isFirst = index === 0;

            return (
              <div
                key={faq.id}
                className={`py-6 sm:py-7 ${
                  !isFirst ? "border-t border-[#E8DFC8]" : ""
                } transition-colors`}
              >
                {/* Question Header - Abhaya Libre 700 Bold 24px #1B1B1B */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-start justify-start text-left gap-4 sm:gap-6 group cursor-pointer focus:outline-none"
                >
                  <span className="shrink-0 text-[#1B1B1B] mt-0.5 group-hover:text-[#B37E22] transition-colors">
                    {isOpen ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                    )}
                  </span>

                  <h3 className="font-abhaya font-bold text-[20px] sm:text-[22px] lg:text-[24px] leading-tight text-[#1B1B1B] tracking-[0%] group-hover:text-[#B37E22] transition-colors">
                    {faq.question}
                  </h3>
                </button>

                {/* Expandable Answer - Work Sans 400 Regular 24px (18-24px responsive) leading 134% #000000 */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      key="faq-answer"
                      role="region"
                      aria-labelledby={`faq-header-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 pl-9 sm:pl-12 max-w-[1045px]">
                        <p className="font-work font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-[26px] sm:leading-[30px] lg:leading-[134%] text-[#000000] tracking-[0%]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA Button: See all FAQ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 sm:mt-16 lg:mt-20 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="btn-gold w-[200px] h-[50px] rounded-[50px] flex items-center justify-center gap-2.5 font-work font-medium text-[15px] leading-[18px] text-black cursor-pointer group select-none shadow-md shadow-[#C18C2C]/15"
          >
            <span>See all FAQ</span>
            <ArrowRight className="w-[18px] h-[18px] stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
