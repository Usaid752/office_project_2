import Image from "next/image";
import Button from "@/components/Button";
import LearnMoreButton from "@/components/LearnMoreButton";
import SubmitWaitlistButton from "@/components/SubmitWaitlistButton";

const tabs = [
  { label: "Admin Panel", active: true },
  { label: "Point of Sale", active: false },
  { label: "Store Front", active: false },
  { label: "Mobile Responsive", active: false },
] as const;

export default function EverythingWorksTogetherSection() {
  return (
    <section className="bg-white px-6 pb-16 pt-20 text-[#111111] sm:px-8 sm:pb-20 lg:px-12 lg:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-[56px]">
            Your Business Runs Better When
            <br />
            <span className="text-[#5BAA37]">Everything Works Together</span>
          </h2>

          <div className="mt-9 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-[#F3F3EF] p-2 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
              {tabs.map((tab) => (
                <Button
                  key={tab.label}
                  variant={tab.active ? "tabActive" : "tabInactive"}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-16">
          <div className="mx-auto w-full max-w-md text-center lg:mx-0 lg:text-left">
            <h3 className="max-w-[50ch] text-4xl  leading-[1.02] tracking-[-0.05em]  lg:text-[44px]">
              The Brain of Your Business
            </h3>

            <p className="mt-5 max-w-[28ch] text-xs leading-6 text-black/60 sm:text-sm lg:max-w-[42ch]">
              Take total control with a powerful central dashboard. Manage
              multiple branches, track real-time analytics, assign staff roles,
              and get automated &quot;Hisaab&quot; reports that tell you exactly
              how much profit you&apos;ve made.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <SubmitWaitlistButton />
              <LearnMoreButton />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[760px]">
            <div className="pointer-events-none absolute inset-x-[8%] bottom-0 top-[22%] rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(205,232,192,0.7),_rgba(255,255,255,0))] blur-3xl" />

            <div className="relative mx-auto w-full max-w-[680px]">
              <div className="absolute left-[4%] top-1/2 z-20 w-[24%] min-w-[88px] max-w-[170px] -translate-y-1/2 sm:left-[7%] md:w-[23%]">
                <div className="overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(15,23,42,0.22)]">
                  <Image
                    src="/src/ipad.svg"
                    alt="Mobile admin dashboard preview"
                    width={470}
                    height={613}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              <div className="ml-auto w-[90%] rounded-[26px] border border-black/5 bg-white p-2 shadow-[0_26px_80px_rgba(15,23,42,0.12)] sm:p-3">
                <Image
                  src="/src/feature.svg"
                  alt="Business dashboard interface preview"
                  width={894}
                  height={422}
                  className="h-auto w-full rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
