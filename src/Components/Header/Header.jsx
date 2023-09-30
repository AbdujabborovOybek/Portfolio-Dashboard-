import React, { memo } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export const Header = memo(({ children }) => {
  return (
    <header className="header">
      <Link to="/">Abdujabborov Oybek</Link>

      <nav>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/message">Message</NavLink>
      </nav>
    </header>
  );
});
