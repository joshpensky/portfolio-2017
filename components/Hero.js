import React from 'react';
import styled from 'styled-components';
import { H1, P } from 'style';
import { blue, white } from 'style/constants';

const HeroCont = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 250px;
  margin-bottom: 60px;
  position: relative;
  overflow: visible;
  p {
    padding-left: 630px;
    padding-right: 30px;
    max-width: 750px;
  }
`;

const HeroH1 = H1.extend`
  color: ${white};
  font-size: 70px;
  line-height: 75px;
  margin-bottom: 20px;
  padding-right: 30px;
  &::before {
    content: '';
    position: absolute;
    background: ${blue};
    top: 0;
    left: 0;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    transform: translate(-20%, -25%);
    z-index: -1;
  }
`;

const Paint = styled.span`
  position: relative;
  color: ${blue};
  &::after {
    content: '';
    position: absolute;
    background: ${white};
    width: 113%;
    height: 110%;
    left: -7%;
    top: -3%;
    border-radius: 3px;
    z-index: -1;
    transition: width 0.2s ease-out;
    transform: rotate(-3deg);
  }
`;

export default class Hero extends React.Component {
  render() {
    let title = this.props.title.split(" ");
    return (
      <HeroCont>
          <HeroH1>{title[0]} <Paint>{title[1]}</Paint></HeroH1>
          <P>{this.props.desc}</P>
      </HeroCont>
    );
  }
}