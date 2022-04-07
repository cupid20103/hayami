import React, { useState, useEffect } from "react";
// @import styles
import {
  HeroContainerOne,
  HeroContainerTwo,
  HeroContentTwo,
  HeroText,
  HeroWrapper,
  NFTCollection,
} from "./hero.styled";
// @import resources
import { isScreenWidth } from "../../../utils/getScreenWidth";
import hero from "../../../assets/images/hero.gif";
import sign from "../../../assets/images/sign.png";

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
      <HeroContainerOne isMobile={isMobile}>
        <img src={sign} alt={"sign"} />
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
        <img src={hero} alt={"hero"} />
      </NFTCollection>
    </HeroWrapper>
  );
};

export default Hero;
