import Image from "next/image";
import Link from "next/link";
import type { NewsHighlightItem } from "@/utilis/NewsHighlightsContent";

export default function NewsHighlightCard({
  tag,
  title,
  description,
  imageUrl,
  href,
}: NewsHighlightItem) {
  return (
    <article className="group mx-auto w-full max-w-[220px] overflow-hidden rounded-[24px] bg-[#F5F3EE] shadow-[0_20px_40px_rgba(15,23,42,0.06)] sm:max-w-[320px] lg:max-w-none lg:rounded-[28px]">
      <Link href={href} className="block">
        <div className="relative aspect-[0.66] overflow-hidden sm:aspect-[0.7] lg:aspect-[0.74]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-x-3 bottom-3 rounded-[18px] bg-white/95 p-3 shadow-[0_18px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:inset-x-4 sm:bottom-4 sm:p-4 lg:rounded-[22px] lg:p-5">
            <span className="inline-flex rounded-full bg-[#76BA1B] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.03em] text-white">
              {tag}
            </span>

            <h3 className="mt-3 text-[18px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#111111] sm:text-[20px] lg:mt-4 lg:text-[24px]">
              {title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-[#8A8A84] sm:text-sm sm:leading-6 lg:mt-3">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
