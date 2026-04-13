import Packagepage from "@/components/PricingPage/Packagepage";
import PriceGrid from "@/components/PricingPage/PriceGrid";
import PriceHero from "@/components/PricingPage/PriceHero";
import PricingBillingToggle from "@/components/PricingPage/PricingBillingToggle";
import PricingCard from "@/components/PricingPage/PricingCard";
import PriceFaqs from "@/components/PricingPage/PriceFaqs";

export default function PricePage() {
  return (
    <main className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
      <PriceHero />
      <PricingBillingToggle />
      <Packagepage />
      <PricingCard /> 
      <PriceGrid />
      <PriceFaqs />
    </main>
  );
}
    