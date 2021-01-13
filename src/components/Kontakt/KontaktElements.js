import styled from 'styled-components';

export const KontaktContainer = styled.div`
  min-height: 100vh;
  background: #fff;
  color: #212121;
  width: 100%;
  background-color: red;
`
export const KontaktHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const KontaktWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  background-color: #999999;
`;

export const KontaktCard = styled.div`
    padding: 2rem 2rem 2rem 2rem;
    margin: 13px;
    line-height: 1.7;
    width: 400px;
    border: 2px solid #ebebeb;
`;

export const KontaktImg = styled.img`
    height: 403.2px;
    min-width: 302.4px;
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

export const KontaktName = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
`;