import { preload } from '@youliso/electronic/main';
import { desktopCapturer } from 'electron';
import { release } from 'node:os';

const device_number = release();
export const isWindows11 = (): boolean => {
  if (process.platform !== 'win32') {
    return false; // 不是 Windows
  }
  const windows11Release = '10.0.22000';
  return device_number.startsWith(windows11Release);
};

export const deviceOn = () => {
  preload.handle('device-windows11-is', () => isWindows11());
  preload.handle('desktop-capturer-sources', async () =>
    desktopCapturer.getSources({
      types: ['screen'],
      thumbnailSize: {
        width: 0,
        height: 0
      }
    })
  );
};
