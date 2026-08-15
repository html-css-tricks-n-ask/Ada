import React from "react";

export default function Logo({ className = "w-[46px] h-[46px]" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_2px_10px_rgba(193,140,44,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Outer Ring Gold Gradient */}
          <linearGradient id="outerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C18C2C" />
            <stop offset="50%" stopColor="#FCF38A" />
            <stop offset="100%" stopColor="#C18C2C" />
          </linearGradient>
          {/* Inner Surface Gold Gradient */}
          <linearGradient id="innerSurfaceGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C99432" />
            <stop offset="35%" stopColor="#F5EA82" />
            <stop offset="70%" stopColor="#FCF38A" />
            <stop offset="100%" stopColor="#B88325" />
          </linearGradient>
        </defs>
        
        {/* Outer Dark Rim */}
        <circle cx="50" cy="50" r="49" fill="#111111" />
        
        {/* Gold Border Ring */}
        <circle cx="50" cy="50" r="47" stroke="url(#outerGoldGrad)" strokeWidth="3" />
        
        {/* Inner Dark Hairline */}
        <circle cx="50" cy="50" r="43" fill="#111111" stroke="#222222" strokeWidth="1" />
        
        {/* Inner Solid Gold Medallion */}
        <circle cx="50" cy="50" r="41" fill="url(#innerSurfaceGrad)" />
        
        {/* Stylized Interlocking AP Monogram */}
        <g transform="translate(50, 50)">
          {/* Letter A */}
          <path
            d="M-15 14 L-6 -18 L3 -18 L12 14 L6 14 L3.8 6 L-6.8 6 L-9 14 Z M-5.2 0.5 L2.2 0.5 L-1.5 -12.5 Z"
            fill="#111111"
          />
          {/* Letter P (interlocking & offset) */}
          <path
            d="M-0.5 -18 L10 -18 C16 -18 19.5 -14.5 19.5 -9 C19.5 -3.5 16 0 10 0 L4.5 0 L4.5 14 L-0.5 14 Z M4.5 -13.5 L4.5 -4.5 L9.5 -4.5 C12.5 -4.5 14.5 -6 14.5 -9 C14.5 -12 12.5 -13.5 9.5 -13.5 Z"
            fill="#111111"
          />
        </g>
      </svg>
    </div>
  );
}
