import { ThemeObj } from '@/types/theme';
import dark from './dark';
import light from './light';

export const baseTheme = {
  headHeight: 32,
  eventWidth: 138
};

export const Theme = (type: 'light' | 'dark' = 'light'): ThemeObj => {
  switch (type) {
    case 'dark':
      return dark;
    case 'light':
    default:
      return light;
  }
};
