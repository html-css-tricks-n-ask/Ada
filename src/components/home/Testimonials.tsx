"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach”",
    author: "Carl Rowan",
    company: "Aglets Inc",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    quote:
      "“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach”",
    author: "Carl Rowan",
    company: "Aglets Inc",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    quote:
      "“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach”",
    author: "Carl Rowan",
    company: "Aglets Inc",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    quote:
      "“A truly safe and warm space. The doctors listen without judgment and work collaboratively on medication management and therapy.”",
    author: "Sarah Jenkins",
    company: "Apex Media",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 5,
    quote:
      "“The empathetic approach of Ada Psychiatry helped me regain balance in my personal and professional life. The care is truly top-tier.”",
    author: "David Miller",
    company: "Horizon Labs",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 6,
    quote:
      "“From intake to ongoing sessions, the communication has been flawless and supportive every single step of the way.”",
    author: "Amara Patel",
    company: "Zenith Creative",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 7,
    quote:
      "“I finally found providers who truly listen and customize medication plans that work with my lifestyle.”",
    author: "James Wilson",
    company: "Nexus Group",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 8,
    quote:
      "“The compassionate telehealth experience at Ada Psychiatry has made a world of difference for my peace of mind.”",
    author: "Rachel Adams",
    company: "Solstice Studio",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative w-full bg-[#FAF4E6] py-16 sm:py-20 lg:py-24 overflow-hidden select-none">
      <div className="w-full mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4">
          <h2 className="font-abhaya font-bold text-[34px] sm:text-[40px] lg:text-[44px] leading-tight text-[#1B1B1B]">
            What Our Patients Are saying
          </h2>
        </div>

        {/* 3-Card Carousel Track with exact 44px gap */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex items-stretch transition-transform duration-500 ease-out"
            style={{
              gap: "44px",
              transform: `translateX(calc(50vw - 359px - ${activeIndex * (718 + 44)}px))`,
            }}
          >
            {testimonials.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-[320px] xs:w-[420px] sm:w-[580px] lg:w-[718px] h-[457px] shrink-0 rounded-[24px] overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "opacity-100 scale-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                      : "opacity-100 scale-100 hover:opacity-90"
                  }`}
                >
                  {/* Top Card Body - #F7EED9 */}
                  <div className="bg-[#F7EED9] p-7 sm:p-10 lg:p-[48px] flex-1 flex flex-col justify-start">
                    
                    {/* Quotation Mark Icon (66) */}
                    <div className="text-[#1B1B1B] mb-5 sm:mb-6 select-none">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Quote Content: Work Sans 400 Regular 24px / 38.5px #1B1B1B */}
                    <p className="font-work font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-[26px] sm:leading-[32px] lg:leading-[38.5px] text-[#1B1B1B] max-w-[606px]">
                      {item.quote}
                    </p>
                  </div>

                  {/* Bottom Card Footer - #C18C2C exact color & rounded-b-[24px] */}
                  <div className="bg-[#C18C2C] h-[100px] lg:h-[110px] px-6 sm:px-10 flex items-center justify-center gap-3.5 border-t border-white/20">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#FFFFFF] shrink-0 relative bg-neutral-200 shadow-sm">
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        fill
                        sizes="56px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      {/* Author: Work Sans 600 SemiBold 20px #FFFFFF */}
                      <span className="font-work font-semibold text-[17px] sm:text-[20px] leading-[100%] text-[#FFFFFF]">
                        {item.author}
                      </span>
                      {/* Subtitle: Work Sans 400 Regular 16px 80% Opacity #FFFFFF */}
                      <span className="font-work font-normal text-[13px] sm:text-[16px] leading-[100%] text-[#FFFFFF]/80 mt-1">
                        {item.company}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 8 Geometric Diamond Pagination Dots */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center gap-3">
          {Array.from({ length: 8 }).map((_, dotIdx) => {
            const isDotActive = dotIdx === activeIndex;

            return (
              <button
                key={dotIdx}
                onClick={() => setActiveIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                aria-current={isDotActive ? "true" : undefined}
                className="focus:outline-none p-1.5 group cursor-pointer"
              >
                <div
                  className={`w-3 h-3 rotate-45 transition-all duration-300 ${
                    isDotActive
                      ? "bg-[#C18C2C] scale-125 shadow-sm"
                      : "border-[1.5px] border-[#C18C2C] bg-transparent hover:bg-[#C18C2C]/40"
                  }`}
                  style={{ borderRadius: "1px" }}
                />
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
