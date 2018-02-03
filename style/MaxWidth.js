import styled from 'styled-components';
import { maxWidth, navHeight, sidePadRg } from 'style/constants';

const MaxWidth = styled.div`
  margin: 0 auto;
  max-width: ${maxWidth};
  box-sizing: border-box;
  padding: ${navHeight} ${sidePadRg} 0;
`;

export default MaxWidth;
