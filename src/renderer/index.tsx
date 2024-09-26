import { windowLoad } from '@youliso/electronic/render';
import { render } from 'solid-js/web';
import { HashRouter } from '@solidjs/router';
import router from './router';
import './views/styles';

windowLoad(async () => {
  document.documentElement.setAttribute('theme', await window.theme.get());
  render(() => <HashRouter>{router(window.customize.route)}</HashRouter>, document.body);
});
