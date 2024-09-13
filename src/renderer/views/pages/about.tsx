import { containerStyle } from '../styles';
import Head from '../components/head';
import { navigate } from '@/renderer/common/utils';

export default () => {
  return (
    <div class={containerStyle}>
      <Head title="关于" />
      
      <button onClick={() => navigate('/home')}>返回</button>
    </div>
  );
};
