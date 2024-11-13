import { FaHeart } from "react-icons/fa";

function HeartIcon() {
  return (
    <FaHeart
      className="cursor-pointer text-gray  hover:text-red-400 transition-colors duration-300 "
      size={25}
    />
  );
}

export default HeartIcon;
