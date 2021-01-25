import React from "react";
import {
  TeamContainer,
  TeamHeading,
  TeamWrapper,
  TeamCard,
  TeamImg,
  TeamName,
} from "./TeamElements";

const Team = ({ heading, data }) => {
  return (
    <TeamContainer>
      <TeamHeading>{heading}</TeamHeading>
      <TeamWrapper>
        {data.map((team, index) => {
          return (
            <TeamCard key={index}>
              <TeamImg src={team.img} alt={team.alt} />
              <TeamName>{team.name}</TeamName>
            </TeamCard>
          );
        })}
      </TeamWrapper>
    </TeamContainer>
  );
};

export default Team;
