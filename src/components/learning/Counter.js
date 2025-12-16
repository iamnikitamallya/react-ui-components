import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="text-center pt-5 pb-5">
        <h2>Counter Component</h2>
        <div className="d-flex justify-content-center gap-2">
          <button
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
            disabled={count === 0}
            className={`${count === 0 ? "" : "dark"}`}
          >
            -
          </button>
          <h4>{count}</h4>
          <button onClick={() => setCount(count + 1)} className="dark">
            +
          </button>
        </div>
      </div>
    </>
  );
}
