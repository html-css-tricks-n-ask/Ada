import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import MeetFounder from "@/components/home/MeetFounder";
import TreatmentFocus from "@/components/home/TreatmentFocus";
import QuoteBanner from "@/components/home/QuoteBanner";
import OurServices from "@/components/home/OurServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import FourSteps from "@/components/home/FourSteps";
import StatesServed from "@/components/home/StatesServed";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Hero />
      <MeetFounder />
      <TreatmentFocus />
      <QuoteBanner />
      <OurServices />
      <WhyChooseUs />
      <Testimonials />
      <FourSteps />
      <StatesServed />
      <FAQ />
      <Footer />
    </main>
  );
}
