import Image from "next/image";
export default function Map() {
  return (
    <section className=" max-w-[1600px] mx-auto justify-center items-center">
      <Image src="/img/Map.png" 
      alt="Map"
       width={1000} 
       height={1000}
       className="w-full h-auto"
       />
    </section>
  );
}