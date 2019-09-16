import React from "react";
import { Switch, Route } from "react-router";
import * as routes from "./constants/routes";
import { Home } from "./pages/home";
import { Start } from "./pages/start";
import { Game } from "./pages/game";
import { WinFinish } from "./pages/win-finish";
import { GameOver } from "./pages/game-over";

export const Routing = () => (
  <Switch>
    <Route exact path={routes.home} component={Home} />
    <Route path={routes.start} component={Start} />
    <Route path={routes.game} component={Game} />
    <Route path={routes.win} component={WinFinish} />
    <Route path={routes.gameOver} component={GameOver} />
  </Switch>
);
