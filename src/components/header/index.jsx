import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <h1 onClick={handleTitleClick}>TURBO.AZ</h1>
    </header>
  );
}

export default Header;
