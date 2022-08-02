import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Components/AboutPage/AboutPage";
import HomePage from "./Components/HomePage/HomePage";
import Layout from "./Components/Layout/Layout";
import MainPage from "./Components/MainPage/MainPage";
import NotFound from "./Components/NotFound/NotFound";
import UserDetails from "./Components/UserPage/UserDetails";
import UserPage from "./Components/UserPage/UserPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="user/:id" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
