import type { ReactNode } from "react";
import Navbar from "@/components/Layout/Navbar";
import FooterSection from "@/components/Layout/FooterSection";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div >
      <Navbar />
      {children}
      <FooterSection />
    </div>
  );
}
