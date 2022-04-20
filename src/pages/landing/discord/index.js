// @import components
import LinkButton from "../../../components/LinkButton";
// @import styles
import {
  DiscordActions,
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
        <DiscordRight data-aos="fade-up" className="aos-init aos-animate">
          <DiscordContentText>
            {
              "With such an emphasis on community, we want to reward those who are active and engaged—by offering them a gate key. Unlocking exclusive channels in our discord and more, gate key holders will be guaranteed the opportunity to mint."
            }
            <br />
            <br />
            {
              "From fan art and retweeting our posts to helping out fellow members, this can take many forms ; what we look for is meaningful engagement."
            }
            <DiscordActions>
              <LinkButton
                target={"https://discord.com/invite/hayamiworld"}
                flag
              >
                <span>{"JOIN OUR DISCORD"}</span>
              </LinkButton>
            </DiscordActions>
          </DiscordContentText>
        </DiscordRight>
      </DiscordContent>
    </DiscordContainer>
  );
};

export default Discord;
