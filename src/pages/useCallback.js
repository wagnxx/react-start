import React, { useCallback, memo } from "react";
import { useState } from "react";

const SunMemo = memo(Sun, (prev,next) => prev.clickHandle === next.clickHandle)  // areEqual ? update : keep

const UseCallback = () => {
  const [value, setValue] = useState("--");
  // useCallback(
  //   () => {
  //     callback
  //   },
  //   [input],
  // )

  const onClick =useCallback(
    (e) => {
      console.log("clicked!!");
      setValue(e.target.value)
    }, []);

  return (
    <div>
      <h1>usecallback</h1>
      <p>value: {value}</p>
      <p>
        <button onClick={() => setValue(value + 1)}>change value</button>
      </p>
      <SunMemo clickHandle={onClick} />
    </div>
  );
};

export default UseCallback;



function Sun(props) {
  console.log("子组件更新 了");
  return (
    <div>
      Sun comp
      <input type="text" onChange={props.clickHandle} />
      {/* <button onClick={props.clickHandle}>调用父组件 onclick方法</button> */}
    </div>
  );
}
// useMemo useCallback
// useCallback(fn,deps) ==> useMemo(() => fn, deps)