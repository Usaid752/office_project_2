import FeatureHero from "@/components/FeaturesPage/FeatureHero";
import AboutFeature from "@/components/FeaturesPage/AboutFeature";
import BannerFeature from "@/components/FeaturesPage/BannerFeature";
import FeatureCards from "@/components/FeaturesPage/FeatureCards";
import BrandFeature from "@/components/FeaturesPage/BrandFeature";
import MobileFeature from "@/components/FeaturesPage/MobileFeature";
import RetailFeature from "@/components/FeaturesPage/RetailFeature";
import SupplyFeature from "@/components/FeaturesPage/SupplyFeature";
import CammandFeature from "@/components/FeaturesPage/CammandFeature";
import BannerCard from "@/components/FeaturesPage/BannerCard";
import FeatureFaqs from "@/components/FeaturesPage/FeatureFaqs";
export default function FeaturesPage() {
  return (
    <main className="mx-auto w-[1400px]">
      <FeatureHero />
      <BannerFeature />
      <BrandFeature />
      <MobileFeature />
      <RetailFeature />
      <SupplyFeature />
      <CammandFeature />
      <BannerCard />
      <FeatureCards />
      <FeatureFaqs />
    </main>
  );
}