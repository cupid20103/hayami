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
import hero from "../../../assets/images/hero.png";
import sign from "../../../assets/images/sign.png";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainerOne>
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
