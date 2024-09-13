import { windowLoad } from '@youliso/electronic/ipc';
import { render } from 'solid-js/web';
import { HashRouter } from '@solidjs/router';
import routes from './router';

windowLoad(() => {
  render(() => <HashRouter>{routes(window.customize.route)}</HashRouter>, document.body);
});
