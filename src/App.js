import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MySkills from "./pages/MySkills";
import Work from "./pages/Work";
import { blogRoutes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Loader />
      {/* <AppRouter/> */}
    </BrowserRouter>
  );
};

export default App;
