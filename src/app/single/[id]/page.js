import Accordion from "@/components/Accordion";
import Image from "next/image";
async function singleProduct({ params }) {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let data = await response.json();
  return (
    <section>
      <div>Back ⏐ breadcumb / breadcrumb / breadcrumb</div>
      <section className="grid md:grid-cols-2 lg:grid-cols-3">
        <article className="mx-auto">
          <Image src={data.thumbnail} width={350} height={350} alt={data.category} />
          <div className="flex justify-between ">
            <Image className="border-solid border-2 border-gray" src={data.thumbnail} width={100} height={100} alt={data.category} />
            <Image className="border-solid border-2 border-gray" src={data.thumbnail} width={100} height={100} alt={data.category} />
            <Image className="border-solid border-2 border-gray" src={data.thumbnail} width={100} height={100} alt={data.category} />
          </div>
        </article>
        <article>
          <div className="flex flex-col gap-10 mb-10">
            <div>
              <h4 className="font-poppins capitalize text-xl text-gray mb-2">{data.category}</h4>
              <h1 className="font-poppins text-5xl font-black">{data.title}</h1>
            </div>
            <p className="font-noto">{data.description}</p>
          </div>
          <div className="flex justify-between my-5">
            <span>{data.price},-</span>
            <h6 className={data.availabilityStatus === "In Stock" ? "text-green-500" : data.availabilityStatus === "Low Stock" ? "text-orange-500" : data.availabilityStatus === "Out of Stock" ? "text-red-500" : "text-black"}>{data.availabilityStatus}</h6>
          </div>
          <span className="grid font-bold place-self-end hover:text-red-500">ADD TO CART</span>
        </article>
        <article>
          <Accordion reviews={data.reviews} rating={data.rating} dimensions={data.dimensions} returnInfo={data.warrantyInformation} shippingInfo={data.shippingInformation}></Accordion>
        </article>
      </section>
    </section>
  );
}

export default singleProduct;
