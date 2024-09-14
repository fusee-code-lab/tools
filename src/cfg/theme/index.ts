import { ThemeObj } from '@/types/theme';
import base from './base';
import dark from './dark';
import light from './light';

export const baseTheme = base;

export const darkTheme = dark;

export const lightTheme = light;

export const Theme = (type: 'light' | 'dark' = 'light'): ThemeObj => {
  switch (type) {
    case 'dark':
      return dark;
    case 'light':
    default:
      return light;
  }
};
