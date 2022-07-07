一. 先决条件

- 基本熟悉HTML 和 CSS。
- JavaScript和编程的基本知识。
- 对 DOM的基本了解。
- 熟悉ES6 语法和特性。
- Node.js 和 npm全局安装。


二. 目标
> 了解基本的 React 概念和相关术语，例如 JSX、component、fiber、状态和生命周期， hooks。
 构建一个非常简单的 React 应用程序来演示上述概念。
1. 什么是react
- React 是一个 JavaScript 库 - 最受欢迎的库之一
- React 是 Facebook 创建的一个开源项目。
- React 用于在前端构建用户界面（UI）。
- React 是 MVC 应用程序的视图层（Model View Controller）

React 最重要的方面之一是您可以创建组件，就像自定义的、可重用的 HTML 元素一样，以快速有效地构建用户界面。React 还使用state和props简化了数据的存储和处理方式。

三. 准备工作
1. 非常用方法用法，在html文件直接引入 react cdn（react，react-dom，babel）
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>Hello React!</title>

    <script src="https://unpkg.com/react@^16/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16.13.0/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      // TODO React code 
      // function Note() {
      //   return <div className="deps">
      //       eact - React 顶级 API
      //       React DOM - 添加特定于 DOM 的方法
      //       Babel - 一个 JavaScript 编译器，让我们在旧浏览器中使用 ES6+
      //   </div>
      // }
    </script>
  </body>
</html>

```
2. 使用 create-react-app 创建 react-app
- node
- npm
- npx create-react-app react-app // npm i npx ;
- cd react-app && npm start
- open localhost:3000

```js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class AppClass extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

const AppFunc = () =>  {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  )

}

App = AppClass || AppFunc
ReactDOM.render(<App />, document.getElementById('root'))

```

四. 主题
1. JSX：JavaScript + XML 

```jsx
const heading = <h1 className="site-heading">Hello, React</h1>

const heading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!')



// 变量
const name = 'Tania'
const heading = <h1>Hello, {name}</h1>

```
- JSX 比在原生 JavaScript 中创建和添加许多元素更容易编写和理解，这也是人们如此喜爱 React 的原因之一。

2. 组件
- 类组件
- 函数组件
- 内部组件（suspense，lazy...）

3. state
4. props
5. lifecycle
```js
class App extends Component {
  static propTypes = {
    name: PropTypes.string,
  };
  constructor(props) {
    super(props);
    console.log("=======================Start============================");
  }

  // componentWillMount() {
  UNSAFE_componentWillMount() {
    // strict ===> componentDidMount
    console.log("App comp componentWillMount");
  }

  componentDidMount() {
    console.log("App comp componentDidMount");
  }

  // componentWillReceiveProps(nextProps) {
  UNSAFE_componentWillReceiveProps(nextProps) {
    // strict ===> componentDidUpdate
    console.log("App comp componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "App comp shouldComponentUpdate nextProps, nextState",
      nextProps,
      nextState
    );
    return this.props.name !== nextProps.name;
  }

  // componentWillUpdate(nextProps, nextState) {
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    // strict ===> componentDidUpdate
    console.log(
      "App comp componentWillUpdate nextProps, nextState",
      nextProps,
      nextState
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "App comp componentDidUpdate prevProps, prevState",
      prevProps,
      prevState
    );
  }

  componentWillUnmount() {
    console.log("App comp componentWillUnmount prevProps, prevState");
    console.log("=======================End============================");
  }

  render() {
    console.log("App comp rendering");
    return (
      <div style={{ border: "1px solid #ddd", padding: "10px" }}>
        username in lifecycle: <em>{this.props.name}</em>
      </div>
    );
  }
}
```

6. hooks
- useState -demo (对应class-state)
  +  usestate 是简版的useReducer
```jsx
// [state, basicStateReducer] basicStateReducer即为 dispatch;
  const [count, setCount] = useState('0');
