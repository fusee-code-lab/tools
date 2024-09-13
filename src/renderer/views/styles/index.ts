import type { ThemeObj } from '@/types/theme';
import { baseTheme } from '@/cfg/theme';
import { css, injectGlobal } from '@emotion/css';
import { getStore } from '@youliso/electronic/ipc';

const theme = await getStore<ThemeObj>('theme');

export const dragStyle = css`
  -webkit-app-region: drag;
`;

export const nodragStyle = css`
  -webkit-app-region: no-drag;
`;

export const bgFontcolorStyle = css`
  background-color: ${theme.basicColor};
  color: ${theme.symbolColor};
`;

export const contentStyle = css`
  padding: ${baseTheme.headHeight}px 10px 10px;
`;

export const containerStyle = css`
  ${contentStyle}
  ${bgFontcolorStyle}
  width: 100%;
  height: 100%;
`;

injectGlobal`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

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
