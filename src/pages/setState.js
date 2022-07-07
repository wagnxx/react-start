import React, { useState, useReducer } from "react";


const Page = () => {
  const [count, setCount] = useState('0');
  // usestate 是简版的useReducer ==> [state, basicStateReducer] basicStateReducer即为 dispatch
  // const [state, setstate] = useState(initialState)

  const inputChangeHandle = (e) => {
    const curVal = e.target.value;
    // setCount(function(pre) {
    //   console.log('pre',pre)
    //   console.log('curVal',curVal)
    //   return curVal;
    // })
    setCount(curVal);
  };

  return (
    <div>
      <p style={{ color: "#f00" }}>count: {count}</p>
      <p>
        {/* <input type="number" onChange={inputChangeHandle}></input> */}
        <input type="number" onChange={inputChangeHandle}></input>
      </p>

    </div>
  );
};

export default Page;
