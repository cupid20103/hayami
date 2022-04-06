// @import styles
import {
  HeroContainer,
  HeroContent,
  HeroText,
  HeroWrapper,
  NFTCollection,
} from "./hero.styled";
// @import resources
import nft from "../../../assets/images/nft.gif";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroContent>
          <HeroText>
            <span>{"Welcome"}</span>
          </HeroText>
          <HeroText>
            <span>{"Mekaverse"}</span>
          </HeroText>
          <HeroText>
            <span>{"Universe"}</span>
          </HeroText>
        </HeroContent>
      </HeroContainer>
      <NFTCollection>
        <img src={nft} alt="nft" />
      </NFTCollection>
    </HeroWrapper>
  );
};

export default Hero;
