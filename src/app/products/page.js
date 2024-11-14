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
      <h1 className="text-5xl font-poppins font-black mb-5">productList</h1>
      <Filter fetcher={fetcher} setCategory={setCategory} />
      <div className="flex">
        <List fetcher={fetcher} category={category} setBasketArray={setBasketArray} basketArray={basketArray} />
        {basketArray.length > 0 && <Basket className=" self-start" basketArray={basketArray} setBasketArray={setBasketArray} />}
      </div>
    </>
  );
}

export default productList;
