import React from "react";
import { BrowserRouter } from "react-router-dom";

import DatenschutzHero from "../../components/Datenschutz/DatenschutzHero";
import DatenschutzContent from "../../components/Datenschutz/DatenschutzContent";
import Footer from "../../components/Footer";

function Datenschutz() {
  return (
    <BrowserRouter>
      <DatenschutzHero/>
      <DatenschutzContent/>
      <Footer/>
    </BrowserRouter>
  );
}

export default Datenschutz;
