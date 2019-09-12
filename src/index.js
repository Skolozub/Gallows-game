import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router";
import { Home } from "./pages/home";
import * as routes from "./constants/routes";
import { createGlobalStyle } from "styled-components";
import { Start } from "./pages/start";
import { Game } from "./pages/game";
import { Finish } from "./pages/finish";

export const history = createBrowserHistory();

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100%;
    height: 100%;
  }
  #root {
    display: flex;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Router history={history}>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.start} component={Start} />
        <Route path={routes.game} component={Game} />
        <Route path={routes.finish} component={Finish} />
      </Switch>
    </Router>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
