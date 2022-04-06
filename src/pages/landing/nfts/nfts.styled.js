import styled from "styled-components";

export const NFTsContainer = styled.section`
  pointer-events: none;
  opacity: 1;
  -webkit-clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
  margin-top: -10%;
  background: #000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  @media (min-width: 43.8125rem) {
    -webkit-clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
    margin-top: -20%;
  }
`;

export const NFTsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  img {
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
