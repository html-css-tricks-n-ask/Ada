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
    <section className="relative w-full bg-[#FAF5EB] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1040px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-16 lg:mb-20"
        >
          <h2 className="font-abhaya font-bold text-[36px] sm:text-[42px] lg:text-[46px] leading-tight text-black">
            Frequently asked questions
          </h2>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const isLast = index === faqs.length - 1;

            return (
              <div
                key={faq.id}
                className={`py-5 sm:py-6 ${
                  !isLast ? "border-b border-[#E3D9C3]" : ""
                } transition-colors`}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-start text-left gap-4 group cursor-pointer focus:outline-none"
                >
                  <span className="shrink-0 text-black group-hover:text-[#B37E22] transition-colors">
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[2]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2]" />
                    )}
                  </span>

                  <h3 className="font-abhaya font-bold text-[20px] sm:text-[22px] leading-[26px] text-black group-hover:text-[#B37E22] transition-colors">
                    {faq.question}
                  </h3>
                </button>

                {/* Expandable Answer with AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pb-1 pl-9 pr-4 sm:pr-8">
                        <p className="font-work font-normal text-[15px] sm:text-[16px] leading-[26px] text-neutral-800">
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
            className="btn-gold w-[200px] h-[50px] rounded-[50px] flex items-center justify-center gap-2.5 font-work font-medium text-[15px] leading-[18px] text-black cursor-pointer group select-none"
          >
            <span>See all FAQ</span>
            <ArrowRight className="w-[18px] h-[18px] stroke-[2.2] group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
