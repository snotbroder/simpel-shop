"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import Filter from "@/components/Filter";
import List from "@/components/List";
import Basket from "@/components/Basket";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProductList() {
  const searchParams = useSearchParams();

  const categoryUrl = searchParams.get("category") || "";

  const [category, setCategory] = useState(categoryUrl ? `/category/${categoryUrl}` : "");
  const [basketArray, setBasketArray] = useState([]);
  // const [categoryState, setCategoryState] = useState("");

  useEffect(() => {
    // Update category whenever categoryUrl changes
    setCategory(categoryUrl ? `/category/${categoryUrl}` : "");
  }, [categoryUrl]);

  // useEffect(() => {
  //   if (categoryUrl) {
  //     setCategoryState(`/category/${categoryUrl}`);
  //   } else {
  //     setCategoryState("");
  //   }
  // }, [categoryUrl]);

  return (
    <>
      <div>
        <Filter fetcher={fetcher} setCategory={setCategory} />
        <List fetcher={fetcher} category={category} setBasketArray={setBasketArray} basketArray={basketArray} />
      </div>
    </>
  );
}

export default ProductList;
