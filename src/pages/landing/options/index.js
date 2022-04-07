// @import components
import LinkButton from "../../../components/LinkButton";
// @import styles

// @import resources
import option from "../../../assets/images/back3.webp";
import poster from "../../../assets/images/poster.jpg";
import {
  OptionsBack,
  OptionsContainer,
  OptionsContent,
  OptionsGrid,
  OptionsPart,
  OptionsTitle,
} from "./options.styled";

const Options = () => {
  return (
    <OptionsContainer>
      <OptionsContent>
        <OptionsBack>
          <picture>
            <img src={option} alt={"option-back"} />
          </picture>
          <video
            muted="muted"
            loop="loop"
            autoPlay="autoplay"
            playsInline
            poster={poster}
            src={
              "https://player.vimeo.com/external/689609069.hd.mp4?s=af64cb2ee2ff2a78b3d9a77db818595f4aa1ea0d&profile_id=169"
            }
          />
        </OptionsBack>
        <OptionsGrid>
          <OptionsPart>
            <OptionsTitle>
              <div>
                <span>{"Change"}</span>
              </div>
              <div>
                <span>{"Your Meka"}</span>
              </div>
              <div>
                <span>{"Background"}</span>
              </div>
            </OptionsTitle>
            <LinkButton target={"https://customize.themekaverse.com"}>
              <span>{"Customize"}</span>
            </LinkButton>
          </OptionsPart>
        </OptionsGrid>
      </OptionsContent>
    </OptionsContainer>
  );
};

export default Options;
