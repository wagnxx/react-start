import React, { useMemo, memo, useState } from "react";


const MemoComp = memo((props) => {
  console.log("memo子组件 update ! props is:", props);
  return (
    <div>
      memo子组件 value： <em style={{ color: "#f00" }}>{props.data}</em>
    </div>
  );
},
(preProps,nextProps) => true  // propsAreEqual ? update : keep
);


const SunComp = (props)  => {
  console.log("普通子组件 update !");
  return (
    <div>
      普通子组件 value： <em style={{ color: "#f00" }}>{props.data}</em>
    </div>
  );
}

const Page = () => {
  const [value, setValue] = useState(0);
  console.log("父组件 update !");

  const doublevalue = useMemo(() => {
    return value * 2;
  }, [value]) // 这里是依赖项目，不是表达式
  /**
   * 打印结果
   * value :0 , doublevalue：0
   * value :1 , doublevalue：0
   * value :2 , doublevalue：0
   * value :3 , doublevalue：6
   * value :4 , doublevalue：8
   * value :4+ , doublevalue：8
   * 
   */

  // const doublevalue = value * 2;

  return (
    <div>
      <h2>use memo</h2>
      <p>
      doublevalue value: <em>{doublevalue}</em>
      </p>
      <p>
        父组件 value: <em>{value}</em>
      </p>
      <p>
        <button onClick={() => setValue(value + 1)}>increment</button>
      </p>
      {/* <SunComp2 /> */}
      <InputComp value={value} onChange={setValue} />

      <MemoComp data="data-from-root" value={value}/>
      {/* <SunComp data="data-from-root" /> */}
    </div>
  );
};

export default Page;



function InputComp (props) {

  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])
  
  return <input type="number" defaultValue={props.value} onChange={e => props.onChange(e.target.value)}/>
}

// const Counter=(props=>{
//   console.log('Counter组件又渲染了');
//   return <h1>{props.data}</h1>
// });
// const MemoCounter=memo(props=>{
//   console.log('Counter组件又渲染了');
//   return <h1>{props.data}</h1>
// });

// export default ()=>{
//   const [count,setCount] = useState(0);
//   const data='hello world';

//   return(
//       <>
//           <span>{count}</span>
//           <input type="button"
//               value='修改count'
//               onClick={()=>setCount(count+1)}
//           />
//           <MemoCounter data={data}/>
//       </>
//   );
// }

// usememo source code
// memoizedState
// var hook = {};

// function moutedMemo (nextCreate,deps) {
//   var nextValue = nextCreate();
//   hook.memoizedState = [nextValue, deps];
//   return nextValue;
// }

// function updateMemo(nextCreate,deps) {
//   var preState = hook.memoizedState;

//   if (preState) {
//     var preDeps = preState ? preState[1] : null;
//     if (preDeps === deps) {
//       return preState[0];
//     }
//   }

//   var nextValue = nextCreate();
//   hook.memoizedState = [nextValue, deps];
//   return nextValue;
// }


// const hook = {}
// // useMemo
// function useMemo(fn, deps) {
//   // mounted
//   const value = fn();
//   hook.memoizedState = [value, deps];
//   return hook.memoizedState[0]
//   // update
//   const oldDeps = hook.memoizedState[1]
//   if (areEqual(deps,oldDeps)) {
//     return hook.memoizedState[0]
//   }
//   const value = fn();
//   hook.memoizedState = [value, deps];
//   return hook.memoizedState[0]
// }
// useMemo(fn,[value]);

// function mouted(fn,deps) {
//     // mounted
//     const value = fn();
//     hook.memoizedState = [value, deps];
//     return hook.memoizedState[0]
// }

// function update(fn, deps) {
//   const hook = getCurHook();
//   const oldDeps = hook.memoizedState[1]
//   if (areEqual(deps,oldDeps)) {
//     return hook.memoizedState[0]
//   }
//   const value = fn();
//   hook.memoizedState = [value, deps];
//   return hook.memoizedState[0]
// }