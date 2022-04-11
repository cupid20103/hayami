import styled from "styled-components";

export const OptionsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  opacity: 1;
  overflow: hidden;
  -webkit-clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
  margin-top: -10%;
  background: #000;
  @media (min-width: 43.8125rem) {
    -webkit-clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
    margin-top: -20%;
  }
`;

export const OptionsContent = styled.div`
  width: 100%;
  height: 100vh;
  @media (min-width: 43.8125rem) {
    min-height: 200vh;
  }
`;

export const OptionsBack = styled.div`
  position: absolute;
  top: -10%;
  height: 120%;
  width: 100%;
  bottom: -10%;
  picture,
  video {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, [start] 1fr);
  grid-gap: 1.25rem;
  align-content: center;
  justify-content: center;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media (min-width: 43.8125rem) {
    grid-template-columns: repeat(12, [start] 1fr);
  }
`;

export const OptionsPart = styled.div`
  grid-column: start/span 4;
  text-align: center;
  padding-top: 75px;
  @media (min-width: 43.8125rem) {
    grid-column: 7 / span 5;
    text-align: left;
  }
`;

export const OptionsTitle = styled.h2`
  margin-bottom: 2.5rem;
  font: 400 2.875rem / 1 Roobert;
  text-decoration: underline;
  text-transform: uppercase;
  & > :not(:last-child) {
    opacity: 0.4;
  }
  @media (min-width: 43.8125rem) {
    font-size: 3rem;
  }
  @media (min-width: 64.0625rem) {
    font-size: 4.5rem;
  }
`;
