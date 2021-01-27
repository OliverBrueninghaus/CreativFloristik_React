import styled from "styled-components";
import ImgBg from "../../images/bild3.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #BE2664;
  letter-spacing: 3px;

  @media screen and (max-width: 393px) {
    font-size: clamp(1.5rem, 10vw, 5rem);
  }
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;

  @media screen and (max-width: 393px) {
    font-size: clamp(1rem, 2.5vw, 3rem);
  }
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  text-decoration:none;
  background: #BE2664;
  color: #fff;
  transition: 0.2s ease-out;
  a:hover {
    background-color:rgba(190,38,100, 0.8);
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
    text-decoration:none;
  }
  a:visited{
    text-decoration:none;
    color: #fff;
  }
  a:link{
    text-decoration:none;
    color: #fff;
  }
  a:active{
    text-decoration:none;
    color: #fff;
  }
`;
