export const DEFAULT_CATEGORIES = [
  "All",
  "E-Commerce Tips",
  "Marketing & Growth",
  "Product Updates",
  "Merchant Stories",
  "Retail & POS",
] as const;

export const DEFAULT_BLOG_CATEGORY: (typeof DEFAULT_CATEGORIES)[number] =
  "All";

export type BlogCategoryBarProps = {
  categories?: readonly string[];
  defaultCategory?: string;
  onCategoryChange?: (category: string) => void;
  className?: string;
};
