import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
// @import components
import LinkButton from "../../../components/LinkButton";
// @import styles
import {
  RoadmapActions,
  RoadmapBack,
  RoadmapContainer,
  RoadmapContent,
  RoadmapContentText,
  RoadmapContentTitle,
  RoadmapLeft,
  RoadmapRight,
  RoadmapRightContent,
} from "./roadmap.styled";
// @import resources
import { roadmaps } from "./data";
import back_roadmap from "../../../assets/images/back_roadmap.png";
import roadmap from "../../../assets/images/roadmap.png";

const Roadmap = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <RoadmapContainer id={"roadmap"}>
      <RoadmapContent>
        <RoadmapLeft>
          <img src={roadmap} alt={"roadmap"} />
        </RoadmapLeft>
        <RoadmapRight data-aos="fade-up" className="aos-init aos-animate">
          <RoadmapRightContent
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
          >
            {roadmaps.map((item, index) => (
              <SwiperSlide key={index}>
                <RoadmapContentTitle>{item.title}</RoadmapContentTitle>
                <RoadmapContentText>{item.content}</RoadmapContentText>
              </SwiperSlide>
            ))}
          </RoadmapRightContent>
          <RoadmapActions>
            <LinkButton ref={navigationPrevRef}>
              <span>{"PREVIOUS"}</span>
            </LinkButton>
            <LinkButton ref={navigationNextRef}>
              <span>{"NEXT"}</span>
            </LinkButton>
          </RoadmapActions>
        </RoadmapRight>
      </RoadmapContent>
      <RoadmapBack>
        <img src={back_roadmap} alt={"back_roadmap"} />
      </RoadmapBack>
    </RoadmapContainer>
  );
};

export default Roadmap;
