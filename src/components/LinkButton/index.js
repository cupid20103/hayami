// @import styles
import { LinkButtonContainer } from "./linkbutton.styled";

const LinkButton = (props) => {
  return (
    <LinkButtonContainer href={props.targetProps} widthProps={props.widthProps}>
      {props.children}
    </LinkButtonContainer>
  );
};

export default LinkButton;
