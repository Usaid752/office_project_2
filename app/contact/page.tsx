import ContactHero from "@/components/ContactPage/ContactHero";
import ContactForm from "@/components/ContactPage/ContactForm";
import Map from "@/components/ContactPage/Map";
export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
      <ContactHero />
      <ContactForm />
      <Map />
    </main>
  );
}