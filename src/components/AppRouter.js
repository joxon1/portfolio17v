import React from "react";
import { Switch, Route } from "react-router-dom";
import { blogRoutes } from "../routes";

const AppRouter = () => {
  return (
    <Switch>
      {blogRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} />
      ))}
    </Switch>
  );
};

export default AppRouter;
