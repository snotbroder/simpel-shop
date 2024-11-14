import Card from "@/components/Card";
import Hero from "@/components/Hero";
import List from "@/components/List";
import Link from "next/link";
import PopCategories from "@/components/PopCategories";
import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <PopCategories />
      <Link href={`/category/groceries`}>testlink til kategori filtrering</Link>
      <div className="text-primary flex flex-col md:flex-row justify-center gap-20 items-center py-4">
        <div className="md:max-w-xl">
          <h2 className="font-poppins font-bold text-2xl md:text-4xl my-3  ">
            Everything you need in once
          </h2>
          <div className=" ">
            <p className="font-noto  md:text-xl flex gap-5">
              <FaQuoteRight className="text-primary text-72 " />
              Shoply Goods has everything you need— Discover how easy it is to
              find what you're looking for with our wide selection!
            </p>
          </div>
        </div>
        <div>
          <Image src="/indeximg.avif" width={460} height={460} />
        </div>
      </div>
    </div>
  );
}
