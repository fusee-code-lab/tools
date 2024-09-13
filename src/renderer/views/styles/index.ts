import { css, injectGlobal } from '@emotion/css';

export const dragStyles = css`
  -webkit-app-region: drag;
`;

export const noDragStyles = css`
  -webkit-app-region: no-drag;
`;

injectGlobal`
  html,
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    position: relative;
    user-select: none;
  }
`;
