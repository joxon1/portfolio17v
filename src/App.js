import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import MySkills from "./pages/MySkills";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <About />
      <MySkills />
    </BrowserRouter>
  );
};

export default App;
