import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Nav, Footer } from 'components';
import { Main, MaxWidth } from 'style';
import 'style/fontFaces';
import 'style/reset';

import About from 'pages/About';
import Chat from 'pages/Chat';
import Home from 'pages/Home';
import Project from 'pages/Project';
import Projects from 'pages/Projects';

const Container = styled.div`
  position: relative;
  width: 100vw;
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-overflow-scrolling: touch;
`;

export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Nav />
          <Main>
            <MaxWidth>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route path="/projects/:id" component={Project} />
              <Route exact path="/chat" component={Chat} />
            </MaxWidth>
          </Main>
          <Footer />
        </Container>
      </Router>
    );
  }
}