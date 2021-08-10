import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={process.env.REACT_APP_BACKGROUND_VIDEO}
          type='/video/mp4'
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Text Here</HeroH1>
        <HeroP>More text here, and even more!!</HeroP>
        <HeroBtnWrapper>
          <Button
            to='/blog'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            View my blog {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
