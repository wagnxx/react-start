import React from 'react'

import { BrowserRouter as Router, Routes, Route, Link,  } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Nav
