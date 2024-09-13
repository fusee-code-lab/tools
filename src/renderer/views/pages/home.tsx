import { windowShow } from '@youliso/electronic/ipc';
import { onMount } from 'solid-js';
import { containerStyle } from '../styles';
import Head from '../components/head';
import { css } from '@emotion/css';

const contentStyle = css`
  word-break: break-all;
`;

export default () => {
  onMount(() => windowShow());

  return (
    <div class={containerStyle}>
      <Head />
      <div class={contentStyle}>{JSON.stringify(window.customize)}</div>
    </div>
  );
};
