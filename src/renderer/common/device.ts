import preload from '@youliso/electronic/preload';

export const isWindows11 = () => preload.invoke<boolean>('device-windows11-is');
