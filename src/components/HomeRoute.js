import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MySkills from "../pages/MySkills";
import Work from "../pages/Work";

const HomeRoute = () => {
  return (
    <>
      <About />
      <MySkills />
      <Work />
      <Contact />
    </>
  );
};

export default HomeRoute;
