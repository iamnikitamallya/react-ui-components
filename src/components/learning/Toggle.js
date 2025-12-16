import { use } from "react";
import { useState } from "react";
import { LuSunMedium } from "react-icons/lu";

export default function Toggle() {
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState("black");
  const [count, setCount] = useState("");
  const [visible, setVisible] = useState(false);
  const [like, SetLike] = useState(null);
  const isInitate = like === null;
  const [size, setSize] = useState(16);
  const [select, setSelect] = useState("");
  const [counter, setCounter] = useState(0);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [submit, setSubmit] = useState(false);
  return (
    <>
      <div>
        <h6>TASK 1 - Toggle Text (Show / Hide)</h6>
        {!toggle ? (
          <>
            <h1 style={{ filter: "grayscale(1)" }}>💡</h1>
          </>
        ) : (
          <>
            <h1>💡</h1>
          </>
        )}
        <button onClick={() => setToggle(true)} disabled={toggle}>
          Show
        </button>
        <button onClick={() => setToggle(false)} disabled={!toggle}>
          Hide
        </button>
      </div>
      <div className="pt-5">
        <h6>TASK 2 - Change Button Color on Click </h6>
        <button
          onClick={() => setColor(color === "black" ? "red" : "black")}
          style={{ backgroundColor: color, color: "#fff" }}
        >
          Change My Color
        </button>
      </div>
      <div className="pt-5">
        <h6>TASK 3 - Character Count</h6>
        <p>Type something</p>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        {count ? (
          <>
            <p>
              You have typed <b>{count.length}</b> characters
            </p>
          </>
        ) : (
          <>
            <p>No characters typed yet!</p>
          </>
        )}
      </div>
      <div className="pt-5">
        <h6>TASK 4 - Password Show / Hide</h6>
        <p>Enter Password</p>
        <input type={visible ? "text" : "password"} />
        {visible ? (
          <>
            <span
              onClick={() => setVisible(false)}
              style={{ cursor: "pointer" }}
            >
              🔒
            </span>
          </>
        ) : (
          <>
            <span
              onClick={() => setVisible(true)}
              style={{ cursor: "pointer" }}
            >
              🔓
            </span>
          </>
        )}
      </div>
      <div className="pt-5">
        <h6>TASK 5 - Simple Like Button</h6>
        {isInitate ? (
          <>
            <button onClick={() => SetLike(true)}>Like Us</button>
          </>
        ) : (
          <>
            {like ? (
              <>
                <h1>❤️</h1>
              </>
            ) : (
              <>
                <h1>👎</h1>
              </>
            )}
            <button onClick={() => SetLike(true)} disabled={like}>
              Like
            </button>
            <button onClick={() => SetLike(false)} disabled={!like}>
              Dislike
            </button>
            <button onClick={() => SetLike(null)}>⟳</button>
          </>
        )}

        {/* ❤️👎 */}
      </div>
      <div className="pt-5">
        <h6>TASK 6 - Increase Font Size</h6>
        <span style={{ fontSize: `${size}px` }}>Hi I'm a paragraph</span>{" "}
        <br></br>
        <button onClick={() => setSize(size + 2)} disabled={size === 20}>
          {size} A+{" "}
        </button>
        <button
          onClick={() => {
            size === 10 ? <></> : <>{setSize(size - 2)}</>;
          }}
          disabled={size === 10}
        >
          {size} A-{" "}
        </button>
        <button onClick={() => setSize(16)}>⟳</button>
      </div>
      <div className="pt-5">
        <h6>TASK 7 - Dropdown Selection</h6>
        <label>Select City</label>
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="">--select--</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Indore">Indore</option>
          <option value="Chennai">Chennai</option>
          <option value="Kochin">Kochin</option>
          <option value="Trivandrum">Trivandrum</option>
        </select>
        {select ? <p>You selected {select}</p> : <>No city selected</>}
      </div>
      <div className="pt-5">
        <h6>TASK 8 - Counter With Limit</h6>
        <p>Counter {counter}</p>
        <button
          onClick={() => setCounter(counter + 1)}
          disabled={counter === 20}
        >
          Increment
        </button>

        {counter === 20 && (
          <>
            <button onClick={() => setCounter(0)}>Reset</button>
            <p>Limit reached!!</p>
          </>
        )}
      </div>
      <div className="pt-5">
        <h6>TASK 9 - Two Inputs + Greeting</h6>
        <label>First Name</label>
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <label>Last Name</label>
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        {fname && lname && (
          <>
            <button onClick={() => setSubmit(true)}>Submit</button>
            <button
              onClick={() => {
                setFname("");
                setLname("");
                setSubmit(false);
              }}
            >
              Reset
            </button>
          </>
        )}
        {submit && <p>Hello {`${fname} ${" "} ${lname}`}</p>}
      </div>
      <div className="pt-5">
        <h6>TASK 10 - Dark Mode Toggle</h6>
      </div>
    </>
  );
}
