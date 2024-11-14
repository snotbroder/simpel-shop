import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

function MainButton({ buttonText }) {
  return (
    <>
      <Link href={`/products`} className="bg-accent text-primary transition-all  text-xl  w-auto rounded-lg px-10 py-3 text-center hover:font-medium group hover:bg-primary hover:text-bg hover:transition-all">
        {buttonText}
        <IoIosArrowRoundForward className="inline transition-transform duration-200 ease-in-out group-hover:translate-x-1" size={30} />
      </Link>
    </>
  );
}

export default MainButton;
