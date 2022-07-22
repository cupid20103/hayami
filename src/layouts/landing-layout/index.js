import styled from "styled-components";
import Header from "./header";
import Bot from "../../components/Bot";

const LandingLayoutContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 100vh;
`;

const LandingLayout = (props) => {
  return (
    <LandingLayoutContainer>
      <Header />
      {props.children}
      <Bot />
    </LandingLayoutContainer>
  );
};

export default LandingLayout;
