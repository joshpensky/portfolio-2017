import React from 'react';
import styled from 'styled-components';
import { black, bodyFont, footerHeight, maxWidth } from 'style/constants';

const FooterCont = styled.footer`
  height: ${footerHeight};
  width: 100%;
  max-width: ${maxWidth};
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterCopy = styled.div`
  color: ${black};
  font-family: ${bodyFont};
  font-size: 15px;
  margin-left: 15px;
`;

const FooterLinks = styled.div`
  margin-right: 10px;
  img {
    height: ${footerHeight};
    width: auto;
    margin-right: 10px;
  }
`;

export default class Footer extends React.Component {
  render() {
    return <FooterCont>
        <FooterCopy>&copy; 2018 Joshua Pensky</FooterCopy>
        <FooterLinks>
          <a href="https://github.com/joshpensky" target="_blank" rel="noreferrer noopener">
            <img src="static/img/github.png" />
          </a>
          <a href="https://www.linkedin.com/in/joshuapensky/" target="_blank" rel="noreferrer noopener">
            <img src="static/img/linkedin.png" />
          </a>
        </FooterLinks>
      </FooterCont>;
  }
}