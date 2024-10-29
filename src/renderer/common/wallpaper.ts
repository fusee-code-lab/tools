import preload from '@youliso/electronic/preload';

export const wallpaperSet = (
  winId: number,
  transparent = false,
  mouse: boolean = false,
  keyboard = false
) => preload.invoke<void>('wallpaper-set', { winId, transparent, mouse, keyboard });

export const wallpaperOff = (winId: number) => preload.invoke<void>('wallpaper-off', { winId });
