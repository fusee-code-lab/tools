import preload from '@youliso/electronic/preload';
import { contextBridge, ipcRenderer } from 'electron';

import './modular/resources';
import './modular/device';
import './modular/theme';

preload.preload(contextBridge, ipcRenderer);
