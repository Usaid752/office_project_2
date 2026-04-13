import HeroSection from "./_components/HeroSection";
import DigitalEmpireSection from "./_components/DigitalEmpireSection";
import NewsHighlightsSection from "./_components/NewsHighlightsSection";
import WhyDukaandarSection from "./_components/WhyDukaandarSection";
import HowItsWork from "./_components/HowitsWork";
import Features from "./_components/Features";
import WhyChooseUs from "./_components/WhyChooseUs";
import FaqSection from "./_components/FaqSection";

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
