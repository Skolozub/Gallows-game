import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { createGlobalStyle } from "styled-components";
import { Routing } from "./routing";

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
      <Routing />
    </Router>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
