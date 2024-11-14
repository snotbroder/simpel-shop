import MainButton from "@/components/MainButton";

function Hero() {
  return (
    <section className="relative bg-cover bg-center flex h-screen -mx-20 -mt-5">
      <div className="absolute inset-0 bg-[url('/heroimg.png')] bg-cover bg-center opacity-50"></div>
      <div className="ml-20  gap-5 flex flex-col justify-center place-items-start relative z-10">
        <h1 className="font-poppins text-primary text-7xl uppercase font-bold">Shoply Goods</h1>
        <MainButton buttonText="Products"></MainButton>
      </div>
    </section>
  );
}
export default Hero;
