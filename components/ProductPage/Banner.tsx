import Button from "@/components/Ui/Button";
import ArrowIcon from "@/components/Icons/ArrowIcon";

const features = [
  "99.5% Uptime",
  "Returns & Exchange",
  "Custom Plugins & Integrations",
  "Under 1ms Latency",
  "Controlled Shipping",
  "Personalised Storefront Design",
] as const;

export default function Banner() {
  return (
    <section
      className="relative isolate overflow-hidden rounded-[2rem] max-w-[80%] mx-auto bg-[url('/img/banner.svg')] bg-cover bg-center bg-no-repeat  text-center text-white sm:px-12 sm:py-16 md:py-20"
      aria-labelledby="enterprise-banner-heading"
    >
      <h2
        id="enterprise-banner-heading"
        className="text-balance text-3xl font-Demibold tracking-tight sm:text-6xl "
      >
        Scale your business with Dukaandar Enterprise
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-pretty text-base font-light text-[#D4D4D4] sm:text-lg">
        Unlock your brand&apos;s online potential on Dukaan&apos;s lightning fast
        infrastructure with custom built features.
      </p>
      <ul className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-x-10 gap-y-3 text-left text-sm text-[#FFFFFF] sm:max-w-2xl sm:grid-cols-2 sm:text-base">
        {features.map((text) => (
          <li key={text} className="flex items-center gap-2.5">
            <span
              className="flex size-5 shrink-0 items-center justify-center rounded-full bg-lime-400 text-[10px] font-bold leading-none text-green-800"
              aria-hidden
            >
              ✓
            </span>
            {text}
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center">
        <Button
          href="/waitlist"
          icon={<ArrowIcon className="size-3 text-black" />}
          className="!btn-rounded-md !border-0 !bg-white !text-neutral-900 hover:!bg-white/95 scale-[1.2]"
          iconClassName="!h-5 !w-5 !min-h-0 !rounded-md !bg-lime-400"
        >
          Submit a Waitlist
        </Button>
      </div>
    </section>
  );
}
