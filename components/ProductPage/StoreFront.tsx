import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Ui/Button";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import { STOREFRONT_THEMES } from "@/types/ProductPage/storeFrontContent";

export default function StoreFront() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="storefront-heading">
      <div className="mx-auto w-full max-w-[1601px] px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-[0.2em] text-[#4C9A2A] ">
          STOREFRONT
        </p>
        <div className="flex max-w-[90%] flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
          <div className="min-w-0 flex-1 max-w-[80%] text-start  ">
            <h2
              id="storefront-heading"
              className="text-[3rem] font-Demibold leading-[1.15] tracking-[-0.03em] text-neutral-900 w-[53%] ml-55    "
            >
              Your brand deserves a stunning digital home.
            </h2>
          </div>
          <div className="flex max-w-[35%] flex-col gap-5 lg:shrink-0  ml-2 ">
            <p className="text-base leading-relaxed text-neutral-600 w-[90%] ">
              Turn your physical shop into a world-class online brand. Choose from
              20+ premium, high-converting themes designed to showcase your products
              and drive sales.
            </p>
            <Button
              variant="filled"
              href="/themes"
              icon={<ArrowIcon className="text-black" />}
              className="w-fit !btn-rounded-md !bg-black !px-5 !py-2.5 !text-white hover:!bg-neutral-800 scale-[1.1] mt-5"
            >
              Browse Themes
            </Button>
          </div>
        </div>

        <ul className="mt-12 grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 scale-[0.9]">
          {STOREFRONT_THEMES.map((t, i) => (
            <li
              key={`${t.title}-${i}`}
              className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50/50 shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
            >
              <div className="relative aspect-[4/3] w-full bg-neutral-100">
                <Image
                  src={t.image}
                  alt={`${t.title} theme preview`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex items-center justify-between gap-3 bg-white px-4 py-3.5 sm:px-5">
                <span className="text-sm font-bold text-neutral-900 sm:text-base">
                  {t.title}
                </span>
                <Link
                  href={`/themes/${encodeURIComponent(t.title.toLowerCase().replace(/\s+/g, "-"))}`}
                  className="shrink-0 text-sm font-semibold text-[#4C9A2A] underline-offset-2 hover:underline"
                >
                  View Theme
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
