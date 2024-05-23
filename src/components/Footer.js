import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="ptb-2">
            Developed with ❤️ by{" "}
            <Link to="https://nikitamallya.info" target="_blank">
              Nikita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
