import React from 'react';
import styled from 'styled-components';
import { FloatingImg } from 'style';
import { white } from 'style/constants';

const WatchrCont = FloatingImg.extend`
  background: #0f1923;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${white};
    z-index: 2;
  }
  &::before {
    width: 110%;
    height: 150px;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
  }
  &::after {
    height: 100%;
    width: 150px;
    top: 0;
    right: 0;
    transform: translateX(100%);
  }
  img {
    position: absolute;
    top: 0;
    width: 1190px;
    transform: translate(-60px, -45px);
  }
`;

export default class FloatingWatchr extends React.Component {
  render() {
    return (
      <WatchrCont left={this.props.left} >
        <img src="static/img/index/watchr.png" />
      </WatchrCont>
    );
  }
}