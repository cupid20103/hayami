import styled from "styled-components";

export const RealmContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  background-color: #000;
  overflow: hidden;
  margin-top: -1px;
  @media (max-width: 700px) {
    min-height: 80vh;
  }
`;

export const RealmContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  @media (max-width: 425px) {
    width: 100vw;
  }
  @media (max-width: 700px) {
    width: 85vw;
  }
`;

export const RealmLeft = styled.div`
  margin-left: -15vw;
  width: 3.5rem;
  @media (max-width: 700px) {
    margin: auto;
  }
  img {
    height: auto;
    @media (max-width: 700px) {
      width: 3rem;
    }
  }
`;

export const RealmRight = styled.div`
  margin-left: 50px;
  width: 50vw;
`;

export const RealmContentText = styled.h2`
  font: 400 1.2rem/1.1 Roobert;
  flex: 1;
  color: #fff;
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

export const RealmBack = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  img {
    width: auto;
    height: 100%;
  }
  @media (max-width: 700px) {
    min-height: 80vh;
  }
  clip-path: polygon(50% 0%, 100% 0, 100% 100%, 30% 100%);
`;
