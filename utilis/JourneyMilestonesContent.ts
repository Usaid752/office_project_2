export type JourneyMilestone = {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
};

export const journeyMilestones = [
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
] as const satisfies readonly JourneyMilestone[];
