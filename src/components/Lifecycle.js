import React, { Component } from "react";
import PropTypes from "prop-types";

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

export default App;
