import Button from "@/components/Ui/Button";
import NewsHighlightCard from "@/components/Ui/NewsHighlightCard";
import { newsHighlights } from "@/utilis/NewsHighlightsContent";
import ArrowIcon from "@/components/Icons/ArrowIcon";

export default function NewsHighlightsSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col  lg:flex-row lg:items-start lg:justify-between">
          <div className="grid  max-w-[1600px] max-h-[140px]  lg:grid-cols-[180px_minmax(0,1fr)]  ">
            <p className="text-[25px] font-bold uppercase tracking-[0.08em] text-[#76BA1B] sm:text-base ml-5">
              News & Article
            </p>

            <h2 className="max-w-[797px] max-h-[140px] text-[50px] text-start text-center font-Demibold leading-[0.95] tracking-[-0.05em] text-[#000000]  pb-5 pl-45 scale-[1.3]">
              Industry News & Company Highlights
            </h2>

          </div>

             <div className="flex justify-end mt-10 pr-5 scale-[1.3] pb-20 ">
          <Button
            href="#"
            variant="filled"
            icon={<ArrowIcon className="text-black" />}
            iconClassName="!h-8 !w-8 !rounded-[10px] !bg-[#76BA1B]"
            className="w-fit !btn-rounded-md !bg-black px-5 py-2 text-sm font-medium !text-white hover:!bg-black/90 mr-1  "
          >
            Read More
          </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3 scale-[1]">
          {newsHighlights.map((item) => (
            <NewsHighlightCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
