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
  flex-direction: column;
  padding: 100px 3.125rem;
  @media (min-width: 43.8125rem) {
    flex-direction: row;
    padding: 200px 5.0625rem 31.25rem;
  }
`;

export const IntroContentLeft = styled.div`
  margin-bottom: 1.875rem;
  span {
    font: 400 0.75rem/1 GT America Mono Regular;
    color: #fff;
    opacity: 0.4;
  }
  @media (min-width: 43.8125rem) {
    margin-bottom: 0;
    padding-right: 10.0625rem;
  }
`;

export const IntroContentRight = styled.div``;

export const IntroContentTop = styled.h2`
  font: 400 2rem/1.1 Roobert;
  color: #fff;
  max-width: 40.625rem;
  margin-bottom: 5.3125rem;
  @media (min-width: 43.8125rem) {
    font-size: 3rem;
  }
  @media (min-width: 64.0625rem) {
    font-size: 4rem;
  }
`;

export const IntroContentBottom = styled.div`
  font: 400 2.125rem/1.1 Roobert;
  color: #fff;
  max-width: 40.625rem;
  opacity: 0.4;
  margin-bottom: 7.5rem;
  @media (min-width: 64.0625rem) {
    font-size: 4rem;
  }
  @media (min-width: 43.8125rem) {
    font-size: 3rem;
    margin-bottom: 5.3125rem;
  }
`;
