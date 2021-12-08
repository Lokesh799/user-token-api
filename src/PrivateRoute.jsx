import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component}) => {
  const token = useSelector((state) => state.loginUser.token);
  return (
    <Route
    render={() => (token ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;