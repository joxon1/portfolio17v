import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  ABOUT_ROUTE,
  CONTACT,
  HOME_ROUTE,
  WORKS,
  SKILLS,
} from "../utils/const";

const NavBar = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-around  align-items-center navbar_back">
        <div className="logo">
          <Link to={HOME_ROUTE}>
            <img src={logo} alt="Road for Junior" />
          </Link>
        </div>
        <div className="d-flex flex-column justify-content-between align-items-center">
          <Link to={ABOUT_ROUTE} className="navbar-brand brand_link">
            About
          </Link>
          <Link to={SKILLS} className="navbar-brand brand_link">
            My Skills
          </Link>
          <Link to={WORKS} className="navbar-brand brand_link">
            Work
          </Link>
          <Link to={CONTACT} className="navbar-brand brand_link">
            Contact
          </Link>
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
