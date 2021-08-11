import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Datenschutz from "./pages/Datenschutz/index";
import Impressum from "./pages/Impressum/index";
import Home from "./pages/Home/index";
import Gallerie from "./pages/Gallerie/index";

import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <BrowserRouter>
     <GlobalStyle/>
      <Switch>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route path="/gallerie">
          <Gallerie/>
        </Route>
        <Route path="/datenschutz">
          <Datenschutz/>
        </Route>
        <Route path="/impressum">
          <Impressum/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
