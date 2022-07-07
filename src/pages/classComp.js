import React, { Component } from 'react'

export default class classComp extends Component {
  state = {a: 1}
  clickHandle = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h2>class Component</h2>
        <p>
          count: {this.state.count}
        </p>
        <button onClick={this.clickHandle}>increment</button>
      </div>
    )
  }
}

// class => es5
// createClass(function classFunc() {
//   // check
//   defineProperty(this,'key', val);
//   this['key'] = val;
// })