import styled from "styled-components";

export const ResumeContainer = styled.div`
  color: #fff;
  background: #f9f9f9;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const ResumeWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 1000px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const Column1 = styled.div`
  position: relative;
  top: -75px;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  text-align: left;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const Title = styled.p`
  color: #000000;
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
export const TextWrapper = styled.div`
  max-width: 800px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const Company = styled.p`
  color: #000000;
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
export const Position = styled.p`
  color: #000000;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: inline-block;
  font-weight: 500;
`;
export const ResumeRow = styled.div`
  display: grid;
  grid-auto-columns: 200px max-content;
  align-items: start;
  position: relative;
  top: 150px;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col2";
  }
`;
export const Description = styled.p`
  color: #000000;
  font-size: 16px;
  line-height: 20pxpx;
  font-weight: 300;
  letter-spacing: 1.4px;
  margin-bottom: 64px;
`;
