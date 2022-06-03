import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
    q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {

    font-family: 'Open Sans', helvetica, arial, sans-serif;
    font-weight: 400;
    font-size: var(--text-2);

    --color-main: black;
    --color-bg: white;

    --color-light-grey: hsl(208, 21%, 70%);

    --color-disabled: hsl(208, 21%, 70%);
    --color-transparent-grey: rgb(0 0 0 / .1);

    --color-red: #EE0000;

    /*
    --color-darkest-grey: #11263f;
    --color-dark-grey: #627692;
    --color-grey: #d2ddeb;
    --color-light-grey: #edf1f6;
    --color-light-grey: #f5f7fa;
    */

    --space-00: 2px;
    --space-0: 4px;
    --space-1: 8px;
    --space-2: 12px;
    --space-3: 16px;
    --space-4: 24px;
    --space-5: 32px;
    --space-6: 48px;
    --space-7: 64px;
    --space-8: 96px;
    --space-9: 128px;
    --space-10: 192px;
    --space-11: 256px;
    --space-12: 384px;
    --space-13: 512px;
    --space-14: 640px;
    --space-15: 768px;

    --size-00: 2px;
    --size-0: 4px;
    --size-1: 8px;
    --size-2: 12px;
    --size-3: 16px;
    --size-4: 24px;
    --size-5: 32px;
    --size-6: 48px;
    --size-7: 64px;
    --size-8: 96px;
    --size-9: 128px;
    --size-10: 192px;
    --size-11: 256px;
    --size-12: 384px;
    --size-13: 512px;
    --size-14: 640px;
    --size-15: 768px;

    --text-1: 12px;
    /* text-2 is the base size */
    --text-2: 14px;
    --text-3: 16px;
    --text-4: 18px;
    --text-5: 20px;
    --text-6: 24px;
    --text-7: 30px;
    --text-8: 36px;
    --text-9: 48px;
    --text-10: 60px;
    --text-11: 72px;

    --text-strong: 700;

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
    }
    /* Light mode */
    @media (prefers-color-scheme: light) {
      body {
        background-color: white;
        color: black;
      }
    }
    /* Dark mode */
    @media (prefers-color-scheme: dark) {
        body {
            /*background-color: black;
            color: white;*/
      }
    }
  }
`;

export default GlobalStyle;
