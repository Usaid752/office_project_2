import Image from "next/image";
import { FEATURES_GRID_COPY } from "@/types/ProductPage/featuresGrid";

export default function FeaturesGrid() {
  return (
    <section
      aria-labelledby="features-grid-heading"
      className="mx-auto w-full max-w-[1601px] px-4 py-10 sm:px-6 lg:px-0"
    >
      <h2 id="features-grid-heading" className="sr-only">
        Platform features
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-10 lg:grid-rows-2 lg:h-[1212px]">
        {/* Sales */}
        <article className="flex min-h-[320px] flex-col overflow-hidden rounded-[3rem] bg-[#F7F6F9] p-8 sm:pt-0 md:col-span-1 lg:col-span-6 lg:min-h-0 lg:h-full bg-cover bg-center">
{/*            
          <div className="relative  items-center justify-center overflow-hidden rounded-2xl  ">
            
            <Image
              src="/img/Ellipse_card.png"
              alt="Sales dashboard with revenue chart and metrics"
              width={894}
              height={422}
              className="h-auto w-full max-h-[min(280px,42vh)] object-contain object-center sm:max-h-[320px]"
              sizes="(max-width: 768px) 100vw, min(894px, 50vw)"
            />
          </div> */}

          <div className="relative mb-6 flex min-h-[200px] flex-1 bg-[url('/img/Ellipse_card.png')] bg-no-repeat ">
            
            <Image
              src="/img/Group_card.svg"
              alt="Sales dashboard with revenue chart and metrics"
              width={894}
              height={422}
              className="  "
              sizes="(max-width: 768px) 100vw, min(894px, 50vw)"
            />
          </div>
          <h3 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            {FEATURES_GRID_COPY.sales.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-neutral-600">
            {FEATURES_GRID_COPY.sales.body}
          </p>
        </article>

        {/* Payments */}
        <article className="flex min-h-[320px] flex-col overflow-hidden rounded-[3rem] bg-[#4C9A2A] p-8 sm:p-10 md:col-span-1 lg:col-span-4 lg:min-h-0 lg:h-full">
          <div className="mb-6 flex flex-1 flex-col justify-center gap-3 sm:gap-4">
            <Image
              src="/img/payment_1.svg"
              alt="Card payments: Visa, Mastercard, UnionPay, Maestro"
              width={591}
              height={134}
              className="h-auto w-full object-contain object-left drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <Image
              src="/img/payment_2.svg"
              alt="Local payments: Easypaisa, cash on delivery, JazzCash"
              width={656}
              height={134}
              className="h-auto w-full object-contain object-left opacity-45 drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <h3 className="text-3xl font-bold text-white sm:text-4xl">
            {FEATURES_GRID_COPY.payments.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-white/90">
            {FEATURES_GRID_COPY.payments.body}
          </p>
        </article>

        {/* Inventory */}
        <article className="flex min-h-[320px] flex-col overflow-hidden rounded-[3rem] bg-[#A4DE02] p-8 sm:p-10 md:col-span-1 lg:col-span-4 lg:min-h-0 lg:h-full">
          <div className="mb-6 flex min-h-[200px] flex-1 items-center justify-center overflow-hidden p-3 sm:min-h-[240px] sm:p-0">
            <Image
              src="/img/Group_Supplier.png"
              alt="Supplier performance and inventory report"
              width={778}
              height={684}
              className="h-auto w-full max-h-[min(280px,42vh)] border-0 object-contain object-center   sm:max-h-[320px]"
              sizes="(max-width: 768px) 100vw, min(778px, 40vw)"
            />
          </div>
          <h3 className="text- font-bold text-neutral-900 sm:text-[2rem]">
            {FEATURES_GRID_COPY.inventory.title}
          </h3>
          <p className="mt-3 text-medium leading-relaxed text-[#000000]">
            {FEATURES_GRID_COPY.inventory.body}
          </p>
        </article>

        {/* Mobile app */}
        <article className="flex min-h-[380px] flex-col gap-8 overflow-hidden rounded-[3rem] bg-[#021b01ed] p-0 sm:p-10 md:col-span-1 lg:col-span-6 lg:min-h-0 lg:h-full lg:flex-row lg:items-start lg:gap-10">
          <div className="flex flex-1 flex-col justify-center lg:min-w-[60%]">
            <h3 className="text-[4rem] font-bold leading-tight text-[#FFFFFF] ">
              {FEATURES_GRID_COPY.mobile.title}
            </h3>
            <p className="mt-4 text-[1.2rem] pr-30   text-white/85">
              {FEATURES_GRID_COPY.mobile.body}
            </p>
          </div>
          <div className="relative flex flex-1 items-center justify-center lg:justify-end">
            <Image
              src="/img/Group_mobile.png"
              alt="Dukaandar merchant app on a phone"
              width={320}
              height={640}
              className="absolute scale-[1.9] top-4 right-8 mt-50"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
