import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "../../components/Hero";
import Sortiment from "../../components/Sortiment";
import Team from "../../components/Team";
import Kontakt from "../../components/Kontakt";
import Footer from "../../components/Footer";

import { GlobalStyle } from "../../globalStyles";
import { sortimentData } from "../../components/Sortiment/data";
import { teamData } from "../../components/Team/data";
import { kontaktData } from "../../components/Kontakt/data";

function Home() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Sortiment heading="Unser Sortiment" data={sortimentData} />
      <Team heading="Unser Team" data={teamData} />
      <Kontakt heading="Kontakt" data={kontaktData} />
      <Footer />
    </Router>
  );
}

export default Home;

