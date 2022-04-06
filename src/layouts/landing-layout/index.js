import styled from "styled-components";
// @import layouts
import Border from "./border";
import Header from "./header";
// @import components
import Bot from "../../components/Bot";
// @import styles
const LandingLayoutContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 100vh;
`;

const LandingLayout = (props) => {
  return (
    <LandingLayoutContainer>
      <Header />
      <Border />
      {props.children}
      <Bot />
    </LandingLayoutContainer>
  );
};

export default LandingLayout;
