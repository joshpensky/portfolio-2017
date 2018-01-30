import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Nav } from 'components';
import { Main } from 'style';

import About from 'pages/About';
import Chat from 'pages/Chat';
import Home from 'pages/Home';
import Project from 'pages/Project';
import Projects from 'pages/Projects';

export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Main>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/projects" component={ Projects } />
            <Route path="/projects/:key" component={ Project } />
            <Route exact path="/chat" component={ Chat } />
          </Main>
        </div>
      </Router>
    );
  }
}