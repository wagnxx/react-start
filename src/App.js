import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import React from "react";
import "./app.css";

import AppContextProvider from "./context/appContext";

import ReactStartDemo from "./pages/reactStart";
import UseStateDemo from "./pages/setState";
import UseReducerDemo from "./pages/useReducer";
import UseMemoDemo from "./pages/useMemo";
import ClassCompDemo from "./pages/classComp";
import UseCallbackDemo from "./pages/useCallback";
import RefDemo from "./pages/refComp";
import DiyToggleDemo from "./pages/diy/toggle"; // alias: 'src' ; ./page/xxx => @/page/xxx
import UserPage from "./pages/user/user";
import { UserDetail } from "./pages/user/user";
import { CreateUser } from "./pages/user/user";

const routes = [
  { path: "/", pathname: "startReact", component: ReactStartDemo },
  { path: "/setState", pathname: "setState", component: UseStateDemo },
  { path: "/reducer", pathname: "startReact", component: UseReducerDemo },
  { path: "/usememo", pathname: "startReact", component: UseMemoDemo },
  {
    path: "/ClassCompDemo",
    pathname: "ClassCompDemo",
    component: ClassCompDemo,
  },
  {
    path: "/UseCallbackDemo",
    pathname: "UseCallbackDemo",
    component: UseCallbackDemo,
  },
  {
    path: "/DiyToggleDemo",
    pathname: "DiyToggleDemo",
    component: DiyToggleDemo,
  },
  { path: "/RefDemo", pathname: "RefDemo", component: RefDemo },
  {
    path: "/user",
    pathname: "UserPage",
    component: UserPage,
    childrenRoutes: [
      { path: ":id", pathname: "RefDemo", component: UserDetail },
      { path: "new", pathname: "RefDemo", component: CreateUser },
    ],
  },
];

function App() {
  return (
    <AppContextProvider className="App">
      <Router>
        <nav>
          <ul className="nav">
            {routes.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink to={item.path}>{item.pathname}</NavLink>
              </li>
            ))}
            {/* 
            <li className="nav__item">
              <NavLink to="/setState">setState</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/reducer">reducer</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/usememo">usememo</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/ClassCompDemo">ClassCompDemo</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/UseCallbackDemo">UseCallbackDemo</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/DiyToggleDemo">DiyToggleDemo</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/RefDemo">RefDemo</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/user">user</NavLink>
            </li> */}
          </ul>
        </nav>
        <div className="App-content">
          <Routes>
            {/* <Route path="/" element={<ReactStartDemo />} />
            <Route path="/setState" element={<UseStateDemo />} />
            <Route path="/reducer" element={<UseReducerDemo />} />
            <Route path="/usememo" element={<UseMemoDemo />} />
            <Route path="/ClassCompDemo" element={<ClassCompDemo />} />
            <Route path="/UseCallbackDemo" element={<UseCallbackDemo />} />
            <Route path="/DiyToggleDemo" element={<DiyToggleDemo />} />
            <Route path="/RefDemo" element={<RefDemo />} />
            <Route path="/user" element={<UserPage />}>
              <Route path=":id" element={<UserDetail />} />
              <Route path="new" element={<CreateUser />} />
            </Route> */}
            {routes.map((Item, index) => (
              <Route path={Item.path} element={<Item.component />} key={index}>
                {
                  Item.childrenRoutes && Item.childrenRoutes.length ? Item.childrenRoutes.map((Child,cidx) => (
                    <Route path={Child.path} element={<Child.component />} key={cidx}/>
                  ))
                  : ''
                } 
              </Route>
            ))}
          </Routes>
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
