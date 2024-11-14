import Link from "next/link";
import HeartIcon from "./HeartIcon";
import Image from "next/image";
import { BsBagPlus } from "react-icons/bs";

function Card({
  brand,
  productTitle,
  thumbnail,
  price,
  productId,
  setBasketArray,
}) {
  return (
    <div className="group bg-slate-100 relative shadow-md flex flex-col gap-4 w-80 rounded-md cursor-pointer pb-4">
      {/* hover:scale-105 transition-transform duration-300 ease-in-out */}
      <div className="flex justify-end p-6">
        <HeartIcon />
      </div>
      <div className=" overflow-hidden flex justify-center">
        <Image
          className=" object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={thumbnail}
          width={200}
          height={200}
          alt="test"
        />
      </div>
      <div className="pl-4  text-primary">
        <h3 className="font-noto uppercase text-sm">{brand}</h3>
        <h1 className="uppercase font-poppins text-md font-semibold">
          {productTitle}
        </h1>
      </div>
      <button
        className=" self-start ml-4 rounded-lg bg-actionColor pl-3 pr-3 text-slate-800 border border-slate-800 hover:bg-lime-100 hover:font-medium"
        onClick={() => {
          // e.preventDefault();
          setBasketArray((prevBasketArray) => [
            ...prevBasketArray,
            {
              title: productTitle,
              id: productId,
              price: price,
              thumbnail: thumbnail,
            },
          ]);
        }}
      >
        Læg i Kurv
      </button>
      {/* <span className=" w-full text-center border border-gray hover:border-black hover:bg-actionColor cursor-pointer rounded-sm">
        Læg i kurv
      </span> */}
    </div>
  );
}

export default Card;
