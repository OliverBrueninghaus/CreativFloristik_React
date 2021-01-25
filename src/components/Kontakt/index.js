import React from "react";
import {
  KontaktContainer,
  KontaktHeading,
  KontaktCard,
  KontaktWrapper,
  KontaktImg,
  KontaktUeberschrift,
  KontaktText,
  KontaktInhalt,
} from "./KontaktElements";

const Kontakt = ({ heading, data }) => {
  return (
    <KontaktContainer>
      <KontaktHeading>{heading}</KontaktHeading>
      <KontaktWrapper>
        <KontaktCard>
          <KontaktInhalt>
            <KontaktUeberschrift>
              <h1 id="ueberschrift">Besuchen Sie uns in Erzhausen</h1>
            </KontaktUeberschrift>
            <KontaktText>
              <p id="kontakt-info">
                <b>Adresse:</b> Bahnstraße 87, 64390 Erzhausen
                <br />
                <b>Telefon:</b> +49 6150-7237
                <br />
                <b>E-Mail:</b> blumen@creativ-floristik.net
                <br />
              </p>
              <p id="oeffnungszeiten">
                <b>Öffnungszeiten:</b>
                <br />
                <b>Montag – Freitag:</b> 8.30-12.30 <br />
                <b>Donnerstag - Freitag:</b> 14.30-18.30
                <br />
                <b>Samstag:</b> 8.30-13.00
                <br />
                <b>Sonntag:</b> Geschlossen
              </p>
            </KontaktText>
          </KontaktInhalt>
        </KontaktCard>
        <KontaktCard>
          {data.map((kontakt) => {
            return <KontaktImg src={kontakt.img} alt={kontakt.alt} />;
          })}
        </KontaktCard>
      </KontaktWrapper>
    </KontaktContainer>
  );
};

export default Kontakt;
