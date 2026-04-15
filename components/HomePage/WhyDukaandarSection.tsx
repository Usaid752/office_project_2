import Image from "next/image";
import EverythingWorksTogetherSection from "@/components/HomePage/EverythingWorksTogetherSection";
import FeatureImage from "@/public/img/video.jpg";
import SubmitWaitlistButton from "@/components/Ui/SubmitWaitlistButton";

const featureItems = [
  "No coding required",
  "Secure hosting included",
  "Local payment integrations",
  "Mobile-friendly storefronts",
  "Built-in marketing tools",
];

function CheckIcon() {
  return (
    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#4C9A2A]">
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function PlayIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 6.5v11l9-5.5-9-5.5Z" />
    </svg>
  );
}

function CircularBadge() {
  return (
    <div className="relative h-28 w-28 sm:h-32 sm:w-32">
      <div className="h-full w-full animate-[spin_16s_linear_infinite]">
        <svg
          viewBox="0 0 140 140"
          className="h-full w-full -rotate-[104deg]"
          aria-hidden="true"
        >
          <defs>
            <path
              id="why-dukaandar-badge-circle"
              d="M70,70 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
            />
          </defs>
          <text className="fill-[#242424] text-[11px] tracking-[0.18em] uppercase text-bold">
            <textPath href="#why-dukaandar-badge-circle" startOffset="0%">
              Built for the Future of Ecommerce
            </textPath>
          </text>
        </svg>
      </div>

      <div className="absolute inset-0 z-[-1] flex items-center justify-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4C9A2A] text-white shadow-[0_10px_20px_rgba(118,186,27,0.28)]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="8 7 17 7 17 16" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default function WhyDukaandarSection() {
  return (
    <>
      <section className="-mt-8 bg-white text-[#111111] sm:-mt-10 lg:-mt-16">
        <div className="mx-auto max-w-[1600px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[150px_minmax(0,430px)_minmax(0,1fr)] lg:items-start xl:gap-16">
            <div className="flex flex-col gap-8  ">
              <p className="text-[25px] font-[55]  uppercase leading-[1.15] tracking-[-0.02em] text-[#4C9A2A] mb-10 lg:ml-10 font-custom ">
                Why
                <br />
                Dukaandar?
              </p>

              <div className="relative w-full max-w-[270px] overflow-hidden rounded-[15px] sm:max-w-[200%] mt-55 ml-17 scale-[1.5] mr-20 lg:mr-0 ">
                <Image
                  src={FeatureImage}
                  alt="A shopper browsing an online store"
                  className="aspect-square h-full w-full object-cover"
                />
                <button
                  type="button"
                  aria-label="Play showcase video"
                  className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105 scale-[1]"
                >
                  <PlayIcon />
                </button>
              </div>
            </div>

            <div className="ml-30  ">
              <h2 className="font-[550] text-[3rem]  leading-[1.02]  ml-10 mt-10 w-[500px] font-custom ">
                Built for Modern Merchants
              </h2>

              <p className="mt-10 text-[17px] text-[#575757] ml-10  leading-[1.5] tracking-[-0.02em] w-[320px] font-custom ">
                Whether you&apos;re selling fashion, electronics, groceries, or
                handmade products - Dukaandar gives you everything you need in
                one powerful platform.
              </p>

              <ul className="mt-7 space-y-3 text-sm font-medium sm:text-[15px] ml-10 text-[#575757] font-custom ">
                {featureItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <SubmitWaitlistButton className="mt-15 ml-10 scale-[1.2]" />
            </div>

            <div className="relative mx-auto mt-15 w-full max-w-[460px] lg:pt-14 xl:w-[450px]">
              <div className="aspect-[1.06] overflow-hidden rounded-[2px] sm:rounded-[50px] scale-[1.2] pl-10 h-[350px] w-[510px] mt-15">
                <Image
                  src="/img/Image.svg"
                  alt="Modern clothing store interior"
                  width={512}
                  height={467}
                  className="h-full w-full  "
                />
              </div>

              <div className="absolute left-4 top-4 mt-15 sm:left-5 sm:top-1/2 sm:-translate-x-1/3 sm:-translate-y-1/2 lg:-translate-x-[65%] scale-[1.2] ml-10">
                <CircularBadge />
              </div>
            </div>
          </div>
        </div>
      </section>

      <EverythingWorksTogetherSection />
    </>
  );
}
