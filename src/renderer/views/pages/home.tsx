import { windowShow } from '@youliso/electronic/ipc';
import { onMount } from 'solid-js';
import { bgFontcolorStyle, contentStyle } from '../styles';
import { css } from '@emotion/css';
import { useNavigate } from '@solidjs/router';
import Head from '../components/head';
const style = css`
  ${contentStyle}
  ${bgFontcolorStyle}
  width: 100%;
  height: 100%;
`;

export default () => {
  const navigate = useNavigate();

  onMount(() => windowShow());
  return (
    <div class={style}>
      <Head title="测试" />
      <div>
        123
        <button onClick={() => navigate('/about', { replace: true })}>test</button>
      </div>
    </div>
  );
};
