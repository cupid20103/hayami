import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  padding: 6.25rem 1.5625rem 5rem;
  background: #fff;
  @media (min-width: 43.8125rem) {
    padding: 6.875rem 4.375rem 5rem;
  }
`;

export const FooterDiscord = styled.div`
  position: relative;
  border-radius: 0.5625rem;
  width: 100%;
  height: 22.8125rem;
  border: 1px solid #e2e2e2;
`;

export const FooterCanvas = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.5625rem;
  overflow: hidden;
  canvas {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1207px;
    height: 363px;
    box-sizing: border-box;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    aspect-ratio: auto 2414 / 726;
    :focus-visible {
      outline: -webkit-focus-ring-color auto 1px;
    }
  }
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1.5625rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media (min-width: 43.8125rem) {
    justify-content: flex-start;
    padding-left: 7.8125rem;
    padding-right: 0;
    text-align: left;
  }
`;

export const FooterLeft = styled.div`
  p {
    font: 400 1.875rem/1 Roobert;
    font-feature-settings: "liga" off;
    color: #000;
    max-width: 24.0625rem;
    margin-bottom: 1.875rem;
  }
`;

export const FooterBotOne = styled.img`
  position: absolute;
  width: 13.625rem;
  height: 13.625rem;
  pointer-events: none;
  top: -30%;
  left: 27%;
  -webkit-animation: float 6s ease-in-out infinite;
  animation: float 6s ease-in-out infinite;
  @keyframes float {
    0% {
      transform: translateZ(0) rotate(0deg);
    }
    50% {
      transform: translate3d(0, -20px, 0) rotate(-5deg);
    }
    100% {
      transform: translateZ(0) rotate(0deg);
    }
  }
  @media (min-width: 43.8125rem) {
    top: -30%;
    left: 45%;
    width: 17rem;
    height: 17rem;
  }
  @media (min-width: 64.0625rem) {
    top: -30%;
    left: 45%;
    width: 20.75rem;
    height: 20.75rem;
  }
`;

export const FooterBotTwo = styled.img`
  position: absolute;
  width: 13.625rem;
  height: 13.625rem;
  pointer-events: none;
  bottom: -35%;
  left: 5%;
  -webkit-animation: float 6s ease-in-out infinite;
  animation: float 6s ease-in-out infinite;
  @keyframes float {
    0% {
      transform: translateZ(0) rotate(0deg);
    }
    50% {
      transform: translate3d(0, -20px, 0) rotate(-5deg);
    }
    100% {
      transform: translateZ(0) rotate(0deg);
    }
  }
  @media (min-width: 43.8125rem) {
    top: 50%;
    bottom: auto;
    left: 60%;
    width: 17rem;
    height: 17rem;
  }
  @media (min-width: 64.0625rem) {
    top: 50%;
    bottom: auto;
    left: 60%;
    width: 20.75rem;
    height: 20.75rem;
  }
`;

export const FooterNav = styled.div`
  display: grid;
  grid-template-columns: repeat(4, [start] 1fr);
  grid-gap: 1.25rem;
  padding-top: 6.875rem;
  padding-bottom: 3.125rem;
  @media (min-width: 43.8125rem) {
    grid-template-columns: repeat(12, [start] 1fr);
    padding-top: 5.3125rem;
    padding-bottom: 15.3125rem;
  }
`;

export const FooterCol = styled.div`
  grid-column: span 2;
  span {
    display: block;
    font: 400 0.75rem/1 GT America Mono Regular;
    margin-bottom: 0.25rem;
  }
  svg {
    @media (max-width: 43.75rem) {
      width: 16.25rem;
      height: auto;
      opacity: 0.05;
      margin-bottom: 1.5625rem;
    }
  }
  @media (max-width: 43.75rem) {
    grid-column: span 4;
    text-align: center;
  }
  @media (min-width: 43.8125rem) {
    grid-column: span 3;
  }
`;

export const FooterNavUL = styled.ul`
  list-style-type: none;
  padding-left: 0;
  li > a {
    font: 400 0.75rem/1 GT America Mono Regular;
    opacity: 0.4;
    transition: opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    :hover {
      opacity: 1;
    }
  }
`;

export const FooterWebsite = styled.div`
  display: none;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 2.875rem;
  border-radius: 0.125rem;
  padding: 0 1.25rem;
  overflow: hidden;
  transition: color 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  color: rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.05);
  cursor: not-allowed;
  span {
    position: relative;
    font: 400 0.75rem / 1 GT America Mono Regular;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scaleY(0);
    background: #fff;
    transform-origin: top center;
    transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  }
  @media (min-width: 43.8125rem) {
    display: flex;
    grid-column: end;
  }
`;

export const FooterMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(4, [start] 1fr);
  grid-gap: 1.25rem;
  @media (min-width: 43.8125rem) {
    grid-template-columns: repeat(12, [start] 1fr);
  }
`;

export const FooterMetaText = styled.p`
  font: 400 0.625rem/1.3 GT America Mono Regular;
  letter-spacing: -0.02em;
  opacity: 0.4;
`;

export const FooterMetaAction = styled.a`
  text-decoration: underline;
`;
