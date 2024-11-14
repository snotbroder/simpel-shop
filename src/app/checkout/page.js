import PaymentMethod from "@/components/PaymentMethod";

function checkout() {
  return (
    <section>
      <h1 className="text-5xl font-poppins font-black mb-5">CHECKOUT</h1>
      <section className="lg:grid lg:grid-cols-3 gap-6">
        <div className="col-span-1">
          <h3 className="text-2xl font-poppins ">Your cart</h3>
          <div className="mb-5  bg-gray rounded-md  p-10"></div>
        </div>
        <div className="col-start-2 col-end-4 bg-slate-200 rounded-md h-full p-10 px-20">
          <h3 className="font-poppins text-sm mb-3">Your contact information</h3>
          <form className="mb-5">
            <div className="flex flex-wrap justify-between mb-5">
              <label className="flex flex-col font-poppins" id="f-name">
                <strong>First name</strong>
                <input className="w-64 rounded-sm px-2" name="f-name" type="text"></input>
              </label>
              <label className="flex flex-col font-poppins" id="l-name">
                <strong>Last name</strong>
                <input className="w-64 rounded-sm px-2" name="l-name" type="text"></input>
              </label>
            </div>
            <label className="flex flex-col font-poppins" id="l-name">
              <strong>Email</strong>
              <input className="w-64 rounded-sm px-2" name="email" type="text"></input>
            </label>
          </form>
          <PaymentMethod></PaymentMethod>
        </div>
      </section>
    </section>
  );
}

export default checkout;
