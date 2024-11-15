"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import Filter from "@/components/Filter";
import List from "@/components/List";
import Basket from "@/components/Basket";
import { Suspense } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProductList() {
  const searchParams = useSearchParams();

  const categoryUrl = searchParams.get("category") || "";

  const [category, setCategory] = useState(categoryUrl ? `/category/${categoryUrl}` : "");
  const [basketArray, setBasketArray] = useState([]);
  // const [categoryState, setCategoryState] = useState("");

  // useEffect(() => {
  //   if (categoryUrl) {
  //     setCategoryState(`/category/${categoryUrl}`);
  //   } else {
  //     setCategoryState("");
  //   }
  // }, [categoryUrl]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Filter fetcher={fetcher} setCategory={setCategory} />
        <List fetcher={fetcher} category={category} setBasketArray={setBasketArray} basketArray={basketArray} />
      </div>
    </Suspense>
  );
}

export default ProductList;
