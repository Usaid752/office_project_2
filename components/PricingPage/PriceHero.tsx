"use client";

import ArrowIcon from "@/components/Icons/ArrowIcon";
import { StartforFreeButton } from "../Ui/StartButton";
import PriceBillingToggle from "./PricingBillingToggle";

export default function PriceHero() {
  return (
    <section
      className="flex flex-col items-center gap-6 rounded-[2rem] bg-[url(/img/Price_banner.png)]  px-5 py-14 text-center sm:gap-8 sm:px-8 sm:py-16 md:py-20 lg:gap-10 lg:py-24"
      aria-labelledby="price-hero-heading"
    >
      <p className="text-xs font-medium uppercase tracking-wider text-white sm:text-lg ">
        Plans &amp; pricing
      </p>

      <h1
        id="price-hero-heading"
        className="max-w-[900px] text-[65px] font-bold leading-[1.15] text-white mb-15"
      >
        <span className="text-[#b5f43c]">Start for free,</span>
        
        then enjoy US$1/month for 3 months
      </h1>

      <p className="max-w-xl text-sm text-white/90 sm:text-base">
        Plus, earn up to US$7,000 in credits as you sell.
      </p>

      <form
        className="flex w-full max-w-[900px] h-[80px]  flex-col gap-2 bg-[#F3F3F3] p-2 sm:flex-row sm:items-stretch sm:rounded-[10px] sm:gap-0 sm:p-1.5"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="price-hero-email" className="sr-only">
          Email address
        </label>
        <input
          id="price-hero-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email address"
          className="min-h-12 w-full flex-1 rounded-xl border-0 bg-transparent px-4 text-base text-neutral-900 outline-none placeholder:text-neutral-500 sm:min-h-0 sm:rounded-none sm:rounded-l-full sm:px-5"
        />
        <StartforFreeButton
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white sm:min-h-0 sm:btn-rounded-md sm:px-6 sm:text-base "
        />
      </form>

    </section>
  );
}
