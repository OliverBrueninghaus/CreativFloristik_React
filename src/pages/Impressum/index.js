import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../components/Footer";
import ImpressumContent from "../../components/Impressum/ImpressumContent";
import ImpressumHero from "../../components/Impressum/ImpressumHero";

function Impressum() {
  return (
    <BrowserRouter>
      <ImpressumHero/>
      <ImpressumContent/>
      <Footer/>
    </BrowserRouter>
  );
}

export default Impressum;
