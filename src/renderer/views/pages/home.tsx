import { type RouteSectionProps } from '@solidjs/router';
import { windowClose, windowCreate, windowShow } from '@youliso/electronic/render';
import { onMount } from 'solid-js';
import { Button } from '../components/basis';
import { wallpaperSet, wallpaperOff } from '@/renderer/common/wallpaper';

let winId: number | undefined;

const set = async () => {
  // @ts-ignore
  const { screens } = await window.getScreenDetails();
  const win = await windowCreate(
    {
      route: '/wallpaper'
    },
    {
      width: screens[0].width,
      height: screens[0].height,
      frame: false,
      show: false,
      transparent: true,
      skipTaskbar: true
    }
  );
  if (win) {
    winId = win.id;
    await wallpaperSet(winId);
  }
};

const off = async () => {
  if (winId) {
    await wallpaperOff(winId);
    await windowClose(winId);
  }
};

export default (props: RouteSectionProps) => {
  onMount(() => windowShow());

  return (
    <>
      <h1>home</h1>
      <Button text="设置壁纸" onClick={set} />
      <Button text="卸载壁纸" onClick={off} />
    </>
  );
};
