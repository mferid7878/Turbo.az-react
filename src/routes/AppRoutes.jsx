import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CarDetails from "../pages/CarDetails";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../layout/MainLayout";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetails />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRoutes;
