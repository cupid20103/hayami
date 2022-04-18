// @import components
import TeamMember from "../../../components/TeamMember";
// @import styles
import { TeamContainer, TeamContent, TeamLeft, TeamRight } from "./team.style";
// @import resources
import { teams } from "./data";
import team from "../../../assets/images/team.png";

const Team = () => {
  return (
    <TeamContainer id={"team"}>
      <TeamContent>
        <TeamLeft>
          <img src={team} alt={"team"} />
        </TeamLeft>
        <TeamRight>
          {teams.map((item, index) => (
            <TeamMember
              key={index}
              title={item.title}
              description={item.description}
              source={item.source}
            />
          ))}
        </TeamRight>
      </TeamContent>
    </TeamContainer>
  );
};

export default Team;
