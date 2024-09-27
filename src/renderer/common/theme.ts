import preload from '@youliso/electronic/preload';

export const getThemeSource = () => preload.invoke<string>('theme-source-get');
