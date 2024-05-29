import React from "react";
import Button from "./ui/Button";
import { FaCodepen } from "react-icons/fa";

export default function CardFiveV2() {
  return (
    <>
      <div className="card p-2">
        <div className="row imgbox">
          <div className="col-md-3">
            <FaCodepen />
          </div>
          <div className="col-md-9">
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
