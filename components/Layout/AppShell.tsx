"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Layout/Navbar";
import FooterSection from "@/components/Layout/FooterSection";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const hideChrome = pathname === "/signup" || pathname === "/login";

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <FooterSection />
    </>
  );
}
