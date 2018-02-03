import React from 'react';
import styled from 'styled-components';
import { FloatingCard, HomeIntro } from 'components';
import { H2 } from 'style';

const FloatingSection = styled.div`
  clear: both;
  width: 100%;
  margin: 0 auto;
  h2 {
    text-align: right;
    margin-bottom: 40px;
  }
`;

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeIntro />
        <FloatingSection>
          <H2>past projects</H2>
          <FloatingCard
            right
            id="watchr"
            title="watchr"
            desc="Binging shows and movies, for the modern, modern world."
            img="static/img/index/watchr.png"
          />
          <FloatingCard
            left
            id="camd-systems"
            title="C.A.M.D. Systems"
            desc="Back to basics with Northeastern University's visual art majors."
            img="static/img/index/camd.png"
          />
          <FloatingCard
            right
            id="josh-pensky"
            title="josh pensky"
            desc="Building an identity for yours truly."
            img="static/img/index/josh-pensky.png"
          />
        </FloatingSection>
      </div>
    );
  }
}
