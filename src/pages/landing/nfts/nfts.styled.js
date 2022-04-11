import styled from "styled-components";

export const NFTsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  margin-top: -10%;
  opacity: 1;
  background: #000;
  -webkit-clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
  @media (min-width: 43.8125rem) {
    -webkit-clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
    margin-top: -20%;
  }
`;

export const NFTsContent = styled.div`
  display: flex;
  justify-content: center;
  position: ${(props) => (props.scrollState ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  img {
    width: 45rem;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
    @media (max-width: 425px) {
      /* margin-left: -20px !important; */
      margin-left: -75px !important;
    }
    @media (min-width: 43.8125rem) {
      max-height: 100vh;
      width: 75vw;
      margin-left: -50px !important;
    }
  }

  @media (min-width: 43.8125rem) {
    top: -25px;
    overflow: visible;
  }
`;
