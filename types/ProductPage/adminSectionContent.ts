export const ADMIN_HEADING = {
  label: "ADMIN PANEL",
  title: "Your entire business, in one single view.",
  description:
    "Say goodbye to multiple apps and messy notebooks. The Dukaandar Dashboard brings your sales, inventory, and customers together in a clean, easy-to-use interface designed for busy retailers.",
} as const;

export const ADMIN_FEATURES = [
  {
    id: "sales",
    title: "At-a-glance Sales",
    description:
      "See exactly how much you've sold today, this week, or this month.",
    iconSrc: "/icons/Glance.svg",
    iconStyle: "green" as const,
  },
  {
    id: "orders",
    title: "Order Management",
    description:
      "Track orders from 'Pending' to 'Delivered' with a single swipe.",
    iconSrc: "/icons/Order.svg",
    iconStyle: "lime" as const,
  },
  {
    id: "inventory",
    title: "Inventory Health",
    description:
      "A quick view of your top-selling products and what's running low.",
    iconSrc: "/icons/Health.svg",
    iconStyle: "green" as const,
  },
  {
    id: "revenue",
    title: "Revenue Insights",
    description:
      "Understand your profit margins after shipping and discounts.",
    iconSrc: "/icons/Revenue.svg",
    iconStyle: "green" as const,
  },
] as const;
