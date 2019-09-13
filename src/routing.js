import React from "react";
import { Switch, Route } from "react-router";
import * as routes from "./constants/routes";
import { Home } from "./pages/home";
import { Start } from "./pages/start";
import { Game } from "./pages/game";
import { Finish } from "./pages/finish";

export const Routing = () => (
  <Switch>
    <Route exact path={routes.home} component={Home} />
    <Route path={routes.start} component={Start} />
    <Route path={routes.game} component={Game} />
    <Route path={routes.finish} component={Finish} />
  </Switch>
);
