import styled from 'styled-components';
import { black, cocogooseFont } from 'style/constants';

const H3 = styled.h3`
  color: ${black};
  font-family: ${cocogooseFont};
  font-weight: bold;
  &:not(:root:root) {
    /* SAFARI */
    letter-spacing: -2px;
  }
  font-size: 30px;
  line-height: 40px;
  margin: 0;
`;

export default H3;