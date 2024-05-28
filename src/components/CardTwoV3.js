import React from "react";
import card from "../assets/img/card.jpg";
import Button from "./Button";

export default function CardTwoV3() {
  return (
    <>
      <div className="card p-2">
        <div className="row imgrounded">
          <div className="col-md-6">
            <img src={card} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h3>Lorem Ipsum</h3>
            <p className="pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}