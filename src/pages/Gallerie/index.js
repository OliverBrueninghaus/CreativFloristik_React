import React from "react";
import { BrowserRouter } from "react-router-dom";

import GallerieHero from "../../components/Gallerie/GallerieHero";
import GallerieContent from "../../components/Gallerie/GallerieContent";
import Footer from "../../components/Footer";

function Gallerie() {
  return (
    <BrowserRouter>
      <GallerieHero/>
      <GallerieContent/>
      <Footer/>
    </BrowserRouter>
  );
}

export default Gallerie;
