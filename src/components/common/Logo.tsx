import React from "react";
import Image from "next/image";

export default function Logo({ className = "w-[46px] h-[46px]" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <Image
        src="/logo.png"
        alt="Ada Psychiatry Logo"
        fill
        sizes="46px"
        className="object-contain"
        priority
      />
    </div>
  );
}
