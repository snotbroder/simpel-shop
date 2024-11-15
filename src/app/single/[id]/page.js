import Accordion from "@/components/Accordion";
import MainButton from "@/components/MainButton";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

async function singleProduct({ params }) {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let data = await response.json();

  return (
    <section>
      <div className="text-primary">
        <button>Back</button> ⏐ breadcumb / breadcrumb / breadcrumb
      </div>
      <section className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-7">
        <article className="mx-auto sm:mb-3">
          <Image src={data.images[0]} width={350} height={350} alt={data.category} />
          <div className="flex justify-between ">
            <Image className="" src={data.thumbnail} width={100} height={100} alt={data.category} />
            <Image className="" src={data.thumbnail} width={100} height={100} alt={data.category} />
            <Image className="" src={data.thumbnail} width={100} height={100} alt={data.category} />
          </div>
        </article>
        <article>
          <div className="flex flex-col gap-10 mb-10">
            <div>
              <h4 className="font-poppins capitalize text-xl  text-primary mb-2">
                <span className="text-gray">{data.category}</span> ⏐ {data.brand}
              </h4>
              <h1 className="font-poppins text-5xl font-black text-primary">{data.title}</h1>
            </div>
            <p className="font-noto">{data.description}</p>
          </div>
          <div className="flex justify-between my-5 ">
            <span className="font-noto text-3xl font-black text-primary">${data.price} USD</span>
            <div className="bg-secondary rounded-sm px-2 py-1 font-noto">
              <h6 className={data.availabilityStatus === "In Stock" ? "text-green-500" : data.availabilityStatus === "Low Stock" ? "text-orange-500" : data.availabilityStatus === "Out of Stock" ? "text-red-500" : "text-black"}>{data.availabilityStatus}</h6>
            </div>{" "}
          </div>

          <div className="flex justify-end place-items-center mb-3">
            <Link className="mr-3 underline text-primary transition-all hover:text-accent hover:transition-all" href={`/checkout`}>
              Go to checkout
            </Link>
            <MainButton buttonText="Add to bag"></MainButton>
          </div>
        </article>
        <article>
          <Accordion reviews={data.reviews} rating={data.rating} dimensions={data.dimensions} returnInfo={data.warrantyInformation} shippingInfo={data.shippingInformation} sku={data.sku} tags={data.tags}></Accordion>
        </article>
      </section>
    </section>
  );
}

export default singleProduct;
