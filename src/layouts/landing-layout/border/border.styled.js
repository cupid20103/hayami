import styled from "styled-components";

export const BorderContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  pointer-events: none;
  @media (min-width: 43.8125rem) {
    display: block;
  }
`;

export const BorderContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const BorderDraw = styled.div`
  position: absolute;
  top: 4.0625rem;
  left: 1.5625rem;
  right: 1.5625rem;
  bottom: 1.5625rem;
  border: 1px solid rgba(191, 191, 191, 0.3);
  border-top: none;
  border-radius: 1.25rem;
  ::before {
    left: 0;
    border-top-left-radius: 1.25rem;
    content: "";
    position: absolute;
    width: 2.75rem;
    height: 2.75rem;
    border-top: 1px solid rgba(191, 191, 191, 0.3);
  }
  ::after {
    right: 0;
    border-top-right-radius: 1.25rem;
    content: "";
    position: absolute;
    width: 2.75rem;
    height: 2.75rem;
    border-top: 1px solid rgba(191, 191, 191, 0.3);
  }
`;
