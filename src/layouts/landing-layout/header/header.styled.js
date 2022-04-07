import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  position: absolute;
  top: 0;
  left: 1.5625rem;
  right: 1.5625rem;
  padding-top: 1.5625rem;
  color: rgb(210, 77, 255);
  overflow: hidden;
  transition: color 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  border-radius: 0.625rem;
  @media (min-width: 43.8125rem) {
    left: 4.375rem;
    right: 4.375rem;
    padding-top: 2.1875rem;
  }
`;

export const HeaderItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 4.0625rem;
  padding: 1rem 1.5625rem 1.0625rem;
  border: 1px solid rgba(77, 77, 255, 0.3);
  border-radius: 0.625rem;
  overflow: hidden;
  @media (min-width: 43.8125rem) {
    padding: 10px;
  }
`;

export const HeaderLogo = styled(Link)`
  display: flex;
  position: relative;
  opacity: 1;
  visibility: inherit;
  img {
    width: 75px;
    height: auto;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  position: relative;
  opacity: 1;
  visibility: inherit;
`;

export const HeaderNavItem = styled(Link)`
  display: flex;
  flex-direction: row;
  margin-left: 1.5625rem;
  span {
    font: 400 0.75rem/1 GT America Mono Regular;
  }
  small {
    font-size: 80%;
    font: 400 0.3125rem/1 GT America Mono Regular;
    margin-left: 0.1875rem;
  }
`;

export const HeaderNavIndex = styled(Link)`
  display: flex;
  flex-direction: row;
  margin-left: 1.5625rem;
  opacity: 0.5;
  span {
    display: block;
    font: 400 0.75rem/1 GT America Mono Regular;
  }
`;
