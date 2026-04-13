import BlogCategoryBar from "@/components/BlogsPage/BlogCategoryBar";
import BlogPostsGrid from "@/components/BlogsPage/BlogPostsGrid";
import HeroSection from "@/components/BlogsPage/HeroSection";
import Banner from "@/components/BlogsPage/Banner";

export default function BlogsPage() {
  return (
    <main className="mx-auto w-[80%]">
      <HeroSection />
      <div className="mt-8">
        <BlogCategoryBar />
      </div>
      <div className="mt-16 pb-16">
        <BlogPostsGrid />
      </div>
      <Banner />
    </main>
  );
}
