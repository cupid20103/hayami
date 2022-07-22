import { useState, useEffect } from "react";
import { isScreenWidth } from "./getScreenWidth";

export const useIsMobile = (width = 700) => {
  const [isMobile, setIsMobile] = useState(isScreenWidth(width));

  useEffect(() => {
    const handleResize = () => setIsMobile(isScreenWidth(width));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return isMobile;
};
