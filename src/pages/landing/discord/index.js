// @import components
import LinkButton from "../../../components/LinkButton";
// @import styles
import {
  DiscordBack,
  DiscordContainer,
  DiscordContent,
  DiscordContentText,
  DiscordLeft,
  DiscordRight,
} from "./discord.styled";
// @import resources
import back_discord from "../../../assets/images/back_discord.png";
import gatekey from "../../../assets/images/gatekey.png";

const Discord = () => {
  return (
    <DiscordContainer id={"hayami"}>
      <DiscordBack>
        <img src={back_discord} alt={"back_discord"} />
      </DiscordBack>
      <DiscordContent>
        <DiscordLeft>
          <img src={gatekey} alt={"gatekey"} />
        </DiscordLeft>
        <DiscordRight>
          <DiscordContentText>
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
            <LinkButton targetProps={"/"} widthProps={"200px"}>
              <span>{"JOIN OUR DISCORD"}</span>
            </LinkButton>
          </DiscordContentText>
        </DiscordRight>
      </DiscordContent>
    </DiscordContainer>
  );
};

export default Discord;
