import type { ThemeObj } from '@/types/theme';
import { baseTheme } from '@/cfg/theme';
import { css, injectGlobal } from '@emotion/css';
import { getStore, ipcRendererOn } from '@youliso/electronic/ipc';
import { colorStyle } from './color';

let theme = await getStore<ThemeObj>('theme');

ipcRendererOn('theme-updated', async (themeSource) => {
  document.documentElement.setAttribute('theme', themeSource);
  theme = await getStore<ThemeObj>('theme');
});

export const dragStyle = css`
  -webkit-app-region: drag;
`;

export const nodragStyle = css`
  -webkit-app-region: no-drag;
`;

export const containerStyle = css`
  padding: ${baseTheme.headHeight + 1}px 1px 1px;
  width: 100%;
  height: 100%;
  background-color: var(--basic-color);
  color: var(--symbol-color);
`;

injectGlobal`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  ${colorStyle}
  
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
