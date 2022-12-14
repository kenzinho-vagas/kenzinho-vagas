import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    :root {
        --color-primary: #430B66;
        --color-secundary: #BDAFCB;
        --color-white: #FFFFFF;
        --grey-1: #EBEBEB;
        --grey-2:#000000;
        --grey-3: #C0C0C0;
        --grey-4: #EBEBEB;
        --color-button: #F3D9FA;
        --text-color1: #2C2C2C;
        --text-color2: #1E1E1E;
        --text-yup-color: #FFB84E;
        
    }

    ::-webkit-scrollbar {
      background-color: transparent;
      width: 12px;
      height: 8px;
      padding: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--color-primary);
      border-radius: 8px;
    }

    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
    */

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
        font-family: 'Nunito Sans', sans-serif;

    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul, li {
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
`;

export default Global;
