import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container h-100vh d-flex align-items-center justify-content-center">
        <div>
          <h2>Hello and welcome to React UI Components!</h2>
          <p>
            This initiative aims to compile the most commonly used React UI
            components that are beneficial for nearly all web projects developed
            with React.
          </p>
          <Link className="App-link" to="/">
            Begin
          </Link>
        </div>
      </div>
    </>
  );
}
