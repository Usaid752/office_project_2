import Image from "next/image";
import Button from "@/components/Ui/Button";
import ArrowIcon from "@/components/Icons/ArrowIcon";

export default function AboutStory() {
  return (
    <section className="py-10 sm:py-14">
      <div className="rounded-[28px] bg-[#58a334] p-6 sm:p-10 lg:p-14 lg:rounded-[40px] mx-auto max-w-[1600px] h-[800px] ">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12"> 
          <div className="space-y-5 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c1e65d] sm:text-xl">
              Our story
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[65px]">
              From the Street to the Cloud.
            </h2>
            <div className="space-y-5 text-md leading-relaxed sm:text-xl">
              <p>
              For decades, the local "Dukaan" has been the backbone of our communities. But as the world moved online, many of our local heroes were left behind by complex, expensive, and non-local technologies.
              </p>
              <p>
              We saw shopkeepers struggling with manual ledgers (Hisaab-Kitaab), managing separate inventories for shop and phone orders, and fighting with payment systems that weren't built for them.
              </p>
              <p>
              Dukaandar was born to change that. We didn't just build a website builder; we built a complete retail operating system. We combined the power of global e-commerce with the reality of local retail.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-3 sm:gap-4">
              <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-2xl sm:min-h-[280px] sm:rounded-3xl ">
                <Image
                  src="/img/Story_1.png"
                  alt="Modern city skyline"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 45vw, 400px"
                />
              </div>
              <div className="relative min-h-[560px] w-[38%] h-[400px] scale-[1] shrink-0 overflow-hidden rounded-2xl sm:min-h-[320px] sm:rounded-3xl">
                <Image
                  src="/img/Story_2.png"
                  alt="Team collaborating in an office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 10px) 5vw, 20px"
                />
              </div>
            </div>
            <Button
              href="/waitlist"
              variant="filled"
              icon={<ArrowIcon className="text-white" />}
              className="w-fit !border-0 !bg-white !text-neutral-900 hover:!bg-neutral-100 mt-18"
              iconClassName="!bg-[#4C9A2A]"
            >
              Submit a Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
