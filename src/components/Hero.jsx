import MainButton from "@/components/MainButton";

function Hero() {
  return (
    <section className="relative bg-cover -mt-5 -mx-4 py-32 bg-center flex h-auto md:-mt-5 md:-mx-20 lg:py-52 md:py-40 ">
      <div className="absolute inset-0 bg-[url('/heroimg.png')] bg-cover bg-center opacity-50"></div>
      <div className="ml-20  gap-5 flex flex-col justify-center place-items-start relative z-10">
        <h1 className="font-poppins text-primary text-4xl lg:text-7xl md:text-6xl uppercase font-bold">
          Shoply Goods
        </h1>
        <MainButton buttonText="Products"></MainButton>
      </div>
    </section>
  );
}
export default Hero;
