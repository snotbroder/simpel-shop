import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";

function Basket({ basketArray, setBasketArray }) {
  console.log("Basket Array:", basketArray);
  return (
    <div className="basket-container bg-gray-100 text-black w-64 p-4 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">Basket</h1>
      {basketArray.map((product, i) => (
        <div
          key={`basket${i}`}
          className="basket-item border-b border-gray-300 pb-4 mb-4"
        >
          <div className="flex gap-4 items-center">
            <Image
              src={product.thumbnail}
              width={60}
              height={60}
              alt={product.title}
              className="rounded-md"
            />
            <div className="flex flex-1 flex-col">
              <h1 className="font-medium text-sm">{product.title}</h1>
              <p className="text-xs text-gray-500 mt-1">- 2 +</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{product.price} KR</p>
            </div>
            <button
              onClick={() => {
                setBasketArray((prevBasketArray) =>
                  prevBasketArray.filter((item) => item.id !== product.id)
                );
              }}
              style={{ background: "none", border: "none", cursor: "pointer" }} // Optional styling to make it look like an icon button
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Basket;
