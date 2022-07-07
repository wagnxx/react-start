import React, { useState, useReducer, useEffect } from "react";

export const TYPES = {
  INCREASEMENT: "INCREASEMENT",
  DECREASEMENT: "DECREASEMENT",
};

const Page = () => {
  const [value, setValue] = useState(1);

  const [count2, dispatch] = useReducer(setCoutReducer, 1, (a) => {
    return 1 * 100;
  });

  function setCoutReducer(state, action) {
    let value = action.payload ? action.payload : 1;
    value = Number(value);

    switch (action.type) {
      case TYPES.INCREASEMENT:
        return state + value;

      case TYPES.DECREASEMENT:
        return state - value;

      default:
        return state;
    }
  }

  useEffect(() => {
    setInterval(() => {
      dispatch({ type: TYPES.INCREASEMENT })
    }, 1000);
  }, [])

  return (
    <div>
      <p style={{ color: "#f00" }}>count2: {count2}</p>
      <br />
      <p>
        <input type="number" onChange={(e) => setValue(e.target.value)} />
      </p>
      <p className="btn-group">
        <button
          className="btn"
          onClick={() => dispatch({ type: TYPES.INCREASEMENT, payload: value })}
        >
          +
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: TYPES.DECREASEMENT, payload: value })}
        >
          -
        </button>
      </p>
    </div>
  );
};

export default Page;

// redux
// function createStore(reducer, state) {
//   let _state = state
//   let listeners = [];

//   const getState = () => _state;

//   const subscribe = (l) => listeners.push(l);

//   const dispatch = (action) => {
//     _state = reducer(_state, action);
//     listeners.forEach((l) => l());
//   };
//   dispatch({})
//   return {
//     getState,
//     dispatch,
//     subscribe,
//   };
// }

// const store = createStore(appReducer, { a: 1, b: 2 });

// function appReducer(state, action) {
//   switch (action.type) {
//     case "A":
//       return {
//         ...state,
//         a: state.a + 1,
//       };
//     case "B":
//       return {
//         ...state,
//         b: state.b + 1,
//       };
//     default:
//       return state;
//   }
// }

// store.subscribe(function() {
//   {
//     // console
//     var state = store.getState();
//     console.log('state 又变化了', state)
//   }
// })
// store.dispatch({type:'A'})