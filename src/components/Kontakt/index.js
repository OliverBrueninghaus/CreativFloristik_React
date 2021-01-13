import React from "react";
import {
  KontaktContainer,
  KontaktHeading,
  KontaktCard,
  KontaktImg,
  KontaktWrapper,
  KontaktName,
} from "./KontaktElements";
import SimpleMap from "./map";


const Kontakt = ({ heading, data }) => {
  return (
    <KontaktContainer>
      <KontaktHeading>{heading}</KontaktHeading>
      <KontaktWrapper>
        {
          (data.map((kontakt, index) => {
            return (
              <KontaktCard key={index}>
                <KontaktImg src={kontakt.img} alt={kontakt.alt} />
                <KontaktName>{kontakt.name}</KontaktName>
              </KontaktCard>
            );
          }))
        }
        <SimpleMap/>
      </KontaktWrapper>
    </KontaktContainer>
  );
};

export default Kontakt;
