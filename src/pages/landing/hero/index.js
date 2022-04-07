import React, { useState, useEffect } from "react";
// @import styles
import {
  HeroContainerOne,
  HeroContainerTwo,
  HeroContentDesktop,
  HeroContentMobile,
  HeroContentTwo,
  HeroMobileTitle,
  HeroText,
  HeroTitle,
  HeroTitleContent,
  HeroWrapper,
  NFTCollection,
} from "./hero.styled";
// @import resources
import nft from "../../../assets/images/nft.gif";
import HeroTitleHeaderSVG from "../../../assets/svgs/HeroTitleHeaderSVG";
import HeroTitleFooterSVG from "../../../assets/svgs/HeroTitleFooterSVG";
import { isScreenWidth } from "../../../utils/getScreenWidth";
import LinkButton from "../../../components/LinkButton";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isScreenWidth(700));
    });
    setIsMobile(isScreenWidth(700));
  }, []);

  return (
    <HeroWrapper>
      <HeroContainerOne>
        {isMobile ? (
          <HeroContentMobile>
            <HeroMobileTitle>
              <div>
                <span>{"Claim your"}</span>
              </div>
              <div>
                <span>{"Mekabots"}</span>
              </div>
            </HeroMobileTitle>
            <LinkButton to={"/mekabots"} unique>
              <span>{"Claim now"}</span>
            </LinkButton>
          </HeroContentMobile>
        ) : (
          <HeroContentDesktop>
            <HeroTitle>
              <span>{"Mekabots"}</span>
              <span>{"Claim"}</span>
            </HeroTitle>
            <HeroTitleContent>
              <HeroTitleHeaderSVG />
              <HeroTitleFooterSVG />
            </HeroTitleContent>
          </HeroContentDesktop>
        )}
      </HeroContainerOne>
      <HeroContainerTwo>
        <HeroContentTwo>
          <HeroText>
            <span>{"Welcome"}</span>
          </HeroText>
          <HeroText>
            <span>{"Mekaverse"}</span>
          </HeroText>
          <HeroText>
            <span>{"Universe"}</span>
          </HeroText>
        </HeroContentTwo>
      </HeroContainerTwo>
      <NFTCollection>
        <img src={nft} alt="nft" />
      </NFTCollection>
    </HeroWrapper>
  );
};

export default Hero;
