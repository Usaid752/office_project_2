import Image from "next/image";
import { featureCards } from "@/utilis/Featurecard";

const GREEN = "text-[#4C9A2A]";

export default function BannerCard() {
  return (
    <section
      className="rounded-[3rem] bg-[#575757] p-8 md:p-12 lg:p-16 mt-20 max-w-[100%] mx-auto"
      aria-labelledby="ecosystem-heading"
    >
      <header className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start ">
       <div className="max-w-[80%]">
       <h2
          id="ecosystem-heading"
          className=" text-[60px] font-Demibold leading-[0.98] tracking-tight text-[#FFFFFF] "
        >
          A retail ecosystem built for the modern entrepreneur
        </h2>
       </div>
        <div className="space-y-4 text-md leading-relaxed text-[#D4D4D4]  max-w-[321px] ml-80 ">
          <p>
            An all-in-one retail system that unites your store, sales, and customers under one
            smart platform – giving modern entrepreneurs the control and flexibility to scale
            with confidence.
          </p>
          <p>
          If you want it more desi-market friendly or more premium enterprise style, I can refine the tone further.
          </p>
        </div>
      </header>
       
       <div className="max-w-[100%] mx-auto">
       <ul className="mt-10 grid list-none gap-6 md:mt-14 md:grid-cols-3">
        {featureCards.map(({ title, body, image }) => (
          <li key={title} className="rounded-3xl bg-[#ffffff] p-8">
            <span className="mb-6 flex size-[73px] items-center justify-center rounded-2xl ">
              <Image
                src={image}
                alt=""
                width={73}
                height={73}
                className="object-contain"
              />
            </span>
            <h3 className={`text-[1.5rem] font-bold ${GREEN}`}>{title}</h3>
            <p className="mt-3 text-md leading-relaxed text-neutral-600">{body}</p>
          </li>
        ))}
      </ul> 
       </div>
     
    </section>
  );
}
