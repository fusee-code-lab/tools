import { windowLoad } from '@youliso/electronic/ipc';
import { render } from 'solid-js/web';
import { HashRouter } from '@solidjs/router';
import routes, { navigate } from './router';
import './views/styles';

windowLoad(async () => {
  document.documentElement.setAttribute('theme', await window.theme.get());
  window.customize.route && navigate(window.customize.route);
  render(() => <HashRouter>{routes}</HashRouter>, document.body);
});
