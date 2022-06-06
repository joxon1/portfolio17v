import React from "react";
import Spinner from "react-spinkit";
import logo from "../assets/logo.png";
import "../styles/Loader.css";
const Loader = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center loader_container text-white">
      <Spinner
        name="cube-grid"
        style={{ width: 100, height: 100 }}
      />
      <div className="loader_logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Loader;
