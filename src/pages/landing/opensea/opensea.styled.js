import styled from "styled-components";

export const OpenSeaContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -3500, 0, 1);
  clip-path: polygon(0px 0px, 100% 11.2031%, 100% 100%, 0% 100%);
  overflow: hidden;
  -webkit-clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
  margin-top: -10%;
  background: #000;
  min-height: 100vh;
  @media (min-width: 43.8125rem) {
    -webkit-clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
    margin-top: -20%;
  }
`;

export const OpenSeaContent = styled.div`
  width: 100%;
  height: 100vh;
  @media (min-width: 43.8125rem) {
    min-height: 200vh;
  }
`;

export const OpenSeaBack = styled.div`
  position: absolute;
  top: -10%;
  height: 120%;
  width: 100%;
  bottom: -10%;
  transform: translate3d(0px, -23px, 0px);
  picture {
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

export const OpenSeaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, [start] 1fr);
  grid-gap: 1.25rem;
  position: absolute;
  align-content: center;
  justify-content: center;
  color: #fff;
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

export const OpenSeaPart = styled.div`
  @media (min-width: 43.8125rem) {
    grid-column: 7 / span 5;
    text-align: left;
  }
`;

export const OpenSeaTitle = styled.h2`
  margin-bottom: 2.5rem;
  font: 400 3.125rem/1 Roobert;
  text-decoration: underline;
  text-transform: uppercase;
  @media (min-width: 43.8125rem) {
    font-size: 5rem;
  }
`;

export const OpenSeaAction = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.875rem;
  border-radius: 0.125rem;
  padding: 0 1.25rem;
  overflow: hidden;
  transition: color 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  margin-bottom: 20%;
  background: hsla(0, 0%, 100%, 0.2);
  -webkit-backdrop-filter: blur(44px);
  backdrop-filter: blur(44px);
  cursor: pointer;
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
  span {
    position: relative;
    font: 400 0.75rem/1 GT America Mono Regular;
  }
`;
