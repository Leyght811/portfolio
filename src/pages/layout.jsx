import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "../styles/style.css";

const Layout = () => {
  let location = useLocation();
  return (
    <div id="page">
      <nav id="navbar">
        <Link
          style={
            location.pathname === "/" ? { textDecoration: "underline" } : {}
          }
          className="navLink"
          to="/"
        >
          <i>Home</i>
        </Link>

        <Link
          style={
            location.pathname === "/about"
              ? { textDecoration: "underline" }
              : {}
          }
          className="navLink"
          to="/about"
        >
          <i>About</i>
        </Link>

        <Link
          style={
            location.pathname === "/contact"
              ? { textDecoration: "underline" }
              : {}
          }
          className="navLink"
          to="/contact"
        >
          <i>Contact</i>
        </Link>

        <Link
          style={
            location.pathname === "/work" ? { textDecoration: "underline" } : {}
          }
          className="navLink"
          to="/work"
        >
          <i>Work</i>
        </Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
