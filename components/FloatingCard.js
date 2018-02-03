import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, H3, P } from 'style';
import { blue, bodyFont, gray, textWidth } from 'style/constants';

const FloatingCont = styled.div`
  height: 400px;
  position: relative;
  margin-bottom: 100px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const FloatingImg = styled.div`
  position: absolute;
  width: calc(100% - ${textWidth});
  height: inherit;
  background: ${blue};
  display: inline-block;
  border-radius: 15px;
  ${props => props.left ? 'left' : 'right'}: 0;
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
    return (
      <FloatingCont>
        <FloatingImg left={this.props.left}>
          <img id="show-cards" /*src={this.props.img}*/ />
        </FloatingImg>
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
