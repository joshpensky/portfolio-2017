import React from 'react';
import styled from 'styled-components';
import { Logo, NavLink } from 'style';
import { blue, cocogooseFont, maxWidth, navHeight, sidePadRg } from 'style/constants';

const FullNav = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavCont = styled.div`
  box-sizing: border-box;
  height: ${navHeight};
  max-width: ${maxWidth};
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  position: relative;
  justify-content: space-between;
  padding: 0 ${sidePadRg};
`;

export default class Nav extends React.Component {
  render() {
    return (
      <FullNav>
        <NavCont>
          <NavLink to="/" activeClassName=""><Logo /></NavLink>
          <NavBar>
            <NavLink to="about">About</NavLink>
            <NavLink to="projects">Projects</NavLink>
            <NavLink to="chat">Let's Chat</NavLink>
          </NavBar>
        </NavCont>
      </FullNav>
    );
  }
}
