import styled from "styled-components";
import { COLORS } from "../colors";

const light = COLORS.light;

export const IconWrapper = styled.div`
  padding-top: ${({ pad }) => (pad ? "1.4rem" : 0)};

  font-size: 1.8rem;
  cursor: pointer;
`;
export const Icon = styled.a`
  margin: 0 10px;
  position: relative;
  top: 5px;
  color: ${light};
`;
