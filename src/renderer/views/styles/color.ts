import { darkTheme, lightTheme } from '@/cfg/theme';
import { injectGlobal } from '@emotion/css';

injectGlobal`
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
