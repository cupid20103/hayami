import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const BotContainer = styled.div`
  display: none;
  position: fixed;
  opacity: 1;
  visibility: inherit;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 50;
  @media (min-width: 43.8125rem) {
    display: block;
  }
`;

export const BotContent = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  color: rgba(255, 255, 255, 0.7);
`;

export const BotItems = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  left: 4.6875rem;
  bottom: 3.75rem;
  pointer-events: auto;
`;

export const BotImageItem = styled(Link)`
  position: relative;
  width: 4.8125rem;
  height: 4.375rem;
  clip-path: circle(40%);
  margin-right: 1.5625rem;
  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const BotMessageItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 6.25rem;
  height: 2.6875rem;
  padding: 0 1.25rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.1875rem;
  span {
    font: 400 0.625rem/1 GT America Mono Regular;
    letter-spacing: -0.02em;
    white-space: nowrap;
  }
  svg {
    position: absolute;
    top: 50%;
    left: -0.5rem;
    opacity: 0.2;
    transform: translateY(-50%);
  }
`;
