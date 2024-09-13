import { containerStyle } from '../styles';
import { navigate } from '@/renderer/router';
import Head from '../components/head';

export default () => {
  return (
    <div class={containerStyle}>
      <Head title="关于" />

      <button onClick={() => navigate('/home')}>返回</button>
    </div>
  );
};
