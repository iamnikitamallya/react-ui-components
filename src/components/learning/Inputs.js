import { useState } from "react";

export default function Inputs() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      {!submitted ? (
        <>
          <p>Enter your name:</p>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => setSubmitted(true)}>Next</button>
          {!text ? (
            ""
          ) : (
            <>
              <button onClick={() => setText("")}>Reset</button>
            </>
          )}
        </>
      ) : (
        <>
          <p>Hello! {text}</p>
          <button onClick={() => setSubmitted(false)}>Back</button>
        </>
      )}
    </>
  );
}
