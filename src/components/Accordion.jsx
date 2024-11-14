"use client";
import { useState } from "react";

export default function Accordion({ reviews, rating, dimensions, returnInfo, shippingInfo, sku }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className=" flex flex-col gap-4 bg-gray rounded-md text-bg p-10">
      <Panel
        title={
          <>
            Reviews{" "}
            <span className="font-thin">
              {rating} / 5 (<span className="underline">{reviews.length}</span>)
            </span>
          </>
        }
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        {/* <span className="text-gray">
          Product rating: {rating} / 5 ({reviews.length})
        </span> */}
        {reviews && reviews.length && rating > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="font-noto mb-2">
              <div className="mb-4">
                <span className="font-regular mb-1">
                  {review.reviewerName} ⏐ {review.rating} / 5
                </span>{" "}
                <p className="text-secondary italic">"{review.comment}"</p>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </Panel>
      <Panel title="Shipping & Return Policies" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        {returnInfo && shippingInfo ? (
          <div className="font-noto mb-2">
            <p>
              <strong>Returns:</strong> {returnInfo}
            </p>
            <p>
              <strong>Shipping:</strong> {shippingInfo}
            </p>
          </div>
        ) : (
          <p>No return information available.</p>
        )}
      </Panel>
      <Panel title="Dimensions" isActive={activeIndex === 2} onShow={() => setActiveIndex(2)}>
        {dimensions ? (
          <div className="font-noto mb-2">
            <p>
              <strong>Width:</strong> {dimensions.width}cm
            </p>
            <p>
              <strong>Height:</strong> {dimensions.height}cm
            </p>
            <p>
              <strong>Depth:</strong> {dimensions.depth}cm
            </p>
          </div>
        ) : (
          <p>No dimensions available.</p>
        )}
      </Panel>
      <Panel title="Other" isActive={activeIndex === 3} onShow={() => setActiveIndex(3)}>
        <p>Sku number: {sku}</p>
        <p>Other tags</p>
      </Panel>
    </section>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section onClick={onShow} className="panel p-2 transition-opacity">
      <h3 className="font-semibold font-poppins my-2">{title}</h3>
      <hr className="my-2" />
      {isActive ? (
        <p className="font-noto">{children}</p>
      ) : (
        <button className="text-secondary" onClick={onShow}>
          Read more
        </button>
      )}
    </section>
  );
}
