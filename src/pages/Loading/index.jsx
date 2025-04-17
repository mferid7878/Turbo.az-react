import React from "react";
import "./Loading.css";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <h2>Loading...</h2>
    </div>
  );
}

export default LoadingScreen;
