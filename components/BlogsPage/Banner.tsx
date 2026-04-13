import Image from "next/image";
import { managementFeatures } from "@/utilis/DigitalEmpireContent";
import { SubmitWaitButton } from "@/components/Ui/SubmitWaitButton";
import { SubmitButton } from "@/components/Ui/SubmitButton";

export default function Banner() {
    return (
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1800px] space-y-10 lg:space-y-16">
          <article className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <div className="pr-15 scale-[0.9] mb-40">
              <Image
                src="/img/image_2.svg"
                alt="Dukaandar storefront and dashboard preview"
                className="h-auto w-full "
                sizes="(max-width: 1024px) 100vw, 42vw"
                width={500}
                height={500}
              />
            </div>
  
            <div className="rounded-[32px] bg-black px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 scale-[1.3] mr-20">
              <p className="max-w-[25ch] text-4xl font-semibold  tracking-[-0.04em] sm:text-4xl lg:text-[52px] lg:leading-[0.95]">
                Ready To Start{" "}
                <span className="text-[#76BA1B]">Selling?</span>
              </p>
  
              <p className="mt-5  text-[15px] leading-6 text-[#D4D4D4]  max-w-[500px] ">
              Experience the power of Dukaandar today. No credit card required.
              </p>
  
              <SubmitButton className="mt-8  " />
            </div>
          </article>
  
         
        </div>
      </section>
    );
  }
  