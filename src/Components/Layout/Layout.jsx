import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  let styleObj = {
    width: "100vw",
    height: "50px",
    backgroundColor: "black",
    position: "absolute",
    bottom: "0",
    color: "white",
  };
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer style={styleObj}>@makers 2022</footer>
    </div>
  );
};

export default Layout;
