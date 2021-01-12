import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Sortiment from "./components/Sortiment";
import { sortimentData } from "./components/Sortiment/data";
import { GlobalStyle } from "./globalStyles";


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Sortiment heading='Unser Sortiment' data={sortimentData}/>
    </Router>
  );
}

export default App;
