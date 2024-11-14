import { IoIosArrowRoundForward } from "react-icons/io";

function MainButton({ buttonText }) {
  return (
    <>
      <button className="bg-accent text-primary w-auto rounded-lg pl-6 pr-4 pb-1 pt-1 text-center hover:font-medium group hover:bg-actionColor">
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
