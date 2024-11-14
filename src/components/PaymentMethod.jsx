"use client";
import { useState } from "react";
import MainButton from "./MainButton";

export default function PaymentMethod({}) {
  const [activeIndex, setActiveIndex] = useState(0);
  let total = 20;
  return (
    <section className="">
      <h3 className="font-poppins text-sm mb-3 text-primary">Please choose payment method</h3>
      <div className="flex gap-4 justify-between lg:flex-nowrap mb-5">
        <Panel title="Card" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
          <form className="py-7">
            <div className="flex flex-wrap justify-between gap-3 mb-5">
              <label className="flex flex-col font-poppins" id="card-number">
                <strong>Card number</strong>
                <input className="w-full rounded-sm px-2" name="card-number" type="number"></input>
              </label>
              <label className="flex flex-col font-poppins" id="cvv">
                <strong>CVV</strong>
                <input className="w-32 rounded-sm px-2" name="cvv" type="number"></input>
              </label>
            </div>
            <div className="flex gap-3 mb-5">
              <label className="flex flex-col font-poppins" id="month">
                <strong>MM</strong>
                <select className="rounded-sm px-2" name="email" type="month">
                  <option>01</option>
                  <option>02</option>
                </select>
              </label>
              <p>/</p>
              <label className="flex flex-col font-poppins" id="year">
                <strong>YY</strong>
                <select className="rounded-sm px-2" name="email" type="year">
                  <option>24</option>
                  <option>25</option>
                </select>
              </label>
            </div>

            <label className="flex font-poppins" id="remember">
              <input className="mr-2" name="remember" type="checkbox"></input>
              <p>Remember my card</p>
            </label>
          </form>
        </Panel>
        <Panel title="Mobilepay" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
          <form className="py-7">
            <label className="flex flex-col font-poppins" id="phone-number">
              <strong>Phone number</strong>
              <input className="w-full rounded-sm px-2" name="phone-number" type="number"></input>
            </label>
            <label className="flex font-poppins" id="remember">
              <input className="mr-2" name="remember" type="checkbox"></input>
              <p>Remember my information</p>
            </label>
          </form>
        </Panel>
      </div>
      <label className="flex font-poppins" id="remember">
        <input className="mr-2" name="remember" type="checkbox"></input>
        <p>I accept the terms and conditions</p>
      </label>

      <span className="grid place-self-end">
        <MainButton buttonText={`Purchase $${total} USD`}></MainButton>
      </span>
    </section>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="w-1/2 ">
      <div className={`px-24 py-5 rounded-md grid place-items-center  ${isActive ? "border-2 border-bg bg-darkgray" : "bg-secondary"} `} onClick={onShow}>
        {isActive ? <h3 className="font-semibold font-poppins text-bg">{title}</h3> : <h3 className="font-semibold font-poppins text-primary">{title}</h3>}
      </div>
      {isActive ? <div className="flex span-full">{children}</div> : <button onClick={onShow}></button>}
    </section>
  );
}
