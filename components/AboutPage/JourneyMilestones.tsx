import Image from "next/image";

const milestones = [
  {
    title: "The Vision",
    description:
      "Identifying the digital gap in local retail and reimagining the future of the traditional 'Dukaan.'",
    iconSrc: "/icons/vision.png",
    iconAlt: "The Vision",
  },
  {
    title: "The Foundation",
    description:
      "Designing a no-code ecosystem built specifically for local payments, couriers, and shopkeepers.",
    iconSrc: "/icons/foundation.png",
    iconAlt: "The Foundation",
  },
  {
    title: "The Launch",
    description:
      "Dukaandar goes live, empowering the first 1,000+ merchants to take their physical shops digital.",
    iconSrc: "/icons/launch.png",
    iconAlt: "The Launch",
  },
  {
    title: "Major Milestone",
    description:
      "Reaching 10,000 active stores and processing millions in transactions across the region.",
    iconSrc: "/icons/milestone.png",
    iconAlt: "Major Milestone",
  },
  {
    title: "Market Leader",
    description:
      "Leading the retail revolution with AI-powered insights and the most advanced integrated POS system.",
    iconSrc: "/icons/market.png",
    iconAlt: "Market Leader",
  },
] as const;

export default function JourneyMilestones() {
  return (
    <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6">
      {milestones.map((item) => (
        <li
          key={item.title}
          className="flex flex-col items-center text-center sm:items-start sm:text-left"
        >
          <div className="relative mb-4 h-16 w-16 shrink-0 sm:h-[72px] sm:w-[72px]">
            <Image
              src={item.iconSrc}
              alt={item.iconAlt}
              fill
              sizes="72px"
              className="object-contain"
            />
          </div>
          <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
          <p className="text-sm leading-relaxed text-neutral-500 sm:text-[0.95rem]">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
