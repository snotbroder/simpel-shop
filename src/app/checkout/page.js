"use client";
import PaymentMethod from "@/components/PaymentMethod";
import { FaTrashAlt } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

function checkout() {
  const searchParams = useSearchParams();
  const basketUrl = searchParams.get("basket") || "";
  const checkoutArray = basketUrl ? JSON.parse(decodeURIComponent(basketUrl)) : [];
  const totalPrice = checkoutArray.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <section>
      <h1 className="text-5xl font-poppins font-black mb-5 text-primary">CHECKOUT</h1>
      <section className="lg:grid lg:grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="mb-5 px-5 py-10  bg-white rounded-md ">
            <h3 className="text-xl font-poppins text-primary pb-3">Your basket</h3>
            {checkoutArray.length > 0 ? (
              checkoutArray.map((item, index) => (
                <div key={index}>
                  <div className="flex gap-4 items-center pb-2">
                    <Image src={item.thumbnail} width={60} height={60} alt={item.title} className="rounded-md" />
                    <div className="flex flex-1 flex-col">
                      <h1 className=" text-md  font-poppins text-primary ">{item.title}</h1>
                      <div className="flex items-center gap-2 text-primary font-noto text-sm">
                        <div>pcs: {item.quantity}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium font-noto text-primary">${item.price} USD</p>
                    </div>
                  </div>
                  {/* <button
                    onClick={() => {
                      checkoutArray((prevBasketArray) => prevBasketArray.filter((item) => item.id !== product.id));
                    }}
                    style={{ background: "none", border: "none", cursor: "pointer" }} // Optional styling to make it look like an icon button
                  >
                    <FaTrashAlt />
                  </button> */}
                </div>
              ))
            ) : (
              <p>No items in the basket.</p>
            )}
            <div>
              <hr className="text-gray"></hr>
              <div className="py-4 grid place-self-end gap-1">
                <p className="font-noto text-sm ml-auto text-gray">Shipping: $0 USD</p>
                <h3 className="font-poppins text-primary font-bold  ">Your total: ${totalPrice}</h3>
              </div>
            </div>
          </div>
        </div>
        <section className="col-start-2 col-end-4 bg-gray rounded-md h-full py-10 px-5 md:px-20 lg:px-30 xl:px-35">
          <h3 className="font-poppins text-xl mb-3 text-primary">Your contact information</h3>
          <form className="mb-10">
            <div className="flex flex-wrap gap-10 mb-5">
              <label className="flex flex-col font-poppins text-primary" id="f-name">
                First name
                <input className="w-64 rounded-sm px-2 bg-bg font-noto" name="f-name" type="text"></input>
              </label>
              <label className="flex flex-col font-poppins text-primary" id="l-name">
                Last name
                <input className="w-64 rounded-sm px-2 bg-bg font-noto" name="l-name" type="text"></input>
              </label>
            </div>
            <label className="flex flex-col font-poppins text-primary" id="email">
              Email
              <input className="w-64 rounded-sm px-2 bg-bg font-noto" name="email" type="text"></input>
            </label>
          </form>
          <PaymentMethod total={totalPrice}></PaymentMethod>
        </section>
      </section>
    </section>
  );
}

export default checkout;
