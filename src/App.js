import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeRoute from "./components/HomeRoute";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MySkills from "./pages/MySkills";
import Work from "./pages/Work";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/" component={HomeRoute} />
              <Route path="/about" component={About} />
              <Route path="/skills" component={MySkills} />
              <Route path="/works" component={Work} />
              <Route path="/contact" component={Contact} />
              <Redirect to={HomeRoute} />
            </Switch>
          </BrowserRouter>
        </>
      )}
    </>
  );
};

export default App;
