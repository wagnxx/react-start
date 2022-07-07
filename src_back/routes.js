import React from 'react'

import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'


function routes() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="dashboard" element={<Dashboard />} />
  </Routes>
  )
}

export default routes
