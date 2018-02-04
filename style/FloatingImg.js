import styled from 'styled-components';
import { blue, textWidth } from 'style/constants';

const FloatingImg = styled.div`
  position: absolute;
  width: calc(100% - ${textWidth});
  height: inherit;
  background: ${blue};
  display: inline-block;
  border-radius: 15px;
  ${props => (props.left ? 'left' : 'right')}: 0;
`;

export default FloatingImg;
