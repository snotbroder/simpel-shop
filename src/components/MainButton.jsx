import { IoIosArrowRoundForward } from "react-icons/io";

function MainButton({ buttonText }) {
  return (
    <>
      <button className="bg-white text-black border border-black rounded-lg pl-4 pr-4 pb-1 pt-1 hover:font-medium group hover:bg-actionColor">
        {buttonText}
        <IoIosArrowRoundForward
          className="inline transition-transform duration-200 ease-in-out group-hover:translate-x-1"
          size={30}
        />
      </button>
    </>
  );
}

export default MainButton;
