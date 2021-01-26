import styled from "styled-components";

export const KontaktContainer = styled.div`
  background: #fff;
  color: #212121;
  padding: 5rem calc((100vw - 1300px) / 2);
  background-color: #fff;
`;
export const KontaktHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const KontaktWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const KontaktCard = styled.div`
  width: 600px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const KontaktInhalt = styled.div`
  margin: 0;
  top: 50%;
`;

export const KontaktImg = styled.img`
  min-width: auto;
  max-width: 100%;
  height: 600px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.8rem;
  text-align: center;

  @media screen and (max-width: 1199px){
    display: none;
  }
`;

export const KontaktUeberschrift = styled.h1`
  margin-top: 50px;
  font-size: 1rem;
  text-align: center;
  #ueberschrift {
    margin-top: 40px;
  }
`;

export const KontaktText = styled.p`
  margin-top: 50px;
  text-align: center;
  margin-bottom: 50px;
  #kontakt-info {
    margin-top: 40px;
  }
  #oeffnungszeiten {
    margin-top: 40px;
  }
`;
