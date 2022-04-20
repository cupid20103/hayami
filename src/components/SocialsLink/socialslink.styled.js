import styled from "styled-components";

export const SocialsLinkContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 30px;
  cursor: pointer;
  img {
    width: auto;
    height: 7rem;
  }
  @media (max-width: 700px) {
    margin: 20px 30px;
    img {
      width: auto;
      height: 5rem;
    }
  }
`;

export const SocialsLinkTitle = styled.h1`
  font: 500 1.2rem/1.1 Japanese-3017;
  text-align: center;
  color: #fff;
  margin: 20px auto;
  @media (min-width: 43.8125rem) {
    font-size: 1.5rem;
  }
  @media (min-width: 64.0625rem) {
    font-size: 1.8rem;
  }
`;
