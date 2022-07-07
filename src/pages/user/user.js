import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Outlet,
  useLocation,
  useMatch,
  useParams,
  useSearchParams,
} from "react-router-dom";

export default function user() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="123" >user detail</NavLink>
        </li>
        <li>
          <NavLink to="new">new a user</NavLink>
        </li>
      </ul>
      <div className="functions">
        <Outlet />
      </div>
    </div>
  );
}

export const UserDetail = (props) => {
  const location = useLocation();
  const match = useMatch('id');
  const params = useParams();
  const searchParams = useSearchParams();
  console.log('location', location);
  console.log('params', params);
  console.log('searchParams', searchParams);
  return <div>user detail page

    <p>
      useId : {params.id}
    </p>
  </div>;
};

export const CreateUser = (props) => {
  return <div>CreateUser page</div>;
};
