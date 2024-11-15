import { BsBag } from "react-icons/bs";
import Link from "next/link";
function Header() {
  return (
    <header className="bg-primary p-4 xs:px-4 lg:px-20   font-poppins text-primary mb-5">
      <nav className="flex justify-between items-center">
        <ul className="flex gap-9 text-secondary">
          <li className="relative group">
            <Link href="/">Home</Link>
            <span className="absolute left-0 right-0 -bottom-2 mx-auto h-1 w-0 bg-accent  group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href="/products">Products</Link>
            <span className="absolute left-0 right-0 -bottom-2 mx-auto h-1 w-0 bg-accent group-hover:w-full"></span>
          </li>
        </ul>
        <Link href={`/checkout`} className="relative group cursor-pointer font-noto text-secondary text-2xl font-semibold	">
          <BsBag />
          <span className="absolute left-0 right-0 -bottom-3 mx-auto h-1 w-0 bg-accent group-hover:w-full"></span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
