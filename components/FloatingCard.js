import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, FloatingImg, H3, P } from 'style';
import { bodyFont, gray, textWidth } from 'style/constants';

const FloatingCont = styled.div`
  height: 400px;
  position: relative;
  margin-bottom: 100px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const FloatingText = styled.div.attrs({
  side: props => (props.left ? 'left' : 'right')
})`
  width: ${textWidth};
  display: inline-block;
  position: absolute;
  bottom: 0;
  ${props => props.side}: calc(100% - ${textWidth});
  text-align: ${props => props.side};
  h3, ul, p, a {
      margin-${props => props.side}: 40px;
  }
  ul, p {
      float: ${props => props.side};
  }
  h3 {
    margin-bottom: 10px;
  }
  p {
    max-width: 240px;
    line-height: 26px;
    margin-bottom: 15px;
  }
  a {
    margin-bottom: 15px;
    float: ${props => props.side};
    clear: ${props => props.side};
  }
  ul {
    padding: 0;
    margin: 0;
    li {
      max-width: 240px;
      color: ${gray};
      font-family: ${bodyFont};
      font-size: 20px;
      line-height: 32px;
      margin: 0;
      margin-bottom: 5px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
`;

export default class FloatingCard extends React.Component {
  render() {
    let img = this.props.img || 
    <FloatingImg>
      <img src={this.props.imgSrc} />
    </FloatingImg>;
    return (
      <FloatingCont>
        { img }
        <FloatingText left={this.props.left}>
          <H3>{this.props.title}</H3>
          <P>{this.props.desc}</P>
          <Button to={'projects/' + this.props.id} small bottom right={!this.props.left} left={this.props.left}>
            View work
          </Button>
        </FloatingText>
      </FloatingCont>
    );
  }
}
