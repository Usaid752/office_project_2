import HeroSection from "@/app/_components/HeroSection";
import DigitalEmpireSection from "@/app/_components/DigitalEmpireSection";
import NewsHighlightsSection from "@/app/_components/NewsHighlightsSection";
import WhyDukaandarSection from "@/app/_components/WhyDukaandarSection";
import HowItsWork from "@/app/_components/HowitsWork";
import Features from "@/app/_components/Features";
import WhyChooseUs from "@/app/_components/WhyChooseUs";
import FaqSection from "@/app/_components/FaqSection";

export default function HomePage() {
  return (
    <main className="mx-auto w-[100%] ">
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
