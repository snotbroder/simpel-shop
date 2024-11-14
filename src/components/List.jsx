"use client";
import useSWR from "swr";
import Card from "./Card";

export default function List({ category, fetcher, setBasketArray }) {
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products${category}`,
    fetcher
  );

  if (isLoading) return "Loading...";

  return (
    <ul className="flex flex-wrap gap-20 max-w-6xl items-center justify-center">
      {data.products.map((product) => (
        <div key={product.id}>
          <Card
            productTitle={product.title}
            brand={product.brand}
            price={product.price}
            thumbnail={product.thumbnail}
            productId={product.id}
            setBasketArray={setBasketArray}
          />
        </div>
      ))}
    </ul>
  );
}
