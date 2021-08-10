import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroIconWrapper,
  HeroIcon,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
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
        <HeroIconWrapper>
          <HeroIcon href='https://github.com/eliasfrieling' target='_blank'>
            <FaGithub />
          </HeroIcon>
          <HeroIcon
            href='https://linkedin.com/in/elias-frieling'
            target='_blank'
          >
            <FaLinkedin />
          </HeroIcon>
          <HeroIcon href='https://twitter.com/EliasFrieling' target='_blank'>
            <FaTwitter />
          </HeroIcon>
        </HeroIconWrapper>

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
