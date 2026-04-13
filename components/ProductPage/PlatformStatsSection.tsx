import { PLATFORM_STATS } from "../../types/ProductPage/platformStats";

export default function PlatformStatsSection() {
  return (
    <section
      aria-labelledby="platform-stats-heading"
      className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <header className="mb-10 max-w-4xl space-y-4 sm:mb-12 lg:mb-14">
        <p className="text-[1rem]   font-medium uppercase tracking-tight text-[#4C9A2A] ">
          Dukaandar Platform
        </p>
        <h2
          id="platform-stats-heading"
          className="text-[4rem] font-Demibold leading-[1.08] tracking-[-0.05em]  text-[#000000]  lg:leading-[1.15]"
        >
          Empowering the next generation of local retailers with world-class
          technology made simple.
        </h2>
      </header>

      <ul className="grid grid-cols-3 gap-4 ">
        {PLATFORM_STATS.map((stat) => (
          <li
            key={stat.label}
            className="flex flex-col gap-3 rounded-3xl border border-[#D4D4D4] bg-[#A4DE0208] sm:px-0 sm:py-12  "
          >
            <p className="text-[15px] font-Demibold uppercase tracking-wider text-[#575757] pl-10 ">
              {stat.label}
            </p>
            <p className="text-[3rem] font-bold tabular-nums tracking-tight text-[#4C9A2A] pl-10 ">
              {stat.value}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
