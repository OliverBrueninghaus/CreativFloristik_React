import styled from "styled-components";

export const SortimentContainer = styled.div`
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #212121;
  background-color: #fff;
`;

export const SortimentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const SortimentCard = styled.div`
  padding: 2rem 2rem 2rem 2rem;
  margin: 13px;
  line-height: 1.7;
  width: 400px;
  border: 2px solid #ebebeb;
  background-color: #fff;
`;

export const SortimentImg = styled.img`
  height: 403.2px;
  min-width: 302.4px;
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const SortimentHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const SortimentTitle = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const SortimentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
`;

export const SortimentDesc = styled.p`
  margin-bottom: 1rem;
`;
