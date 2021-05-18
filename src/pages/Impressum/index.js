import React from "react";
import { BrowserRouter } from "react-router-dom";

import ImpressumHero from "../../components/ImpressumHero";

function Impressum() {
  return (
    <BrowserRouter>
      <ImpressumHero/>
    </BrowserRouter>
  );
}

export default Impressum;
