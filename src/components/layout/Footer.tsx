import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/common/Logo";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-black text-white border-t border-neutral-900 overflow-hidden select-none">
      {/* Main Footer Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[100px] pt-14 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-9 sm:gap-10 lg:gap-8 xl:gap-12">
          
          {/* Column 1: Quick Links */}
          <div className="flex flex-col space-y-3 sm:space-y-3.5">
            <h4 className="font-abhaya font-bold text-[18px] leading-[30px] tracking-[0.2px] text-[#DAA520]">
              Quick Links
            </h4>
            <ul className="flex flex-col space-y-2 font-work font-normal text-[14px] leading-[141%] text-[#FFFFFF]">
              <li>
                <Link href="#founder" className="hover:text-[#DAA520] transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#DAA520] transition-colors">
                  What We Treat
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#DAA520] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#DAA520] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="flex flex-col space-y-3 sm:space-y-3.5">
            <h4 className="font-abhaya font-bold text-[18px] leading-[30px] tracking-[0.2px] text-[#DAA520]">
              Resources
            </h4>
            <ul className="flex flex-col space-y-2 font-work font-normal text-[14px] leading-[141%] text-[#FFFFFF]">
              <li>
                <Link href="#faq" className="hover:text-[#DAA520] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-[#DAA520] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#insurance" className="hover:text-[#DAA520] transition-colors">
                  Fees and Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col space-y-3 sm:space-y-3.5">
            <h4 className="font-abhaya font-bold text-[18px] leading-[30px] tracking-[0.2px] text-[#DAA520]">
              Legal
            </h4>
            <ul className="flex flex-col space-y-2 font-work font-normal text-[14px] leading-[141%] text-[#FFFFFF]">
              <li>
                <Link href="#terms" className="hover:text-[#DAA520] transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="hover:text-[#DAA520] transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#returns" className="hover:text-[#DAA520] transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="#cookies" className="hover:text-[#DAA520] transition-colors">
                  Cookie Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Business Hours & Careers */}
          <div className="flex flex-col space-y-5 sm:space-y-6">
            <div>
              <h4 className="font-abhaya font-bold text-[18px] leading-[30px] tracking-[0.2px] text-[#DAA520] mb-1.5">
                Business Hours
              </h4>
              <div className="font-work font-normal text-[14px] leading-[141%] text-[#FFFFFF] space-y-0.5">
                <p>Monday - Thursday</p>
                <p>09:00 am - 4:00 pm</p>
              </div>
            </div>

            <div>
              <h4 className="font-abhaya font-bold text-[18px] leading-[30px] tracking-[0.2px] text-[#DAA520] mb-1.5">
                For Careers
              </h4>
              <div className="font-work font-normal text-[14px] leading-[141%] text-[#FFFFFF] space-y-0.5">
                <p>Interested in joining the ADA Team?</p>
                <a
                  href="mailto:Career@adapsychiatry.com"
                  className="text-white hover:text-[#DAA520] underline decoration-neutral-600 transition-colors break-all"
                >
                  Career@adapsychiatry.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 5: Brand, Location & Social */}
          <div className="flex flex-col space-y-5 pt-2 sm:pt-0">
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <Logo className="w-9 h-9 sm:w-10 sm:h-10" />
              <span className="font-work font-semibold text-[16px] sm:text-[17px] leading-tight tracking-[2.5px] sm:tracking-[3px] text-white uppercase">
                ADA PSYCHIATRY
              </span>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-abhaya font-bold text-[18px] leading-[30px] tracking-[0.2px] text-[#DAA520] mb-1">
                Locate us
              </h4>
              <p className="font-work font-normal text-[14px] leading-[141%] text-[#FFFFFF]">
                1820 E Ray Road, STE A107, Chandler, Arizona 85225
                <br />
                <a href="tel:4805269292" className="hover:text-[#DAA520] transition-colors">
                  Phone: 480-526-9292
                </a>
              </p>
            </div>

            {/* Social Icons with /footerIcons/ */}
            <div>
              <h4 className="font-abhaya font-bold text-[18px] leading-[30px] tracking-[0.2px] text-[#DAA520] mb-3">
                Follow us
              </h4>
              <div className="flex items-center gap-4">
                {/* Instagram */}
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="w-7 h-7 relative hover:opacity-80 transition-opacity flex items-center justify-center"
                >
                  <Image
                    src="/footerIcons/image.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>

                {/* Facebook */}
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="w-7 h-7 relative hover:opacity-80 transition-opacity flex items-center justify-center"
                >
                  <Image
                    src="/footerIcons/image-1.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>

                {/* Twitter / X */}
                <a
                  href="#twitter"
                  aria-label="Twitter"
                  className="w-7 h-7 relative hover:opacity-80 transition-opacity flex items-center justify-center"
                >
                  <Image
                    src="/footerIcons/image-2.png"
                    alt="Twitter"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>

                {/* TikTok */}
                <a
                  href="#tiktok"
                  aria-label="TikTok"
                  className="w-7 h-7 relative hover:opacity-80 transition-opacity flex items-center justify-center"
                >
                  <Image
                    src="/footerIcons/tik-tok 1.png"
                    alt="TikTok"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="#linkedin"
                  aria-label="LinkedIn"
                  className="w-7 h-7 relative hover:opacity-80 transition-opacity flex items-center justify-center"
                >
                  <Image
                    src="/footerIcons/linkedin 1.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="border-t border-neutral-800/80 py-5 sm:py-6 text-center px-4">
        <p className="font-work font-normal text-[12px] sm:text-[13px] text-white/75">
          © Ada Psychiatry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
