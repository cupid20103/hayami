// @import components
import LinkButton from "../../../components/LinkButton";
// @import styles
import {
  RoadmapActions,
  RoadmapBack,
  RoadmapContainer,
  RoadmapContent,
  RoadmapContentText,
  RoadmapContentTitle,
  RoadmapLeft,
  RoadmapRight,
  RoadmapRightContent,
} from "./roadmap.styled";
// @import resources
import back_roadmap from "../../../assets/images/back_roadmap.png";
import roadmap from "../../../assets/images/roadmap.png";

const Roadmap = () => {
  return (
    <RoadmapContainer id={"roadmap"}>
      <RoadmapContent>
        <RoadmapLeft>
          <img src={roadmap} alt={"roadmap"} />
        </RoadmapLeft>
        <RoadmapRight>
          <RoadmapRightContent>
            <RoadmapContentTitle>
              {"PHASE 1 [COMMUNITY LAUNCH]"}
            </RoadmapContentTitle>
            <RoadmapContentText>
              {
                "Laborum id minim reprehenderit labore eiusmod id nostrud aute ipsum veniam ea eiusmod tempor. Proident sint ipsum laboris veniam Lorem. Sint fugiat commodo dolor minim id. Deserunt duis ut consectetur est veniam est velit ipsum nulla non."
              }
              <br />
              <br />
              {
                "Exercitation esse minim ad pariatur et non non adipisicing ullamco velit veniam reprehenderit officia. Voluptate ea irure et amet est in consectetur nisi ullamco amet in aliqua qui."
              }
              <br />
              <br />
            </RoadmapContentText>
          </RoadmapRightContent>
          <RoadmapActions>
            <LinkButton widthProps={"120px"}>
              <span>{"PREVIOUS"}</span>
            </LinkButton>
            <LinkButton widthProps={"120px"}>
              <span>{"NEXT"}</span>
            </LinkButton>
          </RoadmapActions>
        </RoadmapRight>
      </RoadmapContent>
      <RoadmapBack>
        <img src={back_roadmap} alt={"back_roadmap"} />
      </RoadmapBack>
    </RoadmapContainer>
  );
};

export default Roadmap;
