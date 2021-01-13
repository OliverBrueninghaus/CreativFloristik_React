import styled from 'styled-components'

export const TeamContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #212121;
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const TeamCard = styled.div`
    padding: 2rem 2rem 2rem 2rem;
    margin: 13px;
    line-height: 1.7;
    width: 400px;
    border: 2px solid #ebebeb;
`;

export const TeamImg = styled.img`
    height: 403.2px;
    min-width: 302.4px;
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

export const TeamHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const TeamName = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
`;