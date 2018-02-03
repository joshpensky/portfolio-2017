import React from 'react';
import styled from 'styled-components';
import { H1, P } from 'style';
import { blue, white } from 'style/constants';

const HeroCont = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 195px;
  margin-bottom: 60px;
  position: relative;
  overflow: visible;
  p {
    padding-left: 630px;
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
    transition: width 0.75s cubic-bezier(1, -0.3, 0.45, 1);
    transform: rotate(-3deg);
  }
  &.hidden::after {
    width: 0%;
  }
`;

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hidePaint: true,
      title: this.props.title.split(' ')
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hidePaint: false });
    }, 10);
  }

  render() {
    return (
      <HeroCont>
        <HeroH1>
          {this.state.title[0]}{' '}
          <Paint className={this.state.hidePaint && 'hidden'} ref={p => (this.paint = p)}>
            {this.state.title[1]}
          </Paint>
        </HeroH1>
        <P>{this.props.desc}</P>
      </HeroCont>
    );
  }
}
