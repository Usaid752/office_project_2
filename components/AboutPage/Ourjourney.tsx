import Button from "@/components/Ui/Button";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import JourneyMilestones from "@/components/AboutPage/JourneyMilestones";

export default function Ourjourney() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mb-12 flex flex-col items-stretch gap-8 lg:mb-16 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-start lg:gap-6 w-[80%] ">
        <div className="flex flex-col items-center gap-4 w-[100%]">
        <p className="text-center text-md font-bold uppercase tracking-[0.2em] text-[#4C9A2A] sm:text-md  w-[50%]">
          Dukaandar journey
        </p>

        <h2 className=" text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-tight ml-100 w-[70%]mb-10">
          Our journey
        </h2>
        </div>

        <div className="flex flex-col  gap-4 lg:items-end lg:justify-self-end lg:text-right w-[100%] ml-100 ">
          <p className="max-w-md text-center text-md text-neutral-500 sm:text-md lg:text-right w-[100%] ml-100 w-[80%] ">
            A purpose backed by passion and experience.
          </p>
          <Button
            variant="filled"
            href="/waitlist"
            icon={<ArrowIcon />}
            className="w-fit shrink-0 whitespace-nowrap"
          >
            Submit a Waitlist
          </Button>
        </div>
      </div>

      <JourneyMilestones />
    </section>
  );
}
