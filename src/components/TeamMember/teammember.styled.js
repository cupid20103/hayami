import styled from "styled-components";

export const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 15rem;
  img {
    width: 10rem;
    height: auto;
  }
`;

export const TeamMemberTitle = styled.h1`
  font: 500 1.2rem/1.1 Japanese-3017;
  text-align: center;
  color: #fff;
  margin: 15px auto;
  @media (min-width: 43.8125rem) {
    font-size: 1.5rem;
  }
  @media (min-width: 64.0625rem) {
    font-size: 1.8rem;
  }
`;

export const TeamMemberText = styled.p`
  font: 400 0.7rem/1.1 Roobert;
  text-align: center;
  color: #fff;
  margin-bottom: 30px;
  @media (min-width: 43.8125rem) {
    font-size: 1rem;
    margin-bottom: 40px;
  }
  @media (min-width: 64.0625rem) {
    font-size: 1.2rem;
    margin-bottom: 50px;
  }
`;
