import Image from "next/image";
async function singleProduct({ params }) {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let data = await response.json();
  return (
    <div>
      <Image src={data.thumbnail} width={250} height={250} alt={data.category} />
      <article>
        <h1 className="font-poppins">{data.title}</h1>
        <p className="font-noto">{data.description}</p>
      </article>
    </div>
  );
}

export default singleProduct;
