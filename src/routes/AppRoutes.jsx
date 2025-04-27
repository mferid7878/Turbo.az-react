import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CarDetails from "../pages/CarDetails";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../layout/MainLayout";
import NewAnnouncement from "../pages/NewAnnouncement";

function AppRoutes() {
  return (
    // <DataContext.Provider value={data}>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/new" element={<NewAnnouncement />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    // </DataContext.Provider>
  );
}

export default AppRoutes;
