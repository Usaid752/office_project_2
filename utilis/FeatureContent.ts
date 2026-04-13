import type { ComponentType } from "react";
import {
  ClipboardIcon,
  DashboardIcon,
  DevicesIcon,
  MobileIcon,
  StoreIcon,
  type FeatureIconProps,
  WandIcon,
} from "@/components/Ui/FeatureIcons";
import type { FeatureItem } from "@/types/HomePage";

export type { FeatureItem };

export const features: FeatureItem[] = [
  {
    title: "Front Store",
    description:
      "Give your customers an unforgettable shopping experience with high-performance themes optimized for speed, SEO, and conversion. Launch your store in minutes and start selling globally.",
    href: "#",
    imageUrl: "/icons/Front_Store.svg",
  },
  {
    title: "White Label Solution",
    description:
      "Build trust and authority with a 100% white-label platform. Use your own domain, custom branding, and unique design. Dukaandar stays invisible so your business can shine.",
    href: "#",
    imageUrl: "./icons/White_label.svg",
  },
  {
    title: "Mobile Responsive",
    description:
      "Take the power of Dukaandar wherever you go. Our intuitive mobile app allows you to fulfill orders, track live sales, and update inventory in real time from your palm.",
    href: "#",
    imageUrl: "./icons/Mobile_res.svg",
  },
  {
    title: "POS System",
    description:
      "Bridge the gap between your physical shop and digital store. Our unified POS ensures every sale is recorded and every customer is recognized, whether they buy in person or online.",
    href: "#",
    imageUrl: "./icons/POS.svg",
  },
  {
    title: "Inventory Management",
    description:
      "Never lose a sale to out-of-stock moments. Track inventory across multiple locations in real time, set low-stock alerts, and manage your supply chain with confidence.",
    href: "#",
    imageUrl: "./icons/Inventory.svg",
  },
  {
    title: "Super Admin",
    description:
      "Take total control of your business with a powerful central dashboard. Manage multiple stores, track real-time analytics, and assign staff roles with precision from one place.",
    href: "#",
    imageUrl: "/icons/Super_admin.svg",
  },
];
