import styled from "styled-components";
// @import layouts
import { LandingLayout } from "../../layouts";
// @import pages
import Hero from "./hero";
import Realm from "./realm";
import Discord from "./discord";
import Roadmap from "./roadmap";
import Team from "./team";
// @import styles
const SectionGroupContainer = styled.div`
  opacity: 1;
  visibility: inherit;
  overflow: unset;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
`;

const SectionGroup = styled.div`
  overflow: unset;
  background: var(--page-grey);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SectionContent = styled.div`
  top: 0;
  left: 0;
  width: 100%;
`;

const Landing = () => {
  return (
    <LandingLayout>
      <SectionGroupContainer>
        <SectionGroup>
          <SectionContent>
            <Hero />
            <Realm />
            <Discord />
            <Roadmap />
            <Team />
          </SectionContent>
        </SectionGroup>
      </SectionGroupContainer>
    </LandingLayout>
  );
};

export default Landing;
