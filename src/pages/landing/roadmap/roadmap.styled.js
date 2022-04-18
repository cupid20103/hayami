import styled from "styled-components";

export const RoadmapContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  background-color: #000;
  overflow: hidden;
`;

export const RoadmapContent = styled.div`
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

export const RoadmapLeft = styled.div`
  margin-left: -30vw;
  img {
    width: 3.5rem;
    height: auto;
    @media (max-width: 700px) {
      width: 3rem;
      height: auto;
    }
  }
  @media (max-width: 700px) {
    margin: auto;
  }
`;

export const RoadmapRight = styled.div`
  width: 32vw;
  margin-left: 50px;
  @media (max-width: 700px) {
    width: 60vw;
    margin-left: 10px;
  }
`;

export const RoadmapRightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const RoadmapContentTitle = styled.h1`
  font: 500 1.2rem/1.1 Japanese-3017;
  text-align: center;
  word-break: break-all;
  color: #fff;
  @media (min-width: 43.8125rem) {
    font-size: 1.5rem;
  }
  @media (min-width: 64.0625rem) {
    font-size: 1.8rem;
  }
`;

export const RoadmapContentText = styled.h2`
  font: 400 1rem/1.1 Roobert;
  word-break: break-all;
  color: #fff;
  margin-top: 20px;
  @media (min-width: 43.8125rem) {
    font-size: 1.2rem;
  }
  @media (min-width: 64.0625rem) {
    font-size: 1.5rem;
  }
`;

export const RoadmapActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1440px) {
    justify-content: space-around;
  }
`;

export const RoadmapBack = styled.div`
  position: absolute;
  right: 0;
  img {
    width: 40vw;
    height: auto;
    @media (max-width: 1024px) {
      width: 500px;
    }
  }
`;
