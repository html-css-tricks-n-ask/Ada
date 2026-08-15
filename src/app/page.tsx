import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MeetFounder from "@/components/MeetFounder";
import TreatmentFocus from "@/components/TreatmentFocus";
import QuoteBanner from "@/components/QuoteBanner";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FourSteps from "@/components/FourSteps";
import StatesServed from "@/components/StatesServed";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

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
