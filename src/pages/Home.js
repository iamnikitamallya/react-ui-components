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
            content="Hello and welcome to React UI Components!"
          />
          <Text
            variant="para"
            content ="This initiative aims to compile the most commonly used React UI components, beneficial for nearly all web projects developed with React. I have utilized Bootstrap CSS classes in some places and have written custom CSS as well."
          />
          <Link className="App-link" to="/components">
            Explore Components
          </Link>
        </div>
      </div>
    </>
  );
}
