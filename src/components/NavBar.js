import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <div className="navbar_back d-flex justify-content-center align-items-center ">
        <div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className=" d-flex justify-content-center align-items-center   flex-column ">
            <div className="brand_border d-flex align-items-center justify-content-center">
              <Link className="navbar-brand">About</Link>
            </div>
            <div className=" brand_border d-flex align-items-center justify-content-center">
              <Link className="navbar-brand">My Skills</Link>
            </div>
            <div className=" brand_border d-flex justify-content-center align-items-center ">
              <Link className="navbar-brand">Work</Link>
            </div>
            <div className="brand_border d-flex align-items-center   justify-content-center">
              <Link className="navbar-brand">Contact</Link>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-evenly align-items-end navbar_tag navbar-brand navbar_icons">
              <Link class="bi bi-youtube  navbar-brand "></Link>
              <Link class="bi bi-telegram navbar-brand"></Link>
              <Link class="bi bi-instagram navbar-brand"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
