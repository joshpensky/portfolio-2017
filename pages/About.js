import React from 'react';
import { Hero } from 'components';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Hero
          title="josh who?"
          desc="I am a Boston-based designer and front-end developer, working towards my degree in Computer Science and Design at Northeastern University."
        />
      </div>
    );
  }
}
