import { ipcMain } from 'electron';
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
  ipcMain.handle('device-windows11-is', () => isWindows11());
};
