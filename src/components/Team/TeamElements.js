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
    padding: 1.1rem;
    margin: 13px;
    width: 400px;
    border: 2px solid #ebebeb;
`;

export const TeamImg = styled.img`
    height: 483.84px;
    min-width: 362.88px;
    max-width: 100%;
    display: flex;
`;

export const TeamHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const TeamName = styled.h2`
  font-weight: 500;
  margin-top: 10px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
`;