import Link from "next/link";

const plans = [
  {
    banner: "FREE for your first 14 days",
    title: "Starter",
    price: "US$5 USD/month",
    description:
      "Sell instantly through social media and messaging apps or a simple online store",
  },
  {
    banner: "Most Popular for Growing Brands",
    title: "Retail",
    price: "US$89 USD/month",
    description:
      "Sell instantly through social media and messaging apps or a simple online store",
  },
] as const;

export default function PriceGrid() {
  return (
    <section
      className="mx-auto max-w-[1600px] py-10 sm:py-12 lg:py-14"
      aria-labelledby="alt-solutions-heading"
    >
      <h2
        id="alt-solutions-heading"
        className="mb-8 text-center text-2xl font-Demibold text-[#000000] sm:mb-10 sm:text-3xl lg:text-6xl pb-15" 
      >
        Alternative solution for your business
      </h2>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className="flex flex-col overflow-hidden rounded-4xl border border-neutral-200 bg-white"
          >
            <p className="bg-[#4C9A2A] px-4 py-2.5 text-center text-xs font-semibold text-white sm:text-sm">
              {plan.banner}
            </p>
            <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
                  {plan.title}
                </h3>
                <p className="mt-2 text-base font-bold text-neutral-900">
                  {plan.price}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500 sm:text-base">
                  {plan.description}
                </p>
              </div>
              <Link
                href="/features"
                className="mt-auto inline-flex w-fit rounded-lg bg-[#4C9A2A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#539D31] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C9A2A]"
              >
                Learn More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
