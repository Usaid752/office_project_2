import Image from "next/image";
import type { PosFeatureItem } from "@/types/ProductPage/saleSystemContent";

export default function PosFeatureCard({ title, description, iconSrc }: PosFeatureItem) {
  return (
    <article className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-5 sm:p-6">
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-neutral-50">
        <Image
          src={iconSrc}
          alt=""
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
          aria-hidden
        />
      </span>
      <div className="min-w-0">
        <h3 className="text-base font-bold text-neutral-900 sm:text-lg">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[#868686] sm:text-[15px]">
          {description}
        </p>
      </div>
    </article>
  );
}
