import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { blue, cocogooseFont, white } from 'style/constants';

const NavLink = styled(Link)`
  margin: 0;
  font-family: ${cocogooseFont};
  letter-spacing: 0px;
  font-weight: normal;
  font-size: 15px;
  margin-left: 20px;
  color: ${blue};
  padding: 3px 6px;
  text-transform: lowercase;
  &:last-child {
    padding-right: 0px;
  }
  &:first-child {
    padding-left: 0px;
    margin-left: 0;
  }
  &.active {
    color: ${white};
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: calc(100%);
      height: calc(100%);
      background: ${blue};
      border-radius: 3px;
      z-index: -1;
    }
    &:nth-child(2n)::after {
      transform: rotate(2deg);
    }
    &:nth-child(2n + 1)::after {
      transform: rotate(-2deg);
    }
  }
`;

export default NavLink;