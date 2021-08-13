import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  IconTextWrapper,
} from "./InfoElements";
import { IconWrapper } from "../Tools/Icons/IconElements";
import { EmailIcon } from "../Tools/Icons";
const InfoSection = ({ id, img, topLine, headline, description, alt }) => {
  return (
    <>
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
                <Img src={img} alt={alt}></Img>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
