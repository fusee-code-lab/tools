import { preload } from '@youliso/electronic/render';

export const isWindows11 = () => preload.invoke<boolean>('device-windows11-is');
export const desktopCapturerSources = () => preload.invoke<Electron.DesktopCapturerSource[]>('desktop-capturer-sources');
