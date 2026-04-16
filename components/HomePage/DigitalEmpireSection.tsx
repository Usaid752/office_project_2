import Image from "next/image";
import { managementFeatures } from "@/utilis/DigitalEmpireContent";
import { SubmitWaitButton } from "@/components/Ui/SubmitWaitButton";

export default function DigitalEmpireSection() {
  return (
    <section className="bg-white px-4 sm:px-6 sm:py-1 lg:px-8 lg:py-2">
      <div className="mx-auto max-w-[340px] space-y-10 sm:max-w-[700px] lg:max-w-[1800px] lg:space-y-16">
        <article className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div className="hidden pr-15 pb-15 lg:mb-10 lg:ml-42 lg:block lg:scale-[1.1]">
            <Image
              src="/img/image_2.svg"
              alt="Dukaandar storefront and dashboard preview"
              className="h-auto w-full "
              sizes="(max-width: 1024px) 100vw, 42vw"
              width={0}
              height={0}
              style={{ width: '546px', height: '497px' }}
            />
          </div>

          <div className="w-full rounded-[32px] bg-black px-6 py-8 text-white sm:px-8 sm:py-10 lg:mr-20 lg:w-[700px] lg:px-10 lg:scale-[1.3]">
            <p className="max-w-[25ch] text-4xl font-semibold  tracking-[-0.04em] sm:text-4xl lg:text-[52px] lg:leading-[0.95] font-custom ">
              Let&apos;s Build Your{" "}
              <span className="text-[#76BA1B]">Digital Empire!</span>
            </p>

            <p className="mt-5  text-[17px] leading-6 text-white/70  max-w-[500px] ">
              Join thousands of Pakistani entrepreneurs scaling their brands
              with integrated local payments, automated shipping, and expert
              support.
            </p>

            <SubmitWaitButton className="mt-8  " />
          </div>
        </article>

        <article className="mb-25 grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <div className="hidden rounded-[32px] sm:p-4 lg:mb-35 lg:ml-50 lg:block lg:w-[750px]">
            <Image
              src="/img/Frame_1.svg"
              alt="Dukaandar operating system dashboard"
              width={500}
              height={422}
              className="h-auto w-full rounded-[24px] scale-[0.9] "
              sizes="(max-width: 1024px) 100vw, 54vw"
            />
          </div>

          <div className="h-auto w-full lg:h-[650px] lg:w-[500px]">
            <p className="text-1xl font-bold uppercase tracking-[0.12em] text-[#4C9A2A]  font-custom ">
              The Operating System
            </p>

            <h2 className="mt-3 text-5xl  font-[550] leading-[1] tracking-[-0.05em] text-[#000000] font-custom ">
              Effortless Management for the Modern Seller
            </h2>

            <ul className="mt-8 space-y-5">
              {managementFeatures.map((feature) => (
                <li key={feature.number} className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4C9A2A] text-sm font-semibold text-white">
                    {feature.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold leading-tight text-[#111111] font-custom ">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-medium leading-6 text-[#666666] font-custom ">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
