import styled from "styled-components";

export const IntroContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-top: -1px;
  opacity: 1;
  background: #000;
`;

export const IntroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 3rem;
  @media (max-width: 450px) {
    padding: 100px 1rem;
  }
  @media (min-width: 43.8125rem) {
    padding: 200px 5.0625rem 200px;
  }
`;

export const IntroContentLeft = styled.div`
  padding-right: 2rem;
  img {
    width: 3.5rem;
    height: auto;
  }
  @media (min-width: 43.8125rem) {
    padding-right: 10.0625rem;
  }
`;

export const IntroContentRight = styled.div``;

export const IntroContentText = styled.h2`
  font: 400 1.5rem/1.1 Roobert;
  color: #fff;
  max-width: 40.625rem;
  @media (max-width: 425px) {
    font-size: 1rem;
  }
  @media (min-width: 43.8125rem) {
    font-size: 1.5rem;
  }
  @media (min-width: 64.0625rem) {
    font-size: 2rem;
  }
`;
