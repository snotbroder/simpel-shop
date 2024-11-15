"use client";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import MainButton from "./MainButton";
import Link from "next/link";

function Basket({ basketArray, setBasketArray }) {
  console.log("Basket Array:", basketArray);
  return (
    <div className="basket-container p-4 rounded-lg shadow-lg w-full md:w-80 mb-4 bg-white">
      <h1 className="text-xl mb-4 font-poppins text-primary">Your basket</h1>
      {basketArray.map((product, i) => (
        <div key={`basket${i}`} className="basket-item  pb-4 mb-4">
          <div className="flex-col gap-4 items-center">
            <h1 className=" text-md  font-poppins text-primary mb-2">{product.title}</h1>
            <div className="flex  justify-between">
              <Image src={product.thumbnail} width={60} height={60} alt={product.title} className="rounded-md" />
              <div className="flex-col items-center gap-2 text-primary font-noto text-sm">
                <div>pcs: {product.quantity}</div>
                <p className="text-sm font-medium font-noto text-primary">${product.price} USD</p>
              </div>
              <button
                onClick={() => {
                  setBasketArray((prevBasketArray) => prevBasketArray.filter((item) => item.id !== product.id));
                }}
                style={{ background: "none", border: "none", cursor: "pointer" }} // Optional styling to make it look like an icon button
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
      ))}
      <hr className="text-gray"></hr>
      <Link className="bg-accent text-primary transition-all  md:text-xl text-lg  w-auto rounded-lg px-5 py-2 lg:px-10 lg:py-3 text-center hover:font-medium group hover:bg-primary hover:text-bg hover:transition-all grid place-self-center my-5" href={`/checkout?basket=${encodeURIComponent(JSON.stringify(basketArray))}`}>
        Checkout
      </Link>
    </div>
  );
}

export default Basket;
