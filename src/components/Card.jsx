import HeartIcon from "./HeartIcon";
function Card({ productTitle, price, description }) {
  return (
    <div className=" bg-slate-100 relative shadow-md flex flex-col gap-4 w-64 rounded-md cursor-pointer pb-4 hover:scale-105 transition-transform duration-300 ease-in-out">
      <HeartIcon />
      <img
        className="self-stretch object-cover object-top h-72  overflow-hidden rounded-md"
        src="https://img01.ztat.net/article/spp-media-p1/90a9a85b14a0305c9ea5b3b58fb1f188/faafa3045dad486caa5472add232e0d1.jpg?imwidth=1800"
        alt="mand"
      />
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
