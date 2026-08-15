import type { Metadata } from "next";
import { Work_Sans, Abhaya_Libre } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const abhayaLibre = Abhaya_Libre({
  variable: "--font-abhaya-libre",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ada Psychiatry | Compassionate Mental Health Care",
  description:
    "Ada Psychiatry provides a safe, comfortable, and warm environment for all your mental health needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${abhayaLibre.variable} h-full`}>
      <body className="min-h-full font-sans antialiased bg-white text-black selection:bg-[#C18C2C]/30">
        {children}
      </body>
    </html>
  );
}
