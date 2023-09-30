import React, { memo } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export const Auth = memo(() => {
  const auth = localStorage.getItem("token");
  const location = useLocation();

  if (auth) return <Outlet />;
  return <Navigate to="/login" state={{ from: location }} />;
});
