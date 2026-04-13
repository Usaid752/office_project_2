import Image from "next/image";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import SubmitWaitlistButton from "@/components/Ui/SubmitWaitlistButton";

const bgLayers = [
  "linear-gradient(to bottom left, rgba(255, 255, 255, 0.19), transparent 45%)",
  "linear-gradient(to top right, rgba(255, 255, 255, 0.04), transparent 45%)",
  "linear-gradient(rgba(0, 0, 0, 0.84), rgb(0, 0, 0))",
  "url(/img/Eclipse.jpg)  ",
].join(", ");

export default function HeroSection() {
  return (
    <section
      className="relative mb-10 flex min-h-[min(838px,70vh)] max-w-[max(1801px,100vw] mx-auto w-full flex-col gap-8 overflow-hidden rounded-3xl px-5 py-8 sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:gap-10 lg:py-12"
      style={{
        backgroundImage: bgLayers,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex w-[40%] flex-col text-center  ">
        <p className="mb-3 text-[15px] font-semibold uppercase tracking-[0.2em] text-white/95 ">
          Create. Sell. Succeed with Dukaandar.
        </p>
        <h1 className="mb-4 text-[5rem] font-extrabold leading-tight text-white   lg:leading-[1.1] text-left pl-15 ">
          Everything You Need to
          <br />
          <span className="text-[#82C91E]">Sell Online</span>
        </h1>
        <p className="mb-7 text-[20px] text-left leading-relaxed text-white/65 pl-15 ">
          Launch your professional store in minutes – no servers, no coding, no
          complex setup.
        </p>
        <SubmitWaitlistButton
          className="mx-13  !btn-rounded-md !border-0 !bg-white !font-semibold !text-neutral-900 hover:!bg-[#FFFFFF]  "
        />
      </div>

      <div className="relative z-10 flex w-full flex-1 items-center justify-center lg:justify-end">
        <Image
          src={"/img/Mockup_1.svg"}
          alt="Dukaandar store on laptop and phone"
          width={900}
          height={400}
          priority
          className="h-auto w-full max-w-[min(100%,520px)] object-contain drop-shadow-2xl lg:max-w-none scale-[1.1] pr-5 pb-10 "
        />
      </div>
    </section>
  );
}
