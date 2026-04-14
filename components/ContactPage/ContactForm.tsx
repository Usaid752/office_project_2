import ArrowIcon from "@/components/Icons/ArrowIcon";
import FbIcon from "@/components/Icons/FbIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import XIcon from "@/components/Icons/XIcon";
import YoutubeIcon from "@/components/Icons/YoutubeIcon";
import ContactDetails from "@/components/ContactPage/ContactDetails";
import IconButton from "@/components/Ui/icon";

export default function ContactForm() {
  return (
    <section className="py-10 lg:py-14">
      <div className="grid gap-5 lg:grid-cols-10">
        <aside className="rounded-[28px] bg-[#4C9A2A] px-7 py-8 text-white lg:col-span-4">
          <ContactDetails />

          <div className="mt-9 flex items-center gap-3">
            <IconButton className="bg-[#A4DE02]" ariaLabel="Facebook">
              <FbIcon />
            </IconButton>
            <IconButton ariaLabel="Youtube">
              <YoutubeIcon />
            </IconButton>
            <IconButton ariaLabel="X">
              <XIcon />
            </IconButton>
            <IconButton ariaLabel="Instagram">
              <InstagramIcon />
            </IconButton>
          </div>
        </aside>

        <div className="rounded-[20px] w-[100%] ml-10 bg-[#ffffff] p-5 sm:p-7 lg:col-span-6  ">
          <h2 className="text-[2.95rem] font-semibold text-[#000000] mb-10">
            Let&apos;s Start Building Together
          </h2>
          <p className="mt-2 text-sm text-[#6F6F6F]">
            Contact us to explore custom manufacturing solutions tailored to your business needs.
          </p>

          <form className="mt-6 space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="h-12 w-full rounded-xl border border-[#8EC75E] bg-white px-4 text-sm outline-none placeholder:text-[#000000]"
            />

            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="email"
                placeholder="hello@domainsite.com"
                className="h-12 w-full rounded-xl border border-transparent bg-[#E2E2E2] px-4 text-sm outline-none placeholder:text-[#9D9D9D]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="h-12 w-full rounded-xl border border-transparent bg-[#E9EBE6] px-4 text-sm outline-none placeholder:text-[#9D9D9D]"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="h-12 w-full rounded-xl border border-transparent bg-[#E9EBE6] px-4 text-sm outline-none placeholder:text-[#9D9D9D]"
            />

            <textarea
              rows={5}
              placeholder="Message"
              className="w-full rounded-xl border border-transparent bg-[#E9EBE6] px-4 py-3 text-sm outline-none placeholder:text-[#9D9D9D]"
            />

            <button
              type="submit"
              className="inline-flex items-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white"
            >
              Submit
              <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#A4DE02]">
                <ArrowIcon className="text-black" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