```
- useReducer - demo
- useEffect 

```jsx
  // const [state, dispatch] = useReducer(reducer, initialState, init)

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

```
- memo  -demo (对不想重复渲染的组件 优化选择)
```jsx
const MemoComp = memo((props) => {
  console.log("memo子组件 update ! props is:", props);
  return (
    <div>
      memo子组件 value： <em style={{ color: "#f00" }}>{props.data}</em>
    </div>
  );
},
() => true  // propsAreEqual ? update : keep
);
```
- useMemmo -demo  高开销的计算
```js
  const [value, setValue] = useState(0);
  console.log("父组件 update !");

  const doublevalue = useMemo(() => {
    return value * 2;
  }, [value == 3]) // 这里是依赖项目，不是表达式
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

```
- useCallback -demo
```js

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

```

- diy hook
```js
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


```

- ref Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。
```js

// 下面是几个适合使用 refs 的情况：

// 管理焦点，文本选择或媒体播放。
// 触发强制动画。
// 集成第三方 DOM 库。

const UserRefComp = () => {
  const ref = useRef('test');
 

  useEffect(() => {
    console.log('ref.current', ref.current);
  })

  const focusHandle = e => {
    ref.current.focus();
  }
  return (
    <div>
      <h1>Ref</h1>
      <p>
        <input type="text" ref={ref}/>
      </p>
      <p>
        <button onClick={focusHandle}>focus</button>
      </p>
    </div>
  )
}


```
- forward/useImperativeHandle
```js

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
  
  console.log("id", id);
  useEffect(() => {
    console.log("ref.current", ref.current);
  });

  const focusHandle = (e) => {
    ParentInputRef.current.focus();
  };
  const sunFocusHandle = (e) => {
    ref.current.sunRef.current.focus();
  };
  return (
    <div>
      <h1>Ref id: {id}</h1>
      <p>
        <input type="text" ref={ParentInputRef} />
      </p>
      <ForowrdComp ref={ref}/>
      <p>
        <button onClick={focusHandle}>focus</button>
        <button onClick={sunFocusHandle}>sun focus</button>
      </p>
    </div>
  );
};

export default UserRefComp;

```

- context
+ createContext
+ useContext 

- redux/reducer
```js

function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  const getState = () => state;
  const subscribe = (l) => listeners.push(l);

  const dispatch = action => {
    const newState = reducer(state, action);
    state = newState;
    listeners.forEach(l => l());
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}


function countReducer(state, action) {
  //todo
  const newState = state // 一些列的操作
  return newState;
}

const countStore = createStore(countReducer, {count: 1});

countStore.subscribe(() => {
  const curState = countStore.getState();
  console.log(curState);
})

countStore.dispatch({type: 'increment'})
// log:
// {count: 1}
// {count: 1}
// {count: 1}
// {count: 1}


// 完善reducer
```

```js
function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  const getState = () => state;
  const subscribe = (l) => listeners.push(l);

  const dispatch = action => {
    const newState = reducer(state, action);
    state = newState;
    listeners.forEach(l => l());
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}


function countReducer(state, action) {
  //todo
  switch (action.type) {
    case 'increment':
    return {
      ...state,
      count: state.count + 1
    };
    default:
    return state;
  }
  // const newState = state // 一些列的操作
  // return newState;
}

const countStore = createStore(countReducer, {count: 1});

countStore.subscribe(() => {
  const curState = countStore.getState();
  console.log(curState);
})

countStore.dispatch({type: 'increment'})

// log 正常了
// countStore.dispatch({type: 'increment'})
// VM499:41 {count: 2}
// undefined
// countStore.dispatch({type: 'increment'})
// VM499:41 {count: 3}
// undefined
// countStore.dispatch({type: 'increment'})
// VM499:41 {count: 4}
// undefined
// countStore.dispatch({type: 'increment'})
// VM499:41 {count: 5}
// undefined
// countStore.dispatch({type: 'increment'})

```