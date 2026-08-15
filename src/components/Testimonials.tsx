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
      "“Finding the right psychiatric care felt overwhelming until I found Ada Psychiatry. The team is deeply compassionate and attentive to every detail of my treatment plan.”",
    author: "Elena Rostova",
    company: "Lumina Health",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    quote:
      "“The virtual sessions gave me the flexibility I needed with my busy work schedule. Highly recommend Ada Psychiatry to anyone seeking empathetic, top-tier mental healthcare.”",
    author: "Marcus Chen",
    company: "Vanguard Tech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-[#FAF5EB] py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <h2 className="font-abhaya font-bold text-[32px] sm:text-[42px] lg:text-[46px] leading-tight text-[#1B1B1B]">
            What Our Patients Are saying
          </h2>
        </div>

        {/* Testimonials Slider Track */}
        <div className="relative w-full overflow-hidden px-2">
          <div
            className="flex items-stretch gap-4 sm:gap-8 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(50% - 150px - ${activeIndex * (300 + 16)}px))`,
            }}
          >
            {testimonials.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-[290px] xs:w-[320px] sm:w-[380px] lg:w-[440px] shrink-0 rounded-[24px] overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "opacity-100 scale-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                      : "opacity-50 scale-[0.96] hover:opacity-80"
                  }`}
                >
                  {/* Top Card Body - #F7EED9 exact color */}
                  <div className="bg-[#F7EED9] p-6 xs:p-7 sm:p-9 lg:p-10 flex-1 flex flex-col justify-start min-h-[200px] sm:min-h-[240px]">
                    
                    {/* Quotation Mark */}
                    <div className="text-[#1B1B1B] mb-3 sm:mb-4 select-none">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Quote Content - #1B1B1B */}
                    <p className="font-work font-normal text-[14px] xs:text-[15px] sm:text-[16px] lg:text-[17px] leading-[24px] sm:leading-[28px] text-[#1B1B1B]">
                      {item.quote}
                    </p>
                  </div>

                  {/* Bottom Card Footer - #C18C2C exact color */}
                  <div className="bg-[#C18C2C] h-[70px] sm:h-[82px] px-5 sm:px-6 flex items-center justify-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#FFFFFF] shrink-0 relative bg-neutral-200">
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        fill
                        sizes="44px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-work font-semibold text-[14px] sm:text-[16px] leading-tight text-[#FFFFFF]">
                        {item.author}
                      </span>
                      <span className="font-work font-normal text-[11px] sm:text-[13px] leading-tight text-[#FFFFFF]/90 mt-0.5">
                        {item.company}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 8 Geometric Pagination Dots */}
        <div className="mt-10 sm:mt-14 flex items-center justify-center gap-2.5 sm:gap-3">
          {Array.from({ length: 8 }).map((_, dotIdx) => {
            const isDotActive = dotIdx === activeIndex;

            return (
              <button
                key={dotIdx}
                onClick={() => setActiveIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className="focus:outline-none p-1.5 group cursor-pointer"
              >
                {/* Diamond shape */}
                <div
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rotate-45 transition-all duration-300 ${
                    isDotActive
                      ? "bg-[#C18C2C] scale-125 shadow-sm"
                      : "border-[1.5px] border-[#C18C2C] bg-transparent hover:bg-[#C18C2C]/30"
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
