import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

// import Nav from './components/Nav';
// import Home from './pages/Home'
// import About from './pages/About'
// import Dashboard from './pages/Dashboard'

import RoootRoute from './routes'

export default function App() {
  return (
    <Router>
      <div className="page">
        <Nav />

        <hr />
        <div className="route-view page__content">
          <RoootRoute />
        </div>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// // in your app.

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }
