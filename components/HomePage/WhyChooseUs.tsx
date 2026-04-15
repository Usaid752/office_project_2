import Image from "next/image";
import SubmitWaitlistButton from "@/components/Ui/SubmitWaitlistButton";
import { testimonials, whyChooseUsHighlights } from "@/components/Ui/WhyChooseUsContent";



export default function WhyChooseUs() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1600px]">
        <header className="mx-auto max-w-[820px] text-center ">
          <h2 className=" text-4xl font-[500] leading-[1.08] tracking-[-0.05em] text-[#101010] font-custom ">
            <span className=" text-[45px]  text-[#8D8D88] font-medium font-weight-[500] font-custom   ">We build {" "}</span>
            <span className="text-[40px]  text-[#000000] font-bold font-weight-[700] font-custom">high-performance, intuitive digital stores</span>
            <span className="text-[43px]  text-[#8D8D88] font-weight-[500] font-custom   ">{" "}that meet the fast-paced demands of </span>
            <span className="text-[#4C9A2A] font-bold text-5xl font-custom">modern ecommerce.</span>
          </h2>

          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex items-center">
              {testimonials.map((testimonial, index) => (
                <Image
                  key={testimonial.imageUrl}
                  src={testimonial.imageUrl}
                  alt="Happy customer"
                  width={64}
                  height={64}
                  className={`h-14 w-14 rounded-full border-[3px] border-white object-cover ${index !== 0 ? "-ml-3" : ""}`}
                />
              ))}
              <span className="-ml-3 inline-flex h-[64px] w-[64px] items-center justify-center rounded-full border-[3px] border-white bg-[#4C9A2A] text-[20px] font-medium leading-none text-white">
                200+
              </span>
            </div>
          </div>

          <p className=" mt-3 font-light text-[14px]  w-[400px]  text-[#575757] font-custom mx-auto ">
          Our platform empowers every seller with localized tools and expert 
          support—scaling your business from a local shop to a national brand.
          </p>
        </header>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.1fr)_minmax(0,0.86fr)] lg:gap-8 xl:mt-20 xl:gap-12 ml-20">
          <article className="max-w-[320px] mb-30">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#4C9A2A] sm:text-base font-custom ">
              Why Choose Us
            </p>
            <h3 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-black font-custom ">
              Ecommerce Solutions You Can Scale
            </h3>
            <p className="mt-6 text-md leading-6 text-[#6A6A65] sm:text-[20px] mb-20 font-custom ">
              From seamless local payment integrations to automated courier
              booking, we provide the high-tech foundation and local trust your
              online business needs to thrive in today&apos;s market.
            </p>
            <SubmitWaitlistButton className="mt-8" />
          </article>

          <div className="justify-self-center">
            <Image
              src="/img/ipad.svg"
              alt="Dukaandar dashboard preview displayed on a tablet"
              width={430}
              height={573}
              sizes="(max-width: 767px) 78vw, (max-width: 1279px) 40vw, 470px"
              className="h-auto w-full "
              priority
            />
          </div>

          <ul className="grid gap-4 mb-40 font-custom ">
            {whyChooseUsHighlights.map(({ title, imageUrl: imageUrl }) => (
              <li
                key={title}
                className="flex items-center gap-4 rounded-[22px] bg-[#F3F3F3] h-[86px]  sm:px-5 "
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4C9A2A] text-white">
                  <Image src={imageUrl} alt={title} width={28} height={28} />
                </span>
                <span className="max-w-[18ch] text-lg font-medium leading-[1.1] tracking-[-0.03em] text-[#000000]">
                  {title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
