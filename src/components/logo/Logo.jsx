import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo-container">
      <Link to="/" >
        <img className="logo" src={logo} width="80" alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
