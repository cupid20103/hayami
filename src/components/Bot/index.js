// @import styles
import {
  BotContainer,
  BotContent,
  BotImageItem,
  BotItems,
  BotMessageItem,
} from "./bot.styled";
// @import resources
import BotMessageSVG from "../../assets/svgs/BotMessageSVG";
import avatar from "../../assets/images/avatar.png";

const Bot = () => {
  return (
    <BotContainer>
      <BotContent>
        <BotItems>
          <BotMessageItem to={"/mekabots"}>
            <span>{"Claim your Mekabots now!"}</span>
            <BotMessageSVG />
          </BotMessageItem>
          <BotImageItem to={"/mekabots"}>
            <img src={avatar} alt={"Claim your Mekabots"} />
          </BotImageItem>
        </BotItems>
      </BotContent>
    </BotContainer>
  );
};

export default Bot;
