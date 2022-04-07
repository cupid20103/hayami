// @import styles
import {
  BotContainer,
  BotContent,
  BotImageItem,
  BotItems,
  BotMessageItem,
} from "./bot.styled";
// @import resources
import BotPolygonSVG from "../../assets/svgs/BotPolygonSVG";
import BotMessageSVG from "../../assets/svgs/BotMessageSVG";
import avatar from "../../assets/images/avatar.png";

const Bot = () => {
  return (
    <BotContainer>
      <BotContent>
        <BotItems>
          <BotPolygonSVG />
          <BotImageItem to={"/mekabots"}>
            <img src={avatar} alt={"Claim your Mekabots"} />
          </BotImageItem>
          <BotMessageItem to={"/mekabots"}>
            <span>{"Claim your Mekabots now!"}</span>
            <BotMessageSVG />
          </BotMessageItem>
        </BotItems>
      </BotContent>
    </BotContainer>
  );
};

export default Bot;
