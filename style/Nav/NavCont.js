import styled from 'styled-components';
import { maxWidth, navHeight, sidePadRg } from 'style/constants';

const NavCont = styled.div`
  box-sizing: border-box;
  height: ${navHeight};
  max-width: ${maxWidth};
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  position: relative;
  justify-content: space-between;
  padding: 0 ${sidePadRg};
`;

export default NavCont;