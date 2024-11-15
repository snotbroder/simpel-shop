"use client";
import { useState } from "react";
import MainButton from "./MainButton";
import Link from "next/link";

export default function PaymentMethod({ total }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <h3 className="font-poppins text-xs mb-3 text-primary">Please choose method of payment</h3>
      <div className="flex gap-4 justify-between flex-wrap lg:flex-nowrap mb-5">
        <Panel title="Credit card" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
          <form className="py-7">
            <div className="flex flex-wrap gap-3 mb-5">
              <label className="flex flex-col font-poppins text-primary" id="cardnumber">
                Card number
                <input className="w-full rounded-sm px-2 bg-bg font-noto" name="cardnumber" type="text"></input>
              </label>

              <label className="flex flex-col font-poppins text-primary" id="cvv">
                CVV
                <input className="w-32 rounded-sm px-2 bg-bg font-noto" name="cvv" type="text"></input>
              </label>
            </div>
            <div className="flex gap-3 mb-5">
              <label className="flex flex-col font-poppins text-primary" id="month">
                MM
                <select className="rounded-sm px-2 bg-bg font-noto" name="month" type="month">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </label>
              <p>/</p>
              <label className="flex flex-col font-poppins text-primary" id="year">
                YY
                <select className="rounded-sm px-2 bg-bg font-noto" name="year" type="year">
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
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
            <label className="flex flex-col font-poppins text-primary" id="phonenumber">
              Phone number
              <input className="w-full rounded-sm px-2 bg-bg font-noto" name="phonenumber" type="text"></input>
            </label>
            <label className="flex font-poppins pt-4" id="remember">
              <input className="mr-2" name="remember" type="checkbox"></input>
              <p>Remember my phone number</p>
            </label>
          </form>
        </Panel>
      </div>
      <label className="flex font-poppins" id="remember">
        <input className="mr-2" name="remember" type="checkbox"></input>
        <p>
          I accept the{" "}
          <Link className="underline" target="_blank" href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/">
            terms and conditions
          </Link>
        </p>
      </label>

      <span className="grid place-self-end pt-10">
        <MainButton buttonText={`Purchase $${total} USD`}></MainButton>
      </span>
    </section>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="w-full ">
      <div className={` py-5 rounded-md grid place-items-center  ${isActive ? "border-2 border-bg bg-darkgray" : "bg-secondary"} `} onClick={onShow}>
        {isActive ? <h3 className="font-semibold font-poppins text-bg">{title}</h3> : <h3 className="font-semibold font-poppins text-primary">{title}</h3>}
      </div>
      {isActive ? <div className="flex span-full">{children}</div> : <button onClick={onShow}></button>}
    </section>
  );
}
