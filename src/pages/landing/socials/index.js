// @import components
import SocialsLink from "../../../components/SocialsLink";
// @import styles
import {
  SocialsContainer,
  SocialsContent,
  SocialsLeft,
  SocialsRight,
} from "./socials.styled";
// @import resources
import { links } from "./data";
import socials from "../../../assets/images/socials.png";

const Socials = () => {
  return (
    <SocialsContainer id={"socials"}>
      <SocialsContent>
        <SocialsLeft>
          <img src={socials} alt={"socials"} />
        </SocialsLeft>
        <SocialsRight>
          {links.map((item, index) => (
            <SocialsLink
              key={index}
              icon={item.icon}
              title={item.title}
              to={item.to}
            />
          ))}
        </SocialsRight>
      </SocialsContent>
    </SocialsContainer>
  );
};

export default Socials;
