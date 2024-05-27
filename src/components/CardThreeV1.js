import React from "react";
import card from "../assets/img/card.jpg";

export default function CardThreeV1() {
  return (
    <>
      <div className="card p-2">
        <div className="row imgrounded text-center">
          <div className="col-md-12">
            <img src={card} alt="" className="w-50 mb-3" />
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
