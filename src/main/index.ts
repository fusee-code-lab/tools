import type { BrowserWindowConstructorOptions } from 'electron';
import type { Customize } from '@youliso/electronic/types';
import {
  type WindowDefaultCfg,
  machineOn,
  appAfterOn,
  appSingleInstanceLock,
  appProtocolRegister,
  storeInstance,
  shortcutInstance,
  windowInstance
} from '@youliso/electronic/main';
import preload from '@youliso/electronic/preload';
import { join } from 'node:path';
import { app, BrowserWindow, ipcMain, Menu, nativeImage, Tray, webContents } from 'electron';
import { resourcesOn } from './modular/resources';
import { defaultSessionInit, sessionOn } from './modular/session';
import { theme, themeOn, themeRefresh } from './modular/theme';
import { baseTheme } from '@/cfg/theme';
import logo from '@/assets/icon/logo.png';
import { deviceOn } from './modular/device';

preload.main(BrowserWindow, ipcMain, webContents);

themeRefresh();

// 初始渲染进程参数
let route = '/main/home';
let customize: Customize = {
  title: app.name,
  route
};

// 初始窗口参数
let browserWindowOptions: BrowserWindowConstructorOptions = {
  width: 800,
  height: 600,
  show: false,
  webPreferences: {
    devTools: true
  }
};

if (process.platform === 'darwin') {
  browserWindowOptions.titleBarStyle = 'hidden';
  browserWindowOptions.trafficLightPosition = { x: 10, y: 10 };
} else {
  browserWindowOptions.titleBarStyle = 'hidden';
  browserWindowOptions.titleBarOverlay = {
    color: theme().basicColor,
    symbolColor: theme().symbolColor,
    height: baseTheme.headHeight
  };
}

// 初始窗口组参数
let windowDefaultCfg: WindowDefaultCfg = {
  defaultLoadType: 'file',
  defaultUrl: join(__dirname, 'index.html'),
  defaultPreload: join(__dirname, 'preload.js')
};

// 调试模式
if (!app.isPackaged) {
  if (browserWindowOptions.webPreferences) {
    browserWindowOptions.webPreferences.devTools = true;
  } else {
    browserWindowOptions.webPreferences = {
      devTools: true
    };
  }
  windowDefaultCfg.defaultLoadType = 'url';
  windowDefaultCfg.defaultUrl = `http://localhost:${process.env.PORT}`;
}

windowInstance.setDefaultCfg(windowDefaultCfg);

// 单例
appSingleInstanceLock({
  additionalData: { type: 'new' },
  isFocusMainWin: true,
  customize,
  browserWindowOptions
});

// 注册协议
appProtocolRegister();

// 关闭所有窗口退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.whenReady().then(async () => {
  app.on('activate', () => {
    const mainWin = windowInstance.getMain();
    if (mainWin && mainWin.customize.route === route) {
      mainWin.show();
    } else {
      windowInstance.new(customize, browserWindowOptions, { openDevTools: !app.isPackaged });
    }
  });
  // 获得焦点时发出
  app.on('browser-window-focus', () => {
    // 关闭刷新
    shortcutInstance.register({
      name: '关闭刷新',
      key: 'CommandOrControl+R'
    });
  });
  // 失去焦点时发出
  app.on('browser-window-blur', () => {
    // 注销关闭刷新
    shortcutInstance.unregister('CommandOrControl+R');
  });

  defaultSessionInit();

  // 应用基础监听
  deviceOn();
  themeOn();
  appAfterOn();

  // 模块监听
  sessionOn();
  machineOn();
  resourcesOn();
  storeInstance.on();
  windowInstance.on();
  shortcutInstance.on();

  // 创建托盘
  const tray = new Tray(nativeImage.createFromPath(join(__dirname, logo)));
  tray.setToolTip(app.getName());
  tray.setContextMenu(
    Menu.buildFromTemplate([
      {
        label: 'Exit',
        click: () => {
          app.quit();
        }
      }
    ])
  );
  tray.on('click', () => windowInstance.func('show'));
  // 创建窗口
  windowInstance.new(customize, browserWindowOptions, { openDevTools: !app.isPackaged });
});
