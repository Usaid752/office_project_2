"use client";

import { useCallback } from "react";

export type PaginationProps = {
  /** 1-based current page */
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  /** Accessible label for the nav landmark */
  ariaLabel?: string;
};

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10 12L6 8l4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function buildPageList(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (current <= 4) {
    return [1, 2, 3, 4, 5, "ellipsis", total];
  }

  if (current >= total - 3) {
    return [
      1,
      "ellipsis",
      total - 4,
      total - 3,
      total - 2,
      total - 1,
      total,
    ];
  }

  return [1, "ellipsis", current - 1, current, current + 1, "ellipsis", total];
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
  ariaLabel = "Pagination",
}: PaginationProps) {
  const safeTotal = Math.max(3, totalPages);
  const page = Math.min(Math.max(1, currentPage), safeTotal);

  const go = useCallback(
    (p: number) => {
      const next = Math.min(Math.max(1, p), safeTotal);
      if (next !== page) onPageChange(next);
    },
    [onPageChange, page, safeTotal]
  );

  if (safeTotal < 1) return null;

  const pageItems = buildPageList(page, safeTotal);
  const canPrev = page > 1;
  const canNext = page < safeTotal;

  return (
    <nav
      className={[
        "flex w-full min-w-0 flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-6 md:gap-x-10",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={ariaLabel}
    >
      <button
        type="button"
        disabled={!canPrev}
        onClick={() => go(page - 1)}
        className={[
          "inline-flex min-h-11 min-w-0 shrink-0 items-center gap-1.5 rounded-md px-1 py-2 text-sm font-medium transition-colors",
          canPrev
            ? "text-neutral-600 hover:text-neutral-800"
            : "cursor-not-allowed text-neutral-400",
        ].join(" ")}
        aria-label="Go to previous page"
      >
        <ChevronLeft className="size-4 shrink-0" />
        <span>Previous</span>
      </button>

      <ul className="flex min-w-0 list-none flex-nowrap items-center justify-center gap-x-4 sm:gap-x-5 md:gap-x-6">
        {pageItems.map((item, idx) =>
          item === "ellipsis" ? (
            <li
              key={`e-${idx}`}
              className="select-none px-0.5 text-sm text-neutral-400"
              aria-hidden
            >
              …
            </li>
          ) : (
            <li key={item}>
              {item === page ? (
                <span
                  className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-md bg-[#E8F5E9] px-2.5 text-sm font-semibold text-[#1B4332]"
                  aria-current="page"
                >
                  {item}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => go(item)}
                  className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-md px-2.5 text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-600"
                  aria-label={`Go to page ${item}`}
                >
                  {item}
                </button>
              )}
            </li>
          )
        )}
      </ul>

      <button
        type="button"
        disabled={!canNext}
        onClick={() => go(page + 1)}
        className={[
          "inline-flex min-h-11 min-w-0 shrink-0 items-center gap-1.5 rounded-md px-1 py-2 text-sm font-medium transition-colors",
          canNext
            ? "text-[#76BA1B] hover:text-[#5fa015]"
            : "cursor-not-allowed text-neutral-400",
        ].join(" ")}
        aria-label="Go to next page"
      >
        <span>Next</span>
        <ChevronRight className="size-4 shrink-0" />
      </button>
    </nav>
  );
}
