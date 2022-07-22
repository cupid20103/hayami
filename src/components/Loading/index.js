import { LoadingContainer, LoadingContent, Label } from "./loadingstyled";
import logo from "../../assets/images/logo.png";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingContent>
        <img src={logo} alt={"logo"} />
        <Label />
      </LoadingContent>
    </LoadingContainer>
  );
};

export default Loading;
