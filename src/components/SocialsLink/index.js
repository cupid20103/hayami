// @import styles
import { SocialsLinkContainer, SocialsLinkTitle } from "./socialslink.styled";

const SocialsLink = (props) => {
  return (
    <SocialsLinkContainer
      href={props.to}
      target="_blank"
      data-aos="fade-up"
      className="aos-init aos-animate"
    >
      <img src={props.icon} alt={props.title} />
      <SocialsLinkTitle>{props.title}</SocialsLinkTitle>
    </SocialsLinkContainer>
  );
};

export default SocialsLink;
