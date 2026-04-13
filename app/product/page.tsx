import FeaturesGrid from "@/components/ProductPage/FeaturesGrid";
import HeroSection from "@/components/ProductPage/HeroSection";
import PlatformStatsSection from "@/components/ProductPage/PlatformStatsSection";
import SaleSystem from "@/components/ProductPage/SaleSystem";
import SalesSection from "@/components/ProductPage/SalesSection";
import StoreFront from "@/components/ProductPage/StoreFront";
import AdminSection from "@/components/ProductPage/AdminSection";
import Banner from "@/components/ProductPage/Banner";

export default function ProductPage() {
  return (
    <main className="mx-auto w-[80%]">
      <HeroSection />
      <PlatformStatsSection />
      <FeaturesGrid />
      <SalesSection />
      <StoreFront />
      <AdminSection />
      <Banner />
      <SaleSystem />
    </main>
  );
}