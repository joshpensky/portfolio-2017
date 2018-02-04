import React from 'react';
import { H1 } from 'style';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };
  }
  
  render() {
    return (
      <div>
        <H1>{this.state.id}</H1>
      </div>
    );
  }
}