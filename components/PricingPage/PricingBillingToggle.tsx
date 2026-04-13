import Image from "next/image";
import Button from "@/components/Ui/Button";


const tabs = [
    { label: "Pay Monthly", active: true, variant: "tabToggleActive" },
    { label: "Pay Yearly (Save 25%)", active: false, variant: "tabToggleInactive" },
  
] as const;

export default function PriceBillingToogle() {
  return (
    <section className="bg-white px-6 lg:px-12 py-6 text-[#111111] sm:px-8 sm:py-20  lg:py-15">
      <div className="mx-auto max-w-[560px]">
        <div className="text-center ">
         
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-[#F2F2F2] p-2  scale-[1.2]">
              {tabs.map((tab) => (
                <Button
                  key={tab.label}
                  variant={tab.variant as any}  
                >
                  {tab.label}
                </Button>
              ))} 
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
