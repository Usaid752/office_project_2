import Button from "@/components/Ui/Button";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import JourneyMilestones from "@/components/AboutPage/JourneyMilestones";

export default function Ourjourney() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mb-12 flex flex-col items-stretch gap-8 lg:mb-16 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-start lg:gap-6  ">
        <div className="flex flex-col gap-4 w-[100%]">
        <p className=" relative top-14 text-left text-md font-bold uppercase tracking-[0.2em] text-[#4C9A2A] sm:text-md  w-[30%] ">
          Dukaandar journey
        </p>

        <h2 className=" flex flex-col text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-tight text-left w-[50%] h-[100px] ml-40 mb-10 ">
          Our journey
        </h2>
        </div>

        <div className=" relative flex w-full flex-col gap-4 lg:col-start-3 lg:ml-auto lg:w-auto lg:items-start lg:justify-self-end lg:text-left  top-14">
          <p className="max-w-[100%] ">
            A purpose backed by passion and experience.
          </p>
          <Button
            variant="filled"
            href="/waitlist"
            icon={<ArrowIcon />}
            className="w-fit shrink-0 whitespace-nowrap mt-6 btn-rounded-md scale-[1.2] "
          >
            Submit a Waitlist
          </Button>
        </div>
      </div>

      <JourneyMilestones />
    </section>
  );
}
