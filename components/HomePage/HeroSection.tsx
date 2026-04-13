import Image from "next/image";
import Button from "@/components/Ui/Button";
import IconButton from "@/components/Ui/icon";
import FbIcon from "@/components/Icons/FbIcon";
import YoutubeIcon from "@/components/Icons/YoutubeIcon";
import XIcon from "@/components/Icons/XIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import Groupbanner from "@/public/img/Groupbanner.png";

const socialLinks = [
  { label: "Facebook", href: "#", icon: <FbIcon /> },
  { label: "YouTube", href: "#", icon: <YoutubeIcon /> },
  { label: "X / Twitter", href: "#", icon: <XIcon /> },
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
];

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-white pb-50">
      <div className="mx-auto flex flex-col items-center justify-center gap-10 px-6 sm:px-8 lg:flex-row lg:items-start lg:gap-6 lg:px-12">
        <div className="flex w-full flex-col items-center pt-0 text-center font-semibold lg:w-[70%] lg:items-start lg:pt-25 lg:text-left
        ">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#4C9A2A] sm:text-base mt-20">
            Build. Sell. Grow with Dukaandar.
          </p>

          <h1 className="mb-5 text-4xl font-[1000] text-foreground sm:text-5xl lg:text-[55px] lg:leading-[1] tracking-tight  ">
            Powering the
            <br />
            Future of <span className="text-[#4C9A2A]">Online</span>
            <br />
            <span className="text-[#4C9A2A]">Commerce</span>
          </h1>

          <p className="mb-8 max-w-[450px] text-sm leading-relaxed text-black/65 sm:text-base font-light ">
            Dukaandar helps you build, manage, and grow your online business
            &nbsp;&mdash; without coding, without complexity.
          </p>

          <Button
            variant="filled"
            href="/waitlist"
            icon={<ArrowIcon />}
            className="mb-10 w-fit shrink-0 whitespace-nowrap scale-[1.2] ml-6 mt-7 "
          >
            Submit a Waitlist
          </Button>

          <div className="flex items-center gap-3 mt-15">
            {socialLinks.map((link) => (
              <IconButton key={link.label} href={link.href} ariaLabel={link.label}>
                {link.icon}
              </IconButton>
            ))}
          </div>
        </div>

        <div className="relative flex w-full items-center justify-center ">
          <Image
            src={Groupbanner}
            alt="Dukaandar platform preview on laptop, tablet, and phone"
            width={1125}
            height={499}
            priority
            className="mt-3 h-auto w-full max-w-[900px]  scale-[1.3] mt-22 mr-65  "
          />
        </div>
      </div>
      <a
        href="#"
        className="flex min-h-8 w-full items-center justify-center bg-black px-4 py-2 text-center text-[11px] font-medium text-white sm:text-sm mt-25 mr- "
      >
        <span className="flex flex-wrap items-center justify-center gap-2">
          <span>See how a business owner uses Dukaandar</span>
          <span className="font-semibold">Play video</span>
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#8BC34A]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-2.5 w-2.5 fill-black"
            >
              <path d="M9 7v10l8-5-8-5Z" />
            </svg>
          </span>
        </span>
      </a>
    </section>
  );
}
