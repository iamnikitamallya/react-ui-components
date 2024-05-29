import React from "react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi2";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ptb-2">
                Developed with ❤️ by{" "}
                <Link to="https://nikitamallya.info" target="_blank">
                  Nikita
                </Link>
                {" | "}
                <Link to="/" style={{position: 'relative', top: '-2px'}}>
                  <HiHome />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
