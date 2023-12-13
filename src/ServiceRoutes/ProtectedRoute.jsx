import React from "react";
import { Navigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const ProtectedRoute = ({ children }) => {
  if (localStorage.getItem("token")) {
    return <>{children}</>;
  } else {
    return (
      <>
        {alert("please Login to view home page")}
        <Navigate to="/login" />
      </>
    );
  }
};

export default ProtectedRoute;
