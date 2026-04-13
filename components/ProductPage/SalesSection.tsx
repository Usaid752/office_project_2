import Image from "next/image";
import Button from "@/components/Ui/Button";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import {FEATURE_ICON_SRC,FEATURES,type FeatureId,} from "@/types/ProductPage/salesContent";

function FeatureIcon({ id }: { id: FeatureId }) {
  const src = FEATURE_ICON_SRC[id];
  return (
    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
      <Image
        src={src}
        alt=""
        width={40}
        height={40}
        className="h-8 w-8 object-contain"
        aria-hidden
      />
    </span>
  );
}

export default function Sales() {
  return (
    <section
      aria-labelledby="sales-heading"
      className="bg-[#F3F4F6] py-12 sm:py-16 lg:py-20 rounded-4xl mx-auto w-full max-w-[1601px] "
    >
      <div className="h-[800px]">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-start sm:justify-between lg:mb-14">
          <h2
            id="sales-heading"
            className="max-w-2xl text-[4rem] font-Demibold leading-[1.15] tracking-[-0.04em] text-neutral-900 pl-10 "
          >
            Understand the data behind your sales.
          </h2>
          <Button
            variant="filled"
            href="/contact"
            icon={<ArrowIcon className="text-black" />}
            className=" !btn-rounded-md !bg-black mr-20 scale-[1.3] !text-white hover:!bg-neutral-800"
          >
            Contact Sales
          </Button>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16 pl-10">
          <div className="flex flex-col gap-3 sm:gap-4 ">
            {FEATURES.map((item) => {
              if ("active" in item && item.active && "description" in item) {
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-[#FFFFFF]  shadow-[0_8px_30px_rgba(15,23,42,0.08)] sm:p-4  "
                  >
                    <div className="flex gap-4 ">
                      <FeatureIcon id={item.id} />
                      <div>
                        <h3 className="text-1xl font-bold text-[#4C9A2A] sm:text-sm">
                          {item.title}
                        </h3>
                        <p className=" text-[1.3rem] leading-relaxed text-neutral-600 ">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-xl px-1 py-2.5 transition-colors hover:bg-white/60 sm:gap-4 sm:py-3"
                >
                  <FeatureIcon id={item.id} />
                  <span className="text-base font-semibold text-neutral-900 sm:text-lg">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="relative overflow-hidden p-3 sm:p-4 ">
            <Image
              src="/img/Dashboard.png"
              alt="Sales dashboard with revenue and product metrics"
              width={894}
              height={560}
              className="h-auto w-full object-contain object-top scale-[1]  "
              sizes="(max-width: 563px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
