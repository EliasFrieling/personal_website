import styled from 'styled-components';
import { COLORS } from './colors';

const { light } = COLORS;
const { dark } = COLORS;
const { button } = COLORS;

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? button : dark)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ darkTheme }) => (darkTheme ? dark : light)};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? light : button)};
  }
`;
