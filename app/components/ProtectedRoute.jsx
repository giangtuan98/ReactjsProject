import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginPage from 'containers/LoginPage/Loadable';

const ProtectedRoute = ({ isAuthenticated, children, ...rest }) => (
  <Route
    {...rest}
    render={() => (isAuthenticated ? children : <LoginPage />)}
  />
);

export default ProtectedRoute;
