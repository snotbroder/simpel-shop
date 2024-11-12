"use client";
import { useEffect, useState } from "react";
import Filter from "@/components/Filter";
import List from "@/components/List";
import Basket from "@/components/basket";

const fetcher = (url) => fetch(url).then((res) => res.json());

function productList() {
  const [category, setCategory] = useState("");
  const [basketArray, setBasketArray] = useState([]);

  return (
    <>
      <Filter fetcher={fetcher} setCategory={setCategory} />
      <List
        fetcher={fetcher}
        category={category}
        setBasketArray={setBasketArray}
        basketArray={basketArray}
      />
      {basketArray.length > 0 && (
        <Basket basketArray={basketArray} setBasketArray={setBasketArray} />
      )}
    </>
  );
}

export default productList;
