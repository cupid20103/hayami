import styled from "styled-components";

export const HeroWrapper = styled.section`
  opacity: 1;
  visibility: inherit;
  background: var(--page-hayami);
`;

export const HeroContainerOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-top: -1px;
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  @media (min-width: 43.8125rem) {
    z-index: 0;
  }
`;

export const HeroContentMobile = styled.div``;

export const HeroMobileTitle = styled.h1`
  font: 400 3.125rem/1 Roobert;
  text-decoration: underline;
  text-transform: uppercase;
`;

export const HeroContentDesktop = styled.div`
  width: calc(100% - 15rem);
`;

export const HeroTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    opacity: 0.4;
    visibility: inherit;
    font: 400 1.25rem/1 Roobert;
    text-transform: uppercase;
  }
`;

export const HeroTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  svg {
    display: block;
    width: 100%;
    height: auto;
    margin-top: 1.25rem;
  }
`;

export const HeroContainerTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-top: -1px;
  position: relative;
  z-index: 2;
`;

export const HeroContentTwo = styled.div`
  padding: 20.9375rem 0 31.25rem;
`;

export const HeroText = styled.div`
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  span {
    font: 400 3.125rem/1 Roobert;
    text-decoration: underline;
    @media (min-width: 43.8125rem) {
      font-size: 6.25rem;
    }
    @media (min-width: 64.0625rem) {
      font-size: 8.125rem;
    }
    @media (min-width: 112.5625rem) {
      font-size: 11.25rem;
    }
  }
`;

export const NFTCollection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    transform: translate(0px, 0px);
    width: 58.125rem;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
    @media (min-width: 43.8125rem) {
      max-height: 100vh;
      max-width: 80vw;
    }
  }
  @media (min-width: 43.8125rem) {
    overflow: visible;
  }
`;
