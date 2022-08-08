import React from 'react';
import { EmailIcon, GitIcon, LinkedInIcon, TwitterIcon } from '../Tools/Icons';
import { IconWrapper } from '../Tools/Icons/IconElements';
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements';

function HeroSection() {
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
          Technology. Scroll down to see what I've done!
        </HeroP>
        <IconWrapper pad>
          <GitIcon link={process.env.REACT_APP_GITHUB} />
          <LinkedInIcon link={process.env.REACT_APP_LINKEDIN} />
          <TwitterIcon link={process.env.REACT_APP_TWITTER} />
          <EmailIcon link={process.env.REACT_APP_EMAIL} />
        </IconWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
