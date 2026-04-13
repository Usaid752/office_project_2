import Image from "next/image";
import Button from "@/components/Ui/Button";
import IconButton from "@/components/Ui/icon";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import AboutFeature from "./AboutFeature";



export default function FeatureHero() {
  return (
  
    <section className="overflow-hidden bg-white pb-50">
    <div className="mx-auto flex flex-col items-center justify-center gap-10 px-6 sm:px-8 lg:flex-row lg:items-start lg:gap-6 lg:px-12">
      <div className="flex flex-col items-center pt-15 text-center font-semibold lg:w-[718px] lg:items-start  lg:text-left 
      ">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#4C9A2A] sm:text-base mt-20">
         
        </p>

        <h1 className="mb-5 text-4xl font-[1000] text-foreground sm:text-5xl lg:text-[65px] lg:leading-[1] tracking-tight  ">
          Powerful Features
          <br />
           Build For <span className="text-[#4C9A2A]">Modern</span>
          <br />
          <span className="text-[#4C9A2A]">Dukaandars</span>
        </h1>

        <p className="mb-8 max-w-[600px] text-[1.1rem] leading-relaxed text-black/65 sm:text-[1.1rem] font-[300] ">
        Everything you need to sell online, manage orders, and grow your business, all in one smart platform.
        </p>

        <Button
          variant="filled"
          href="/waitlist"
          icon={<ArrowIcon />}
          className="mb-10 w-fit shrink-0 whitespace-nowrap scale-[1.2] ml-2 "
        >
          Submit a Waitlist
        </Button>

      </div>

      <div className="relative flex w-[50%] items-center justify-center ">
        <Image
          src="/img/Feature_Hero.png"
          alt="Dukaandar platform preview on laptop, tablet, and phone"
          width={1125}
          height={499}
          priority
          className="mt-3 h-auto w-[100%] mt-22 "
        />
      </div>
    </div>
    
    <div className="mt-20">
    <AboutFeature />
    </div>
    

  </section>

  );
}