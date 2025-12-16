import React from "react";
import { Link } from "react-router-dom";
import Text from "../components/ui/Text";

export default function Learnings() {
  return (
    <>
      <div className="container h-100vh d-flex align-items-center justify-content-center">
        <div className="text-center">
          <Text variant="h4" content="Hello and welcome to React Learning!" />
          <Text
            variant="para"
            content="This is the place where I will be practing react learnings that I'm doing from 9/12/2025."
          />
          <Link className="App-link" to="/brainstorm">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
