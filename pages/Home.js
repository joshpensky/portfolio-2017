import React from 'react';
import styled from 'styled-components';
import { FloatingCAMD, FloatingCard, FloatingJosh, FloatingWatchr, HomeIntro } from 'components';
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
            id="watchr"
            title="watchr"
            desc="Binging shows and movies, for the modern, modern world."
            img={<FloatingWatchr />}
          />
          <FloatingCard
            left
            id="camd-systems"
            title="C.A.M.D. Systems"
            desc="Back to basics with Northeastern University's visual art majors."
            img={<FloatingCAMD left />}
          />
          <FloatingCard
            id="josh-pensky"
            title="josh pensky"
            desc="Building an identity for yours truly."
            img={<FloatingJosh />}
          />
        </FloatingSection>
      </div>
    );
  }
}
