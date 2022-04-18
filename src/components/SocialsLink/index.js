// @import styles
import { SocialsLinkContainer, SocialsLinkTitle } from "./socialslink.styled";

const SocialsLink = (props) => {
  return (
    <SocialsLinkContainer href={props.to}>
      <img src={props.icon} alt={props.title} />
      <SocialsLinkTitle>{props.title}</SocialsLinkTitle>
    </SocialsLinkContainer>
  );
};

export default SocialsLink;
