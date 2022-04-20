// @import styles
import {
  TeamMemberContainer,
  TeamMemberText,
  TeamMemberTitle,
} from "./teammember.styled";

const TeamMember = (props) => {
  return (
    <TeamMemberContainer data-aos="fade-up" className="aos-init aos-animate">
      <img src={props.source} alt={props.title} />
      <TeamMemberTitle>{props.title}</TeamMemberTitle>
      <TeamMemberText>{props.description}</TeamMemberText>
    </TeamMemberContainer>
  );
};

export default TeamMember;
