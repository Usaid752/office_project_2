import type { NewsHighlightItem } from "@/types/HomePage";

export type { NewsHighlightItem };

export const newsHighlights: NewsHighlightItem[] = [
  {
    tag: "E-Commerce Tips",
    title: '5 Ways to Double Your Sales During "Blessed Friday"',
    description:
      "Master the strategies to prep your store and smash your sales targets this season.",
    imageUrl: "/src/card_1.jpg",
    href: "#",
  },
  {
    tag: "Product Update",
    title: "Introducing One-Click EasyPaisa & JazzCash Integration",
    description:
      "Everything you need to know about accepting international payments in PKR.",
    imageUrl: "/src/card_2.jpg",
    href: "#",
  },
  {
    tag: "Merchant Story",
    title: "How a Local Boutique Scaled from 10 to 500+ Orders a Month",
    description:
      "Go from idea to live store in minutes with our simple launch checklist.",
    imageUrl: "/src/card_3.jpg",
    href: "#",
  },
] as const;
