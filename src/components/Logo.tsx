import React from "react";

export default function Logo({ className = "w-[46px] h-[46px]" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_2px_8px_rgba(193,140,44,0.3)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C18C2C" />
            <stop offset="50%" stopColor="#FCF38A" />
            <stop offset="100%" stopColor="#C18C2C" />
          </linearGradient>
          <linearGradient id="innerGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DFC377" />
            <stop offset="50%" stopColor="#FDF7A3" />
            <stop offset="100%" stopColor="#B37E22" />
          </linearGradient>
        </defs>
        
        {/* Outer Ring */}
        <circle cx="50" cy="50" r="48" fill="url(#goldGradient)" stroke="#111111" strokeWidth="2" />
        
        {/* Inner Ring */}
        <circle cx="50" cy="50" r="44" fill="none" stroke="#222222" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="41" fill="url(#innerGold)" />
        
        {/* AP Monogram */}
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fill="#111111"
          fontFamily="'Abhaya Libre', Georgia, serif"
          fontSize="36"
          fontWeight="bold"
          letterSpacing="-1.5"
        >
          AP
        </text>
      </svg>
    </div>
  );
}
