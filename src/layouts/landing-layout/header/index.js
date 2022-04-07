import React, { useState, useEffect } from "react";
//@import styles
import {
  HeaderContainer,
  HeaderContent,
  HeaderItems,
  HeaderLogo,
  HeaderNav,
  HeaderNavIndex,
  HeaderNavItem,
} from "./header.styled";
//@import resources
import { isScreenWidth } from "../../../utils/getScreenWidth";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isScreenWidth(700));
    });
    setIsMobile(isScreenWidth(700));
  }, []);

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderItems>
          <HeaderLogo to={"/"}>
            <img src={logo} alt={"logo"} />
          </HeaderLogo>
          <HeaderNav>
            <HeaderNavItem to={"/mekabots"}>
              <span>{isMobile ? "Claim Mekabots" : "Claim your Mekabots"}</span>
              <small>1</small>
            </HeaderNavItem>
            <HeaderNavIndex to={"/"}>
              <span>{isMobile ? "" : "More to come soon"}</span>
            </HeaderNavIndex>
          </HeaderNav>
        </HeaderItems>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
