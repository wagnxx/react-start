import React, { Component, useState } from "react";
import LifecycleComponent from "../components/Lifecycle";


// function App() {
//   return (
//     <div className="app">
//         <h1 style={{color: 'red'}}>hello word!</h1>
//     </div>
//   )
// }

// translate js

const msg = "Hello, world ";

const jsxReactElement = <h1 style={{ color: "red" }}>{msg} (from jsx)!</h1>;
const jsReactElement = React.createElement(
  "div",
  { style: { color: "red", fontSize: "42px" } },
  msg + " (from js)"
);

// const App = () =>  jsReactElement;
const App = () => {
  const [display, setDisplay] = useState(false);
  const [usernmae, setUsernmae] = useState("");
  return (
    <>
      {jsxReactElement}

      <div className="form">
        <div className="form__item">
          <label className="form__label">User In Root： </label>
          <input onChange={(e) => setUsernmae(e.target.value)} />
        </div>

        <div className="form__item btn-group">
          <button className="btn btn-show" onClick={() => setDisplay(true)}>
            show
          </button>
          <button className="btn btn-hide" onClick={() => setDisplay(false)}>
            hide
          </button>
        </div>
      </div>

      {!display ? "" : <LifecycleComponent name={usernmae} />}
    </>
  );
};

export default App;
