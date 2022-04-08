import styled from "styled-components";

export const HeroWrapper = styled.section`
  opacity: 1;
  visibility: inherit;
  background: var(--page-hayami);
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-top: -1px;
  position: relative;
  text-align: center;
  color: #fff;
  img {
    z-index: ${(props) => (props.isMobile ? 2 : 0)};
    width: 75%;
    height: auto;
    margin: 150px auto 50rem auto;
  }
`;

export const NFTCollection = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  img {
    transform: translate(0px, 0px);
    width: 45rem;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
    @media (max-width: 425px) {
      margin-left: -20px !important;
    }
    @media (min-width: 43.8125rem) {
      max-height: 100vh;
      width: 75vw;
    }
  }
  @media (min-width: 43.8125rem) {
    overflow: visible;
  }
`;
