import React from "react";
import Button from "./Button";
import { FaCodepen } from "react-icons/fa";

export default function CardFourV1() {
  return (
    <>
      <div className="card p-2">
        <div className="row imgrounded">
          <div className="col-md-12">
            <FaCodepen />
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
