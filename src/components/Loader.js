import React from "react";
import Spinner from "react-spinkit";
import logo from "../assets/logo.png";
import "../styles/Loader.css";
const Loader = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center loader_container text-white">
      <Spinner name="circle" color="red" style={{ width: 150, height: 150 }} />
      <img className="loader_logo" src={logo} alt="Road for Junior" />
    </div>
  );
};

export default Loader;
