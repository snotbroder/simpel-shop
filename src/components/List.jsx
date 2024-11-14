"use client";
import useSWR from "swr";
import Card from "./Card";
import Basket from "./Basket";

export default function List({
  category,
  fetcher,
  setBasketArray,
  basketArray,
}) {
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products${category}`,
    fetcher
  );

  if (isLoading) return "Loading...";
  if (error) return "error";

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {basketArray.length > 0 && (
        <Basket
          className=" self-start"
          basketArray={basketArray}
          setBasketArray={setBasketArray}
        />
      )}
      <ul className="flex flex-wrap flex-grow w-fit gap-10 lg:items-end lg:justify-center justify-center items-center ">
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
    </div>
  );
}
