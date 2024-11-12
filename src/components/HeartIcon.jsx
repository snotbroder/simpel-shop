import { FaHeart } from "react-icons/fa";

function HeartIcon() {
  return (
    <FaHeart
      className="cursor-pointer text-gray absolute hover:text-red-400 transition-colors duration-300 flex self-end right-2 top-2"
      size={25}
    />
  );
}

export default HeartIcon;
