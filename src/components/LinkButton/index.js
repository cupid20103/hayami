// @import styles
import { LinkButtonContainer } from "./linkbutton.styled";

const LinkButton = (props) => {
  return (
    <LinkButtonContainer href={props.target}>
      {props.children}
    </LinkButtonContainer>
  );
};

export default LinkButton;
