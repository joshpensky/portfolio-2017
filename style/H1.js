import styled from 'styled-components';
import { black, cocogooseFont } from 'style/constants';

const H1 = styled.h1`
color: ${black};
font-weight: bold;
font-family: ${cocogooseFont};
&:not(:root:root) { /* SAFARI */
    letter-spacing: -3px;
}
font-size: 60px;
line-height: 75px;
`;

export default H1;