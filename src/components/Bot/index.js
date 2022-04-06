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
import bot from "../../assets/images/bot3.jpg";

const Bot = () => {
  return (
    <BotContainer>
      <BotContent>
        <BotItems>
          <BotPolygonSVG />
          <BotImageItem to={"/mekabots"}>
            <img src={bot} alt={"Claim your Mekabots"} />
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
