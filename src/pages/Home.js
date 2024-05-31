import React from "react";
import { Link } from "react-router-dom";
import Text from "../components/ui/Text";

export default function Home() {
  return (
    <>
      <div className="container h-100vh d-flex align-items-center justify-content-center">
        <div className="text-center">
          <Text
            variant="h4"
            title="Hello and welcome to React UI Components!"
          />
          <Text
            variant="para"
            title="This initiative aims to compile the most commonly used React UI
            components that are beneficial for nearly all web projects developed
            with React."
          />
          <Link className="App-link" to="/components">
            Explore Components
          </Link>
        </div>
      </div>
    </>
  );
}
