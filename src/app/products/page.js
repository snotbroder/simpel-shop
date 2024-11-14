"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Import useSearchParams
import Filter from "@/components/Filter";
import List from "@/components/List";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProductList() {
  const searchParams = useSearchParams();

  // Get the category directly from the search params
  const categoryUrl = searchParams.get("category") || ""; // Default to empty string if not available

  // Initialize state with categoryUrl or empty string
  const [categoryState, setCategoryState] = useState(
    `/category/${categoryUrl}`
  );

  // useEffect to update state if searchParams changes
  useEffect(() => {
    // Whenever the category query changes, update state
    if (categoryUrl) {
      setCategoryState(`/category/${categoryUrl}`);
    }
  }, [categoryUrl]);

  return (
    <>
      {/* Pass categoryState to Filter and List components */}
      <Filter fetcher={fetcher} setCategory={setCategoryState} />
      <List fetcher={fetcher} category={categoryState} />
    </>
  );
}

export default ProductList;
