import { injectGlobal } from 'styled-components';

injectGlobal`
  body, h1, h2, h3, ol, ul, p, a {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
`;