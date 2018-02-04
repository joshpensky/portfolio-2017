import React from 'react';
import styled from 'styled-components';
import { FloatingImg, NoSelect } from 'style';
import { black, bodyFont, white } from 'style/constants';

const CamdCont = FloatingImg.extend`
  background: #f7f7f7;
  z-index: 3;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${white};
    left: 0;
    z-index: 5;
  }
  &::before {
    width: 100%;
    height: 40px;
    bottom: 0;
    transform: translateY(100%);
  }
  &::after {
    height: 100%;
    width: 30px;
    transform: translateX(-100%);
  }
`;

const Typography = NoSelect.extend`
  display: inline-block;
  position: absolute;
  font-family: ${bodyFont};
  bottom: 0;
  right: 0;
`;

const Graphic = Typography.extend`
  color: ${black};
  opacity: 0.4;
  font-size: 140px;
  transform: translate(130px, -120px) rotate(90deg);
`;

const Design = Typography.extend`
  color: #76cabe;
  font-size: 278px;
  transform: translate(-200px, 35px);
`;

const Layout = styled.div`
  position: absolute;
  width: 750px;
  height: 170px;
  right: 0;
  top: 0;
  transform: translate(-207px, 0px);
  background: url('static/img/index/camd.png');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
`;

export default class FloatingCAMD extends React.Component {
  render() {
    return (
      <CamdCont left={this.props.left} >
        <Graphic>graphic</Graphic>
        <Design>design</Design>
        <Layout />
      </CamdCont>
    );
  }
}