"use client";

import React from "react";

export default function QuoteBanner() {
  return (
    <section className="relative w-full bg-[#FAF4E6] overflow-hidden select-none">
      
      {/* Full Bleed Banner Container (Exact 1440px x 241px) */}
      <div className="relative w-full h-[241px] flex items-center justify-center">
        
        {/* Full-width SVG stretching edge to edge with exact Figma wavy ribbon */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
          <svg
            viewBox="0 0 1355 241"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[241px] object-fill"
            preserveAspectRatio="none"
          >
            <path
              d="M1247.06 0C1297.35 0 1297.35 14.48 1347.62 14.48C1350.19 14.48 1352.64 14.4301 1355 14.3301V226.67C1352.64 226.57 1350.19 226.52 1347.62 226.52C1297.35 226.52 1297.35 241 1247.06 241C1196.78 241 1196.78 226.52 1146.5 226.52C1096.21 226.52 1096.21 241 1045.93 241C995.64 241 995.64 226.52 945.36 226.52C895.075 226.52 895.075 241 844.791 241C794.507 241 794.507 226.52 744.223 226.52C693.938 226.52 693.938 241 643.654 241C641.347 241 639.154 240.98 637.061 240.95L634.999 240.92C632.293 240.97 629.42 241 626.344 241C576.06 241 576.06 226.52 525.775 226.52C475.491 226.52 475.491 241 425.207 241C374.923 241 374.923 226.52 324.639 226.52C274.355 226.52 274.354 241 224.07 241C173.786 241 173.786 226.52 123.502 226.52C73.218 226.52 73.217 241 22.934 241C-27.3505 241 -27.3509 226.52 -77.6221 226.52C-80.188 226.52 -82.6393 226.57 -85.001 226.67V14.3301C-82.6393 14.4301 -80.188 14.48 -77.6221 14.48C-27.3509 14.48 -27.3505 0 22.934 0C73.217 0 73.218 14.48 123.502 14.48C173.786 14.48 173.786 0 224.07 0C274.354 0 274.355 14.48 324.639 14.48C374.923 14.48 374.923 0 425.207 0C475.491 0 475.491 14.48 525.775 14.48C576.06 14.48 576.06 0 626.344 0C629.42 0 632.293 0.0300781 634.999 0.0800781C637.705 0.0300781 640.578 0 643.654 0C693.938 0 693.938 14.48 744.223 14.48C794.507 14.48 794.507 0 844.791 0C895.075 0 895.075 14.48 945.36 14.48C995.64 14.48 995.64 0 1045.93 0C1096.21 0 1096.21 14.48 1146.5 14.48C1196.78 14.48 1196.78 0 1247.06 0Z"
              fill="black"
            />
          </svg>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-12 text-center flex flex-col items-center justify-center">
          
          {/* Golden Quote Mark */}
          <div className="text-[#C18C2C] mb-2 sm:mb-3 select-none">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Quote Text: Abhaya Libre 600 / 700 */}
          <blockquote className="font-abhaya font-semibold text-[22px] sm:text-[28px] lg:text-[34px] leading-[32px] sm:leading-[40px] lg:leading-[44px] text-white tracking-wide max-w-[920px]">
            “We help people living with and experiencing difficult times”
          </blockquote>

        </div>

      </div>

    </section>
  );
}
