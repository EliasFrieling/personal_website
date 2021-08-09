import React from "react";
import { HeroContainer, HeroBg, VideoBg } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={"https://personal-website-frieling.s3.amazonaws.com/video.mp4"}
          type='/video/mp4'
        />
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
