import { windowShow } from '@youliso/electronic/ipc';
import { onMount } from 'solid-js';
import { containerStyle } from '../styles';
import Head from '../components/head';
import { cx } from '@emotion/css';

export default () => {
  onMount(() => windowShow());

  return (
    <div
      class={cx({
        [containerStyle]: true,
        container: true
      })}
    >
      <Head title="" />
      <div></div>
    </div>
  );
};
