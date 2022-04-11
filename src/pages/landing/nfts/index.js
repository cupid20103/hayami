import React, { useState, useEffect } from "react";
// @import styles
import { NFTsContainer, NFTsContent } from "./nfts.styled";
// @import resources
import bot from "../../../assets/images/bot.gif";

const NFTs = () => {
  const [scrollState, setScrollState] = useState(true);

  const handleScroll = () => {
    if (window.scrollY >= 1000) {
      setScrollState(false);
    } else {
      setScrollState(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <NFTsContainer>
      <NFTsContent scrollState={scrollState}>
        <img src={bot} alt={"NFTs intro"} />
      </NFTsContent>
    </NFTsContainer>
  );
};

export default NFTs;
