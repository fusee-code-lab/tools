import type {
  OpenDialogOptions,
  OpenDialogReturnValue,
  SaveDialogOptions,
  SaveDialogReturnValue
} from 'electron';
import { preload } from '@youliso/electronic/render';

export const showOpenDialog = (options?: OpenDialogOptions, winId?: number) => {
  return preload.invoke<OpenDialogReturnValue>('open-directory-dialog', { winId, options });
};

export const showSaveDialog = (options?: SaveDialogOptions, winId?: number) => {
  return preload.invoke<SaveDialogReturnValue>('save-directory-dialog', { winId, options });
};
