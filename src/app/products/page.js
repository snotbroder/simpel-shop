"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Filter from "@/components/Filter";
import List from "@/components/List";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProductList() {
  const searchParams = useSearchParams();

  const categoryUrl = searchParams.get("category") || "";
  const [categoryState, setCategoryState] = useState(
    `/category/${categoryUrl}`
  );

  return (
    <>
      <Filter fetcher={fetcher} setCategory={setCategoryState} />
      <List fetcher={fetcher} category={categoryState} />
    </>
  );
}

export default ProductList;
