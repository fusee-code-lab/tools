import { preload } from '@youliso/electronic/preload';
import { webUtils } from 'electron';

preload.on('utils-file-path', (file) => webUtils.getPathForFile(file));
