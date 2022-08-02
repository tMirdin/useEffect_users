import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <a href="/home">Home</a>
      <a href="/about">About</a> */}

      {/* <Link to="/home">Home</Link>
      <Link to="/about">About</Link> */}

      <NavLink to="/home">Home</NavLink>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/user">User</NavLink>
    </div>
  );
};

export default Navbar;
