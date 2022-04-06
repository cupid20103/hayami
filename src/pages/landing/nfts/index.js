import bot from "../../../assets/images/bot.gif";
import { NFTsContainer, NFTsContent } from "./nfts.styled";

const NFTs = () => {
  return (
    <NFTsContainer>
      <NFTsContent>
        <img src={bot} alt={"NFTs intro"} />
      </NFTsContent>
    </NFTsContainer>
  );
};

export default NFTs;
