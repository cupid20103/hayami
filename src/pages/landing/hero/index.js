import { HeroContainer, HeroWrapper, NFTCollection } from "./hero.styled";
import { useIsMobile } from "../../../utils/useIsMobile";
import hero from "../../../assets/images/hero.gif";
import sign from "../../../assets/images/sign.png";

const Hero = () => {
  const isMobile = useIsMobile(700);

  return (
    <HeroWrapper id={"hero"}>
      <HeroContainer isMobile={isMobile}>
        <img src={sign} alt={"sign"} />
      </HeroContainer>
      <NFTCollection>
        <img src={hero} alt={"hero"} />
      </NFTCollection>
    </HeroWrapper>
  );
};

export default Hero;
