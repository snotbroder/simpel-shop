import Link from "next/link";
import HeartIcon from "./HeartIcon";
import Image from "next/image";

function Card({ productTitle, thumbnail, price, productId }) {
  return (
    <div className=" bg-slate-100 relative shadow-md flex flex-col gap-4 w-64 rounded-md cursor-pointer pb-4 hover:scale-105 transition-transform duration-300 ease-in-out">
      <HeartIcon />
      <Image src={thumbnail} width={250} height={250} alt="test" />
      <div className="pl-4">
        <h1>{productTitle}</h1>
        <h2>{price} kr</h2>
      </div>
      <button className=" self-start ml-4 rounded-lg bg-actionColor pl-3 pr-3 text-slate-800 border border-slate-800 hover:bg-lime-100 hover:font-medium">
        Læg i Kurv
      </button>
      {/* <span className=" w-full text-center border border-gray hover:border-black hover:bg-actionColor cursor-pointer rounded-sm">
        Læg i kurv
      </span> */}
    </div>
  );
}

export default Card;
