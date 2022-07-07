import React, {useState} from "react";

const Toggle = () => {
  const [value, toggle] = useToggle(false);
  return (
    <div>
      <h2>Toggle component</h2>
      <p>value: {value.toString()}</p>
      <p>
        <button onClick={() => toggle()}>toggle</button>
      </p>
      <p>
        <button onClick={() => toggle(true)}>Make true</button>
      </p>
      <p>
        <button onClick={() => toggle(false)}>Make false</button>
      </p>
    </div>
  );
};

export default Toggle;

export const useToggle = (value) => {
  const [state, setState] = useState(value);

  const toggle = (val) => {
    // if (typeof val === 'boolean') {
    //   setState(val);
    //   return;
    // }
    // setState(!state)
    setState(function (curVal) {
      return typeof val === "boolean" ? val : !curVal;
    });
  };

  return [state, toggle];
};
