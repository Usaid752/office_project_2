export const FEATURES = [
  {
    id: "pnl",
    active: true,
    title: "Real-time Profit & Loss",
    description:
      "Track every sale and expense with 100% precision. Get clear insights into your daily margins without manual math.",
  },
  { id: "omni", title: "Omnichannel Sales" },
  { id: "loyalty", title: "Customer Loyalty" },
  { id: "orders", title: "Complete Order History" },
  { id: "whatsapp", title: "Smart WhatsApp Alerts" },
] as const;

export const FEATURE_ICON_SRC = {
  pnl: "/img/real.svg",
  omni: "/img/omnichannel.svg",
  loyalty: "/img/customer.svg",
  orders: "/img/order.svg",
  whatsapp: "/img/whatsapp.svg",
} as const;

export type FeatureId = (typeof FEATURES)[number]["id"];
