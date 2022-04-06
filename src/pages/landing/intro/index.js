// @import styles
import {
  IntroContainer,
  IntroContent,
  IntroContentBottom,
  IntroContentLeft,
  IntroContentRight,
  IntroContentTop,
} from "./intro.styled";

const Intro = () => {
  return (
    <IntroContainer>
      <IntroContent>
        <IntroContentLeft>
          <span>{"What’s Mekaverse..."}</span>
        </IntroContentLeft>
        <IntroContentRight>
          <IntroContentTop>
            {
              "In the distant future, drivers fight in a world divided into 4 Factions. Originals Meka, Mirage, F9, and Gadians are the Titans who rule this planet."
            }
          </IntroContentTop>
          <IntroContentBottom>
            {"Which Faction are you going to join?"}
          </IntroContentBottom>
        </IntroContentRight>
      </IntroContent>
    </IntroContainer>
  );
};

export default Intro;
