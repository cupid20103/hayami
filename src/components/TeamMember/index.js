// @import styles
import {
  TeamMemberContainer,
  TeamMemberText,
  TeamMemberTitle,
} from "./taemmember.styled";

const TeamMember = (props) => {
  return (
    <TeamMemberContainer>
      <img src={props.source} alt={props.title} />
      <TeamMemberTitle>{props.title}</TeamMemberTitle>
      <TeamMemberText>{props.description}</TeamMemberText>
    </TeamMemberContainer>
  );
};

export default TeamMember;
