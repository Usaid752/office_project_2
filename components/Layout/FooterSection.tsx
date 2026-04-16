import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import FbIcon from "@/components/Icons/FbIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import XIcon from "@/components/Icons/XIcon";
import YoutubeIcon from "@/components/Icons/YoutubeIcon";

const menuLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Product", href: "/product", active: false },
  { label: "Blogs", href: "/blogs", active: false },
  { label: "Features", href: "/features", active: false },
  { label: "Pricing Page", href: "/pricing", active: false },
  { label: "About Us", href: "/about", active: false },
] as const;

const serviceLinks = [
  "Custom Fabrication",
  "Component Manufacturing",
  "Assembly Services",
  "Machinery Solutions",
] as const;

const socialLinks = [
  { label: "Facebook", href: "#", icon: <FbIcon className="h-5 w-5 shrink-0" />, filled: true },
  { label: "YouTube", href: "#", icon: <YoutubeIcon className="h-5 w-5 shrink-0" />, filled: false },
  { label: "X", href: "#", icon: <XIcon className="h-5 w-5 shrink-0" />, filled: false },
  { label: "Instagram", href: "#", icon: <InstagramIcon className="h-5 w-5 shrink-0" />, filled: false },
] as const;

function ScrollTopIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer className="mx-auto  my-10 w-[340px] rounded-[28px] bg-black px-5 py-6 text-white sm:w-auto sm:px-10 sm:py-10 lg:my-24 lg:max-w-[1797px] lg:rounded-[32px] lg:px-14 lg:py-12">
      <div className="relative">
        <Link
          href="/"
          aria-label="Back to top"
          className="absolute right-0 top-0 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#4C9A2A] text-white transition-transform hover:-translate-y-0.5 sm:h-15 sm:w-15"
        >
          <ScrollTopIcon />
        </Link>

        <Image
          src="/img/Group4Footer.svg"
          alt="Dukaandar"
          width={271}
          height={53}
          className="mx-auto h-auto w-[140px] sm:w-[210px] lg:w-[271px]"
        />

        <h2 className="mx-auto mt-8 max-w-[280px] text-center text-xl font-Demibold leading-tight tracking-[-0.03em] text-white sm:max-w-[1085px] sm:text-4xl lg:mt-10 lg:text-[52px]">
          The Platform for Next Generation of Brands.
        </h2>
      </div>

      <hr className="my-8 border-white/15 lg:my-14" />

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))] lg:gap-12">
        <form className="max-w-[290px] sm:max-w-sm">
          <h3 className="text-[22px] font-semibold leading-tight sm:text-[28px]">Grow Your Business Faster</h3>
          <p className="mt-3 text-[0.9rem] leading-5 text-white/60 sm:text-[1rem] sm:leading-6">
            Join 10,000+ smart merchants. Get the latest selling tips and marketing hacks delivered to your inbox every week.
          </p>
          <label className="mt-5 flex max-w-[290px] items-center rounded-xl bg-white p-1 sm:mt-6 sm:max-w-[475px]">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="h-11 min-w-0 flex-1 bg-transparent px-4 text-sm text-black outline-none placeholder:text-[#8F8F8F]"
            />
            <button
              type="button"
              aria-label="Submit email"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4C9A2A] text-white transition-colors hover:bg-[#4C9A2A]"
            >
              <ArrowIcon className="h-3.5 w-3.5 text-white" />
            </button>
          </label>
        </form>

        <nav aria-label="Footer menu">
          <h3 className="max-w-[160px] text-lg font-Demibold leading-tight sm:text-2xl lg:pl-22">Menu</h3>
          <ul className="mt-4 space-y-2 text-[#D4D4D4] sm:mt-5 sm:space-y-3 lg:pl-22">
            {menuLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={
                    link.active
                      ? "inline-flex items-center gap-2 rounded-md bg-[#4C9A2A] px-3 py-1.5 text-sm font-medium text-white"
                      : "text-sm transition-colors hover:text-white"
                  }
                >
                  {link.label}
                  {link.active && <span aria-hidden="true">↗</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-services">
          <h3 id="footer-services" className="text-lg font-Demibold leading-tight sm:text-2xl lg:pr-40">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-xs text-[#D4D4D4] sm:mt-5 sm:space-y-3 sm:text-sm lg:pr-10">
            {serviceLinks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="footer-contact">
          <h3 id="footer-contact" className="text-lg font-Demibold leading-tight sm:text-2xl">
            Contact Us
          </h3>
          <address className="mt-4 max-w-[220px] text-[0.95rem] not-italic text-[#D4D4D4] sm:mt-5 sm:max-w-[236px] sm:text-[1.225rem]">
            <p>254 Chapman Rd, Ste 208 #21645, Newark, Delaware 19702, US</p>
            <a href="tel:+13023664887" className="block transition-colors hover:text-white pt-2">
              +1 302 366 4887
            </a>
            <a href="https://www.dukaandar.com" className="block transition-colors hover:text-white pt-2">
              www.dukaandar.com
            </a>
          </address>

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6">
            {socialLinks.map(({ label, href, icon, filled }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={[
                  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg_path]:fill-white sm:h-10 sm:w-10 sm:[&_svg]:h-5 sm:[&_svg]:w-5",
                  filled ? "bg-[#4C9A2A]" : "hover:bg-white/10",
                ].join(" ")}
              >
                {icon}
              </a>
            ))}
          </div>
        </section>
      </section>

      <hr className="my-8 border-white/15 lg:my-10" />

      <p className="text-center text-xs text-[#979797] sm:text-sm">
        Copyright © 2025 Rometheme. All Rights Reserved.
      </p>
    </footer>
  );
}
