import Card from "@/components/Card";
import Hero from "@/components/Hero";
import List from "@/components/List";
import PopCategories from "@/components/PopCategories";

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full bg-bg">
      <Hero />
      <PopCategories />
      <div className="text-primary">
        <h2>Everything you need in once</h2>
        <p>
          At Shoply Goods, you’ll find everything your heart desires. From
          glasses and cat food to makeup, perfumes, phones, and fresh produce –
          we have it all! Our mission is to make your shopping experience easy
          and convenient, no matter what you’re looking for. Explore our wide
          selection and discover just how simple it is to find exactly what you
          need.
        </p>
      </div>
    </div>
  );
}
