import Image from "next/image";
import { aboutCards } from "@/utilis/AboutCardsContent";

export default function AboutCards() {
  return (
    <section className="py-10 sm:py-14 ">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 w-[1200px] h-[520px] mx-auto">
        {aboutCards.map((card) => (
          <article
            key={card.title}
            className="group flex flex-col items-center rounded-[3rem] border border-[#cfd4dc] bg-[#ffffff] px-6 py-10 text-center transition-colors duration-300 hover:bg-black sm:px-10 sm:py-14"
          >
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl scale-[1.8]">
              <Image src={card.icon} alt={card.alt} width={64} height={64} />
            </div>

            <h3 className="mb-3 mt-10 text-3xl font-extrabold uppercase text-[#101010] transition-colors duration-300 group-hover:text-white sm:text-4xl">
              {card.title}
            </h3>
            <p className="mt-10 max-w-[320px] text-1rem leading-relaxed text-[#575757] transition-colors duration-300 group-hover:text-white">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}