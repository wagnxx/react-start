import React, { useId } from "react";
// import { useEffect } from 'react/umd/react.development';
import { useRef, useEffect } from "react";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import Page from '../components/page'
import { useAppContext } from "../context/appContext";

const ForowrdComp = forwardRef((props,ref) => {
    const sunRef = useRef()
    useImperativeHandle(ref, () => ({
      // ...ref.current,
      sunRef: sunRef
    }))

  return <div>
    sun comp 
    <input type="text" ref={sunRef}/>
  </div>
})

const UserRefComp = () => {
  const id1 = useId();
  const id = useId();
  const ref = useRef(id);
  const ParentInputRef = useRef(id);

  const Appcontext = useAppContext();
  
  
  console.log("id", id);
  useEffect(() => {
    console.log("Appcontext", Appcontext);
    console.log("ref.current", ref.current);
  });

  const changeTheme = () => {
    const n = Math.random() * 1000;
    Appcontext.changeAppTheme(n);
  }

  const focusHandle = (e) => {
    ParentInputRef.current.focus();
  };
  const sunFocusHandle = (e) => {
    ref.current.sunRef.current.focus();
  };
  return (
    <Page title={`Ref id: ${id}`}>
      <p>
        <input type="text" ref={ParentInputRef} />
      </p>
      <ForowrdComp ref={ref}/>
      <p>
        <button onClick={changeTheme}>changeAppTheme</button>
        <button onClick={focusHandle}>focus</button>
        <button onClick={sunFocusHandle}>sun focus</button>
      </p>
    </Page>
  );
};

export default UserRefComp;

// source code
// function mountedRef(current) {
//   var hook = getCurHook();
//   var ref = {
//     current,
//   };
//   hook.memoized = ref;
//   return hook.memoized;
// }

// function updateRef(current) {
//   var hook = getCurHook();
//   return hook.memoized;
// }
