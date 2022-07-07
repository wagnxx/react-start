import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsReactElement = React.createElement('div', {style: {color: 'red', fontSize: '42px'}},   ' (from js)');

const ReactComp = () => jsReactElement;

root.render(
  <>
    {/* {jsReactElement} */}
    {/* <ReactComp/> */}
    <App/>
  </>
);

// createReactElement(type,config, children)