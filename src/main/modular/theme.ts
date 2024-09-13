import { baseTheme, Theme } from '@/cfg/theme';
import { ThemeObj } from '@/types/theme';
import { storeInstance, windowInstance } from '@youliso/electronic/main';
import { ipcMain, nativeTheme } from 'electron';

export const getThemeSource = () =>
  nativeTheme.themeSource === 'system'
    ? nativeTheme.shouldUseDarkColors
      ? 'dark'
      : 'light'
    : nativeTheme.themeSource;

export const theme = () => storeInstance.get<ThemeObj>('theme')!;
export const themeRefresh = () => {
  storeInstance.sharedObject['theme'] = Theme(getThemeSource());
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
      win.webContents.send('theme-updated', getThemeSource());
    });
  });
  // 获取系统主题
  ipcMain.handle('theme-source-get', () => getThemeSource());
};
