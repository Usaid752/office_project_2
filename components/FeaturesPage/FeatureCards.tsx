import Image from "next/image";

type TagVariant = "white" | "black" | "dark";

function Tag({ text, variant }: { text: string; variant: TagVariant }) {
  const styles: Record<TagVariant, string> = {
    white: "border border-white text-white",
    black: "border border-neutral-900 text-neutral-900",
    dark: "border border-[#14532d] text-[#14532d]",
  };

  return (
    <span
      className={`inline-flex shrink-0 rounded-full px-3 py-1.5 text-xs font-medium sm:text-sm ${styles[variant]}`}
    >
      {text}
    </span>
  );
}

const CARD_BASE =
  "overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:rounded-[2.5rem]";

export default function FeatureCards() {
  return (
    <section
      className="mx-auto mt-16 w-full max-w-[100%]  sm:mt-20 "
      aria-labelledby="feature-cards-heading"
    >
     
      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-6 max-w-[100%] mr-83">
        {/* Row 1 — Yours to lead */}
        <article
          className={`${CARD_BASE} relative flex w-[750px] h-[420px] flex-col bg-[#4C9A2A] lg:col-span-4  lg:flex-row`}
        >
          <div className="relative z-10 flex flex-1 flex-col justify-center gap-5 max-w-[50%] ">
            <h3 className="text-[3.2rem] font-bold tracking-tight text-white leading-tight pl-2 ">
              Yours to lead
            </h3>
            <div className="flex flex-wrap gap-2 max-w-[200px] pl-2  ">
              <Tag text="Full White-Labeling" variant="white" />
              <Tag text="Multi-store manage" variant="white" />
              <Tag text="Custom staff" variant="white" />
            </div>
          </div>
          <div className="relative mt-6 flex min-h-[220px] w-full min-w-0 flex-1 items-end justify-center lg:mt-0 lg:min-h-[300px] lg:justify-end w-[50%] pr-65">
            <Image
              src="/img/MacbookPro.png"
              alt="Admin dashboard on a laptop screen"
              width={520}
              height={360}
              className="h-auto w-full max-w-[min(100%,420px)] object-contain object-bottom drop-shadow-2xl lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:mx-auto lg:max-h-[340px] lg:max-w-[min(100%,480px)] lg:translate-x-2 lg:translate-y-1"
              sizes="(min-width: 1024px) 45vw, 90vw"
              priority
            />
          </div>
        </article>

        {/* Row 1 — Effortless */}
        <article
          className={`${CARD_BASE} relative flex flex-col bg-[#A4DE02] lg:col-span-2 w-[550px] h-[420px] ml-18 lg:flex-row`}
        >
          <div className="relative z-10 flex flex-1 flex-col justify-center gap-5">
            <h3 className="text-[3rem] font-bold tracking-tight text-neutral-900 pb-10">
              Effortless
            </h3>
            <div className="flex flex-wrap gap-2 max-w-[200px] pl-2 justify-left scale-[1.2] ">
              <Tag text="Modern UI/UX" variant="black" />
              <Tag text="Mobile-first design" variant="black" />
              <Tag text="Touch-optimized" variant="black" />
            </div>
          </div>
          <div className="relative mt-6 flex min-h-[220px] flex-1 items-end justify-center w-[30%] lg:mt-0 lg:min-h-0 lg:justify-end">
            <Image
              src="/img/Iphone.png"
              alt="Mobile shopping app on a smartphone"
              width={230}
              height={420}
              className="scale-[1.3] top-4 right-8 "
              sizes="(min-width: 1024px) 20vw, 60vw"
            />
          </div>
        </article>

        {/* Row 2 — Integrated */}
        <article
          className={`${CARD_BASE} flex min-h-[300px] w-[430px] flex-col items-center justify-center gap-6 bg-[#D7EECD] text-center lg:col-span-2 `}
        >
          <div className="relative h-40 w-full max-w-[220px] sm:h-44 sm:max-w-[260px]">
            <Image
              src="/img/Integrated.png"
              alt="Warehouse worker with tablet and inventory"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 20vw, 70vw"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold tracking-tight text-[#46593E] sm:text-4xl">
              Integrated
            </h3>
            <div className="flex flex-wrap justify-center gap-2 ml-10 mr-10 scale-[1.2] ">
              <Tag text="Real-time stock tracking" variant="dark" />
              <Tag text="Automated re-ordering" variant="dark" />
              <Tag text="Scalable for any size" variant="dark" />
            </div>
          </div>
        </article>

        {/* Row 2 — Trusted */}
        <article
          className={`${CARD_BASE} flex min-h-[300px] w-[430px] ml-20 flex-col items-center justify-center gap-6 bg-[#76BA1B] text-center lg:col-span-2`}
        >
          <div className="relative h-40 w-full max-w-[180px] sm:h-44 sm:max-w-[200px]">
            <Image
              src="/img/Trusted.png"
              alt="Security shield with checkmark"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 18vw, 50vw"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted
            </h3>
            <div className="flex flex-wrap justify-center ml-10 mr-10 gap-2 scale-[1.2] ">
              <Tag text="Secure local payments" variant="white" />
              <Tag text="SSL Encrypted stores" variant="white" />
              <Tag text="GDPR & Data Privacy" variant="white" />
            </div>
          </div>
        </article>

        {/* Row 2 — Connected */}
        <article
          className={`${CARD_BASE} flex min-h-[300px] w-[430px] ml-40 flex-col items-center justify-center gap-6 bg-[#E9E9E9] text-center lg:col-span-2`}
        >
          <div className="relative h-40 w-full max-w-[240px] sm:h-44 sm:max-w-[280px]">
            <Image
              src="/img/Connected.png"
              alt="Point of sale with customer and payment"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 22vw, 80vw"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Connected
            </h3>
            <div className="flex flex-wrap justify-center ml-10 mr-10 gap-2 scale-[1.2] ">
              <Tag text="POS & Online Sync" variant="black" />
              <Tag text="Live order visibility" variant="black" />
              <Tag text="Automated reports" variant="black" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
