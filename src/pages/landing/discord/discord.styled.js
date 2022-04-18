import styled from "styled-components";

export const DiscordContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  background-color: #000;
  overflow: hidden;
`;

export const DiscordBack = styled.div`
  position: absolute;
  left: 0;
  img {
    width: 50vw;
    height: auto;
    @media (max-width: 1024px) {
      width: 500px;
    }
  }
`;

export const DiscordContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  z-index: 10;
  @media (max-width: 425px) {
    width: 100vw;
    margin: 50px auto;
  }
  @media (max-width: 700px) {
    width: 85vw;
  }
`;

export const DiscordLeft = styled.div`
  margin-left: 30vw;
  width: 3.5rem;
  img {
    height: auto;
    @media (max-width: 700px) {
      width: 3rem;
    }
  }
  @media (max-width: 700px) {
    margin: auto;
  }
`;

export const DiscordContentText = styled.h2`
  font: 400 1rem/1.1 Roobert;
  flex: 1;
  color: #fff;
  @media (min-width: 43.8125rem) {
    font-size: 1.2rem;
  }
  @media (min-width: 64.0625rem) {
    font-size: 1.5rem;
  }
`;

export const DiscordRight = styled.div`
  width: 30vw;
  margin-left: 50px;
  @media (max-width: 700px) {
    width: 50vw;
  }
`;
