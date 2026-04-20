import Image from "next/image";

const steps = [
  "Customize your store",
  "Add your first product",
  "Grow Your Business",
] as const;

function StepArrow({ active }: { active?: boolean }) {
  return active ? (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B8FF1A] sm:h-11 sm:w-11">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="black"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="8 7 17 7 17 16" />
      </svg>
    </span>
  ) : (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-white/60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" y1="12" x2="18" y2="12" />
      <polyline points="13 7 18 12 13 17" />
    </svg>
  );
}

export default function HowItsWork() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1800px] items-stretch  lg:grid-cols-10   ">
        <div className="relative  overflow-hidden w-[450px]  rounded-[28px] ml-52 lg:col-span-4  ">
          <Image
            src="/img/shop_1.jpg"
            alt="Dukaandar storefront preview on a laptop with shopping bags around it"
            fill
            sizes="w-full h-full"
            className="object-cover w-full h-full "
          />
        </div>

        <div className="w-[330px] rounded-[32px] bg-black px-6 py-8 text-white sm:px-10 sm:py-10 min-[1024px]:w-[850px] lg:col-span-6 lg:px-12 lg:py-11">
          <p className="text-[20px] font-[130] uppercase  text-(--text-color-secondary)  ">
            How it works
          </p>

          <h2 className="mt-4  text-[100] font-[50] leading-[0.95] tracking-[-0.05em]  lg:text-[75px] font-custom ">
            From Bazaar to Browser in 3 Simple Steps
          </h2>

          <div className="mt-8 sm:mt-12">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex items-center justify-between gap-4 border-b border-white/65 py-5 last:border-b-0 last:pb-0 first:pt-0"
              >
                <p className="text-lg font-[100] tracking-[-0.03em] text-white/95 sm:text-[22px]">
                  {step}
                </p>
                <StepArrow active={index === 0} />
              </div>
            ))}
          </div>
        </div>
      </div>
    
    </section>
  );
}
