import React from 'react';
import { EmailIcon } from '../Tools/Icons';
import { IconWrapper } from '../Tools/Icons/IconElements';
import {
  Column1,
  Column2,
  Heading,
  IconTextWrapper,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from './InfoElements';

function InfoSection({ id, img, topLine, headline, description, alt }) {
  return (
    <InfoContainer id={id}>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading>{headline}</Heading>
              <Subtitle>{description}</Subtitle>
              <IconTextWrapper>
                eliasfrieling@gmail.com
                <IconWrapper>
                  <EmailIcon link={process.env.REACT_APP_EMAIL} />
                </IconWrapper>
              </IconTextWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}

export default InfoSection;
