import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
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
} from './HeroElements';
import { Button } from '../Tools/ButtonElements';

function HeroSection() {
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
          type="/video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome!</HeroH1>
        <HeroP>
          My name is Elias and I am currently studying Computer Science at Stevens Institute of
          Technology. Scroll down to see what I've done or visit my blog to read more
        </HeroP>
        <HeroIconWrapper>
          <HeroIcon href="https://github.com/eliasfrieling" target="_blank">
            <FaGithub />
          </HeroIcon>
          <HeroIcon href="https://linkedin.com/in/elias-frieling" target="_blank">
            <FaLinkedin />
          </HeroIcon>
          <HeroIcon href="https://twitter.com/EliasFrieling" target="_blank">
            <FaTwitter />
          </HeroIcon>
          <HeroIcon href="mailto:eliasfrieling@gmail.com" target="_blank">
            <FaEnvelope />
          </HeroIcon>
        </HeroIconWrapper>

        <HeroBtnWrapper>
          <Button
            href="https://blog.eliasfrieling.com"
            target="_blank"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            darkTheme="true"
          >
            View my blog {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
