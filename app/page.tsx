
import HeroSection from "../components/HomePage/HeroSection";
import DigitalEmpireSection from "../components/HomePage/DigitalEmpireSection";
import NewsHighlightsSection from "../components/HomePage/NewsHighlightsSection";
import WhyDukaandarSection from "../components/HomePage/WhyDukaandarSection";
import HowItsWork from "../components/HomePage/HowitsWork";
import Features from "../components/HomePage/Features";
import WhyChooseUs from "../components/HomePage/WhyChooseUs";
import FaqSection from "../components/HomePage/FaqSection";


export default function HomePage() {
  return (
    <main className="mx-auto w-[80%]">
      <HeroSection />
      <WhyDukaandarSection />
      <HowItsWork />
      <Features />
      <WhyChooseUs />
      <FaqSection />
      <DigitalEmpireSection />
      <NewsHighlightsSection />
    </main>
  );
}