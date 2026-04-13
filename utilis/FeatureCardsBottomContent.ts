export type FeatureBottomTagVariant = "white" | "black" | "dark";

export type FeatureBottomCardItem = {
  id: string;
  title: string;
  titleClassName: string;
  cardBackgroundClass: string;
  imageSrc: string;
  imageAlt: string;
  imageContainerClassName: string;
  tags: { text: string; variant: FeatureBottomTagVariant }[];
};

export const featureBottomCards: FeatureBottomCardItem[] = [
  {
    id: "integrated",
    title: "Integrated",
    titleClassName: "text-2xl font-bold tracking-tight text-[#46593E] sm:text-4xl",
    cardBackgroundClass: "bg-[#D7EECD]",
    imageSrc: "/img/Integrated.png",
    imageAlt: "Warehouse worker with tablet and inventory",
    imageContainerClassName:
      "relative h-40 w-full max-w-[220px] sm:h-44 sm:max-w-[260px]",
    tags: [
      { text: "Real-time stock tracking", variant: "dark" },
      { text: "Automated re-ordering", variant: "dark" },
      { text: "Scalable for any size", variant: "dark" },
    ],
  },
  {
    id: "trusted",
    title: "Trusted",
    titleClassName: "text-2xl font-bold tracking-tight text-white sm:text-4xl",
    cardBackgroundClass: "bg-[#76BA1B]",
    imageSrc: "/img/Trusted.png",
    imageAlt: "Security shield with checkmark",
    imageContainerClassName:
      "relative h-40 w-full max-w-[180px] sm:h-44 sm:max-w-[200px]",
    tags: [
      { text: "Secure local payments", variant: "white" },
      { text: "SSL Encrypted stores", variant: "white" },
      { text: "GDPR & Data Privacy", variant: "white" },
    ],
  },
  {
    id: "connected",
    title: "Connected",
    titleClassName:
      "text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl",
    cardBackgroundClass: "bg-[#E9E9E9]",
    imageSrc: "/img/Connected.png",
    imageAlt: "Point of sale with customer and payment",
    imageContainerClassName:
      "relative h-40 w-full max-w-[240px] sm:h-44 sm:max-w-[280px]",
    tags: [
      { text: "POS & Online Sync", variant: "black" },
      { text: "Live order visibility", variant: "black" },
      { text: "Automated reports", variant: "black" },
    ],
  },
];
