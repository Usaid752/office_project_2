import Image from "next/image";
import SubmitWaitlistButton from "@/components/Ui/SubmitWaitlistButton";
import { testimonials, whyChooseUsHighlights } from "@/components/Ui/WhyChooseUsContent";



export default function WhyChooseUs() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1600px]">
        <header className="mx-auto max-w-[820px] text-center">
          <h2 className="text-3xl font-[500] leading-[1.08] tracking-[-0.05em] text-[#101010] font-custom sm:text-4xl lg:text-4xl">
            <span className="text-[30px] text-[#8D8D88] font-medium font-weight-[500] font-custom sm:text-[36px] lg:text-[45px]">We build{" "}</span>
            <span className="text-[28px] text-[#000000] font-bold font-weight-[700] font-custom sm:text-[34px] lg:text-[40px]">high-performance, intuitive digital stores</span>
            <span className="text-[30px] text-[#8D8D88] font-weight-[500] font-custom sm:text-[36px] lg:text-[43px]">{" "}that meet the fast-paced demands of </span>
            <span className="text-[32px] font-bold text-(--text-color-secondary) font-custom sm:text-[38px] lg:text-5xl">modern ecommerce.</span>
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

          <p className="mx-auto mt-3 w-[300px] text-[13px] font-light text-[#575757] font-custom sm:w-[360px] sm:text-[14px] lg:w-[400px]">
          Our platform empowers every seller with localized tools and expert 
          support—scaling your business from a local shop to a national brand.
          </p>
        </header>

        <div className="mt-14 grid items-center justify-items-center gap-10 text-center lg:ml-20 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.1fr)_minmax(0,0.86fr)] lg:items-center lg:justify-items-stretch lg:gap-8 lg:text-left xl:mt-20 xl:gap-12">
          <article className="mb-20 max-w-[280px] lg:mb-30 lg:max-w-[320px]">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#4C9A2A] font-custom sm:text-base">
              Why Choose Us
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-[0.95] tracking-[-0.05em] text-black font-custom sm:text-4xl lg:text-5xl">
              Ecommerce Solutions You Can Scale
            </h3>
            <p className="mt-6 mx-auto max-w-[280px] text-sm leading-6 text-[#6A6A65] font-custom sm:max-w-[320px] sm:text-[18px] lg:mx-0 lg:mb-20 lg:text-[20px]">
              From seamless local payment integrations to automated courier
              booking, we provide the high-tech foundation and local trust your
              online business needs to thrive in today&apos;s market.
            </p>
            <SubmitWaitlistButton className="mt-8 mx-auto lg:mx-0" />
          </article>

          <div className="justify-self-center">
            <Image
              src="/img/ipad.svg"
              alt="Dukaandar dashboard preview displayed on a tablet"
              width={430}
              height={573}
              sizes="(max-width: 767px) 78vw, (max-width: 1279px) 40vw, 470px"
              className="h-auto w-[260px] sm:w-[320px] lg:w-full"
              priority
            />
          </div>

          <ul className="mb-24 grid w-full max-w-[320px] gap-4 font-custom lg:mb-40 lg:max-w-none">
            {whyChooseUsHighlights.map(({ title, imageUrl: imageUrl }) => (
              <li
                key={title}
                className="flex h-[78px] items-center justify-center gap-4 rounded-[22px] bg-[#F3F3F3] px-4 sm:px-5 lg:h-[86px] lg:justify-start"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4C9A2A] text-white">
                  <Image src={imageUrl} alt={title} width={28} height={28} />
                </span>
                <span className="max-w-[18ch] text-left text-base font-medium leading-[1.1] tracking-[-0.03em] text-[#000000] sm:text-lg">
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
