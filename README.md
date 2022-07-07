# React hooks

### note
一. react预备前知识
1. css
```
itcss layer:

// settings@import "globals";@import "branding";
// tools@import "mixins";
// generic@import "normalize";
// elements@import "fonts";@import "form";
// objects@import "grid";@import "wrappers";
// components@import "header";@import "sidebar";@import "carousel";@import "card";
// trumps@import "overrides";
```
2. js

React - the React top level API
React DOM - adds DOM-specific methods
Babel - a JavaScript compiler that lets us use ES6+ in old browsers

二. react基础知识

1. 语法
- jsx
With JSX, we can write what looks like HTML, and also we can create and use our own XML-like tags. Here's what JSX looks like assigned to a variable.
```js
const el = <div>react el</div>
const heading = <h1 className="site-heading">Hello, React</h1>
const heading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!')


// JavaScript expressions can also be embedded inside JSX using curly braces, including variables, functions, and properties.
const name = 'Tania'
const heading = <h1>Hello, {name}</h1>

```

2 组件
  + 函数
```js
const SimpleComponent = () => {
  return <div>Example</div>
}
```
  + class
```js
import React, {Component} from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

export default App
```
  + 内部组件

3. 状态
- state
- props

```js
class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]

    return (
      <div className="container">
        <Table />
      </div>
    )
  }
}


return (
  <div className="container">
    <Table characterData={characters} />
  </div>
)

```

4. 事件

5. 条件处理

6. 循环渲染

7. 生命周期（见图）

8. 组件Api （setState，hooks）

9. ajax请求
























https://www.runoob.com/react/react-tutorial.html
https://react.docschina.org/





三. 作业

根据你们之前的后台作业，
使用 react + ant-design@4 实现一套包含了 增/删/改/查 功能的后台前端管理界面。

邮箱： wang.xx@vivebest.com