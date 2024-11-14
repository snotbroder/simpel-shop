"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import Filter from "@/components/Filter";
import List from "@/components/List";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProductList() {
  const searchParams = useSearchParams();

  const categoryUrl = searchParams.get("category") || "";

  const [categoryState, setCategoryState] = useState(
    categoryUrl ? `/category/${categoryUrl}` : ""
  );

  // useEffect(() => {
  //   if (categoryUrl) {
  //     setCategoryState(`/category/${categoryUrl}`);
  //   } else {
  //     setCategoryState("");
  //   }
  // }, [categoryUrl]);

  return (
    <>
      <Filter fetcher={fetcher} setCategory={setCategoryState} />
      <List fetcher={fetcher} category={categoryState} />
    </>
  );
}

export default ProductList;
