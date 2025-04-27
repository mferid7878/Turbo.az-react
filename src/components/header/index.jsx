import React from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import "./header.css";
import { Fragment } from "react";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-background">
      <div className="header-container">
        <h1 onClick={() => navigate("/")}>TURBO.AZ</h1>
        <button className="new-button" onClick={() => navigate("/new")}>
          <Plus size={20} className="plus-icon" />
          Yeni elan
        </button>
      </div>
    </div>
  );
}

export default Header;
