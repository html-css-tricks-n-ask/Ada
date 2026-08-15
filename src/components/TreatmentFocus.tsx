"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TreatmentItem {
  title: string;
  description: string;
  imageOnLeft: boolean;
  imageSrc: string;
}

const treatments: TreatmentItem[] = [
  {
    title: "Mental health",
    description:
      "Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act. It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions. Mental health is vital at every stage of life. At Ada Psychiatry, we specialize in various conditions such as Depression, Anxiety, ADHD, Bipolar and more.",
    imageOnLeft: true,
    imageSrc: "/third.png",
  },
  {
    title: "Addiction and recovery",
    description:
      "Addiction is a chronic dysfunction of the brain system. An individual experiencing addiction will have difficulty staying away from the addictive behavior, display a lack of self-control, be dismayed by how the behavior may be causing problems, and lack an emotional response. At Ada Psychiatry, we assess your risk for addiction and create a comprehensive treatment plan to start your recovery. Our experts are trained in medication-assisted treatment. You do not have to continue to struggle alone.",
    imageOnLeft: false,
    imageSrc: "/fourth.png",
  },
  {
    title: "Supervised Medical Weight Loss",
    description:
      "The primary indicator of obesity is when a person's body mass index (BMI) is 30 or higher. Medically supervised weight loss is a program designed for individuals who are obese and are having difficulty losing weight and changing their lifestyle on their own. Our program offers supervision, FDA-approved medications, weight loss injections, diet plans, and exercise to help with each client's needs.",
    imageOnLeft: true,
    imageSrc: "/five.png",
  },
];

export default function TreatmentFocus() {
  return (
    <section className="relative w-full bg-[#FAF4E6] py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-24">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-20 lg:mb-24"
        >
          <h2 className="font-abhaya font-bold text-[34px] sm:text-[42px] lg:text-[46px] leading-tight text-black">
            Our Treatment Focus
          </h2>
        </motion.div>

        {/* Treatment Items List */}
        <div className="flex flex-col space-y-16 sm:space-y-24 lg:space-y-28">
          {treatments.map((item, index) => {
            const isImageLeft = item.imageOnLeft;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`flex flex-col items-center justify-between gap-8 sm:gap-12 lg:gap-16 xl:gap-24 ${
                  isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Circular Image Container with Offset Gold Ring */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-[270px] h-[270px] xs:w-[320px] xs:h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] shrink-0 cursor-pointer group"
                >
                  {/* Offset Gold Accent Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#DAA520] translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 pointer-events-none group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-300"
                  />
                  
                  {/* Circular Image */}
                  <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 320px, 420px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>

                {/* Content Block */}
                <div className="flex-1 max-w-[530px] flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
                  <h3 className="font-abhaya font-bold text-[26px] xs:text-[30px] sm:text-[34px] lg:text-[36px] leading-tight text-black">
                    {item.title}
                  </h3>

                  <p className="font-work font-normal text-[15px] sm:text-[16px] lg:text-[17px] leading-[25px] sm:leading-[27px] text-neutral-800 mt-3 sm:mt-5">
                    {item.description}
                  </p>

                  <div className="mt-5 sm:mt-8 w-full flex justify-center lg:justify-start">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-gold w-full sm:w-[145px] h-[46px] rounded-[50px] font-work font-medium text-[14px] leading-[18px] text-black flex items-center justify-center cursor-pointer select-none shadow-md shadow-[#C18C2C]/15"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
