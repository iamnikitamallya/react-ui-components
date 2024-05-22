import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container h-100vh d-flex align-items-center justify-content-center">
        <div>
          <h2>Hi! Welcome to React UI Components</h2>
          <Link className="App-link" to="/">
            Begin
          </Link>
        </div>
      </div>
    </>
  );
}
