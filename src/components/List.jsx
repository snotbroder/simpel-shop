import Card from "./Card";

export default async function List() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();

  return (
    <ul className="flex flex-wrap gap-20 pl-28 pr-28 items-center justify-center">
      {data.products.map((product) => (
        <div key={product.id}>
          <Card
            productTitle={product.title}
            brand={product.brand}
            price={product.price}
            thumbnail={product.thumbnail}
          ></Card>
        </div>
      ))}
    </ul>
  );
}
