"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import Pagination from "@/components/Ui/Pagination";
import type { BlogPostCardItem } from "@/types/Blogs/blogPostCard";
import { blogPosts } from "@/utilis/BlogPostsContent";

function BlogPostCard({
  category,
  title,
  excerpt,
  imageUrl,
  href = "#",
}: BlogPostCardItem) {
  return (
    <article className="group overflow-hidden  ">
      <Link href={href} className="block w-[100%] mx-auto mt-8">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[28px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.2]"
          />

          <div className="absolute inset-x-3 bottom-3 rounded-[22px] bg-white/95 p-4 shadow-[0_18px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:inset-x-4 sm:bottom-4 sm:p-5">
            <span className="inline-flex rounded-md bg-[#76BA1B] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white sm:text-[11px]">
              {category}
            </span>

            <h3 className="mt-3 text-base font-bold leading-snug tracking-tight text-[#000000] sm:mt-4 sm:text-[1.2rem]">
              {title}
            </h3>

            <p className="mt-2 text-md leading-relaxed text-[#868686] sm:mt-3">
              {excerpt}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export type { BlogPostCardItem };

const DEFAULT_POSTS_PER_PAGE = 6;

type BlogPostsGridProps = {
  className?: string;
  /** Posts per page (default 6 — two rows on 3-column layout). */
  postsPerPage?: number;
};

export default function BlogPostsGrid({
  className = "",
  postsPerPage = DEFAULT_POSTS_PER_PAGE,
}: BlogPostsGridProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(blogPosts.length / Math.max(1, postsPerPage))
  );

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const visiblePosts = useMemo(() => {
    const size = Math.max(1, postsPerPage);
    const safePage = Math.min(page, totalPages);
    const start = (safePage - 1) * size;
    return blogPosts.slice(start, start + size);
  }, [page, postsPerPage, totalPages]);

  return (
    <section className={className} aria-label="Blog posts">
      <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 " >
        {visiblePosts.map((post) => (
          <BlogPostCard key={post.title} {...post} />
        ))}
      </div>

      {totalPages > 1 ? (
        <div className="mt-10 w-full sm:pt-2">
          <Pagination
            currentPage={Math.min(page, totalPages)}
            totalPages={totalPages}
            onPageChange={setPage}
            className=" justify-end  pl-10"
            ariaLabel="Blog posts pages"
          />
        </div>
      ) : null}
    </section>
  );
}
