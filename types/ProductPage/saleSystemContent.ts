export const POS_SECTION = {
  eyebrow: "POINT OF SALE SYSTEM",
  title: "Retail Tools Built for the Modern Dukaandar",
  description:
    "Bridge the gap between your physical counter and your online store. Our integrated POS system ensures your inventory, sales, and customer data are always in sync—giving you the power to sell anywhere, anytime, without the headache of manual bookkeeping.",
} as const;

export const POS_FEATURES = [
  {
    id: "local-payments",
    title: "Local Payment Methods",
    description:
      "Cash, cards, and popular local wallets—so every customer can pay the way they trust.",
    iconSrc: "/icons/Vector_icon.svg",
  },
  {
    id: "loyalty",
    title: "Customer Loyalty & History",
    description:
      "See purchase history at a glance and reward repeat buyers without juggling spreadsheets.",
    iconSrc: "/icons/Customer_icon.svg",
  },
  {
    id: "inventory",
    title: "Unified Inventory Control",
    description:
      "Stock updates in real time across your shop floor, warehouse, and online channels.",
    iconSrc: "/icons/Inventory_icon.svg",
  },
  {
    id: "reports",
    title: 'Daily "Sales" Reports',
    description:
      "End-of-day summaries you can act on—margin, top sellers, and payment mix in one place.",
    iconSrc: "/icons/Scale_icon.svg",
  },
] as const;

export type PosFeatureItem = (typeof POS_FEATURES)[number];
