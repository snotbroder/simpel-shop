import Card from "@/components/Card";
import Hero from "@/components/Hero";
import List from "@/components/List";
import Link from "next/link";
import PopCategories from "@/components/PopCategories";
import { FaQuoteRight } from "react-icons/fa";

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full ">
      <Hero />
      <div className="text-primary bg-secondary p-10 -mx-20">
        <h2 className="font-poppins font-bold text-2xl my-3 text-center">Everything you need in once</h2>
        <div className="mx-20">
          <p className="font-noto text-2xl flex gap-5">
            <FaQuoteRight className="text-primary text-72 " />
            Shoply Goods has everything you need— Discover how easy it is to find what you're looking for with our wide selection!
          </p>
        </div>
      </div>
      <PopCategories />

      <Link href={`/category/groceries`}>testlink til kategori filtrering</Link>
    </div>
  );
}
