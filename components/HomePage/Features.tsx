import Image from "next/image";
import Link from "next/link";
import { features, type FeatureItem } from "@/utilis/FeatureContent";

function FeatureCard({ title, description, href, imageUrl }: FeatureItem) {
  return (
    <article className="group flex h-full flex-col rounded-[26px] bg-[#F7F7F2] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.04)] transition-[transform,background-color] duration-500 ease-out hover:-translate-y-1 hover:bg-black sm:p-7">
      <Image src={imageUrl} alt={title} width={41} height={61} />
      <h3 className="mt-7 text-2xl font-[500] leading-none tracking-[-0.03em] text-[#121212] transition-colors duration-500 ease-out group-hover:text-white ">
        {title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-6 text-[#55554F] transition-colors duration-500 ease-out group-hover:text-white sm:text-[15px]">
        {description}
      </p>
      <Link
        href={href}
        className="mt-6 w-fit text-sm font-medium text-[#4C9A2A] underline decoration-transparent underline-offset-4 transition-colors duration-500 ease-out hover:decoration-current group-hover:text-[#4C9A2A] group-hover:decoration-current"
      >
        Learn More
      </Link>
    </article>
  );
}

export default function Features() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[#4C9A2A] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-12 lg:py-14 xl:px-14">
        <div className="grid gap-8 lg:grid-cols-[140px_minmax(0,1.45fr)_minmax(0,0.9fr)] lg:items-start xl:gap-12">
          <p className="text-[20px] font-[25] uppercase leading-5 tracking-[0.08em] text-[#A4DE02]">
            Our
            <br />
            Features
          </p>

          <h2 className="max-w-[16ch] text-6xl font-semibold leading-[0.98] tracking-[-0.05em]  ml-15">
            Powerful Features Built for the Modern Dukaandar
          </h2>

          <p className="max-w-[35ch] text-sm leading-6 text-white/85 sm:text-[15px] ml-25 mb-10 ">
          We’ve combined cutting-edge technology with the simplicity your business needs. Dukaandar bridges the gap between digital storefronts and physical operations, giving you the total control required to turn your local shop into a world-class brand with just a few clicks.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 xl:grid-cols-3 xl:gap-5">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
