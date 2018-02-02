import { injectGlobal } from 'styled-components';

injectGlobal`
@font-face {
    font-family: 'CocogoosePro';
    src: url('/static/fonts/CocogoosePro-Regular.eot'); /* IE9 Compat Modes */
    src: url('/static/fonts/CocogoosePro-Regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/static/fonts/CocogoosePro-Regular.woff') format('woff'), /* Modern Browsers */
         url('/static/fonts/CocogoosePro-Regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/static/fonts/CocogoosePro-Regular.svg#CocogoosePro-Regular') format('svg'); /* Legacy iOS */
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
}
`;