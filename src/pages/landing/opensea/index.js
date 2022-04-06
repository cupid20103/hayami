// @import styles
import {
  OpenSeaAction,
  OpenSeaBack,
  OpenSeaContainer,
  OpenSeaContent,
  OpenSeaGrid,
  OpenSeaPart,
  OpenSeaTitle,
} from "./opensea.styled";
// @import resources
import opensea from "../../../assets/images/back1.jpeg";

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
            <OpenSeaAction href="https://opensea.io/collection/mekaverse">
              <span>{"View on Opensea"}</span>
            </OpenSeaAction>
          </OpenSeaPart>
        </OpenSeaGrid>
      </OpenSeaContent>
    </OpenSeaContainer>
  );
};

export default OpenSea;
