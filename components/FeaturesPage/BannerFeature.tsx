import Image from "next/image";

const ITEMS = [
  "High-Speed Themes",
  "SEO & Conversion Ready",
  "Global Selling Power",
] as const;

export default function BannerFeature() {
  return (
    <section
      className="bg-[#D2F9E74D] px-6 py-12 lg:px-20 lg:py-24 border border-[#D2F9E74D] rounded-[2rem] max-w-[100%] mx-auto horizontal-center"
      aria-labelledby="banner-storefront-heading"
    >
      <div className="mx-auto flex   flex-col gap-20 lg:flex-row lg:items-center lg:gap-16">
        <div className="min-w-0 flex-1 space-y-5 max-[60%]">
          <p className="text-md font-semibold uppercase tracking-[0.2em] text-[#7DC3A2] text-start pb-5">
            STOREFRONT
          </p>
          <h2
            id="banner-storefront-heading"
            className="text-[3.3rem] font-[700] tracking-tight text-neutral-900  lg:leading-[1.15]"
          >
            Launch a world-class Online Storefront
          </h2>
          <p className="max-w-[65%] text-base leading-relaxed text-[#575757]">
            Give your customers a premium shopping experience with high-performance
            themes designed to convert visitors into buyers.
          </p>
          <ul className="space-y-3 pt-1">
            {ITEMS.map((label) => (
              <li
                key={label}
                className="flex items-center gap-3 font-semibold text-neutral-900"
              >
                <span
                  className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#7DC3A2] text-[10px] leading-none text-white"
                  aria-hidden
                >
                  ✓
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
         
        <div className="flex justify-end scale-[0.9]">
         
        <figure className="relative left-15 w-FULL flex-1 overflow-hidden rounded-2xl p-3 sm:p-4 ">
          <Image
            src="/img/Feature_1.png"
            alt="Fashion storefront preview with overlapping browser windows"
            width={622}
            height={525}
            className="h-auto w-full rounded-xl object-cover "
            sizes=""
          />
        </figure>

        </div>
         
         
        
      </div>
    </section>
  );
}
