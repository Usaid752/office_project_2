type WhyChooseUsIconProps = {
  className?: string;
};

function GrowthIcon({ className = "h-5 w-5" }: WhyChooseUsIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 18V9" />
      <path d="M10 18V5" />
      <path d="M16 18v-7" />
      <path d="M4 13c4-1.5 7.5-4 10.5-7.5L20 9" />
      <path d="M16 6h4v4" />
    </svg>
  );
}

function IntegrationsIcon({ className = "h-5 w-5" }: WhyChooseUsIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="8" y="8" width="8" height="8" rx="1.5" />
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <path d="M6.5 6.5 8.7 8.7" />
      <path d="m15.3 15.3 2.2 2.2" />
      <path d="m17.5 6.5-2.2 2.2" />
      <path d="m8.7 15.3-2.2 2.2" />
    </svg>
  );
}

function ScaleIcon({ className = "h-5 w-5" }: WhyChooseUsIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19h16" />
      <path d="M7 16V9" />
      <path d="M12 16V5" />
      <path d="M17 16v-4" />
    </svg>
  );
}

function ShieldIcon({ className = "h-5 w-5" }: WhyChooseUsIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 18 5.5V11c0 4.1-2.2 7.4-6 9-3.8-1.6-6-4.9-6-9V5.5L12 3Z" />
      <path d="m9.5 12 1.6 1.6 3.4-3.6" />
    </svg>
  );
}

export const whyChooseUsHighlights = [
  {
    title: "Growth-Driven Dashboards",
    imageUrl: "/icons/Growth.svg",
  },
  {
    title: "Advanced Local Integrations",
    imageUrl: "/icons/Advance_local.svg",
  },
  {
    title: "Scalable Tools for Any Niche",
    imageUrl: "/icons/Scalable_tool.svg",
  },
  {
    title: "Reliable Uptime & Expert Support",
    imageUrl: "/icons/Reliable.svg",
  },
] as const;
export const testimonials = [
  { imageUrl: "/img/testimonial_1.svg", tone: "from-[#F97316] to-[#FB7185]" },
  { imageUrl: "/img/testimonial_2.svg", tone: "from-[#38BDF8] to-[#6366F1]" },
  { imageUrl: "/img/testimonial_3.svg", tone: "from-[#111827] to-[#4B5563]" },
] as const;

export type { WhyChooseUsIconProps };
