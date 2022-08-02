import React from "react";
import AboutPage from "./Components/AboutPage/AboutPage";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {/* <HomePage />
      <AboutPage /> */}
      {/* <Navbar /> */}
      <MainRoutes />
    </div>
  );
};

export default App;
