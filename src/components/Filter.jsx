"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";

import useSWR from "swr";

export default function Filter({ setCategory, fetcher }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { data, error, isLoading } = useSWR("https://dummyjson.com/products/category-list", fetcher);

  if (isLoading) return <div>Loading categories...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <div
      className="grid gap-2 grid-cols-2 md:grid-cols-4 justify-between lg:grid-cols-8 mb-12 -mx-4 p-4 bg-white cursor-pointer lg:bg-white border-2 border-secondary lg:border-0 shadow-md rounded-md"
      onClick={() => {
        setIsFilterOpen(!isFilterOpen);
      }}
    >
      <div className="flex justify-between md:col-span-8 lg-span-8 col-span-2 mb-2  ">
        <div className="flex gap-4 items-center">
          <h1>Filter</h1>
          <FaFilter />
        </div>
        <IoClose
          className="cursor-pointer"
          size={25}
          onClick={(e) => {
            e.stopPropagation();
            setIsFilterOpen(false);
          }}
        />
      </div>

      {data.map(
        (product) =>
          isFilterOpen && (
            <button onClick={() => setCategory(`/category/${product}`)} className="text-primary p-1 border border-gray box-border text-sm hover:bg-accent transition rounded-md capitalize ">
              {product}
            </button>
          )
      )}
    </div>
  );
}
