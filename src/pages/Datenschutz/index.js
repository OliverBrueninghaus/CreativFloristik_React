import React from "react";
import { BrowserRouter } from "react-router-dom";

import DatenschutzHero from "../../components/DatenschutzHero";

function Datenschutz() {
  return (
    <BrowserRouter>
      <DatenschutzHero/>
    </BrowserRouter>
  );
}

export default Datenschutz;
