import React, { memo } from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Layout = memo(() => {
  return (
    <main className="main">
      <Header />
      <Outlet />
    </main>
  );
});
