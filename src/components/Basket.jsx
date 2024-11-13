import Image from "next/image";
function Basket({ basketArray, setBasketArray }) {
  console.log("Basket Array:", basketArray);
  return (
    <div className="bg-secondary">
      <h1>Basket</h1>
      {basketArray.map((product, i) => (
        <div key={`basket${i}`}>
          <div className="flex gap-8 justify-between">
            <div>
              <h1>{product.title}</h1>
              <p>{product.price}</p>
            </div>
            <Image src={product.thumbnail} width={75} height={75} alt="test" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Basket;
