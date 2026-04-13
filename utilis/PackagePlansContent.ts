export type PricingPlan = {
  id: string;
  badge: string;
  title: string;
  perks: readonly [string, string];
  price: string;
  pricePeriod: string;
  features: readonly string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

export const packagePlans: readonly PricingPlan[] = [
  {
    id: "basic",
    badge: "Basic Plan",
    title: "For solo entrepreneurs",
    perks: ["Earn 0.5% back on sales", "Get up to US$3,500 in credits"],
    price: "US$25",
    pricePeriod: "USD/ month",
    features: [
      "10 inventory locations",
      "24/7 chat support",
      "In-person selling by phone or POS device",
    ],
    cta: { label: "Try for free", href: "/waitlist" },
  },
  {
    id: "grow",
    badge: "Grow Plan",
    title: "For small teams",
    perks: ["Earn 0.5% back on sales", "Get up to US$5,000 in credits"],
    price: "US$65",
    pricePeriod: "USD/ month",
    features: [
      "10 inventory locations",
      "24/7 chat support",
      "5 staff accounts",
      "In-person selling by phone or POS device",
    ],
    cta: { label: "Try for free", href: "/waitlist" },
  },
  {
    id: "premium",
    badge: "Premium",
    title: "For complex businesses",
    perks: ["Earn 0.5% back on sales", "Get up to US$5,000 in credits"],
    price: "US$2,300",
    pricePeriod: "USD/ month",
    featured: true,
    features: [
      "200 inventory locations",
      "Priority 24/7 phone support",
      "Unlimited staff accounts",
      "Sell wholesale/B2B",
      "Custom checkout & branding",
      "Advanced reporting",
      "Third-party calculated shipping rates",
    ],
    cta: { label: "Get Started", href: "/waitlist" },
  },
] as const;
