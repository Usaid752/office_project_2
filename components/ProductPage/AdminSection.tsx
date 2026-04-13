import Image from "next/image";
import type { ReactNode } from "react";
import {
  ADMIN_FEATURES,
  ADMIN_HEADING,
} from "@/types/ProductPage/adminSectionContent";

function FeatureIcon({
  id,
  iconStyle,
}: {
  id: (typeof ADMIN_FEATURES)[number]["id"];
  iconStyle: (typeof ADMIN_FEATURES)[number]["iconStyle"];
}) {
  const box =
    iconStyle === "lime"
      ? "bg-[#c8f542]"
      : iconStyle === "dark"
        ? "bg-neutral-900"
        : "bg-[#4C9A2A]";
  const fg =
    iconStyle === "lime"
      ? "text-neutral-900"
      : iconStyle === "dark"
        ? "text-[#82C91E]"
        : "text-white";

  const paths: Record<(typeof ADMIN_FEATURES)[number]["id"], ReactNode> = {
    sales: (
      <path
        d="M7 3h8a2 2 0 012 2v14l-5-3-5 3V5a2 2 0 012-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    ),
    orders: (
      <path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    ),
    inventory: (
      <>
        <path
          d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path d="M3.27 6.96L12 12.01l8.73-5.05" fill="none" stroke="currentColor" strokeWidth="1.75" />
      </>
    ),
    revenue: (
      <path
        d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  };

  return (
    <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${box}`}
      aria-hidden
    >
      <svg className={`h-6 w-6 ${fg}`} viewBox="0 0 24 24" fill="none">
        {paths[id]}
      </svg>
    </span>
  );
}

export default function AdminSection() {
  return (
    <section
      className="bg-white py-12 sm:py-16 lg:py-20"
      aria-labelledby="admin-heading"
    >
      <div className="mx-auto w-full max-w-[1601px] px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4C9A2A]">
            {ADMIN_HEADING.label}
          </p>
          <h2
            id="admin-heading"
            className="mt-4 text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-neutral-900 sm:text-4xl lg:text-[2.75rem]"
          >
            {ADMIN_HEADING.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
            {ADMIN_HEADING.description}
          </p>
        </header>

        <div className="mt-10 overflow-hidden rounded-[2rem] bg-neutral-100 p-4 sm:mt-12 sm:rounded-[2.5rem] sm:p-6 lg:mt-14 lg:p-10">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl sm:aspect-[21/9] lg:max-w-6xl">
            <Image
              src="/img/Content.png"
              alt="Dukaandar admin dashboard on desktop monitors"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 90vw"
              priority
            />
          </div>
        </div>

        <ul className="mt-12 grid list-none grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {ADMIN_FEATURES.map((item) => (
            <li key={item.id} className="flex flex-col gap-3">
              <FeatureIcon id={item.id} iconStyle={item.iconStyle} />
              <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
