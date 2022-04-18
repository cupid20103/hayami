import styled from "styled-components";

export const TeamContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  background-color: #000;
  overflow: hidden;
`;

export const TeamContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const TeamLeft = styled.div`
  img {
    width: 3.5rem;
    height: auto;
    @media (max-width: 700px) {
      width: 3rem;
      height: auto;
    }
    @media (max-width: 425px) {
      width: auto;
      height: 180px;
    }
  }
  @media (max-width: 425px) {
    transform: rotate(90deg);
  }
`;

export const TeamRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 50px;
  width: 60vw;
  @media (max-width: 700px) {
    margin-left: 10px;
  }
  @media (max-width: 425px) {
    margin: auto;
  }
`;
