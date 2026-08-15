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
    <section className="relative w-full bg-[#FAF4E6] pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 overflow-hidden select-none">
      
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[28px] sm:h-[36px] lg:h-[40px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H1440V20C1404 20 1386 6 1350 6C1314 6 1296 20 1260 20C1224 20 1206 6 1170 6C1134 6 1116 20 1080 20C1044 20 1026 6 990 6C954 6 936 20 900 20C864 20 846 6 810 6C774 6 756 20 720 20C684 20 666 6 630 6C594 6 576 20 540 20C504 20 486 6 450 6C414 6 396 20 360 20C324 20 306 6 270 6C234 6 216 20 180 20C144 20 126 6 90 6C54 6 36 20 0 20V0Z"
            fill="#F7EED9"
          />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[100px]">
        
        {/* Section Heading: Abhaya Libre 700 Bold 37.5px / 56.25px #000000 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20 lg:mb-24 flex justify-center"
        >
          <h2 className="font-abhaya font-bold text-[32px] sm:text-[36px] lg:text-[37.5px] leading-[44px] sm:leading-[50px] lg:leading-[56.25px] text-[#000000] tracking-[0px]">
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
                className={`flex flex-col items-center justify-center gap-10 sm:gap-12 lg:gap-[74px] ${
                  isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Circular Image Container with Offset Gold Ring */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] shrink-0 cursor-pointer group"
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

                {/* Content Block: Width 553.13px */}
                <div className="flex-1 max-w-[553.13px] flex flex-col justify-start text-left items-start">
                  
                  {/* Title: Abhaya Libre 700 Bold 33.75px / 32.81px #000000 */}
                  <h3 className="font-abhaya font-bold text-[28px] sm:text-[31px] lg:text-[33.75px] leading-[32px] sm:leading-[32.81px] text-[#000000] tracking-[0px]">
                    {item.title}
                  </h3>

                  {/* Description: Abhaya Libre 400 Regular 18.75px / 33.75px #000000 */}
                  <p className="font-abhaya font-normal text-[17px] sm:text-[18px] lg:text-[18.75px] leading-[28px] sm:leading-[32px] lg:leading-[33.75px] text-[#000000] tracking-[0px] mt-4 sm:mt-5 max-w-[553.13px]">
                    {item.description}
                  </p>

                  {/* CTA Button: 145px x 46px */}
                  <div className="mt-6 sm:mt-7">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-gold w-[145px] h-[46px] rounded-[50px] font-work font-medium text-[14px] leading-[18px] text-black flex items-center justify-center cursor-pointer select-none shadow-md shadow-[#C18C2C]/15"
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
