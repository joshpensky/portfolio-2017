import React from 'react';
import { Hero } from 'components';

export default class Chat extends React.Component {
  render() {
    return (
      <div>
        <Hero
          title="let's chat!"
          desc="You’ve gotten to know about me. Now let’s hear about you! Please fill out the form below so I can learn more about you and your project (or if you just want to say hello!)."
        />
      </div>
    );
  }
}
