import { windowLoad } from '@youliso/electronic/ipc';
import { render } from 'solid-js/web';
import { HashRouter } from '@solidjs/router';
import routes from './router';
import './views/styles';

windowLoad(async () => {
  document.documentElement.setAttribute('theme', await window.theme.get());
  render(() => <HashRouter>{routes(window.customize.route)}</HashRouter>, document.body);
});
