 "use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Ui/Button";
import LearnMoreButton from "@/components/Ui/LearnMoreButton";
import SubmitWaitlistButton from "@/components/Ui/SubmitWaitlistButton";

const tabs = [
  { label: "Admin Panel" },
  { label: "Point of Sale" },
  { label: "Store Front" },
  { label: "Mobile Responsive" },
] as const;

export default function EverythingWorksTogetherSection() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].label);

  return (
    <section className="bg-white px-6 pb-16 pt-20 text-[#111111] sm:px-8 sm:pb-20 lg:px-12 lg:pt-28">
      <div className="mx-auto max-w-[1599]">
        <div className="text-center w-[100%]">
          <h2 className="text-4xl font-[550] leading-tight tracking-[-0.05em] sm:text-5xl lg:text-[3rem] font-custom ">
            Your Business Runs Better When
            <br />
            <span className="text-[#4C9A2A] font-custom">Everything Works Together</span>
          </h2>

          <div className="mt-12 flex justify-center">
            <div className="inline-flex max-w-[320px] flex-wrap items-center justify-center gap-2 rounded-2xl bg-[#F2F2F2] p-2 scale-[0.95] sm:max-w-none sm:scale-[1.05] min-[1024px]:scale-[1.2]">
              {tabs.map((tab) => (
                <Button
                  key={tab.label}
                  variant={activeTab === tab.label ? "tabActive" : "tabInactive"}
                  onClick={() => setActiveTab(tab.label)}
                >
                  {tab.label}
                </Button>
              ))} 
            </div>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-16 mt-20">
          <div className="mx-auto w-full max-w-md text-center lg:mx-20 lg:text-left">
            <h3 className="max-w-[50ch] text-4xl  leading-[1.02] tracking-[-0.05em]  lg:text-[44px] font-[400] font-custom " >
              The Brain of Your Business
            </h3>

            <p className="mt-5 max-w-[45ch] text-md leading-6 text-black/65  lg:max-w-[55ch] font-light font-custom ">
              Take total control with a powerful central dashboard. Manage
              multiple branches, track real-time analytics, assign staff roles,
              and get automated &quot;Hisaab&quot; reports that tell you exactly
              how much profit you&apos;ve made.
            </p>

            <div className="mt-10 flex max-w-[320px] flex-wrap items-center justify-center gap-2 scale-[0.95] sm:max-w-none sm:scale-[1.05] min-[1024px]:scale-[1.2] lg:justify-start">
              <SubmitWaitlistButton />
              <LearnMoreButton />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[760px]">
            <div className="pointer-events-none absolute inset-x-[8%] bottom-0 top-[22%] rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(205,232,192,0.7),_rgba(255,255,255,0))] blur-3xl" />

            <div className="relative mx-auto w-full max-w-[780px]">
              
              <div className="mt-10 mx-auto w-[70%] scale-[1.05] sm:w-[75%] sm:p-3 min-[1024px]:ml-40 min-[1024px]:w-[80%] min-[1024px]:scale-[1.2]">
                <Image
                  src="/img/feature.svg"
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
