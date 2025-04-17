import React from "react";
import { useNavigate } from "react-router-dom";
import "./errorPage.css";

function ErrorPage({ message }) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="error-page">
      <div className="error-content">
        <h1>{message ? "Xəta baş verdi" : "404"}</h1>
        <p>{message ? "Bu səhifə tapılmadı." : "Şəbəkəyə qoşulun"}</p>
        {
          <button onClick={handleGoHome} className="error-button">
            Baş səhifəyə qayıdın
          </button>
        }
      </div>
    </div>
  );
}

export default ErrorPage;
