
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RoleContext } from "../Context/RolesContext";
import Error404 from "../pages/ErrorPage";

const PrivateRoute = ({ allowedRoles }) => {
  const { UserRole } = useContext(RoleContext);

  if (allowedRoles.includes(UserRole)) {
    return <Outlet />;
  } else {
    return <Error404 />;
  }
};
export default PrivateRoute;
