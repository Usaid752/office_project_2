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
    <article className="group overflow-hidden rounded-[28px] bg-[#F5F3EE] shadow-[0_20px_40px_rgba(15,23,42,0.06)]">
      <Link href={href} className="block">
        <div className="relative aspect-[0.74] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-x-3 bottom-3 rounded-[22px] bg-white/95 p-4 shadow-[0_18px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:inset-x-4 sm:bottom-4 sm:p-5">
            <span className="inline-flex rounded-full bg-[#76BA1B] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.03em] text-white">
              {tag}
            </span>

            <h3 className="mt-4 text-[24px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#111111]">
              {title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#8A8A84]">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
