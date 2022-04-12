// @import styles
import {
  IntroContainer,
  IntroContent,
  IntroContentLeft,
  IntroContentRight,
  IntroContentText,
} from "./intro.styled";

// @import styles
import realm from "../../../assets/images/realm.png";

const Intro = () => {
  return (
    <IntroContainer>
      <IntroContent>
        <IntroContentLeft>
          <img src={realm} alt="realm" />
        </IntroContentLeft>
        <IntroContentRight>
          <IntroContentText>
            {
              "Aliqua enim veniam labore consectetur. Officia mollit aliquip minim anim deserunt velit deserunt. Adipisicing incididunt dolore deserunt est consequat."
            }
            <br />
            <br />
            {
              "In sit dolore ut fugiat cupidatat quis nisi labore incididunt id pariatur velit proident. Et sunt amet eu elit in. Adipisicing mollit elit duis voluptate ipsum cillum. Lorem mollit nulla elit elit excepteur."
            }
            <br />
            <br />
            {
              "Proident do minim aliquip mollit id commodo deserunt quis est ut. Adipisicing sunt eu officia cillum anim minim nulla dolor voluptate commodo adipisicing. Ea duis aute incididunt nostrud Lorem ad aute ex incididunt aute magna dolor cillum."
            }
          </IntroContentText>
        </IntroContentRight>
      </IntroContent>
    </IntroContainer>
  );
};

export default Intro;
