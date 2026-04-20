import { faqs } from "@/utilis/FaqContent";
import { FaqItem } from "@/types/HomePage";

function FaqCard({ question, answer, defaultOpen }: FaqItem) {
  return (
    
    <details
      
      className="group rounded-[22px] bg-[#F5F5F1] px-5 py-4 text-[#1A1A1A] transition-colors open:bg-[#4C9A2A] open:text-white sm:px-6 sm:py-5"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium leading-[1.35] marker:content-none sm:text-[17px]">
        <span>{question}</span>
        <span className="relative block h-5 w-5 shrink-0 text-current">
          <span className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current"  />
          <span className="absolute left-1/2 top-1/2 h-4 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-opacity group-open:opacity-0" />
        </span>
      </summary>
     
        <span className="text-[20px] leading-6 text-[#F3F3F3] ">
          {answer}
        </span>
     
    </details>
  );
}

export default function FaqSection() {
  return (
    <section className="bg-white px-4 pt-2 pb-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto h-[700px] w-[340px] max-w-[1920px] px-4 sm:w-[80%] sm:px-10 lg:w-[80%]">
        <header className="mx-auto max-w-[760px] text-center">
          <p className="text-[22px] font-bold  tracking-[0.12em] text-(--text-color-secondary)">
            FAQ
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#000000] sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
            Frequently Asked Questions
          </h2>
          <p className=" mt-4  text-[20px] leading-6 text-[#6A6A65] ">
            Find quick answers about our manufacturing processes, project
            timelines, and service capabilities.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5 lg:mt-12">
          {faqs.map((faq, index) => (
            <div key={faq.question} className={index > 3 ? "hidden lg:block" : ""}>
              <FaqCard {...faq} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
