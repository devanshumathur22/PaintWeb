import Hero from "../components/Hero";
import About from "../components/About";
import ServicesSection from "../components/ServicesSection";
import WhyChoose from "../components/WhyChoose";
import Pricing from "../components/Pricing"; // ✅ change here
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import BeforeAfter from "../components/BeforeAfter";
import FAQ from "../components/FAQ";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ServicesSection />
      <BeforeAfter />
      <WhyChoose />
      <Testimonials />
      <Pricing /> {/* optional but ok */}
      <CTA />
      <FAQ />
    </div>
  );
}