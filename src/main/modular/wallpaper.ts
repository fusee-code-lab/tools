import { preload, windowInstance } from '@youliso/electronic/main';
import { attach, detach, reset } from 'electron-as-wallpaper';

export const wallpaperSet = (
  winId: number,
  transparent = false,
  mouse: boolean = false,
  keyboard = false
) => {
  if (process.platform === 'win32') {
    const win = windowInstance.get(winId);
    if (win) {
      attach(win, {
        transparent,
        forwardMouseInput: mouse,
        forwardKeyboardInput: keyboard
      });
    }
  }
};

export const wallpaperOff = (winId: number) => {
  if (process.platform === 'win32') {
    const win = windowInstance.get(winId);
    if (win) {
      detach(win);
    }
    reset();
  }
};

export const wallpaperOn = () => {
  preload.handle('wallpaper-set', (_, { winId, transparent, mouse, keyboard }) =>
    wallpaperSet(winId, transparent, mouse, keyboard)
  );
  preload.handle('wallpaper-off', (_, { winId }) => wallpaperOff(winId));
};
