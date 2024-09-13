import { darkTheme, lightTheme } from '@/cfg/theme';
import { css } from '@emotion/css';

export const colorStyle = css`
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
`;
