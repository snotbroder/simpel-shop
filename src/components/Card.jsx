import Link from "next/link";
import HeartIcon from "./HeartIcon";
import Image from "next/image";
import { BsBagPlus } from "react-icons/bs";

function Card({ brand, productTitle, thumbnail, price, productId, setBasketArray }) {
  return (
    <Link href={`/single/${productId}`}>
      <div className="group bg-slate-100 relative shadow-md flex flex-col gap-4 w-80 rounded-md cursor-pointer pb-4">
        {/* hover:scale-105 transition-transform duration-300 ease-in-out */}
        <div className="flex justify-end p-6">
          <HeartIcon />
        </div>
        <div className=" overflow-hidden flex justify-center">
          <Image className=" object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110" src={thumbnail} width={200} height={200} alt="test" />
        </div>
        <div className="pl-4  text-primary">
          <h3 className="font-noto uppercase text-sm">{brand}</h3>
          <h1 className="uppercase font-poppins text-md font-semibold">{productTitle}</h1>
        </div>
        <div className="flex items-end justify-between pr-4 pl-4 ">
          <h2 className="  text-primary font-noto text-xl uppercase">{price} USD </h2>
          <button
            className="bg-accent hover:bg-[#92A4FF] rounded-lg text-primary hover:font-medium w-10 h-10 flex items-center justify-center "
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
            <BsBagPlus className="text-xl" />
          </button>
        </div>
        {/* <span className=" w-full text-center border border-gray hover:border-black hover:bg-actionColor cursor-pointer rounded-sm">
        Læg i kurv
      </span> */}
      </div>
    </Link>
  );
}

export default Card;

// import HeartIcon from "./HeartIcon";
// import Image from "next/image";
// import { BsBagPlus } from "react-icons/bs";

// function Card({ brand, rating, productTitle, thumbnail, price }) {
//   return (
//     <div className="group bg-slate-100 relative shadow-md flex flex-col gap-4 w-80 rounded-md cursor-pointer pb-4">
//       {/* hover:scale-105 transition-transform duration-300 ease-in-out */}
//       <div className="flex justify-end p-6">
//         <HeartIcon />
//       </div>
//       <div className=" overflow-hidden flex justify-center">
//         <Image
//           className=" object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
//           src={thumbnail}
//           width={200}
//           height={200}
//           alt="test"
//         />
//       </div>
//       <div className="pl-4  text-primary">
//         <h3 className="font-noto uppercase text-sm">{brand}</h3>
//         <h1 className="uppercase font-poppins text-md font-semibold">
//           {productTitle}
//         </h1>
//       </div>
//       <div className="flex items-end justify-between pr-4 pl-4 ">
//         <h2 className="  text-primary font-noto text-xl uppercase">
//           {price} USD
//         </h2>
//         <button className="bg-accent hover:bg-[#92A4FF] rounded-lg text-primary hover:font-medium w-10 h-10 flex items-center justify-center ">
//           <BsBagPlus className="text-xl" />
//         </button>
//       </div>
//       {/* <span className=" w-full text-center border border-gray hover:border-black hover:bg-actionColor cursor-pointer rounded-sm">
//         Læg i kurv
//       </span> */}
//     </div>
//   );
// }

// export default Card;
