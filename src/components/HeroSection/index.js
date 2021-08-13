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
import { IconWrapper } from "../Tools/Icons/IconElements";
import { Button } from "../Tools/ButtonElements";
import { EmailIcon, GitIcon, LinkedInIcon, TwitterIcon } from "../Tools/Icons";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  console.log(process.env.REACT_APP_GITHUB);
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
        <HeroH1>Welcome!</HeroH1>
        <HeroP>
          My name is Elias and I am currently studying Computer Science at
          Stevens Institute of Technology. Scroll down to see what I've done or
          visit my blog to read more
        </HeroP>
        <IconWrapper pad>
          <GitIcon link={process.env.REACT_APP_GITHUB} />
          <LinkedInIcon link={process.env.REACT_APP_LINKEDIN} />
          <TwitterIcon link={process.env.REACT_APP_TWITTER} />
          <EmailIcon link={process.env.REACT_APP_EMAIL} />
        </IconWrapper>

        <HeroBtnWrapper>
          <Button
            href='https://blog.eliasfrieling.com'
            target='_blank'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            darkTheme='true'
          >
            View my blog {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
