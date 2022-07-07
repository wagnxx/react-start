import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom'

const PrivateRoutes = () => {
  let auth = {'token' : true};
  
  return (
    auth.token ? <Outlet/> : <Navigate to="/login"/>
  )
}