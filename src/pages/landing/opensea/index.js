// @import components
import LinkButton from "../../../components/LinkButton";
// @import styles
import {
  OpenSeaBack,
  OpenSeaContainer,
  OpenSeaContent,
  OpenSeaGrid,
  OpenSeaPart,
  OpenSeaTitle,
} from "./opensea.styled";
// @import resources
import opensea from "../../../assets/images/back1.webp";

const OpenSea = () => {
  return (
    <OpenSeaContainer>
      <OpenSeaContent>
        <OpenSeaBack>
          <picture>
            <img src={opensea} alt={"opensea-back"} />
          </picture>
        </OpenSeaBack>
        <OpenSeaGrid>
          <OpenSeaPart>
            <OpenSeaTitle>
              <div>
                <span>{"THE"}</span>
              </div>
              <div>
                <span>{"MEKAVERSE"}</span>
              </div>
              <div>
                <span>{"COLLECTION"}</span>
              </div>
            </OpenSeaTitle>
            <LinkButton target={"https://opensea.io/collection/mekaverse"}>
              <span>{"View on Opensea"}</span>
            </LinkButton>
          </OpenSeaPart>
        </OpenSeaGrid>
      </OpenSeaContent>
    </OpenSeaContainer>
  );
};

export default OpenSea;
