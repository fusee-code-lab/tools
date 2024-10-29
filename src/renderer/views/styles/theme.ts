import type { ThemeObj } from '@/types/theme';
import { getStore } from '@youliso/electronic/render';
import preload from '@youliso/electronic/preload';
import { darkTheme, lightTheme } from '@/cfg/theme';
import { css } from '@emotion/css';
import { getOS, setCssVariant } from '@/renderer/common/utils';
import { isWindows11 } from '@/renderer/common/device';

const isWin11 = await isWindows11();
export let theme = await getStore<ThemeObj>('theme');

preload.on('theme-updated', async (themeSource) => {
  document.documentElement.setAttribute('theme', themeSource);
  theme = await getStore<ThemeObj>('theme');
  setCssVariant('--accent-color', theme.accentColor);
});

export const themeStyle = css`
  html[theme='dark'] {
    :root {
      --basic-color: ${darkTheme.basicColor};
      --symbol-color: ${darkTheme.symbolColor};
    }
  }

  html[theme='light'] {
    :root {
      --basic-color: ${lightTheme.basicColor};
      --symbol-color: ${lightTheme.symbolColor};
    }
  }

  :root {
    --accent-color: ${theme.accentColor};
  }

  ${!isWin11 &&
  getOS() === 'win' &&
  css`
    .container::before {
      position: fixed;
      content: '';
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border: 1px solid var(--accent-color);
    }
  `}
`;
