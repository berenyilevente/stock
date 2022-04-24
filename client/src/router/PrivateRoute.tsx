import React, { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  component: ReactElement;
  isAuthenticated: boolean;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component,
  isAuthenticated,
}) => {
  return isAuthenticated ? component : <Navigate to="/" />;
};

export default PrivateRoute;
