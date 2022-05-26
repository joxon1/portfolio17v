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
            <div className="d-flex justify-content-evenly align-items-end navbar_tag">
              <Link className="navbar-brand navbar_icons">
                <i class="bi bi-youtube"></i>
              </Link>
              <Link className="navbar-brand">
                <i class="bi bi-telegram"></i>
              </Link>
              <Link className="navbar-brand">
                <i class="bi bi-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
