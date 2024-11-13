"use client";
import { useState } from "react";

export default function PaymentMethod({}) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="mb-64">
      <h3 className="font-poppins text-sm mb-3">Please choose payment method</h3>
      <div className="flex gap-4 justify-between lg:flex-nowrap mb-5">
        <Panel title="Card" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
          <form className="">
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
          <form>
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
      <span className="grid font-bold place-self-end hover:text-red-500 bg-white p-3 rounded-md">Pay NUMBER</span>
    </section>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="w-1/2">
      <div className={`px-24 py-5 rounded-md grid place-items-center  ${isActive ? "border-2 border-black bg-slate-400" : "bg-slate-300"} `} onClick={onShow}>
        {isActive ? <h3 className="font-semibold font-poppins text-gray">{title}</h3> : <h3 className="font-semibold font-poppins text-black">{title}</h3>}
      </div>
      {isActive ? <div>{children}</div> : <button onClick={onShow}></button>}
    </section>
  );
}
