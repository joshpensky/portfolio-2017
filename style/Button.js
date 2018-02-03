import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  black,
  blue,
  bodyFont,
  borderRadius,
  btnOffset,
  btnOffsetActive,
  btnRadius,
  white
} from 'style/constants';

const Button = styled(Link)`
  font-size: ${props => (props.small ? '18px' : '20px')};
  font-family: ${bodyFont};
  position: relative;
  display: inline-block;
  padding: 10px ${props => (props.small ? '20px' : '25px')};
  border: ${btnRadius} solid ${black};
  border-radius: ${borderRadius};
  color: ${white};
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    background: ${blue};
    width: calc(100% + ${btnOffset});
    height: calc(100% + ${btnOffset});
    border-radius: ${borderRadius};
    z-index: -1;
    transition: 0.15s ease-out;
    ${props =>
      props.top &&
      css`
        bottom: ${btnOffset};
      `};
    ${props =>
      props.left &&
      css`
        right: ${btnOffset};
      `};
    ${props =>
      props.bottom &&
      css`
        top: ${btnOffset};
      `};
    ${props =>
      props.right &&
      css`
        left: ${btnOffset};
      `};
  }
  &:active::after,
  &:focus::after {
    transform: translate(
      ${props => (props.right && '-')}${btnOffsetActive},
      ${props => (props.bottom && '-')}${btnOffsetActive}
    );
  }
`;

export default Button;
