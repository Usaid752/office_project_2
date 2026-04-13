import Button from "../Ui/Button";
import ArrowIcon from "../Icons/ArrowIcon";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 gap-8 rounded-[40px] border border-gray-8000 bg-white p-6 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-12">
      <div className="min-w-0">
        <img
          src="/img/Blog_banner.svg"
          alt="Person working on a laptop at the Dukaandar Hub"
          className="h-auto w-full rounded-3xl object-cover"
        />
      </div>
      <div className="flex min-w-[60%] flex-col gap-5">
        <h1 className="text-[4.5rem] font-bold leading-tight tracking-tight pl-12 ">
          <span className="text-[#4C9A2A]">The Dukaandar Hub:</span>{" "}
          <span className="text-[#000000]">Empowering Your Business Journey</span>
        </h1>
        <p className="text-base leading-relaxed text-[#575757] sm:text-[1.2rem] pl-10">
          From launching your first online store to scaling a global brand, get the expert insights,
          tutorials, and trends you need to succeed in modern commerce.
        </p>
        <div className="flex justify-start pl-10">
          <Button
            variant="filled"
            href="#"
            icon={<ArrowIcon className="text-black" />}
            iconClassName="!absolute !right-3 !top-1/2 !-translate-y-1/2 !size-8 !rounded-md !bg-[#76BA1B]"
            className="relative !h-[56px] w-[200px] !btn-rounded-md bg-black hover:bg-neutral-900 text-[1.1rem] items-center justify-center mr-12"
            >
            Read More
          </Button>
        </div>
      </div>
      
    </section>
    
    
  );
}
