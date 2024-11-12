"use client";
import useSWR from "swr";
import Card from "./Card";

export default function List({ category, fetcher }) {
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products${category}`,
    fetcher
  );

  if (isLoading) return "Loading...";

  return (
    <ul className="flex flex-wrap gap-20 pl-28 pr-28 items-center justify-center">
      {data.products.map((product) => (
        <div key={product.id}>
          <Card
            productTitle={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
            productId={product.id}
          />
        </div>
      ))}
    </ul>
  );
}
