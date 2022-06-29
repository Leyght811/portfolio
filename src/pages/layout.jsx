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
          Home
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
          About
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
          Contact
        </Link>

        <Link
          style={
            location.pathname === "/work" ? { textDecoration: "underline" } : {}
          }
          className="navLink"
          to="/work"
        >
          Work
        </Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
