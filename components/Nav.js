import React from 'react';
import styled from 'styled-components';
import { NavBar, NavCont, NavLink } from 'style';

const FullNav = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

export default class Nav extends React.Component {
  render() {
    return (
      <FullNav>
        <NavCont>
          <NavLink to="/">LOGO</NavLink>
          <NavBar>
            <NavLink to="about">about</NavLink>
            <NavLink to="projects">projects</NavLink>
            <NavLink to="chat">let's chat</NavLink>
          </NavBar>
        </NavCont>
      </FullNav>
    );
  }
}
