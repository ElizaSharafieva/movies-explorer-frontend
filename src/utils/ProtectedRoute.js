import React from "react";
import { Navigate} from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props }) => {

  // return props.isLoggedIn ? <Component {...props} /> : <Navigate to="/signin" />;
  return localStorage.getItem("userId")? <Component {...props} /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
