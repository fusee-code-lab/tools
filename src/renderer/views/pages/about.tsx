import { containerStyle } from '../styles';
import { navigate } from '@/renderer/router';
import Head from '../components/head';

export default () => {
  return (
    <>
      <Head title="关于" />
      <div class={containerStyle}>
        <button onClick={() => navigate('/home')}>返回</button>
      </div>
    </>
  );
};
