import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CarDetails from "../pages/CarDetails";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../layout/MainLayout";
import NewAnnouncement from "../pages/NewAnnouncement";
import LikedCars from "../pages/Basket";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/new" element={<NewAnnouncement />} />
        <Route path="/liked" element={<LikedCars />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRoutes;
