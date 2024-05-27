import React from "react";
import card from "../assets/img/card.jpg"

export default function CardTwoV1() {
  return (
    <>
      <div className="card p-2">
        <div className="row imgbox align-items-center">
          <div className="col-md-6">
            <img src={card} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
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
