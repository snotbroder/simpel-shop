"use client";
import { useEffect, useState } from "react";
import Filter from "@/components/Filter";
import List from "@/components/List";

const fetcher = (url) => fetch(url).then((res) => res.json());

function productList() {
  const [category, setCategory] = useState("");
  return (
    <>
      <Filter fetcher={fetcher} setCategory={setCategory} />
      <List fetcher={fetcher} category={category} />
    </>
  );
}

export default productList;
