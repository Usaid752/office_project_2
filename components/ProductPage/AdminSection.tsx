import Image from "next/image";
import AdminFeatureIcon from "@/components/ProductPage/AdminFeatureIcon";
import { ADMIN_FEATURES, ADMIN_HEADING } from "@/types/ProductPage/adminSectionContent";

export default function AdminSection() {
  return (
    <section
      className=" py-12 sm:py-16 lg:py-20"
      aria-labelledby="admin-heading"
    >
      <div className="mx-auto w-full max-w-[1601px] px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center">
          <p className="text-md font-bold uppercase tracking-[0.2em] text-[#4C9A2A]">
            {ADMIN_HEADING.label}
          </p>
          <h2
            id="admin-heading"
            className="mt-4 text-3xl font-[600] leading-[1.15] tracking-[-0.03em] text-neutral-900 sm:text-5xl "
          >
            {ADMIN_HEADING.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
            {ADMIN_HEADING.description}
          </p>
        </header>

        <div className="mt-10 overflow-hidden rounded-[2rem] border-0 p-4 shadow-none ring-0 sm:mt-12 sm:rounded-[2.5rem] sm:p-6 lg:mt-14 lg:p-10">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl sm:aspect-[21/9] lg:max-w-6xl">
            <Image
              src="/img/Content.png"
              alt="Dukaandar admin dashboard on desktop monitors"
              fill
              className="object-contain object-center shadow-none ring-0"
              sizes="(max-width: 1024px) 100vw, 90vw"
              priority
            />
          </div>
        </div>

        <ul className="mt-12 grid list-none grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {ADMIN_FEATURES.map((item) => (
            <li key={item.id} className="flex flex-col gap-3">
              <AdminFeatureIcon
                iconSrc={item.iconSrc}
                iconStyle={item.iconStyle}
              />
              <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#868686] sm:text-[15px]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
