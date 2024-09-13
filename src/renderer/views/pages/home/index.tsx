import { windowShow } from '@youliso/electronic/ipc';
import { onMount } from 'solid-js';
import Head from '../../components/head';

export default () => {
  onMount(() => windowShow());
  return (
    <>
      <Head />
      <div>tools</div>
    </>
  );
};
