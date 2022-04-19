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
  @media (max-width: 425px) {
    justify-content: flex-start;
  }
`;

export const DiscordBack = styled.div`
  position: absolute;
  left: 0;
  img {
    width: 65vw;
    height: auto;
    @media (max-width: 1024px) {
      width: 500px;
    }
  }
  @media (max-width: 425px) {
    img {
      width: 100%;
      height: auto;
    }
    left: 0;
    right: 0;
    bottom: 0;
    height: 35%;
  }
`;

export const DiscordContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  z-index: 10;
  @media (max-width: 425px) {
    flex-direction: column;
    margin-top: 0;
  }
  @media (max-width: 700px) {
    width: 85vw;
  }
`;

export const DiscordLeft = styled.div`
  margin-left: 30vw;
  img {
    width: 3.5rem;
    height: auto;
    @media (max-width: 700px) {
      width: 3rem;
      height: auto;
    }
    @media (max-width: 425px) {
      width: auto;
      height: 300px;
    }
  }
  @media (max-width: 700px) {
    margin: auto;
  }
  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    transform: rotate(90deg);
  }
`;

export const DiscordRight = styled.div`
  width: 32vw;
  margin-left: 50px;
  @media (max-width: 700px) {
    width: 60vw;
    margin-left: 10px;
  }
  @media (max-width: 425px) {
    width: 80vw;
    margin: auto;
  }
`;

export const DiscordContentText = styled.h2`
  font: 400 1rem/1.1 Roobert;
  word-break: break-all;
  color: #fff;
  @media (min-width: 43.8125rem) {
    font-size: 1.2rem;
  }
  @media (min-width: 64.0625rem) {
    font-size: 1.5rem;
  }
`;

export const DiscordActions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media (max-width: 425px) {
    justify-content: center;
  }
`;
