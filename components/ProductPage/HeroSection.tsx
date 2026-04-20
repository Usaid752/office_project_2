import Image from "next/image";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import SubmitWaitlistButton from "@/components/Ui/SubmitWaitlistButton";

const bgLayers = [
  
  "url(/img/Hero.png)  ",
].join(", ");

export default function HeroSection() {
  return (
    <section
      className="relative mb-10 flex min-h-[min(838px,70vh)] max-w-[max(1801px,100vw] mx-auto w-full flex-col gap-8 overflow-hidden rounded-3xl px-5 py-8 sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:gap-10 lg:py-12 max-[1024px]:w-[92%] max-[1024px]:px-4 max-[1024px]:py-6 max-[500px]:w-full max-[500px]:min-h-[430px] max-[500px]:gap-4 max-[500px]:px-3 max-[500px]:py-4"
      style={{
        backgroundImage: bgLayers,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex w-full flex-col text-center lg:w-[40%] max-[1500px]:lg:w-[42%] max-[1400px]:lg:w-[44%] max-[1300px]:lg:w-[46%] max-[1024px]:items-center max-[1024px]:justify-center">
        <p className="mb-3 text-[15px] font-semibold uppercase tracking-[0.2em] text-white/95 max-[1400px]:text-[14px] max-[1024px]:text-[12px]">
          Create. Sell. Succeed with Dukaandar.
        </p>
        <h1 className="mb-4 text-left text-[5rem] font-extrabold leading-tight text-white pl-15 lg:leading-[1.1] max-[1500px]:text-[4.4rem] max-[1400px]:text-[4rem] max-[1300px]:text-[3.6rem] max-[1400px]:pl-12 max-[1300px]:pl-10 max-[1024px]:pl-0 max-[1024px]:text-center max-[1024px]:text-[2.4rem] max-[500px]:mb-3 max-[500px]:text-[2rem]">
          Everything You Need to
          <br />
          <span className="text-[#82C91E]">Sell Online</span>
        </h1>
        <p className="mb-7 text-left text-[20px] leading-relaxed text-white/65 pl-15 max-[1500px]:text-[18px] max-[1400px]:text-[17px] max-[1300px]:text-[16px] max-[1400px]:pl-12 max-[1300px]:pl-10 max-[1024px]:pl-0 max-[1024px]:text-center max-[1024px]:text-[14px] max-[500px]:mb-4 max-[500px]:text-[13px]">
          Launch your professional store in minutes – no servers, no coding, no
          complex setup.
        </p>
        <SubmitWaitlistButton
          className="mx-13 !btn-rounded-md !border-0 !bg-white !font-semibold !text-neutral-900 hover:!bg-[#FFFFFF] max-[1300px]:mx-10 max-[1024px]:mx-0"
        />
      </div>

      <div className="relative z-10 flex w-full flex-1 items-center justify-center lg:w-[60%] lg:justify-end max-[1500px]:lg:w-[58%] max-[1400px]:lg:w-[56%] max-[1300px]:lg:w-[54%] max-[1024px]:w-[85%] max-[1024px]:mx-auto">
        <Image
          src={"/img/Mockup_1.svg"}
          alt="Dukaandar store on laptop and phone"
          width={900}
          height={400}
          priority
          className="h-auto w-full max-w-[min(100%,520px)] object-contain drop-shadow-2xl lg:max-w-[640px] max-[1500px]:lg:max-w-[580px] max-[1400px]:lg:max-w-[540px] max-[1300px]:lg:max-w-[500px] max-[1024px]:max-w-[360px] max-[1024px]:pr-0 max-[1024px]:pb-4 max-[500px]:max-w-[300px] max-[500px]:pb-1 pr-5 pb-10"
        />
      </div>
    </section>
  );
}
