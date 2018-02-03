import styled from 'styled-components';
import { bodyFont, gray } from 'style/constants'

const P = styled.p`
  color: ${gray};
  font-family: ${bodyFont};
  font-size: 20px;
  line-height: 32px;
  margin: 0;
  margin-bottom: 15px;
  span {
    display: inline-block;
  }
`;

export default P;