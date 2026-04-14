import Image from "next/image";
import Button from "@/components/Ui/Button";
import IconButton from "@/components/Ui/icon";
import ArrowIcon from "@/components/Icons/ArrowIcon";



export default function ContactHero() {
  return (
  
    <section className="overflow-hidden bg-white pb-50">
    <div className="mx-auto flex flex-col items-center justify-center gap-10 px-6 sm:px-8 lg:flex-row lg:items-start lg:gap-6 lg:px-12">
      <div className="flex flex-col items-center pt-15 text-center font-semibold lg:w-[718px] lg:items-start  lg:text-left 
      ">
        <div className="flex items-center gap-2 mb-2 ">
         <a href="/" className="text-sm font-[10] tracking-[0.15em] text-[#000000] sm:text-base ">Home-</a>
         <a href="/contact" className="text-sm font-[10] tracking-[0.15em] text-[#4C9A2A] sm:text-base ">Contact Us</a>
         </div>
        

        <h1 className="mb-5 text-4xl font-[700] text-foreground w-[80%]  text-left sm:text-5xl lg:text-[65px] lg:leading-[1] tracking-tight  ">
          <span className="text-[#4C9A2A]">Let's Build</span>
          Your Digital Empire Together
        </h1>

        <p className="mb-8 max-w-[600px] text-[1.1rem] leading-relaxed text-black/65 sm:text-[1.1rem] font-[#575757] ">
        Whether you’re a local shop starting your digital journey or a global brand scaling to new heights, the Dukaandar team is here to support you every step of the way.
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

      <div className="relative flex  w-[50%] items-center justify-center ">
        <Image
          src="/img/Contact_Hero.png"
          alt="Dukaandar platform preview on laptop, tablet, and phone"
          width={1125}
          height={499}
          priority
          className="mt-3 h-auto w-[100%] mt-22 "
        />
      </div>
    </div>
  </section>

  );
}