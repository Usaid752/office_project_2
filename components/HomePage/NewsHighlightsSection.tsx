import Button from "@/components/Ui/Button";
import NewsHighlightCard from "@/components/Ui/NewsHighlightCard";
import { newsHighlights } from "@/utilis/NewsHighlightsContent";
import ArrowIcon from "@/components/Icons/ArrowIcon";

export default function NewsHighlightsSection() {
  return (
    <section className=" mx-auto h-[1000px] w-[340px] bg-white px-4 sm:w-[700px] sm:px-6 lg:w-[80%] lg:px-8">
      <div className=" relative w-full h-full flex flex-col justify-top">
        <div className="flex flex-col  lg:flex-row lg:items-start lg:justify-between">
          <div className="grid  max-w-[1600px] max-h-[140px]  lg:grid-cols-[180px_minmax(0,1fr)]  ">
            <p className="ml-0 text-[18px] font-bold uppercase tracking-[0.08em] text-(--text-color-senary) sm:text-base lg:ml-5 lg:text-[25px]">
              News & Article
            </p>

            <h2 className="max-h-[140px] max-w-[320px] pb-5 text-center font-Demibold text-[28px] leading-[0.95] tracking-[-0.05em] text-(--text-color-primary) sm:max-w-[500px] sm:text-[36px] lg:max-w-[797px] lg:pb-20 lg:pl-45 lg:text-start lg:text-[50px] lg:scale-[1.3]">
              Industry News & Company Highlights
            </h2>

          </div>

             <div className=" flex justify-center pb-20 min-[1024px]:justify-end min-[1024px]:pr-5 min-[1024px]:scale-[1.3]">
          <Button
            href="#"
            variant="filled"
            icon={<ArrowIcon className="text-black" />}
            iconClassName="!h-8 !w-8 !rounded-[10px] !bg-(--text-color-senary)"
            className="mr-0 w-fit !btn-rounded-md !bg-black px-4 py-2 text-xs font-medium !text-white hover:!bg-black/90 sm:text-sm min-[1024px]:mr-1 min-[1024px]:px-5"
          >
            Read More
          </Button>
          </div>
        </div>

        <div className=" grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {newsHighlights.map((item, index) => (
            <div key={item.title} className={index > 1 ? "hidden min-[1024px]:block" : ""}>
              <NewsHighlightCard {...item} />
              
            </div>
            
          ))}
        </div>
        

      </div>
    </section>
  );
}
  