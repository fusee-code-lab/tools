import { containerStyle } from '../styles';
import Head from '../components/head';
import { navigate } from '@/renderer/common/utils';

export default () => {
  return (
    <div class={containerStyle}>
      <Head title="about" />
      123
      <button onClick={() => navigate('/home')}>home</button>
    </div>
  );
};
