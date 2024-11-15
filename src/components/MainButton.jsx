import Link from "next/link";

function MainButton({ buttonText, icon: Icon }) {
  return (
    <>
      <Link href={`/products`} className="bg-accent text-primary transition-all  md:text-xl text-lg  w-auto rounded-lg px-5 py-2 lg:px-10 lg:py-3 text-center hover:font-medium group hover:bg-primary hover:text-bg hover:transition-all">
        {buttonText}
        {Icon && <Icon className="inline transition-transform duration-200 ease-in-out group-hover:translate-x-1" size={30} />}
      </Link>
    </>
  );
}

export default MainButton;
