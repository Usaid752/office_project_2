export type AboutCard = {
  title: string;
  description: string;
  icon: string;
  alt: string;
};

export const aboutCards = [
  {
    title: "OUR MISSION",
    description:
      "To simplify digital commerce to an extent that local shop owners and entrepreneurs focus only on customer satisfaction and revenue growth. From inventory to payments, we'll take care of the rest.",
    icon: "/icons/Mission.png",
    alt: "Mission icon",
  },
  {
    title: "OUR VISION",
    description:
      "To be the catalyst for a new era in retail where Dukaandar is synonymous with technological empowerment, operational simplicity, and the global success of local businesses.",
    icon: "/icons/Our_vision.png",
    alt: "Vision icon",
  },
] as const satisfies readonly AboutCard[];
