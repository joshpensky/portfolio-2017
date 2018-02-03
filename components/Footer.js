import React from 'react';
import styled from 'styled-components';
import { black, bodyFont, footerHeight, maxWidth, sidePadRg } from 'style/constants';

const FooterCont = styled.footer`
  height: ${footerHeight};
  width: 100%;
  max-width: ${maxWidth};
  margin: 20px auto 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${sidePadRg};
  box-sizing: border-box;
`;

const FooterCopy = styled.div`
  color: ${black};
  font-family: ${bodyFont};
  font-size: 15px;
`;

const FooterLinks = styled.div`
  img {
    height: ${footerHeight};
    width: auto;
    margin-left: 10px;
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