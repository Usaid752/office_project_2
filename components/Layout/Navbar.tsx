"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Ui/Button";
import ArrowIcon from "@/components/Icons/ArrowIcon";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Blogs", href: "/blogs" },
  { label: "Features", href: "/features" },
  { label: "Pricing Page", href: "/price" },
  { label: "About Us", href: "/about" },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="flex flex-col justify-center items-center w-6 h-6 gap-[5px]">
      <span
        className={`block h-[2px] w-5 bg-foreground rounded transition-transform duration-300 ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-5 bg-foreground rounded transition-opacity duration-300 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-5 bg-foreground rounded transition-transform duration-300 ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full xs:w-[20rem] sm:w-[350px] md:w-[80%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] bg-background/95 backdrop-blur transition-shadow supports-[backdrop-filter]:bg-background/80 ${
        hasScrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-5 sm:px-6 md:px-8 lg:px-10 lg:py-6 xl:px-12 2xl:px-16 max-[500px]:px-3 max-[500px]:py-3">
        <Image
          src="/img/Group_4.svg"
          alt="logo"
          width={271}
          height={53}
          className="h-auto w-[140px] sm:w-[180px] md:w-[200px] lg:w-[230px] xl:w-[250px] 2xl:w-[271px] max-[500px]:w-[118px]"
        />

        <ul className="hidden items-center gap-5 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="group relative flex flex-col items-center"
            >
              <Link
                href={link.href}
                className={`text-[13px] xl:text-sm transition-colors hover:text-foreground ${
                  isActive(link.href)
                    ? "font-bold text-foreground"
                    : "font-medium text-neutral-500"
                }`}
              >
                {link.label}
              </Link>
              <span
                className={`absolute -bottom-2 h-[6px] w-[6px] rounded-full bg-[#76BA1B] transition-all duration-300 ${
                  isActive(link.href)
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                }`}
              />
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 xl:gap-3 lg:flex">
          <Button
            variant="outlined"
            href="/contact"
            icon={<Image src="/icons/Icon.svg" alt="icon" width={31} height={31} />}
            className={isActive("/contact") ? "border-foreground" : ""}
          >
            Contact Us
          </Button>
          <Button
            variant="filled"
            href="/signup"
            icon={
              <ArrowIcon/>
            }
            className={isActive("/signup") ? "bg-primary-dark text-white" : ""}
          >
            Sign Up
          </Button>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 lg:hidden max-[500px]:mr-0 max-[500px]:p-1.5"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[560px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-border px-4 pb-6 pt-4 sm:px-6 max-[500px]:px-3 max-[500px]:pb-4 max-[500px]:pt-3">
          <ul className="flex flex-col gap-3 sm:gap-4 max-[500px]:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-base transition-colors hover:text-foreground max-[500px]:text-sm ${
                    isActive(link.href)
                      ? "font-bold text-foreground"
                      : "font-medium text-neutral-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 max-[500px]:mt-4 max-[500px]:gap-2">
            <Button
              variant="outlined"
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className={`justify-center btn-rounded-md max-[500px]:h-10 max-[500px]:text-sm ${
                isActive("/contact") ? "border-foreground" : ""
              }`}
            >
              Contact Us
            </Button>
            <Button
              variant="filled"
              href="/signup"
              onClick={() => setMobileOpen(false)}
              icon={
                <ArrowIcon/>
              }
              className={`w-full justify-between gap-10 max-[500px]:h-10 max-[500px]:gap-4 max-[500px]:text-sm ${
                isActive("/signup") ? "bg-primary-dark text-white" : ""
              }`}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
