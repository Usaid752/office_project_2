import ArrowIcon from "@/components/Icons/ArrowIcon";
import Button from "@/components/Ui/Button";
import { packagePlans } from "@/utilis/PackagePlansContent";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Packagepage() {
  return (
    <section
      className="w-full pb-10 sm:pb-14 lg:pb-16"
      aria-labelledby="pricing-plans-heading"
    >
      <h2 id="pricing-plans-heading" className="sr-only">
        Pricing plans
      </h2>

      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 md:flex-row md:items-stretch md:justify-center md:gap-6 lg:gap-8">
        {packagePlans.map((plan) => {
          const isFeatured = Boolean(plan.featured);

          return (
            <article
              key={plan.id}
              className={[
                "flex flex-1 flex-col justify-between rounded-[2rem] p-6 sm:p-8",
                isFeatured
                  ? "bg-[#4C9A2A] text-white shadow-[0_20px_50px_rgba(76,154,42,0.35)]"
                  : "bg-[#f3f3f3] text-neutral-900",
              ].join(" ")}
            >
              <div className="flex flex-col gap-6">
                <span
                  className={[
                    "inline-flex w-fit rounded-lg px-3 py-1 text-xs font-semibold sm:text-sm",
                    isFeatured
                      ? "bg-white text-neutral-900"
                      : "bg-white text-[#4C9A2A]",
                  ].join(" ")}
                >
                  {plan.badge}
                </span>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                    {plan.title}
                  </h3>
                  <div
                    className={[
                      "space-y-1 text-sm sm:text-base",
                      isFeatured ? "text-white/85" : "text-neutral-500",
                    ].join(" ")}
                  >
                    <p>{plan.perks[0]}</p>
                    <p>{plan.perks[1]}</p>
                  </div>
                </div>

                <div
                  className={[
                    "h-px w-full",
                    isFeatured ? "bg-white/40" : "bg-neutral-200",
                  ].join(" ")}
                  aria-hidden
                />

                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    {plan.price}
                  </span>
                  <span
                    className={[
                      "text-sm font-medium sm:text-base",
                      isFeatured ? "text-white/90" : "text-neutral-500",
                    ].join(" ")}
                  >
                    {plan.pricePeriod}
                  </span>
                </div>

                <div className="space-y-3">
                  <p
                    className={[
                      "text-sm font-bold sm:text-base",
                      isFeatured ? "text-white" : "text-neutral-900",
                    ].join(" ")}
                  >
                    Standout features
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm sm:text-base">
                        <span
                          className={[
                            "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                            isFeatured
                              ? "bg-white text-[#4C9A2A]"
                              : "bg-[#4C9A2A] text-white",
                          ].join(" ")}
                        >
                          <CheckIcon className="shrink-0" />
                        </span>
                        <span
                          className={[
                            "leading-snug",
                            isFeatured ? "text-white/95" : "text-neutral-700",
                          ].join(" ")}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                {isFeatured ? (
                  <Button
                    href={plan.cta.href}
                    variant="filled"
                    icon={<ArrowIcon className="text-black" />}
                    iconClassName="!bg-[#76BA1B]"
                    className="btn-rounded-md !h-auto min-h-11 w-full !justify-between !border-0 !bg-white !py-3 !text-base !font-semibold !text-neutral-900 hover:!bg-neutral-100"
                  >
                    {plan.cta.label}
                  </Button>
                ) : (
                  <Button
                    href={plan.cta.href}
                    variant="filled"
                    icon={<ArrowIcon className="text-black" />}
                    iconClassName="!bg-[#76BA1B]"
                    className="btn-rounded-md !h-auto min-h-11 w-full !justify-between !bg-black !py-3 !text-base !font-semibold !text-white hover:!bg-neutral-800"
                  >
                    {plan.cta.label}
                  </Button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
