import styled from "styled-components";

export const SocialsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  background-color: #000;
  overflow: hidden;
`;

export const SocialsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const SocialsLeft = styled.div`
  img {
    width: 3.5rem;
    height: auto;
    @media (max-width: 700px) {
      width: 3rem;
      height: auto;
    }
    @media (max-width: 425px) {
      width: auto;
      height: 200px;
    }
  }
  @media (max-width: 425px) {
    transform: rotate(90deg);
  }
`;

export const SocialsRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 50px;
  width: 60vw;
  @media (max-width: 700px) {
    width: 60vw;
    margin-left: 10px;
  }
  @media (max-width: 425px) {
    margin: auto;
  }
`;
