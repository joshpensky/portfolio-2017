import React from 'react';
import { Button, H1 } from 'style';

export default class HomeIntro extends React.Component {
  render() {
    return (
      <div>
        <div>
            <H1>let's <span>paint</span> the web.<br />together.</H1>
            <Button top right><div>I'm ready!</div></Button>
        </div>
        <div>
            <div></div>
        </div>
      </div>
    );
  }
}