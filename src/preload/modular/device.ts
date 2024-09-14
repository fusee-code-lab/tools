import { contextBridge, ipcRenderer } from 'electron';

declare global {
  interface Window {
    device: typeof func;
  }
}
const func = {
  isWindows11: (): Promise<boolean> => {
    return ipcRenderer.invoke('device-windows11-is');
  }
};

contextBridge.exposeInMainWorld('device', func);
