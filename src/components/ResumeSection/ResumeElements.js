import styled from 'styled-components';
import { COLORS } from '../Tools/colors';

const { light } = COLORS;
const { dark } = COLORS;

export const ResumeContainer = styled.div`
  background: ${light};
`;
export const ResumeWrapper = styled.div`
  display: flex;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const Title = styled.p`
  color: ${dark};
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 64px;
`;
export const TextWrapper = styled.div`
  max-width: 75vw;
  padding-top: 60px;
`;
export const Company = styled.p`
  color: ${dark};
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
export const Position = styled.p`
  color: ${dark};
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: inline-block;
  font-weight: 500;
`;

export const Description = styled.p`
  color: ${dark};
  font-size: 16px;
  line-height: 20pxpx;
  font-weight: 300;
  letter-spacing: 1.4px;
  margin-bottom: 64px;
`;
