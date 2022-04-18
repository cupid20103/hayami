import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
//@import styles
import {
  HeaderContainer,
  HeaderContent,
  HeaderItems,
  HeaderLogo,
  HeaderMobile,
  HeaderMobileActions,
  HeaderMobileContent,
  HeaderMobileHeader,
  HeaderMobileHeaderClose,
  HeaderMobileHeaderContent,
  HeaderMobileNavItem,
  HeaderNav,
  HeaderNavItem,
  NavMobile,
} from "./header.styled";
//@import resources
import { isScreenWidth } from "../../../utils/getScreenWidth";
import { links } from "./data";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isScreenWidth(700));
    });
    setIsMobile(isScreenWidth(700));
  }, []);

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderMobile isOpened={isOpened}>
          <HeaderMobileContent>
            <HeaderMobileHeader>
              <HeaderMobileHeaderClose onClick={() => setIsOpened(!isOpened)}>
                <FaTimes />
              </HeaderMobileHeaderClose>
              <HeaderMobileHeaderContent to={"/"} smooth={true} duration={1500}>
                <img src={logo} alt={"logo"} />
              </HeaderMobileHeaderContent>
            </HeaderMobileHeader>
            <HeaderMobileActions>
              {links.map((item, index) => (
                <HeaderMobileNavItem
                  key={index}
                  to={item.to}
                  smooth={true}
                  duration={1500}
                  onClick={() => setIsOpened(!isOpened)}
                >
                  <span>{item.value}</span>
                </HeaderMobileNavItem>
              ))}
            </HeaderMobileActions>
          </HeaderMobileContent>
        </HeaderMobile>
        <HeaderItems>
          <HeaderLogo to={"/"} smooth={true} duration={1500}>
            <img src={logo} alt={"logo"} />
          </HeaderLogo>
          <HeaderNav isMobile={isMobile}>
            {links.map((item, index) => (
              <HeaderNavItem
                to={item.to}
                key={index}
                smooth={true}
                duration={1500}
              >
                <span>{item.value}</span>
              </HeaderNavItem>
            ))}
          </HeaderNav>
          <NavMobile isMobile={isMobile} onClick={() => setIsOpened(!isOpened)}>
            <FaBars />
          </NavMobile>
        </HeaderItems>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
