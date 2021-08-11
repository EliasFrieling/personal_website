import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: #010606;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  max-width: 75%;
  margin-right: auto;
  margin-left: auto;
  /* padding: 24px 24px; */
`;

export const InfoRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-areas: "col1 col2";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  justify-items: center;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "col1"
      "col2";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;

  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 1100px) {
    padding-bottom: 0;
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 1100px) {
    display: flex;
    justify-content: center;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8f1;

  @media screen and (max-width: 1100px) {
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 75%;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;

  @media screen and (max-width: 1100px) {
    text-align: center;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    word-wrap: break-word;
    max-width: 70vw;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  max-width: 960px;
  margin: 0 0 10px 0;
  padding-right: 0;
  max-height: 600px;

  @media screen and (max-width: 1500px) {
    max-width: 600px;
    max-height: 300px;
  }
`;
