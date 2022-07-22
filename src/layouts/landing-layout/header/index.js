import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
import { useIsMobile } from "../../../utils/useIsMobile";
import { links } from "./data";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMobile = useIsMobile(700);

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderMobile isOpened={isOpened}>
          <HeaderMobileContent>
            <HeaderMobileHeader>
              <HeaderMobileHeaderClose onClick={() => setIsOpened(!isOpened)}>
                <FaTimes />
              </HeaderMobileHeaderClose>
              <HeaderMobileHeaderContent
                to={"hero"}
                smooth={true}
                duration={1000}
                onClick={() => setIsOpened(!isOpened)}
              >
                <img src={logo} alt={"logo"} />
              </HeaderMobileHeaderContent>
            </HeaderMobileHeader>
            <HeaderMobileActions>
              {links.map((item, index) => (
                <HeaderMobileNavItem
                  key={index}
                  to={item.to}
                  smooth={true}
                  duration={1000}
                  onClick={() => setIsOpened(!isOpened)}
                >
                  <span>{item.value}</span>
                </HeaderMobileNavItem>
              ))}
            </HeaderMobileActions>
          </HeaderMobileContent>
        </HeaderMobile>
        <HeaderItems>
          <HeaderLogo to={"hero"} smooth={true} duration={1000}>
            <img src={logo} alt={"logo"} />
          </HeaderLogo>
          <HeaderNav isMobile={isMobile}>
            {links.map((item, index) => (
              <HeaderNavItem
                to={item.to}
                key={index}
                smooth={true}
                duration={1000}
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
