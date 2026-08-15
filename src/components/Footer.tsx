import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-neutral-900 overflow-hidden">
      {/* Main Footer Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-14 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 xl:gap-12">
          
          {/* Column 1: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-abhaya font-bold text-[19px] sm:text-[20px] text-[#DFC377] tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col space-y-3 font-work font-normal text-[14px] sm:text-[15px] text-white/90">
              <li>
                <Link href="#who-we-are" className="hover:text-[#FCF38A] transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="#what-we-treat" className="hover:text-[#FCF38A] transition-colors">
                  What We Treat
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#FCF38A] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#FCF38A] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-abhaya font-bold text-[19px] sm:text-[20px] text-[#DFC377] tracking-wide">
              Resources
            </h4>
            <ul className="flex flex-col space-y-3 font-work font-normal text-[14px] sm:text-[15px] text-white/90">
              <li>
                <Link href="#faq" className="hover:text-[#FCF38A] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-[#FCF38A] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#insurance" className="hover:text-[#FCF38A] transition-colors">
                  Fees and Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-abhaya font-bold text-[19px] sm:text-[20px] text-[#DFC377] tracking-wide">
              Legal
            </h4>
            <ul className="flex flex-col space-y-3 font-work font-normal text-[14px] sm:text-[15px] text-white/90">
              <li>
                <Link href="#terms" className="hover:text-[#FCF38A] transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="hover:text-[#FCF38A] transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#returns" className="hover:text-[#FCF38A] transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="#cookies" className="hover:text-[#FCF38A] transition-colors">
                  Cookie Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Business Hours & Careers */}
          <div className="flex flex-col space-y-6">
            <div>
              <h4 className="font-abhaya font-bold text-[19px] sm:text-[20px] text-[#DFC377] tracking-wide mb-3">
                Business Hours
              </h4>
              <div className="font-work font-normal text-[14px] sm:text-[15px] text-white/90 space-y-1">
                <p>Monday - Thursday</p>
                <p>09:00 am - 4:00 pm</p>
              </div>
            </div>

            <div>
              <h4 className="font-abhaya font-bold text-[19px] sm:text-[20px] text-[#DFC377] tracking-wide mb-3">
                For Careers
              </h4>
              <div className="font-work font-normal text-[14px] sm:text-[15px] text-white/90 space-y-1">
                <p>Interested in joining the ADA Team?</p>
                <a
                  href="mailto:Career@adapsychiatry.com"
                  className="text-white hover:text-[#FCF38A] underline decoration-neutral-600 transition-colors"
                >
                  Career@adapsychiatry.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 5: Brand, Location & Social */}
          <div className="flex flex-col space-y-5">
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <span className="font-work font-semibold text-[17px] leading-tight tracking-[3px] text-white uppercase">
                ADA PSYCHIATRY
              </span>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-abhaya font-bold text-[17px] text-[#DFC377] tracking-wide mb-1.5">
                Locate us
              </h4>
              <p className="font-work font-normal text-[13px] sm:text-[14px] leading-relaxed text-white/90">
                1820 E Ray Road, STE A107, Chandler, Arizona 85225
                <br />
                Phone: 480-526-9292
              </p>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="font-abhaya font-bold text-[17px] text-[#DFC377] tracking-wide mb-2.5">
                Follow us
              </h4>
              <div className="flex items-center gap-4 text-white">
                {/* Instagram */}
                <a href="#instagram" aria-label="Instagram" className="hover:text-[#FCF38A] transition-colors">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* Facebook */}
                <a href="#facebook" aria-label="Facebook" className="hover:text-[#FCF38A] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                {/* Twitter / X */}
                <a href="#twitter" aria-label="Twitter" className="hover:text-[#FCF38A] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                {/* TikTok */}
                <a href="#tiktok" aria-label="TikTok" className="hover:text-[#FCF38A] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43V12.9a8.18 8.18 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-3.04-1.28v-3.05z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#linkedin" aria-label="LinkedIn" className="hover:text-[#FCF38A] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="border-t border-neutral-800/80 py-6 text-center">
        <p className="font-work font-normal text-[13px] text-white/75">
          © Ada Psychiatry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
