export type PlanFeature = {
  id: string;
  title: string;
  description: string;
  /** Path under `public/` */
  iconSrc: string;
};

export const PLAN_FEATURES_SECTION_TITLE = "What every plan gets you";

export const planFeatures: PlanFeature[] = [
  {
    id: "checkout",
    title: "World's best checkout",
    description:
      "Dukaandar checkout converts 15% better on average than other commerce platforms.",
    iconSrc: "/icons/Checkout.png",
  },
  {
    id: "in-person",
    title: "In-person selling",
    description:
      "Sell in person and keep inventory in sync with online sales—all with Dukaandar POS.",
    iconSrc: "/icons/Person_Selling.png",
  },
  {
    id: "channels",
    title: "Multiple sales channels",
    description:
      "Promote and sell products on Instagram, TikTok, Google, and other channels.",
    iconSrc: "/icons/Multisales.png",
  },
  {
    id: "analytics",
    title: "In-depth analytics",
    description:
      "Access reports to track store performance and identify optimisation opportunities.",
    iconSrc: "/icons/Analtytics.png",
  },
  {
    id: "apps",
    title: "Commerce apps",
    description:
      "Use apps for everything from product sourcing to customizing your store.",
    iconSrc: "/icons/Commerce.png",
  },
];
