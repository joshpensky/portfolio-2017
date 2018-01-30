import styled from 'styled-components';
import { maxWidth, navHeight, sidePadRg } from 'style/constants';

const Main = styled.div`
  box-sizing: border-box;
  padding: ${navHeight} ${sidePadRg} 0;
  width: 100%;
  max-width: ${maxWidth};
  margin: 0 auto;
`;

export default Main;