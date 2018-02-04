import React from 'react';
import styled from 'styled-components';
import { FloatingImg, NoSelect } from 'style';
import { black, white } from 'style/constants';

const JoshCont = FloatingImg.extend`
  background: #f7f7f7;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${white};
    z-index: 2;
  }
  &::before {
    width: 110%;
    height: 100px;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
  }
`;

const Painter = styled.img`
  position: absolute;
  top: 0;
  height: calc(100% + 120px);
  transform: translate(60px, -20px);
`;

export default class FloatingJosh extends React.Component {
  render() {
    return (
      <JoshCont left={this.props.left} >
        <Painter src="static/img/index/painter.png" />
      </JoshCont>
    );
  }
}