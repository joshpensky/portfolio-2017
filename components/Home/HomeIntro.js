import React from 'react';
import { H1 } from 'style';

export default class HomeIntro extends React.Component {
  render() {
    return (
      <div>
        <div>
            <H1>let's <span>paint</span> the web.<br />together.</H1>
            <a href="chat.html"><div>I'm ready!</div></a>
        </div>
        <div>
            <div></div>
        </div>
      </div>
    );
  }
}