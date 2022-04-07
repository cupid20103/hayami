// @import components
import LinkButton from "../../../components/LinkButton";
// @import styles
import {
  FooterBotOne,
  FooterBotTwo,
  FooterCanvas,
  FooterCol,
  FooterContainer,
  FooterContent,
  FooterDiscord,
  FooterLeft,
  FooterMeta,
  FooterMetaAction,
  FooterMetaText,
  FooterNav,
  FooterNavUL,
  FooterWebsite,
} from "./footer.styled";
// @import resources
import { links1, links2 } from "./data";
import FooterLogoSVG from "../../../assets/svgs/FooterLogoSVG";
import bot1 from "../../../assets/images/bot1.png";
import bot2 from "../../../assets/images/bot2.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterDiscord>
        <FooterCanvas>
          <canvas width={2596} height={726} />
        </FooterCanvas>
        <FooterContent>
          <FooterLeft>
            <p>
              {
                "Join our Discord to get the news as soon as possible and follow our latest announcements."
              }
            </p>
            <LinkButton target={"https://discord.com/invite/mekaverse"} flag>
              <span>{"Join our Discord"}</span>
            </LinkButton>
          </FooterLeft>
        </FooterContent>
        <FooterBotOne src={bot1} alt={"bot1"} />
        <FooterBotTwo src={bot2} alt={"bot2"} />
      </FooterDiscord>
      <FooterNav>
        <FooterCol>
          <span>{"Join MekaVerse"}</span>
          {links1.map((item, index) => (
            <FooterNavUL key={index}>
              <li>
                <a href={item.to}>{item.value}</a>
              </li>
            </FooterNavUL>
          ))}
        </FooterCol>
        <FooterCol>
          <span>{"OpenSea"}</span>
          {links2.map((item, index) => (
            <FooterNavUL key={index}>
              <li>
                <a href={item.to}>{item.value}</a>
              </li>
            </FooterNavUL>
          ))}
        </FooterCol>
        <FooterWebsite>
          <span>{"Full website coming soon"}</span>
        </FooterWebsite>
      </FooterNav>
      <FooterMeta>
        <FooterCol>
          <FooterMetaText>
            {"MekaVerse is a registered trademark of MekaLabs."}
            <br />
            {"Website by "}
            <FooterMetaAction href={"https://antinomy.studio"}>
              {"Antinomy Studio"}
            </FooterMetaAction>
          </FooterMetaText>
        </FooterCol>
        <FooterCol>
          <FooterLogoSVG />
        </FooterCol>
      </FooterMeta>
    </FooterContainer>
  );
};

export default Footer;
