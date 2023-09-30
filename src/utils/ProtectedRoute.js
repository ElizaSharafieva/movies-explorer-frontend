import React from "react";
import { Navigate} from "react-router-dom";

export const ProtectedRoute = ({ element: Component, ...props }) => {
  return localStorage.getItem("userId") ? <Component {...props} /> : <Navigate to="/" />;
};

export const ProtectedRouteAuth = ({ element: Component, ...props }) => {
  return localStorage.getItem("userId") ? <Navigate to="/movies" replace/> :  <Component {...props} />
};



