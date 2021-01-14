import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Datenschutz from "./pages/Datenschutz/index";
import Impressum from "./pages/Impressum/index";
import Home from "./pages/Home/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/datenschutz" component={Datenschutz}></Route>
        <Route path="/impressum" component={Impressum}></Route>
      </Switch>
    </Router>
  );
}

export default App;
