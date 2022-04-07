// @import styles
import { LinkButtonContainer } from "./linkbutton.styled";

const LinkButton = (props) => {
  return (
    <LinkButtonContainer
      href={props.target}
      flag={props.flag}
      unique={props.unique}
    >
      {props.children}
    </LinkButtonContainer>
  );
};

export default LinkButton;
