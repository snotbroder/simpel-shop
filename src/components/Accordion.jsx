"use client";
import { useState } from "react";

export default function Accordion({ reviews, rating, dimensions, returnInfo, shippingInfo }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="bg-slate-200 flex flex-col gap-4">
      <Panel title="Reviews" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        <span>
          rating: {rating} ({reviews.length})
        </span>
        {reviews && reviews.length && rating > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="font-noto mb-2">
              <div>
                <span className="font-thin">
                  {review.reviewerName} ⏐ {review.rating} / 5
                </span>{" "}
                <p>{review.comment}</p>
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit.
      </Panel>
    </section>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section onClick={onShow} className="panel p-5 transition-opacity">
      <h3 className="font-semibold font-poppins">{title}</h3>
      <hr />
      {isActive ? (
        <p className="font-noto">{children}</p>
      ) : (
        <button className="text-gray" onClick={onShow}>
          Read more
        </button>
      )}
    </section>
  );
}
