import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="container">
        <div className="ptb-2">
          Developed with Love by{" "}
          <Link to="https://nikitamallya.info" target="_blank">
            Nikita
          </Link>
        </div>
      </div>
    </div>
  );
}
