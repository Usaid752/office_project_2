import FeaturesGrid from "@/components/ProductPage/FeaturesGrid";
import HeroSection from "@/components/ProductPage/HeroSection";
import PlatformStatsSection from "@/components/ProductPage/PlatformStatsSection";
import Sales from "@/components/ProductPage/Sales";
import StoreFront from "@/components/ProductPage/StoreFront";
import AdminSection from "@/components/ProductPage/AdminSection";

export default function ProductPage() {
  return (
    <main className="mx-auto w-[80%]">
      <HeroSection />
      <PlatformStatsSection />
      <FeaturesGrid />
      <Sales />
      <StoreFront />
      <AdminSection />
    </main>
  );
}