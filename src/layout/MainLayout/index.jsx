import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Outlet } from "react-router-dom";
import "./layout.css";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
