import Image from "next/image";
import {
  PLAN_FEATURES_SECTION_TITLE,
  planFeatures,
} from "@/types/PricePage";

export default function PricingCard() {
  return (
    <section
      className="w-full bg-white py-12 sm:py-14 lg:py-16"
      aria-labelledby="plan-features-heading"
    >
      <h2
        id="plan-features-heading"
        className="mb-10 text-center text-2xl font-Demibold text-neutral-900 sm:mb-12 sm:text-6xl"
      >
        {PLAN_FEATURES_SECTION_TITLE}
      </h2>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {planFeatures.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
              <Image
                src={item.iconSrc}
                alt=""
                width={20}
                height={20}
                className="size-15 object-contain"
                sizes="20px"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold text-[#000000]">{item.title}</h3>
            <p className="text-md leading-relaxed text-[#868686]">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
