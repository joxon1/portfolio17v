import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import MySkills from "./pages/MySkills";
import Work from "./pages/Work";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <About />
      <MySkills />
      <Work />
    </BrowserRouter>
  );
};

export default App;
