"use client";

import { useState } from "react";

import {
  DEFAULT_BLOG_CATEGORY,
  DEFAULT_CATEGORIES,
  type BlogCategoryBarProps,
} from "@/types/Blogs/blogCategoryBarContent";

export type { BlogCategoryBarProps };

export default function BlogCategoryBar({
  categories = DEFAULT_CATEGORIES,
  defaultCategory = DEFAULT_BLOG_CATEGORY,
  onCategoryChange,
  className = "",
}: BlogCategoryBarProps) {
  const [active, setActive] = useState(defaultCategory);

  function select(category: string) {
    setActive(category);
    onCategoryChange?.(category);
  }

  return (
    <nav
      className={`flex w-[100%] items-center overflow-x-auto rounded-xl bg-black px-6 py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
      aria-label="Blog categories"
    >
      <div className="flex min-w-[100%] h-[60px] items-center gap-10 sm:gap-29">
        {categories.map((label) => {
          const isActive = active === label;
          return (
            <button
              key={label}
              type="button"
              onClick={() => select(label)}
              className={`shrink-0 rounded-xl px-4 py-2 text-sm font-medium transition-colors sm:text-base ${
                isActive
                  ? "bg-[#A3E635] text-black"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
