import { contextBridge, ipcRenderer } from 'electron';

declare global {
  interface Window {
    theme: typeof func;
  }
}

const func = {
  get: (): Promise<string> => {
    return ipcRenderer.invoke('theme-source-get');
  }
};

contextBridge.exposeInMainWorld('theme', func);
