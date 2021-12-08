import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component }) => {
  const token = useSelector((state) => state.loginUser.token);
  return (
    <Route
      render={() => (token ? <Redirect to="/product" /> : <Component />)}
    />
  );
};

export default PublicRoute;