import { windowShow } from '@youliso/electronic/ipc';
import { navigate } from '@/renderer/common/utils';
import { onMount } from 'solid-js';
import { containerStyle } from '../styles';
import Head from '../components/head';

export default () => {
  onMount(() => windowShow());

  return (
    <div class={containerStyle}>
      <Head title="测试" />
      <div>
        123
        <button onClick={() => navigate('/about')}>about</button>
      </div>
    </div>
  );
};
