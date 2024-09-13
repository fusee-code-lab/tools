import { windowLoad } from '@youliso/electronic/ipc';
import { render } from 'solid-js/web';
import './styles/index.css';
import App from './app';

windowLoad(() => {
  render(() => <App />, document.body);
});
