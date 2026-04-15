import AboutFeature from "../FeaturesPage/AboutFeature";
import ArrowIcon from "../Icons/ArrowIcon";
import Button from "../Ui/Button";
import Image from "next/image";


export default function BlogDetails() {
    return (
        <section className="overflow-hidden bg-white pb-50">
        <div className="mx-auto flex flex-col  items-center justify-center gap-10 px-6 sm:px-8 lg:flex-row lg:items-start lg:gap-6 lg:px-12">
          <div className="flex flex-col items-center pt-15 text-center font-semibold lg:w-[718px] lg:items-start  lg:text-left 
          ">
           <div className="flex items-center gap-2 mb-3 ">
         <a href="/" className="text-sm font-[10] tracking-[0.15em] text-[#000000] sm:text-base ">Home-</a>
         <a href="/blogs" className="text-sm font-[10] tracking-[0.15em] text-[#000000] sm:text-base ">Blogs-</a>
         <a href="/blogs/details" className="text-sm font-[10] tracking-[0.15em] text-[#4C9A2A] sm:text-base ">Details</a>
         </div>
    
            <h1 className="mb-5 text-4xl font-[700] text-foreground sm:text-5xl lg:text-[65px] lg:leading-[1] tracking-tight  ">
             <span className="text-[#4C9A2A]">5 WhatsApp</span> <br />
             <span className="text-[#4C9A2A]">Marketing </span>  
              <br />
               Strategies To Drive Sales Instantly 
              <br />
              
            </h1>
    
            <p className="mb-8 max-w-[600px] text-[1.1rem] leading-relaxed text-black/65 sm:text-[1.1rem] font-[300] ">
            Your customers are already on WhatsApp. Learn how to integrate your Dukaandar store.
            </p>
    
            
          </div>
    
          <div className="relative flex items-center justify-center ">
            <Image
              src="/img/Article_1.png"
              alt="Dukaandar platform preview on laptop, tablet, and phone"
              width={400}
              height={0}
              priority
              className="mt-3 rounded-2xl  "
              style={{
                width: "700px",
                height: "550px",
              }}
            />
          </div>
        </div>
        {/* <div>
          <BlogsMoreDetails />
        </div> */}
      </section>    
    )
}
