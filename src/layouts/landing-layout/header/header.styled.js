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
  max-width: 1440px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 1.5625rem;
  right: 1.5625rem;
  padding-top: 1.5625rem;
  overflow: hidden;
  transition: color 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  @media (min-width: 43.8125rem) {
    left: 2.375rem;
    right: 2.375rem;
    padding-top: 2.1875rem;
  }
  @media (min-width: 64.0625rem) {
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
  overflow: hidden;
  padding: 10px;
  @media (min-width: 43.8125rem) {
    padding: 1rem 1.5625rem 1.0625rem;
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
  display: ${(props) => (props.isMobile ? "none" : "flex")};
  flex-direction: row;
  position: relative;
  opacity: 1;
  visibility: inherit;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const HeaderNavItem = styled(Link)`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  span {
    font: 400 0.75rem/1 GT America Mono Regular;
  }
`;

export const NavMobile = styled.div`
  display: ${(props) => (props.isMobile ? "flex" : "none")};
  position: fixed;
  left: 80vw;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 8px;
  transition: 0.3s ease;
  z-index: 100;
  cursor: pointer;
  & > svg {
    width: 35px;
    color: #fff;
    &:hover {
      color: rgb(85, 0, 255);
      transition: 0.3s ease;
    }
  }
  @media (min-width: 43.8125rem) {
    left: 85vw;
  }
`;

export const HeaderMobile = styled.div`
  height: 100%;
  width: ${(props) => (props.isOpened ? "100%" : 0)};
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  background: #111111;
  overflow-x: hidden;
  transition: 0.5s;
`;

export const HeaderMobileContent = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeaderMobileHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  height: 100px;
  text-align: center;
  padding: 0px 25px;
`;

export const HeaderMobileHeaderClose = styled.div`
  font-size: 24px;
  width: 100%;
  text-align: right;
  padding: 0px 20px;
  font-weight: 700;
  color: #fff;
  position: relative;
  top: 10px;
  z-index: 300;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: rgb(85, 0, 255);
  }
`;

export const HeaderMobileHeaderContent = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  & > img {
    width: 75px;
    height: auto;
  }
`;

export const HeaderMobileActions = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
`;

export const HeaderMobileNavItem = styled(Link)`
  height: 50px;
  width: 100%;
  line-height: 70px;
  padding: 0px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.3s;
  &:hover {
    color: rgb(85, 0, 255);
  }
`;
