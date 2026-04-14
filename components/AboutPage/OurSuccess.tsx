import Image from "next/image";

const successPoints = [
  {
    title: "Purpose-Built for Retailers",
    description:
      "Dukaandar is a mobile-first, all-in-one retail ecosystem designed to simplify complex inventory, automate local payments, and launch professional digital storefronts effortlessly.",
    icon: "/icons/Retail.png",
    alt: "Retail icon",
  },
  {
    title: "Selling Beyond Borders",
    description:
      "We are committed to making a lasting impact, helping local shopkeepers reach global audiences and scale their family legacies into digital empires that thrive in the modern age.",
    icon: "/icons/Selling_Border.png",
    alt: "Global selling icon",
  },
  {
    title: "Driven by Local Insights",
    description:
      "Dukaandar is engineered based on real feedback from thousands of merchants. We solve real-world problems in the local supply chain to ensure technology works for you, not the other way around.",
    icon: "/icons/Local_insight.png",
    alt: "Local insights icon",
  },
] as const;

export default function OurSuccess() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-[1600px] rounded-sm   p-4 sm:p-6">
        <header className=" pb-4 text-center w-[100%] h-[100px] ">
          <p className="text-md font-Demibold uppercase tracking-[0.18em] text-[#69a845] ">
            Fostering Success
          </p>
          <h2 className="mb-30 text-[4rem] font-Demibold uppercase tracking-tight text-[#111] ">
            One Dukaan At A Time
          </h2>
        </header>

        <div className="mt-5 grid gap-15 lg:grid-cols-[1fr_1.3fr] lg:items-center mt-20">
          <div className="space-y-4 w-[80%]">
            {successPoints.map((point) => (
              <article key={point.title} className="flex items-start gap-3">
                <div className=" relative flex h-10 w-10 shrink-0 items-left justify-start rounded-md ">
                  <Image src={point.icon} alt={point.alt} width={48} height={48} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1f1f1f]">{point.title}</h3>
                  <p className=" text-md leading-relaxed text-[#5b5b5b] mt-5 w-[500px] ">
                    {point.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className=" relative min-h-[230px] overflow-hidden rounded-md sm:min-h-[320px] w-[400px] scale-[1.5] ml-40">
            <Image
              src="/img/Group_sucess.png"
              alt="Dukaandar success collage"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
