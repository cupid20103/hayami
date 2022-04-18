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
`;

export const TeamLeft = styled.div`
  img {
    width: 3.5rem;
    height: auto;
    @media (max-width: 700px) {
      width: 3rem;
      height: auto;
    }
  }
`;

export const TeamRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 50px;
  width: 70%;
  @media (max-width: 700px) {
    width: 60vw;
    margin-left: 10px;
  }
`;
