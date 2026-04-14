import AboutHero from "@/components/AboutPage/AboutHero";
import AboutStory from "@/components/AboutPage/AboutStory";
import Ourjourney from "@/components/AboutPage/Ourjourney";
import AboutCards from "@/components/AboutPage/AboutCards";
import OurSuccess from "@/components/AboutPage/OurSuccess";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
      <AboutHero />
      <AboutStory />
      <Ourjourney />
      <AboutCards />
      <OurSuccess />
    </main>
  );
}