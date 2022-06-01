import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-around  align-items-center navbar_back">
        <div className="logo">
          <img src={logo} alt="Road for Junior" />
        </div>
        <div className="d-flex flex-column justify-content-between align-items-center">
          <Link className="navbar-brand brand_link">About</Link>
          <Link className="navbar-brand brand_link">My Skills</Link>
          <Link className="navbar-brand brand_link">Work</Link>
          <Link className="navbar-brand brand_link">Contact</Link>
        </div>
        <div className="d-flex flex-column">
          <Link class="bi bi-instagram navbar_icons"></Link>
          <Link class="bi bi-telegram navbar_icons"></Link>
          <Link class="bi bi-youtube  navbar_icons "></Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
