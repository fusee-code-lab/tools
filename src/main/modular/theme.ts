import { baseTheme, Theme } from '@/cfg/theme';
import { ThemeObj } from '@/types/theme';
import { storeInstance, windowInstance } from '@youliso/electronic/main';
import { nativeTheme } from 'electron';

export const theme = () => storeInstance.get<ThemeObj>('theme')!;
export const themeRefresh = () => {
  storeInstance.sharedObject['theme'] = Theme(
    nativeTheme.themeSource === 'system'
      ? nativeTheme.shouldUseDarkColors
        ? 'dark'
        : 'light'
      : nativeTheme.themeSource
  );
};
export const themeOn = () => {
  // 系统主题发生变化监听并发给渲染进程
  nativeTheme.on('updated', () => {
    themeRefresh();
    const wins = windowInstance.getAll();
    wins.forEach((win) => {
      win.setTitleBarOverlay({
        color: theme().basicColor,
        symbolColor: theme().symbolColor,
        height: baseTheme.headHeight
      });
    });
  });
};
