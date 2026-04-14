import Image from "next/image";

import { journeyMilestones } from "@/utilis/JourneyMilestonesContent";

export default function JourneyMilestones() {
  return (
    <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6">
      {journeyMilestones.map((item) => (
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
