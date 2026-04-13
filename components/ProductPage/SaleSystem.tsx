import Image from "next/image";
import PosFeatureCard from "@/components/ProductPage/PosFeatureCard";
import SubmitWaitlistButton from "@/components/Ui/SubmitWaitlistButton";
import { POS_FEATURES, POS_SECTION } from "@/types/ProductPage/saleSystemContent";

export default function SaleSystem() {
  return (
    <section
      className=" py-12 sm:py-16 lg:py-20 mt-10 "
      aria-labelledby="pos-heading"
    >
      <div className="mx-auto w-full max-w-[1601px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Copy + CTA */}
          <div className="flex flex-col gap-5 lg:col-span-4 lg:max-w-xl">
            <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#4C9A2A] sm:text-sm">
              {POS_SECTION.eyebrow}
            </p>
            <h2
              id="pos-heading"
              className="text-6xl font-[600] leading-[1.15] tracking-[-0.03em] text-neutral-900  lg:leading-[1.12]"
            >
              {POS_SECTION.title}
            </h2>
            <p className="max-w-prose   text-[#575757] sm:text-[1.2rem]">
              {POS_SECTION.description}
            </p>
            <SubmitWaitlistButton className="mt-10  !btn-rounded-md !border-0 !bg-[#000000] !font-semibold !text-white hover:!bg-[#FFFFFF]  text-base scale-[1.3] ml-10 " />
          </div>

          {/* Tablet mockup */}
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:col-span-4 lg:max-w-none">
            <div className="relative aspect-[583/759] w-full">
              <Image
                src="/img/ipad_2.svg"
                alt="Dukaandar point of sale app on a tablet showing products, cart, and checkout"
                fill
                className="object-contain "
                sizes="(max-width: 1024px) 90vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Feature stack */}
          <div className="flex flex-col gap-4 lg:col-span-4 [&>article]:shadow-lg [&>article]:shadow-neutral-900/10">
            {POS_FEATURES.map((item) => (
              <PosFeatureCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
