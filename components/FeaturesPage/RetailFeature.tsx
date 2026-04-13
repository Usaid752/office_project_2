import Image from "next/image";

const ITEMS = [
  "Custom Domain Connection",
  "Total Branding Control",
  "Your store. Your brand. No labels",
] as const;

export default function BannerFeature() {
  return (
    <section
      className="bg-[#C3F2771A] px-6 py-12 lg:px-20 lg:py-24 border border-[#C3F2771A] rounded-[2rem] max-w-[100%] mx-auto mt-20 "
      aria-labelledby="banner-storefront-heading"
    >
      <div className="mx-auto flex flex-col gap-20 lg:flex-row lg:items-center lg:gap-16"> 
        
      <div className="flex justify-end scale-[0.9]">
        <figure className="relative right-15 w-FULL flex-1 overflow-hidden rounded-2xl  p-3 sm:p-4 ">
          <Image
            src="/img/Feature_4.png"
            alt="Fashion storefront preview with overlapping browser windows"
            width={622}
            height={525}
            className="h-auto w-full rounded-xl object-cover "
            sizes=""
          />
        </figure>
        </div>

        <div className="min-w-0 flex-1 space-y-5 max-[70%]">
          <p className="text-md font-semibold uppercase tracking-[0.2em] text-[#96C844] text-start pb-5 ml-10">
          PHYSICAL RETAIL
          </p>
          <h2
            id="banner-storefront-heading"
            className="text-[3.3rem] font-[700] tracking-tight text-neutral-900  lg:leading-[1.15] ml-10"
          >
          Bridge the Gap with an Integrated POS  
           </h2>
          <p className="max-w-[70%] text-base leading-relaxed text-[#575757] ml-10">
          Your physical counter and your online store are now one. Manage everything from a single unified system.

          </p>
          <ul className="space-y-3 pt-1 ml-10">
            {ITEMS.map((label) => (
              <li
                key={label}
                className="flex items-center gap-3 font-semibold text-neutral-900"
              >
                <span
                  className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#96C844] text-[10px] leading-none text-white"
                  aria-hidden
                >
                  ✓
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      
      </div>
    </section>
  );
}
