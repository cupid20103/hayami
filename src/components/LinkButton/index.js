// @import styles
import {
  LinkButtonContainerExternal,
  LinkButtonContainerInternal,
} from "./linkbutton.styled";

const LinkButton = (props) => {
  return (
    <>
      {props.flag ? (
        <LinkButtonContainerExternal href={props.target} target={"_blank"}>
          {props.children}
        </LinkButtonContainerExternal>
      ) : (
        <LinkButtonContainerInternal>
          {props.children}
        </LinkButtonContainerInternal>
      )}
    </>
  );
};

export default LinkButton;
