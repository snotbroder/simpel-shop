import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";

function Basket({ basketArray, setBasketArray }) {
  console.log("Basket Array:", basketArray);
  return (
    <div className="basket-container bg-gray-100 text-black p-4 rounded-lg shadow-lg w-full md:w-80 mb-4">
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
              <div className="flex items-center gap-2">
                <div>pcs: {product.quantity}</div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{product.price} USD</p>
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
